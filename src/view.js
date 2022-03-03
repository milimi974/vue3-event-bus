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
          self.constructor();
          console.info('Empty Vue loaded ...');
      })
  },
  template: tpl,
};
