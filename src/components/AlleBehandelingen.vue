<template>


    <div class="card-row">
    <v-row justify="start" align="start" no-gutters >

      <v-col cols="12" sm="2"  >
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200" @click="selectSlot('alle')" :class="{ 'active-card': selectedSlot === 'alle' }">
          <v-container class="text-center fill-height d-flex flex-column justify-center align-center">
          <v-icon size="40" style="height: 64px; width: 64px" icon="fa fa-grip-vertical"  class="mb-3"
/>
          <v-card-title>Alle</v-card-title>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" sm="2">
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200" @click="selectSlot('gezicht')" :class="{ 'active-card': selectedSlot === 'gezicht' }">
           <v-container class="text-center fill-height d-flex flex-column justify-center align-center">
        <v-img
  :src="facialIcon"
  width="64"
  height="64"
  class="mb-3"
/>
          <v-card-title>Gezicht</v-card-title>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2">
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200" @click="selectSlot('wimpers')" :class="{ 'active-card': selectedSlot === 'wimpers' }">
           <v-container class="text-center fill-height d-flex flex-column justify-center align-center">
        <v-img
  :src="wimpersIcon"
  width="64"
  height="64"
  class="mb-3"
/>
          <v-card-title>Wimpers</v-card-title>
          </v-container>
        </v-card>
      </v-col>
 
      <v-col cols="12" sm="2">
        <v-card class="pa-2" rounded="2xl" elevation="4"  max-width="200" @click="selectSlot('nagels')" :class="{ 'active-card': selectedSlot === 'nagels' }">
          <v-container class="text-center fill-height d-flex flex-column justify-center align-center">
          <v-img
  :src="nailsIcon"
  width="64"
  height="64"
  class="mb-3"
/>
          <v-card-title>Nagels</v-card-title>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" sm="2">
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200" @click="selectSlot('ontharen')" :class="{ 'active-card': selectedSlot === 'ontharen' }">
           <v-container class="text-center fill-height d-flex flex-column justify-center align-center" >
          <v-img
  :src="waxingIcon"
  width="64"
  height="64"
  class="mb-3"
/>
          <v-card-title>Ontharen</v-card-title>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    </div>

      <GezichtBehandeling :category="selectedSlot" />
          <v-bottom-navigation v-if="behandelingen > 0"
      app
      color="indigo"
      
      fixed
            height="64"
      elevation="3"
      rounded="0"
    >
      <div class="bar-content" >
        <div style="font-size: 14px !important">
          {{ behandelingen > 1 ? behandelingen + ' behandelingen' : behandelingen + ' behandeling' }}
        </div>
         <div class="right-action" @click="selectTimeAndDate">
          Kies tijd
         </div>
      </div>
    </v-bottom-navigation>


</template>

<script lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useDisplay } from 'vuetify'
import GezichtBehandeling from '@/components/behandelingen/Gezicht.vue'
import NagelsBehandeling from '@/components/behandelingen/Nagels.vue'
import WimpersBehandeling from '@/components/behandelingen/Wimpers.vue'
import WebsiteFooter from '@/components/Footer.vue'
import nailsIcon from '@/assets/images/nails.png';
import facialIcon from '@/assets/images/facial.png';
import waxingIcon from '@/assets/images/hair-removal.png';
import wimpersIcon from '@/assets/images/eyelash.png';
import { useRoute, useRouter } from 'vue-router'
import { useBehandelingStore } from '@/components/behandelingen/behandelingen-store'

export default {
  name: 'AlleBehandelingen',
  components: {GezichtBehandeling, WebsiteFooter,

  },
  
  setup() {
    const drawer = ref(true)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
const router = useRouter()
const route = useRoute()
const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
const activeTab = ref(tabs[0])
const behandelingenStore = useBehandelingStore()
const behandelingen = ref(behandelingenStore.$state.treatment.length);

const tabComponents = {
  'Tab 1': GezichtBehandeling,
  'Tab 2': NagelsBehandeling,
  'Tab 3': WimpersBehandeling,
}
watch (()=> behandelingenStore.$state.treatment.length, (newVal) => {
  behandelingen.value = newVal
})
const selectedSlot = ref('')
// Optional: Activate slot from hash on page load
onMounted(() => {
  if (route.hash) {
    const hashSlot = route.hash?.replace('#', '');

      selectedSlot.value = hashSlot; 

  }else{
     selectedSlot.value = 'alle'
     router.replace({ hash: `#alle` })
  }})

const selectSlot = (slot: string) => {
  selectedSlot.value = slot
  // Update the URL hash (e.g., #slot-10-30)
  const hash = `${slot.replace(':', '-')}`
  router.replace({ hash: `#${hash}` })

}

const selectTimeAndDate = () => {
router.push('/behandelingen/kies-tijd')
}

return{
  isMobile,
  drawer,
  tabs, activeTab, tabComponents, nailsIcon, facialIcon, waxingIcon, selectTimeAndDate, selectedSlot, selectSlot, behandelingen, wimpersIcon,
}
  }
}
</script>

<style lang="scss" scoped>
.active-card {
  background-color: #F4CDD4;
  color: black;
}
.schedule-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 100;
  padding: 0;
  border-top: 1px solid #eee;
}

.bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  width: 100%;
}

.right-action {
  flex: 0 0 40%;
  background-color: #F4CDD4; /* Vuetify primary */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.2s ease;
  height: 100%;
}

/* Left menu */
.v-list {
  border-right: 1px solid #ddd;
  height: 100vh;
  overflow-y: auto;
  background-color: #fafafa;
}

.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; /* or 'start' if you want left alignment */
}

/* Active item highlight */
.v-list-item--active {
  background-color: #007bff !important; /* Treatwell blue-ish */
  color: white !important;
  font-weight: 600;
}

/* Hover effect on list items */
.v-list-item:hover:not(.v-list-item--active) {
  background-color: #e0f2ff;
  cursor: pointer;
}

/* Right panel */
.v-card {
  margin: 16px;
//  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

/* Card title */
.v-card-title {
  color: #333;
  font-size: 14px;
}

/* Card text */
.v-card-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

/* Button styling */
.v-btn {
  text-transform: none;
  font-weight: 600;
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .v-list {
    height: auto;
    border-right: none;
  }
}
</style>