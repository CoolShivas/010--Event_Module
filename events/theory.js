/**
 * 
 * // // Theory :- 
 * 
 * 
 *  EventEmitter is a core module in Node.js used to create and handle custom events.
    It is part of the events module and is often used for building event-driven systems in 
    Node.js.
 * 
 * 
 * * * * Key Methods :-  
 * 
    1. emit(eventName, [args])

    Purpose: Emits (or triggers) an event with the specified eventName. You can also 
    pass arguments that will be consumed by the listeners.
    It’s like calling a function, but instead, it triggers all listeners (functions) attached to 
    the specified event.
 
    2. on/addListener(eventName, listener)
 
    Purpose: Attaches a listener (a function) to a specific eventName. This listener will 
    execute when the event is emitted.


 * 
 * Think of it as defining custom events and then triggering them:
 * 
 * 
 *  Defining a Listener (on/addListener):
 
    It's like defining a function for an event.
    The listener will execute when the corresponding event is triggered.

 * 
 * 
 * 
 *  Emitting an Event (emit):
    It's like calling that event's listener.
 * 
 */
