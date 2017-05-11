var itemImages = $('.mini-cart-image').find('img').map(function() {return this.src}).get()

var itemNames = $('.mini-cart-image').find('img').map(function() {return this.title}).get()

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
  </di>
  <div class="box-cart-products">
    <div class="box-cart-product">
      <div class="box-cart-image"><img src="'+itemImages[0]+'"/></div>
    </div>
  </div>
  <div class="order-total"><td>Estimated Total</td><td class="order-value">'+cartTotal+'</td></div>
</div>


window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){
        amountScrolled()
    }, 50)
    if(amountScrolled() >= 90){
      if(document.getElementById('message') == null){
        $(message).dialog({
          closeOnEscape: false,
          open: function(event, ui) {$(".ui-dialog-titlebar-close").hide()},
          height: 460,
          width: 900,
          modal:true,
          buttons:{"Close": function() {$(this).dialog('destroy')}},
          close: function(ev, ui) {$(this).close()},
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
