# vue3-event-bus
# Exemple of use  

import {EventBus} from '{..path-to}/EventBus';  
export default {  
  setup() {
    // listener
    EventBus.$on('event-name', (args1, args2, ...) => {  
        /** do stuff **/
    });  
  },  
};  


import {EventBus} from '{..path-to}/EventBus';  
export default {  
   methods:{
    on_click(){  
      // emitter
      EventBus.$emit('event-name', args1, args2, ...);  
    }
  },  
}; 
