$(document).ready(function() {
    $('.experience-bar').hover(function() {
        $(this).find('.experience-hr-expand').animate({
            display: 'block',
            left: '10px',
            opacity: '1',
            width: '15px',
            marginRight: '15px'
        }, { duration: 300, easing: 'swing' })
    }, function() {
        $(this).find('.experience-hr-expand').animate({
            display: 'none',  
            opacity: '0',          
            left: '0px',
            width: '0px',
            marginRight: '0px'
        }, { duration: 300, easing: 'swing' })
    })
});