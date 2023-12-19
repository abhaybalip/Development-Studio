// J-Query - selector

/*
Element can be selected on the parameters =>

    HTML element Name

    Element ID

    Element Class

    Element attribute name

    Element attribute value

    Many more criteria

Types of selector =>

    element
    #id
    .class
*/

// executed when element is completely ready
$(document).ready(function () {
    console.log('document is ready')
})

$("#main").ready(function () {
    console.log('main element is ready')
})

$('.footer').on('load', function () {
    console.log('footer loader')
})


var checkboxes = $('input[type="checkbox"]')

var topLinks = $('a[href="#top"]')

var modals = $('[data-role="modal"]')
var toggleElements = $('[data-toggle]')

var noClassParagraphs = $('p:not([class])')

// elements with id starting with product-
var productItems = $('[id^=product-]')

var highlighted = elements.find('[data-highlight="true"]')

// Filters for enabled elements within container divs:
var enabled = elements.filter(':enabled')