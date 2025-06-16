<template>
  <v-app-bar class="app-toolbar">
      <!-- Hamburger Menu for Mobile -->
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="isMobile"></v-app-bar-nav-icon>

      <!-- Title of the App -->
      <v-toolbar-title>Nairabeauty</v-toolbar-title>

      <!-- Desktop Navigation Links -->
      <v-spacer />
      <v-btn text  v-if="!isMobile" @click="toolBarItemChanged('team')">Team</v-btn>
      <v-btn text  v-if="!isMobile" @click="toolBarItemChanged('behandelingen')">Behandelingen</v-btn>
      <v-btn text  v-if="!isMobile" @click="toolBarItemChanged('contact')">Contact</v-btn>
      <v-btn text  v-if="!isMobile" @click="toolBarItemChanged('login')">Login</v-btn>
    </v-app-bar>
    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item link :to="'/team'" router>
          <v-list-item-title>Team</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="'/behandelingen'" router>
          <v-list-item-title>Behandelingen</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="'/contact'" router>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import {useRouter} from 'vue-router'
  export  default defineComponent({
    name: 'ToolBar',
    props: {
      msg: String
    },
    emits: ['on-toolbar-item-changed',],
    setup(props, {emit}) {
    console.log('App.vue setup running')
    const drawer = ref(false);

    // Responsive Check: Check if the screen is mobile
    const isMobile = computed(() => window.innerWidth < 600);
    const router = useRouter();

    const toolBarItemChanged = (text: string) => {
        emit('on-toolbar-item-changed', text)
        router.push(`/${text}`)
    }
    return { drawer, isMobile, toolBarItemChanged, };
  }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  