console.log('intro.js is connected');

//had trouble trying to attach an inline 'onclick' to the my image input. Learned how to use the location object instead from w3c school https://www.w3schools.com/jsref/obj_location.asp
$('.button').click(function(argument) {
  location.href = './views/level1.html';
});
