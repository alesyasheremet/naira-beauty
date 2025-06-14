
<template>
<v-app class="app-class">
    <!-- App Bar (Top Menu) -->
    <v-app-bar app class="app-toolbar">
      <!-- Hamburger Menu for Mobile -->
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="isMobile"></v-app-bar-nav-icon>

      <!-- Title of the App -->
      <v-toolbar-title>Naira Beauty</v-toolbar-title>

      <!-- Desktop Navigation Links -->
      <v-spacer />
      <v-btn text  v-if="!isMobile"><router-link :to="'/about'">About</router-link></v-btn>
      <v-btn text  v-if="!isMobile"><router-link :to="'/behandelingen'">Behandelingen</router-link></v-btn>
      <v-btn text  v-if="!isMobile"><router-link :to="'/contact'">Contact</router-link></v-btn>
    </v-app-bar>

    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item link href="#about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#naira-services">
          <v-list-item-title>Behandelingen</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Page Content -->
    <v-main>
      <v-container class="background-container" id="naira-services">
       
      </v-container>
     <router-view />
    </v-main>
    
  </v-app>

</template>
<script lang="ts">

import { ref, computed } from 'vue';

export default {
  name: 'App',
  components: {

  },
  setup() {
    console.log('App.vue setup running')
    const drawer = ref(false);

    // Responsive Check: Check if the screen is mobile
    const isMobile = computed(() => window.innerWidth < 600);

    return { drawer, isMobile };
  }
}
</script>

<style>


#app {
  font-family: 'Lato', sans-serif !important;
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
       font-family: 'Lato', sans-serif !important;
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
  color: #1976D2;  /* Customize button color */
}

.text-center{
  color: black !important;
}
  </style>
