import { createApp } from 'vue'
import {createVuetify} from 'vuetify'
import App from './App.vue'
import 'vuetify/styles';  // Global CSS for Vuetify    
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
          light: {
            primary: '#1976D2', // Your custom color
            secondary: '#424242', // Your custom color
            accent: '#82B1FF', // Your custom color
            error: '#FF5252', // Your custom color
            info: '#2196F3', // Your custom color
            success: '#4CAF50', // Your custom color
            warning: '#FB8C00', // Your custom color
            fontFamily: 'Lato, sans-serif', // Set Lato as the default font
          },
        },
      },
    });
createApp(App).use(vuetify).mount('#app')
