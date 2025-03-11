const EventEmit = require('events');

const checking = new EventEmit();

checking.addListener("greetings", () => {
    console.log("Hemendra Pratap Singh Chouhan");
})

checking.emit("greetings")


// // // //  Here, we are getting the Output on Terminal as :-
// // // //  Hemendra Pratap Singh Chouhan