# vue3-event-bus
## Exemple of use  

```js
import {EventBus} from '{..path-to}/EventBus';  
export default {   
  props: {
        name: {
            type: String, default() {
                return 'JohnDoe',
            }
        }
  },
  ...,
  setup(props) {
    /* VUE data */
    let self = {
        open: true,
        is_ended: false,
    };
    
    // listener
    EventBus.$on('event-name', (args1, args2, ...) => {  
        /** do stuff **/
        if(self.open === true)  
          // doStuff
        if(props.name === 'John')    
          // doStuff  
    });  
    
    return self,
  },  
  ...,
};  
```

```js

import {EventBus} from '{..path-to}/EventBus';  
export default {   
  props: {
        name: {
            type: String, default() {
                return 'JohnDoe',
            }
        }
  },
  data(){
     return{
        open: true,
        is_ended: false,
    };
  },
  ...,
  mounted() {
    let self = this;
    // listener
    EventBus.$on('event-name', (args1, args2, ...) => {  
        /** do stuff **/
        if(self.open === true)  
          // doStuff
        if(self.name === 'John')    
          // doStuff  
    });  
    this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        /* do stuff */

    })
  },  
  ...,
};  
```

```js
import {EventBus} from '{..path-to}/EventBus';  
export default {  
   methods:{
    ...,
    on_click(){  
      // emitter
      EventBus.$emit('event-name', args1, args2, ...);  
    }
  },  
  ...,
}; 
```
