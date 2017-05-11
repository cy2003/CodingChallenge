$(document).ready(function() {
  // code to be executed goes here
});

// Store info in variables
var itemImages = $('.mini-cart-image').find('img').map(function() {return this.src}).get()
// returns ["http://link, http://link"]
var itemNames = $('.mini-cart-image').find('img').map(function() {return this.title}).get()
// returns ["item1 name", "item2 name"]
var numberOfItems = $('.total-items').html()
//returns "2 items"
var cartTotal = $('.order-value').html()
//returns "$99.94"

//Get percentage scrolled. This is using JQuery. This shows % every time the page scrolls.
function amountScrolled(){
  var winHeight = $(window).height()
  var docHeight = $(document).height()
  var scrollTop = $(window).scrollTop()
  var trackLength = docHeight - winHeight
  var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled
  console.log(pctScrolled + '% scrolled')
}

$(window).on('scroll', function(){
  amountScrolled()
})

//Get percentage scrolled using JavaScript. Only shows percentage when the page has resized. This is a more optimized code.

var winheight, docheight, trackLength, throttlescroll

function getmeasurements(){
    winheight = $(window).height()
    docheight = $(document).height()
    trackLength = docheight - winheight
}

function amountscrolled(){
    var scrollTop = $(window).scrollTop()
    var pctScrolled = Math.floor(scrollTop/trackLength * 100)
    console.log(pctScrolled + '% scrolled')
}

getmeasurements()

window.addEventListener("resize", function(){
    getmeasurements()
}, false)

window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){
        amountscrolled()
    }, 50)
}, false)


//Create an overlay ontop of the website. You need to create a div in the body

function displayOverlay() {
    $("<div id='overlay'></div>").css({
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0,0,0,.7)",
        "z-index": 2,
        "vertical-align": "middle",
        "text-align": "center",
        "color": "#fff",
        "font-size": "30px",
        "font-weight": "bold",
        "cursor": "wait"
    }).appendTo("body");
}

function removeOverlay() {
    $("#overlay").remove();
}

//Create a dialogue box
$('#message').dialog(){
  autoOpen: false,
  modal: true,
  buttons: {
    'Go To Cart': function(){
      //go to cart
    },

    }
  }

var message = $('<div id="message" title="Test"><p>This is a message</p></div>')

function displayBox(){
  $('<div id="message" title="Test"><p>This is a message</p></div>').dialog({
        modal:true
      })
}

// This is the html for the marmot dialog box
<div tabindex="-1" role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front newsletter-popup" aria-describedby="dialog-container" aria-labelledby="ui-id-1" style="position: fixed; height: auto; width: 90%; top: 156px; left: 270px; display: block; z-index: 101;">

  <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix">
    <span id="ui-id-1" class="ui-dialog-title">&nbsp;</span>

    <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close">

      <svg aria-hidden="true" class="svg-icon svg-icon-close" viewBox="0 0 20 22" width="20" height="20"><path d="M1.143 22L10 12.257 18.857 22 20 20.743 11.143 11 20 1.257 18.857 0 10 9.743 1.143 0 0 1.257 8.857 11 0 20.743z"></path>
      </svg>
    </button>
  </div>
  <div id="dialog-container" class="dialog-content ui-dialog-content ui-widget-content" style="max-width: 800px; width: auto; min-height: 0px; max-height: none; height: 36px;">

    <div class="content-box">
      <!-- validate if the user is from Europe Continent -->

      <!-- dwMarker="content" dwContentID="b1a66e6f7a877f1e1888d5008b" -->
      <h1>Join the Club!</h1>
      <p style="font-size: 18px">Get <b>15% OFF</b> Your Gear</p>
      <p></p>
      <p>Join our newsletter for the latest on products, promotions, and events and receive a coupon for 15% off full price items in your email box</p>
      <!-- End content-asset -->

      <form method="POST" action="/on/demandware.store/Sites-Marmot_US-Site/en_US/Newsletter-SubscribeForm" name="dwfrm_newsletter" class="newsletter-signup">
        <fieldset>
          <label for="email-alert-address">
            <span class="visually-hidden">Enter Your Email</span>
          </label>
          <div class="form-row form-row-dwfrm_newsletter_email required">
            <label for="dwfrm_newsletter_email"><span></span><span class="required-indicator">*</span></label>
            <input class=" input-text  required" type="email" id="dwfrm_newsletter_email" name="dwfrm_newsletter_email" value="" placeholder="Enter your email address"/>
          </div>
          <input name="dwfrm_newsletter_source" type="hidden" value="modal"/>
          <button type="submit" name="dwfrm_newsletter_subscribe" value="Submit" class="submit-btn">
            <span class="primary-button">Submit</span>
            <svg aria-hidden="true" class="svg-icon svg-icon-arrow-right" width="15" height="15" viewBox="0 0 611.987 611.987"><path d="M604.652 287.018c-.532-.532-1.225-.692-1.757-1.171L417.717 100.668c-10.329-10.329-27.074-10.329-37.377 0-10.328 10.329-10.328 27.074 0 37.376l141.334 141.333H26.622C11.926 279.377 0 291.304 0 306c0 14.694 11.926 26.621 26.622 26.621h495.052L380.341 473.954c-10.329 10.329-10.329 27.074 0 37.376 10.329 10.303 27.073 10.329 37.376 0l185.232-185.258c.532-.453 1.197-.612 1.703-1.092.825-.825.825-1.97 1.518-2.875 2.263-2.796 3.86-5.856 4.818-9.158.346-1.277.586-2.396.719-3.7 1.092-7.907-.958-16.16-7.055-22.229z"></path></svg>
          </button>
        </fieldset>
      </form>
    </div>
  <div class="image-box hide-for-small" style="background-image: url(http://demandware.edgesuite.net/bbjf_prd/on/demandware.static/-/Library-Sites-MarmotSharedLibrary/default/dw345fb814/images/newsletterPopUp/mml-email-modal-image.jpg)"></div>
