const EventEmit = require('events');

const checking = new EventEmit();

// checking.addListener("greetings", () => {
//     console.log("Hemendra Pratap Singh Chouhan");
// })

// checking.emit("greetings")


// // // //  Here, we are getting the Output on Terminal as :-
// // // //  Hemendra Pratap Singh Chouhan



///////************************************************************************************** */



// // // We can also Pass Arguments while emiting :-


checking.on("greeting", (userName) => {
    console.log(`Hello, ${userName}. Hope, you are well and good.`);
})

checking.emit("greeting", "Hemendra Pratap Singh Chouhan");


// // // // Here, we are getting the Output on Terminal as :-
// // // // Hello, Hemendra Pratap Singh Chouhan. Hope, you are well and good.

