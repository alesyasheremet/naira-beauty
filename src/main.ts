import { createApp } from 'vue'
import {createVuetify} from 'vuetify'
import App from '@/App.vue'
import 'vuetify/styles';  // Global CSS for Vuetify    
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@/assets/styles/style.css'
import { createRouter, createWebHistory } from 'vue-router';
import AlleBehandeligen from '@/components/AlleBehandelingen.vue'
import AboutMe from '@/components/About.vue'
import ContactDetails from '@/components/Contact.vue'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import KiesTijd from './components/KiesTijd.vue';

const routes = [
  {
    path: '/',
   // component: App,
    redirect: '/behandelingen',
  },
  {
    path: '/behandelingen',
    component: AlleBehandeligen,
  },
  {
    path: '/behandelingen/kies-tijd',
    component: KiesTijd,
  },
  {
    path: '/about',
    component: AboutMe,
  },
  {
    path: '/contact',
    component: ContactDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
          light: {
            colors:{
            primary: '#F2B8C6', // Your custom color
            secondary: '#424242', // Your custom color
            accent: '#82B1FF', // Your custom color
            error: '#FF5252', // Your custom color
            info: '#2196F3', // Your custom color
            success: '#4CAF50', // Your custom color
            warning: '#FB8C00', // Your custom color
            
            }
          },
        },
      },
      defaults: {
        global: {
          style: {
            fontFamily: 'Domine, sans-serif', // Set Lato as the default font
          }
        }
      },
      icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
        },
      },
    });

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
