<template>
<v-container class="py-8">
    <v-row style="background: white">
    

      <!-- Right Column: Contact Form -->
      <v-col cols="12" md="12">
        <v-form @submit.prevent="" ref="formContact" >
          <v-row dense>
            <v-col cols="12" md="12">
              <v-text-field label="Email"  />
            </v-col>
           
          </v-row>
        </v-form>
      
      </v-col>
    </v-row>
  </v-container>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import {useRouter} from 'vue-router'
  export  default defineComponent({
    name: 'Login',
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
  