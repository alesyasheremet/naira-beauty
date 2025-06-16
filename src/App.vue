
<template>
<v-app app class="app-class">
    <!-- App Bar (Top Menu) -->
    <ToolBar @on-toolbar-item-changed="showMainPage"/>

    

    <!-- Page Content -->
    <v-main class="main-class">

       <router-view />
    </v-main>
  
  </v-app>

</template>
<script lang="ts">

import { ref, computed } from 'vue';
import ToolBar from '@/components/ToolBar.vue'
import AboutMe from '@/components/About.vue'
import AlleBehandelingen from '@/components/AlleBehandelingen.vue'

export default {
  name: 'App',
  components: { ToolBar, AboutMe, AlleBehandelingen,

  },
  setup() {
    console.log('App.vue setup running')
    const drawer = ref(false);
    const aboutVisible = ref(false)
    const behandelingenVisible = ref(false)
    const contactVisible = ref(false)
    // Responsive Check: Check if the screen is mobile
    const isMobile = computed(() => window.innerWidth < 600);

    const showMainPage = (textarg: string) => {
      if (textarg == 'about'){
        aboutVisible.value = true;
        behandelingenVisible.value = false;
        contactVisible.value = false;
      }

      if (textarg == 'behandelingen'){
        aboutVisible.value = false;
        behandelingenVisible.value = true;
        contactVisible.value = false;
      }

            if (textarg == 'contact'){
        aboutVisible.value = false;
        behandelingenVisible.value = false;
        contactVisible.value = true;
      }

    }
    return { drawer, isMobile, showMainPage, aboutVisible, behandelingenVisible };
  }
}
</script>

<style lang="scss">


#app {
  font-family: 'Domine', sans-serif !important;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-weight: 600;
       font-family: 'Domine', sans-serif !important;
         font-size: 14px !important;
    }

    body {
      background-image: url('assets/Image003.jpg'); /* Replace with your image path */
      background-size: cover;      /* Ensures the image covers the entire page */
      background-repeat: no-repeat; /* Prevents tiling */
      background-position: center;  /* Centers the image */
      background-attachment: fixed; /* Optional: Makes the image stay fixed during scroll */
    }

    h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white; /* Change text color to contrast with the background */
}



/* Add padding to the main container to ensure the content doesn't overlap with the edges */
.background-container {
padding-top: 100px;
  padding-bottom: 50px;
}

.app-class{
  background: none !important;
}

.app-toolbar{
  opacity: 70%;
  color: black !important;
}

/* Custom Vuetify Button color */
v-btn {
 // color: #1976D2;  /* Customize button color */
}

.text-center{
  color: black !important;
}

.main-class{
  padding: 0 !important
}
  </style>
