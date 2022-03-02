/*!
 * Vue3 EventBus manager v0.1.0
 * (c) 2021-2021 Yohan Solon
 * Released under the MIT License.
 */
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
