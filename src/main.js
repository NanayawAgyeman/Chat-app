import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
library.add(faAngleRight, faAngleDown);

