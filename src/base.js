// src/main.js
import view from './view.js';
import {createApp, h} from "vue";
// do not use #
const ID = 'app';

if(document.getElementById(ID)) {
  const app = createApp({
    render: () => h(view),
  });
  app.mount('#' + ID);
}
