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

var message = '<div id="message" title="This is a dialog box"><p>Just want to put some text in here</p></div>'

window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){
        amountScrolled()
    }, 50)
    if(amountScrolled() >= 90){
      if(document.getElementById('message') == null){
        $(message).dialog({
          //this gets rid of the automated closed tab
          closeOnEscape: false,
          open: function(event, ui) {$(".ui-dialog-titlebar-close").hide()},
          height: 350,
          width: 450,
          modal:true,
          /*this creates a close button. Used instead of the automated close tab
          This way the dialog box will get triggered again when closed*/
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