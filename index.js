var itemImages = $('.mini-cart-image').find('img').map(function() {return this.src}).get()

var itemNames = $('.mini-cart-name').find('a').map(function() {return this.text}).get()

var numberOfItems = $('.total-items').html()

var cartTotal = $('.order-value').html()


var winheight, docheight, trackLength, throttlescroll, pctScrolled

function getMeasurements(){
    winheight = $(window).height()
    docheight = $(document).height()
    trackLength = docheight - winheight
}

function amountScrolled(){
    var scrollTop = $(window).scrollTop()
    pctScrolled = Math.floor(scrollTop/trackLength * 100)
    return pctScrolled
}

getMeasurements()

window.addEventListener("resize", function(){
    getMeasurements()
}, false)

var message = '<div id="message"><div class="cart-items-number"><span class="total-items" style="font-weight:bold">You have '+numberOfItems+ ' in you cart</span><div class="box-cart-products"><div class="box-cart-product"><div class="box-cart-image"><img src="'+itemImages[0]+'"/></div></div></div></div><div class="order-total"><td>Estimated Total</td><td class="order-value">'+cartTotal+'</td></div></div>'

<div id="message">
  <div class="cart-items-number">
    <span class="total-items" style="font-weight:bold">You have '+numberOfItems+ ' in you cart</span>
  </div>
  <div class="box-cart-products">
    <div class="box-cart-product">
      <div class="box-cart-product-image"><img src="'+itemImages[0]+'"/></div>
      <div class="box-cart-product-name"><span>'+itemNames[0]+'</span></div>
    </div>
    <div class="box-cart-product">
      <div class="box-cart-product-image"><img src="'+itemImages[1]+'"/></div>
      <div class="box-cart-product-name"><span>'+itemNames[1]+'</span></div>
    </div>
  </div>
  <div class="order-total">
    <td>Estimated Total</td>
    <td class="order-value">'+cartTotal+'</td>
  </div>
</div>

window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        //checks amountScrolled every 50 milliseconds
        throttlescroll = setTimeout(function(){
        amountScrolled()
    }, 50)
    if(amountScrolled() >= 90){
      if(document.getElementById('message') == null){
        $(message).dialog({
          //this gets rid of the automated closed tab
          closeOnEscape: false,
          open: function(event, ui) {$(".ui-dialog-titlebar-close").hide()},
          //size of dialog box
          height: 400,
          width: 600,
          //creates a transparent overlay in the background
          modal:true,
          /*this creates a close button. Used instead of the automated close tab
          This way the dialog box will get triggered again when closed. The ui
          object is empty but included for consistency with other events*/
          buttons:{"Close": function() {$(this).dialog('destroy')}},
          close: function(ev, ui) {$(this).close()},
          //This fixes the box in place. Doesn't move when you scroll
          create: function (event) {
          $(event.target).parent().css('position', 'fixed');
          },
          resizeStart: function (event) {
          $(event.target).parent().css('position', 'fixed');
          },
          resizeStop: function (event) {
          $(event.target).parent().css('position', 'fixed');
          }
        })
      }
    }
}, false)
