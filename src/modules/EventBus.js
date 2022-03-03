// Object form communication between components

class Event{
    #EVENTS;
    constructor() {
        this.#EVENTS = {};
    }

    $emit(name, ...args){
        if(this.#EVENTS[name] === undefined)
            return;
        for(const callback of this.#EVENTS[name])
            callback(...args);
    }

    $on(name, callback){
        if(typeof callback !== 'function')
            return;
        if(this.#EVENTS[name] === undefined)
           this.#EVENTS[name] = [];
        this.#EVENTS[name].push(callback);
    }

    $off(name){
        delete this.#EVENTS[name];
    }
}

export const EventBus = new Event();
