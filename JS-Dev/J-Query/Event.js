// J-Query - event

/* 
    Types of Event =>
    Mouse Events    Keyboard Events     Form Events     Document Events

    click	        keypress	        submit	        load
    dblclick	    keydown	            change	        resize
    hover	        keyup	            select	        scroll
    mousedown		blur	            unload
    mouseup		    focusin	            ready

*/

$(document).ready(function () {
    $('.b1').click(function () {
        console.log('button clicked')
    })

    $('.b2').mouseover(function () {
        $('.b2').css('background-color', 'red')
    })

    $('.b2').mouseout(function () {
        $('.b2').css('background-color', 'white')
    })

    $('.b3').click(function(event){
        console.log(window.screen)
    })


    $(window).resize(function(event){
        // console.log(window.outerHeight)
    })

    $(window).scroll(function(event){
        // console.log(event)
        console.log('scroll top = '+$(window).scrollTop())
        console.log('scroll x , y = '+window.scrollX+window.scrollY)
    })
})