// const EvenEmitter = require('events');

// const door = new EvenEmitter();

// door.on('slam', function(){
//     console.log('ton père !');
// })

// setInterval(
//     function(){door.emit('slam')}, 2000
// )

// const mouse = new EvenEmitter;

// mouse.on('click', function(position){
//     console.log('click : ', position);
// })

// mouse.emit('click', {  x: 10, y: 35 })
// mouse.emit('click', {  x: 45, y: 2 })

const EvenEmitter = require('events');
const ticker = new EvenEmitter();

function main() {
    ticker.on('tick', function(){
        console.log('tick');
    })

    function tick(){
        ticker.emit('tick')
    }

    // 1. Create an EventEmitter called ticker, SEE: new EventEmitter
    // 2. Create a function tick() that emit an Event 'tick'
  
    // Define a listener on 'tick' event. It console.log 'tick' on every event emitted
  
    setInterval(
      () => tick(), 1000
    );
}

main();