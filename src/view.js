import {EventBus} from './modules/EventBus';
import { ctx } from './modules/Context';
import { tpl } from './tpl';

/* VUE => data */
ctx.data = { };
ctx.methods = {
    async waitNextTick(callback = () => {
    }) {
      await this.$nextTick();
      callback();
    },
    constructor(){

    },
};

/* VUE Settings */
export default {
  components: {

  },
  setup(props) {
      ctx.data = {'first_name': 'john', 'last_name': 'Doe'};
      let load = ()=>'Hello';
      ctx.method = load;
      ctx.method = function load2(){return 'World'};
      ctx.method = function say(){
            return this.first_name+' '+this.last_name+' say '+this.load()+' '+this.load2();
      };
      EventBus.$on('empty-event', (value) => {
          /* data => ctx.data; methods => ctx.methods */
      });
      return ctx.build();
  },
  mounted() {
      let self = this;
      this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered
          console.log(self.say());
          self.constructor();
          console.info('Empty Vue loaded ...');
      })
  },
  template: tpl,
};
