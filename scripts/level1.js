//making sure my js file is connected
console.log('sup from the js file');

//placing an event listener to know when a wire is clicked
//next step make it so that a winning or losing  module covers the screen with a restart or adnvace button

$('.container1').click(function(event) {
  if (event.target.className === 'wire2') {
    alert(`Good work! Bomb diffused.`);
  } else {
    alert(`Wrong wire dummy, now you're dead.`);
  }
  console.log(`${event.target.className} has been clicked!`);
});

$('.hint1-title').mouseenter(function() {
  $('.hint1-text').css('visibility', 'visible');
});

$('.hint1-title').mouseout(function() {
  $('.hint1-text').css('visibility', 'hidden');
});

$('.hint2-title').mouseenter(function() {
  $('.hint2-text').css('visibility', 'visible');
});

$('.hint2-title').mouseout(function() {
  $('.hint2-text').css('visibility', 'hidden');
});

$('.hint3-title').mouseenter(function() {
  $('.hint3-text').css('visibility', 'visible');
});

$('.hint3-title').mouseout(function() {
  $('.hint3-text').css('visibility', 'hidden');
});
