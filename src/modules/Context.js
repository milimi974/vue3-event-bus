// Object tools help building context
import { reactive } from 'vue';

class Context{
    #VARS;
    constructor() {
        this.#VARS = {'data': {}, 'methods': {}};
    }
    /* data */
    set data(value){
        Object.assign(this.#VARS['data'], value);
    }
    get data(){
        return this.#VARS['data'];
    }
    /* method */
    set method(func){
        let a = {}
        a[func.name] = func;
        Object.assign(this.#VARS['methods'], a);
    }
    set methods(arr){
        this.#VARS['methods'] = arr;
    }
    get methods(){
        return this.#VARS['methods'];
    }
    build(){
        const data = reactive(this.#VARS['data']);
        const methods = this.#VARS['methods'];
        return{
            ...data,
            ...methods
        }
    }
}

export let ctx = new Context();
