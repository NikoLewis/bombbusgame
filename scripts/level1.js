//making sure my js file is connected
console.log('sup from the js file');

//using jQuery ready() method which occurs earlier thant he DOM window.onload method would https://www.w3schools.com/jquery/event_ready.asp
$(document).ready(function(argument) {
  dynamicRiddle(riddles);
});

var riddles = [
  {
    hints: {
      1: `Cut all odd wires`,
      2: `Don't cut red wires even if another hint says that you should.`,
      3: `When hint 1 said "odd" it meant "even".`,
    },
    wires: {
      1: false,
      2: true,
      3: false,
    },
    checked: 0,
    goal: 1,
  },
  {
    hints: {
      1: `Don't cut Yellow wires even if another hint says you should`,
      2: `Green wires are actually Yellow`,
      3: `Cut all wires".`,
    },
    wires: {
      1: true,
      2: false,
      3: true,
    },
    checked: 0,
    goal: 2,
  },
  {
    hints: {
      1: `don't cut wire 1`,
      2: ` cut all odd wires even if another rule says you shouldn't`,
      3: `wire 2 is actually wire 3 and wire 3 is actually wire 2`,
    },
    wires: {
      1: true,
      2: true,
      3: false,
    },
    checked: 0,
    goal: 2,
  },
  {
    hints: {
      1: `don't cut wire 3`,
      2: `cut all green wires even if another rule says you shouldn't`,
      3: `all wires are green`,
    },
    wires: {
      1: true,
      2: true,
      3: true,
    },
    checked: 0,
    goal: 3,
  },
  {
    hints: {
      1: `don't cut wire 3 even if another rule says you should`,
      2: `cut all wires next to red wires`,
      3: `wire 2 is actually red`,
    },
    wires: {
      1: true,
      2: true,
      3: false,
    },
    checked: 0,
    goal: 2,
  },
];

var whichIndex;

function dynamicRiddle(argument) {
  var randomRiddle = Math.floor(Math.random() * 5);
  whichIndex = randomRiddle;
  console.log('which Index? ', whichIndex);

  $('.hint1-text').text(`${riddles[randomRiddle]['hints'][1]}`);
  $('.hint2-text').text(`${riddles[randomRiddle]['hints'][2]}`);
  $('.hint3-text').text(`${riddles[randomRiddle]['hints'][3]}`);

  // working example of how jQuery data()
  // $('.wire1').data('check', true)

  // $('.wire1').data(`trueOrFalse`, `${riddles[randomRiddle]['wires'][1]}`);
  // $('.wire2').data(`trueOrFalse`, `${riddles[randomRiddle]['wires'][2]}`);
  // $('.wire2').data(`trueOrFalse`, `${riddles[randomRiddle]['wires'][3]}`);

  $('.wire1').attr(`title`, `${riddles[randomRiddle]['wires'][1]}`);
  $('.wire2').attr(`title`, `${riddles[randomRiddle]['wires'][2]}`);
  $('.wire3').attr(`title`, `${riddles[randomRiddle]['wires'][3]}`);

  console.log($('.wire1').attr('title'));
  console.log($('.wire2').attr('title'));
  console.log($('.wire3').attr('title'));
}

// failed attempt to use bind so this would refer to element, look into this
// looked up event properties to figure out one I could access, went with "title", will refactor to use jQuery data() maybe... but can't figure out how to retrieve it.

// $('.container1').bind('click', function(event) {
//   // if (event.currentTarget.value === true) {
//   //   alert(`Good work! Bomb diffused.`);
//   // } else {
//   //   alert(`Wrong wire dummy, now you're dead.`);
//   // }

//   console.log(
//     `${this.currentTarget}
//     } !`
//   );
// });

//placing an event listener to know when a wire is clicked
//next step make it so that a winning or losing  module covers the screen with a restart or adnvace button

$('.container1').click(function(event) {
  var storeEvent = event;
  // trying drakes dataset suggestion
  // console.log(` dataset? ${event.target.dataset}`);
  console.log('event.target', event.target);
  console.log(`.wire1 .color1)`, $('.color1')[0]);
  if (event.target === $('.color1')[0]) {
    $('.color1').css(`background`, `url('../images/redwire-cut.png')`);
  } else if (event.target === $('.color2')[0]) {
    $('.color2').css(`background`, `url('../images/greenwire-cut.png')`);
  } else if (event.target === $('.color3')[0]) {
    $('.color3').css(`background`, `url('../images/bluewire-cut.png')`);
  }

  setTimeout(function() {
    // console.log('hi from setTimeout', storeEvent);
    if (storeEvent.target.title == 'true') {
      riddles[whichIndex].checked += 1;

      if (riddles[whichIndex].checked === riddles[whichIndex].goal)
        alert(`Good work! Bomb diffused.`);
    } else if (storeEvent.target.title == 'false') {
      alert(`Wrong wire dummy, now you're dead.`);
    }

    console.log(` t or f? ${event.target.title}`);
  }, 900);
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
