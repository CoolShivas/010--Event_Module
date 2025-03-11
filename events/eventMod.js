const EventEmitter = require("events");


// // // Creation of an instance of EventEmitter;
const amitter = new EventEmitter();


// // // Define an event listener (addListener/on) by using .on or .addListener;
amitter.on("welCome", () => {
    console.log("Shiva Khateek Chouhan");
});


// // // Trigger (emit) the "welCome" event;
amitter.emit("welCome");


// // // //  Here, we are getting the Output on Terminal as :-
// // // //  Shiva Khateek Chouhan
