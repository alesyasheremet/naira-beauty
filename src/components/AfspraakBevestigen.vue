<template>
  <v-container fluid class="pa-6">
    <v-row>
       <v-col cols="12" md="8">
       <v-form @submit.prevent="submitForm">
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field label="Name" v-model="form.name" required />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Surname" v-model="form.surname" required />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Email" v-model="form.email" type="email" required />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Phone" v-model="form.phone" type="tel" />
            </v-col>
            <v-col cols="12">
              <v-textarea label="Message" v-model="form.message" rows="4" required />
            </v-col>
            <v-col cols="12">
              <v-btn color="primary" type="submit">Submit</v-btn>
            </v-col>
          </v-row>
        </v-form>
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
            block
            color="primary"
            class="mt-6"
            :disabled="!selectedTime || !selectedDate"
            @click="goNext"
          >
            Continue
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

export default {
  name: 'AfspraakBevestigen',
  components: {GezichtBehandeling

  },
  
  setup() {
    const selectedDate = ref(null)
const selectedTime = ref(null)
    const form = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Add logic to send the message
}
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
  // Add navigation logic here (e.g., router.push('/confirm'))
}

return{
selectedTime, selectedDate, goNext, availableTimes, form, submitForm,
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