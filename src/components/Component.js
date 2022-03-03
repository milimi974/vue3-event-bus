import {EventBus} from '/src/js/components/EventBus';
import { ctx } from '/src/js/components/Context';

/* VUE => data */
ctx.data = { };
ctx.methods = {
    async waitNextTick(callback = () => {
    }) {
      await this.$nextTick();
      callback();
    },
    static(name) {
      return r(name);
    },
    constructor(){

    },
};

export default {
  props: {
    items: {
        type: Object, default() {
        return {}
        }
    },
    action: String,
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
      })
  },
  template: `
    <div>
      Count: {{ count }}
      <BaseButton @click="count += 1">
        +1
      </BaseButton>
    </div>
  `,
};