</div>

//This dialog box works in the console
$('<div id="message" title="This is a dialog box"><p>Just want to put some text in here</p></div>').dialog()

//This works as well
var message = '<div id="message" title="This is a dialog box"><p>Just want to put some text in here</p></div>'
$(message).dialog()

var messageBox = '<div tabindex="-1" role="dialog" class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front newsletter-popup" aria-describedby="dialog-container" aria-labelledby="ui-id-1" style="position: fixed; height: auto; width: 90%; top: 156px; left: 270px; display: block; z-index: 101;"><div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"><span id="ui-id-1" class="ui-dialog-title">&nbsp;</span><button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close"><svg aria-hidden="true" class="svg-icon svg-icon-close" viewBox="0 0 20 22" width="20" height="20"><path d="M1.143 22L10 12.257 18.857 22 20 20.743 11.143 11 20 1.257 18.857 0 10 9.743 1.143 0 0 1.257 8.857 11 0 20.743z"></path></svg></button></div><div id="dialog-container" class="dialog-content ui-dialog-content ui-widget-content" style="max-width: 800px; width: auto; min-height: 0px; max-height: none; height: 36px;"><div class="content-box"><h1>Join the Club!</h1><p style="font-size: 18px">Get <b>15% OFF</b> Your Gear</p><p></p><p>Join our newsletter for the latest on products, promotions, and events and receive a coupon for 15% off full price items in your email box</p><form method="POST" action="/on/demandware.store/Sites-Marmot_US-Site/en_US/Newsletter-SubscribeForm" name="dwfrm_newsletter" class="newsletter-signup"><fieldset><label for="email-alert-address"><span class="visually-hidden">Enter Your Email</span></label><div class="form-row form-row-dwfrm_newsletter_email required"><label for="dwfrm_newsletter_email"><span></span><span class="required-indicator">*</span></label><input class=" input-text  required" type="email" id="dwfrm_newsletter_email" name="dwfrm_newsletter_email" value="" placeholder="Enter your email address"/></div><input name="dwfrm_newsletter_source" type="hidden" value="modal"/><button type="submit" name="dwfrm_newsletter_subscribe" value="Submit" class="submit-btn"><span class="primary-button">Submit</span><svg aria-hidden="true" class="svg-icon svg-icon-arrow-right" width="15" height="15" viewBox="0 0 611.987 611.987"><path d="M604.652 287.018c-.532-.532-1.225-.692-1.757-1.171L417.717 100.668c-10.329-10.329-27.074-10.329-37.377 0-10.328 10.329-10.328 27.074 0 37.376l141.334 141.333H26.622C11.926 279.377 0 291.304 0 306c0 14.694 11.926 26.621 26.622 26.621h495.052L380.341 473.954c-10.329 10.329-10.329 27.074 0 37.376 10.329 10.303 27.073 10.329 37.376 0l185.232-185.258c.532-.453 1.197-.612 1.703-1.092.825-.825.825-1.97 1.518-2.875 2.263-2.796 3.86-5.856 4.818-9.158.346-1.277.586-2.396.719-3.7 1.092-7.907-.958-16.16-7.055-22.229z"></path></svg></button></fieldset></form></div><div class="image-box hide-for-small" style="background-image:url(http://demandware.edgesuite.net/bbjf_prd/on/demandware.static/-/Library-Sites-MarmotSharedLibrary/default/dw345fb814/images/newsletterPopUp/mml-email-modal-image.jpg)"></div></div>'

$(messageBox).dialog({
  modal:true;
})
