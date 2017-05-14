var itemImages = $('.mini-cart-image').find('img').map(function() {return this.src}).get()

var itemNames = $('.mini-cart-name').find('a').map(function() {return this.text}).get()

var numberOfItems = $('.total-items').html()

var cartTotal = $('.order-value').html()

var winHeight, docHeight, trackLength, throttleScroll, pctScrolled

function getMeasurements(){
    winHeight = $(window).height()
    docHeight = $(document).height()
    trackLength = docHeight - winHeight
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

var message = '<div id="message" style="padding-left:20px; padding-right:20px"><div class="cart-items-number" style="text-align:center; margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #d6d8db"><span class="total-items" style="font-size:36px; letter-spacing:-0.26px">Your Cart - '+numberOfItems+'</span></div><div class="box-cart-products" style="float:left; width:50%; height:300px"><div class="box-cart-product" style="border-right:1px solid #d6d8db; overflow:hidden"><div class="box-cart-product-image" style="float:left; width:40%"><img src="'+itemImages[0]+'"/></div><div class="box-cart-product-name" style="float:right; width:60%; margin-top:50px; font-weight:bold; font-size:14px"><span>'+itemNames[0]+'</span></div></div><div class="box-cart-product" style="border-right:1px solid #d6d8db; overflow:hidden"><div class="box-cart-product-image" style="float:left; width:40%"><img src="'+itemImages[1]+'"/></div><div class="box-cart-product-name" style="float:right; width:60%; margin-top:50px; font-weight:bold; font-size:14px"><span>'+itemNames[1]+'</span></div></div></div><div class="order-total" style="float:left; margin-top:38px; margin-bottom:40px; width:50%; font-weight:bold; font-size:14px"><div style="padding:30px"><span style="float:left">Estimated Total</span><span class="order-value" style="float:right">'+cartTotal+'</span></div><div style="padding:30px"><a class="box-cart-link primary-button show-for-large" style="background-color:#cc0001; color:#fff; border:1px solid #cc0001; padding:14px 30px; font-size:12px; font-weight:bold; display:inherit; width:100%; text-align:center; cursor:pointer" href="https://marmot.com/cart">Go To Cart</a></div></div></div>'

window.addEventListener("scroll", function(){
    clearTimeout(throttleScroll)
        throttleScroll = setTimeout(function(){
        amountScrolled()
    }, 50)
    if(amountScrolled() >= 90){
      if(document.getElementById('message') == null && $('.mini-cart-image').length > 0){
        $(message).dialog({
          close: function() {$(this).dialog('destroy')},
          closeText: "X",
          height: 'auto',
          width: 700,
          modal:true,
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
