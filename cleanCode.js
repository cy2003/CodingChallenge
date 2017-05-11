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

var message = '<div id="message" style="padding:25px 50px"><div class="cart-items-number" style="text-align:center; margin-bottom:30px"><span class="total-items" style="font-size:36px; letter-spacing:-0.26px">Your Cart: '+numberOfItems+ '</span></div><div class="box-cart-products" style="float:left; width:50%"><div class="box-cart-product"><div class="box-cart-product-image"><img src="'+itemImages[0]+'"/></div><div class="box-cart-product-name"><span>'+itemNames[0]+'</span></div></div><div class="box-cart-product"><div class="box-cart-product-image"><img src="'+itemImages[1]+'"/></div><div class="box-cart-product-name"><span>'+itemNames[1]+'</span></div></div></div><div class="order-total" style="float:left; width:50%"><div><td>Estimated Total</td><td class="order-value">   '+cartTotal+'</td></div><div><a class="box-cart-link primary-button show-for-large" style="background-color:#cc0001; color:#fff; border:1px solid #cc0001; padding:14px 30px; font-size:12px; cursor:pointer" href="https://marmot.com/cart">Go To Cart</a></div></div></div>'

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
          height: 450,
          width: 700,
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
