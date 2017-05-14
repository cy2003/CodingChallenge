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

var message = '<div id="message" style="padding:25px 50px"><div class="cart-items-number" style="text-align:center; margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #dcdee2 "><span class="total-items" style="font-size:36px; letter-spacing:-0.26px">Your Cart - '+numberOfItems+'</span></div><div class="box-cart-products" style="float:left; width:50%; height:300px"><script>$(itemImages).each(function(i, e){$(".box-cart-products").append("<div><img src="'+itemImages["${i}"]+'"/></div>")})</script></div><div class="order-total" style="float:left; margin-top:42px; margin-bottom:40px; width:50%; font-weight:bold"><div style="padding:30px"><span style="float:left">Estimated Total</span><span class="order-value" style="float:right">'+cartTotal+'</span></div><div style="padding:30px"><a class="box-cart-link primary-button show-for-large" style="background-color:#cc0001; color:#fff; border:1px solid #cc0001; padding:14px 30px; font-size:12px; font-weight:bold; display:inherit; width:74%; text-align:center; cursor:pointer" href="https://marmot.com/cart">Go To Cart</a></div></div></div>'

window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){
        amountScrolled()
    }, 50)
    if(amountScrolled() >= 90){
      if(document.getElementById('message') == null && $('.mini-cart-image').length > 0){
        $(message).dialog({
          closeOnEscape: false,
          open: function(event, ui) {$(".ui-dialog-titlebar-close").hide()},
          height: 450,
          width: 700,
          modal:true,
          buttons:{"X": function() {$(this).dialog('destroy')}},
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
