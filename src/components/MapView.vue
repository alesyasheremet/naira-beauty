<template>
  <div id="map" style="height: 500px; width: 100%"></div>
</template>
  
  <script lang="ts">
  import { ref, defineComponent, computed, onMounted } from 'vue'
  import {useRouter} from 'vue-router'
  import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

  export  default defineComponent({
    name: 'MapView',
    props: {
      msg: String
    },
    emits: ['on-toolbar-item-changed',],
    setup(props, {emit}) {
      onMounted(() => {
  const map = L.map('map').setView([52.100871, 5.104739], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

L.marker([52.100871, 5.104739])
  .addTo(map)
  .bindPopup('Amsterdamsestraatweg 100')
  .openPopup()
})
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
  