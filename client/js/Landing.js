$(document).ready(function() {

    // console.log('this landing javascript...')

    $('.Home-Highlights-Top').hover(function() {

        $(this).find('.four-square-container').animate({
            top: '70%',
        }, { duration: 300, easing: 'swing' })

        // $(this).find('.four-square-text').animate({
        // }, { duration: 300, easing: 'swing' })

    }, function() {

        $(this).find('.four-square-container').animate({
            top: '85%',
        }, { duration: 300, easing: 'swing' })

        // $(this).find('.four-square-text').animate({
        //     color: '#414141',
        //     fontSize: '18px'
        // }, { duration: 300, easing: 'swing' })

    })

    $('.Home-Highlights-Bottom').hover(function() {

        $(this).find('.four-square-container').animate({
            top: '70%',
        }, { duration: 300, easing: 'swing' })

        // $(this).find('.four-square-text').animate({
        // }, { duration: 300, easing: 'swing' })

    }, function() {

        $(this).find('.four-square-container').animate({
            top: '85%',
        }, { duration: 300, easing: 'swing' })

        // $(this).find('.four-square-text').animate({
        // })

    })

})