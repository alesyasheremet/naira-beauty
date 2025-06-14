<template>
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
