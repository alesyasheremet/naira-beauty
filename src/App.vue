
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
      <v-btn text href="#about" v-if="!isMobile">About</v-btn>
      <v-btn text href="#naira-services" v-if="!isMobile">Naira Services</v-btn>
      <v-btn text href="#contact" v-if="!isMobile">Contact</v-btn>
    </v-app-bar>

    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item link href="#about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#naira-services">
          <v-list-item-title>Naira Services</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Page Content -->
    <v-main>
      <v-container class="background-container" id="naira-services">
        <v-row>
          <v-col cols="12" class="text-center">
            <h1>Welcome to Naira Services</h1>
            <p>Explore our offerings and get in touch with us.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'
import { ref, computed } from 'vue';

export default {
  name: 'App',
  components: {

  },
  setup() {
    const drawer = ref(false);

    // Responsive Check: Check if the screen is mobile
    const isMobile = computed(() => window.innerWidth < 600);

    return { drawer, isMobile };
  }
}
</script>

<style>


@font-face {
  font-family: 'Lato';
  src: url('@/assets/styles/fonts/lato/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('@/assets/styles/fonts/lato/Lato-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
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

p {
  font-size: 1.2rem;
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
}

/* Custom Vuetify Button color */
v-btn {
  color: #1976D2;  /* Customize button color */
}
  </style>
