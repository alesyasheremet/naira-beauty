<template>

  <v-container class="py-10">
    <v-row justify="center" align="stretch" dense>

      <v-col cols="12" sm="4">
        <v-card class="pa-4" rounded="2xl" elevation="4">
          <v-icon size="40" class="mb-3 ">fa-solid fa-table</v-icon>
          <v-card-title>Alle</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="pa-4" rounded="2xl" elevation="4">
          <v-icon size="40" class="mb-3 ">fa-solid fa-spa</v-icon>
          <v-card-title>Gezicht</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="pa-4" rounded="2xl" elevation="4">
          <v-icon size="40" class="mb-3">fa-solid fa-hand-sparkles</v-icon>
          <v-card-title>Nagels</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="pa-4" rounded="2xl" elevation="4">
          <v-icon size="40" class="mb-3 ">fa-solid fa-eye</v-icon>
          <v-card-title>Ontharen</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
      <GezichtBehandeling />

</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import GezichtBehandeling from '@/components/behandelingen/Gezicht.vue'
import NagelsBehandeling from '@/components/behandelingen/Nagels.vue'
import WimpersBehandeling from '@/components/behandelingen/Wimpers.vue'

export default {
  name: 'AlleBehandelingen',
  components: {GezichtBehandeling

  },
  
  setup() {
    const drawer = ref(true)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)


const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
const activeTab = ref(tabs[0])

const tabComponents = {
  'Tab 1': GezichtBehandeling,
  'Tab 2': NagelsBehandeling,
  'Tab 3': WimpersBehandeling,
}

return{
  isMobile,
  drawer,
  tabs, activeTab, tabComponents
}
  }
}
</script>
