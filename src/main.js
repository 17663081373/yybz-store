import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { router } from './route';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios)
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app')
