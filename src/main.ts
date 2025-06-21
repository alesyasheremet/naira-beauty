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
import AfspraakBevestigen from './components/AfspraakBevestigen.vue';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Login from './components/Login.vue';
import AfspraakMaken from '@/components/AfspraakMaken.vue';
import { nl } from 'vuetify/locale'

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
    path: '/behandelingen/kies-tijd/afspraak-bevestigen',
    component: AfspraakBevestigen,
  },
      {
    path: '/behandelingen/kies-tijd/afspraak-maken',
    component: AfspraakMaken,
  },
  {
    path: '/team',
    component: AboutMe,
  },
  {
    path: '/contact',
    component: ContactDetails,
  },
    {
    path: '/login',
    component: Login,
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
      locale: {
    locale: 'nl',
    messages: { nl },
  },
      
    });

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
