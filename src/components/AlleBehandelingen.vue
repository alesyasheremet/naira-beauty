<template>

  <v-container class="py-10">
    <div class="card-row">
    <v-row justify="center" align="start" no-gutters >

      <v-col cols="12" sm="2">
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200">
          <v-container class="text-center fill-height d-flex flex-column justify-center align-center">
          <v-icon size="40" icon="fa fa-grip-vertical"  class="mb-3"
/>
          <v-card-title>Alle</v-card-title>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" sm="2">
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200">
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
        <v-card class="pa-2" rounded="2xl" elevation="4"  max-width="200">
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
        <v-card class="pa-2" rounded="2xl" elevation="4" max-width="200">
           <v-container class="text-center fill-height d-flex flex-column justify-center align-center">
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
  </v-container>
      <GezichtBehandeling />
  <v-layout>
    <!-- Page content here -->

    <!-- Full-width sticky bottom bar -->
    <v-sheet
      class="schedule-bar"
      height="64"
      elevation="3"
      rounded="0"
      width="100%"
    >
      <div class="bar-content">
        <div>
          Nagelversteviging  45 min $60
        </div>
         <div class="right-action" @click="selectTimeAndDate">
          Kies tijd
         </div>
      </div>
    </v-sheet>
  </v-layout>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import GezichtBehandeling from '@/components/behandelingen/Gezicht.vue'
import NagelsBehandeling from '@/components/behandelingen/Nagels.vue'
import WimpersBehandeling from '@/components/behandelingen/Wimpers.vue'
import nailsIcon from '@/assets/images/nails.png';
import facialIcon from '@/assets/images/facial.png';
import waxingIcon from '@/assets/images/waxing.png';
import { useRouter } from 'vue-router'

export default {
  name: 'AlleBehandelingen',
  components: {GezichtBehandeling

  },
  
  setup() {
    const drawer = ref(true)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
const router = useRouter()

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
const activeTab = ref(tabs[0])

const tabComponents = {
  'Tab 1': GezichtBehandeling,
  'Tab 2': NagelsBehandeling,
  'Tab 3': WimpersBehandeling,
}

const selectTimeAndDate = () => {
router.push('/behandelingen/kies-tijd')
}
return{
  isMobile,
  drawer,
  tabs, activeTab, tabComponents, nailsIcon, facialIcon, waxingIcon, selectTimeAndDate,
}
  }
}
</script>

<style lang="scss" scoped>
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
  background-color: #F2B8C6; /* Vuetify primary */
  color: white;
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