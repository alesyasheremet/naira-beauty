<template>
<v-footer app color="primary" class="text-white">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="4" class="text-center text-md-start">
           <h4 class="text-h6 mb-2">Adres</h4>
          <p class="mb-0">Nairabeauty</p>
          <p class="mb-0">Amsterdamsestraatweg 100</p>
          <p class="mb-0">3513AK Utrecht</p>
          <p class="mb-0">Nederland</p>
        </v-col>

        <v-col cols="12" md="4" class="text-center my-2 my-md-0">
        <h4 class="text-h6 mb-2">Contact</h4>
          <p class="mb-0">Tel: +31 20 123 4567</p>
          <p class="mb-0">E-mail: <a href="mailto:info@yourcompany.nl" class="text-white text-decoration-underline">info@yourcompany.nl</a></p>
          <p class="mb-0">KvK: 12345678</p>
          <p class="mb-0">BTW: NL123456789B01</p>
        </v-col>

        <v-col cols="12" md="4" class="text-center text-md-end">
          <v-icon class="me-2">mdi-facebook</v-icon>
          <v-icon class="me-2">mdi-twitter</v-icon>
          <v-icon>mdi-instagram</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import {useRouter} from 'vue-router'
  export  default defineComponent({
    name: 'WebsiteFooter',
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
  