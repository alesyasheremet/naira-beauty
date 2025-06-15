<template>
  <v-container fluid class="pa-6">
    <v-row>
      <!-- Left: Calendar & Time Slots -->
      <v-col cols="12" md="8">
        <h2 class="text-h5 mb-4">Choose Date & Time</h2>

        <!-- Date Picker -->
        <v-date-picker
          v-model="selectedDate"
          show-adjacent-months
          color="primary"
          elevation="1"
        />

        <!-- Time Slots -->
        <h3 class="text-subtitle-1 mt-6 mb-2">Available Time Slots</h3>
        <v-row dense>
          <v-col
            v-for="time in availableTimes"
            :key="time"
            cols="6"
            sm="4"
            md="3"
          >
            <v-card
              class="pa-3 text-center"
              :color="selectedTime === time ? 'primary' : 'grey-lighten-3'"
              :text="selectedTime === time ? 'white' : 'black'"
              elevation="1"
              @click=""
              style="cursor: pointer;"
            >
              {{ time }}
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right: Summary Card -->
      <v-col cols="12" md="4">
        <v-card class="pa-4" elevation="2">
          <h3 class="text-h6 mb-2">Your Booking</h3>
          <v-divider class="mb-4" />

          <v-list density="compact">
            <v-list-item>
              <v-list-item-title><strong>Date:</strong></v-list-item-title>
              <v-list-item-subtitle>{{ selectedDate || 'Not selected' }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><strong>Time:</strong></v-list-item-title>
              <v-list-item-subtitle>{{ selectedTime || 'Not selected' }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><strong>Treatment:</strong></v-list-item-title>
              <v-list-item-subtitle>Relaxing Massage</v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-btn
           
            class="mt-6"
            :disabled="!selectedDate"
            @click="goNext"
          >
            Afspraak bevestigen
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
import { routerKey, useRouter } from 'vue-router'

export default {
  name: 'KiesTijd',
  components: {GezichtBehandeling

  },
  
  setup() {
    const selectedDate = ref(null)
const selectedTime = ref(null)
const router = useRouter()

const availableTimes = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '13:00',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
]

const goNext = () => {
  console.log('Proceed with:', {
    date: selectedDate.value,
    time: selectedTime.value,
    treatment: 'Relaxing Massage',
  })
  router.push('/behandelingen/kies-tijd/afspraak-bevestigen')
  // Add navigation logic here (e.g., router.push('/confirm'))
}

return{
selectedTime, selectedDate, goNext, availableTimes,
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