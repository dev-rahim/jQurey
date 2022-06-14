// // EXTARNAL JS 
// $(document).ready(function() {
//     //CODE
// });

// $(window).load(function(){
//     //CODE
// })

// $(document).ready(function() {
//     $('h2').click(function(){
//         $('p').hide();
//     })

//    });

//    $(document).ready(function() {
//     $('h2').click(function(){
//         $('p').show();
//     })

//    });
//    $(document).ready(function() {
//     $('h2').click(function(){
//         $('p').toggle();
//     })

//    });
//    $(document).ready(function() {
//     $('h2').click(function(){
//         $('p').slideUp(4000);
//     })

//    });
//    $(document).ready(function() {
//     $('h2').click(function(){
//         $('p').slideToggle();
//     })

//    });
//    $(document).ready(function() {
//     $('h2').click(function(){
//         $('p').fadeToggle();
//     })

//    });
   $(document).ready(function() {
    // $('h2').click(function(){
    //     $('p').fadeTo('slow', 0.1);
    // $('h2').click(function(){
    //     $('p').text('Ki khobor?');
    $('h2').click(function(){
        $('p').html("<h4>Ki Khobor?</h4>");
        $('p').css('color', '#900000');

    })

    $('h3').click(function(){
        $('h3').text('Request Sent');
    })

   });