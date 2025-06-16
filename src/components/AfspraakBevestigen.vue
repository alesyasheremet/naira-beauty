<template>
  <v-container>
    <v-row style="background: white; font-size: 14px" align="start">
       <v-col cols="12" md="8">
       <v-form @submit.prevent="submitForm" ref="formAfspraak">
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field label="Naam" v-model="form.name" required :rules="[requiredRule]"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Achternaam" v-model="form.surname" required :rules="[requiredRule]"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Email" v-model="form.email" type="email" required :rules="[requiredRule]"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Phone" v-model="form.phone" type="tel" :rules="[requiredRule]"/>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Bericht" v-model="form.message" rows="4" />
            </v-col>
            <v-col cols="12">
              <v-btn color="primary" type="submit">Afspraak maken</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>

      <!-- Right: Summary Card -->
      <v-col cols="12" md="4">
        <v-card class="pa-4" elevation="2">
          <h3 class="text-h6 mb-2">Your Booking</h3>
          <v-divider class="mb-4" />
          <div>Date: {{ selectedDate || 'Not selected' }}</div>
          <div>Time: {{ selectedTime || 'Not selected' }}</div>
          <div v-for="behandeling in behandelingen">
              {{behandeling.title}}
            
          </div>

        </v-card>
      </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import GezichtBehandeling from '@/components/behandelingen/Gezicht.vue'
import { useBehandelingStore } from '@/components/behandelingen/behandelingen-store'
import { useRouter } from 'vue-router'


import axios from 'axios'

export default {
  name: 'AfspraakBevestigen',
  components: {GezichtBehandeling

  },
  
  setup() {
    const selectedDate = ref(null)
const selectedTime = ref(null)
    const behandelingenStore = useBehandelingStore()
    const behandelingen = ref(behandelingenStore.$state.treatment)
    const router = useRouter()
    const formAfspraak = ref();
    const form = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
})

const requiredRule = (value: string) => {
  return value != '' ? true : false;
}

const submitForm = async() => {
  const validation = await formAfspraak.value.validate();
  if (!validation.valid) {
       return;
      }

 
  behandelingenStore.$reset()

  //const resp = await axios.get('/.netlify/functions/api?name=John');
  try {
    const res = await axios.post('/.netlify/functions/api', {name: form.value.name, surname: form.value.surname
      , email: form.value.email, phone: form.value.phone, message: form.value.message, method: 'afspraakmaken' })
    

    
    alert(res.status)
  } catch (err) {
    alert('Error sending email')
    console.error(err)
  }

  //await sendEmail()
  //console.log(resp)
  router.push('/')

  // Add logic to send the message
}
const availableTimes = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '13:00',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
]

async function sendEmail() {
  try {
    const res = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'test',
        email: 'alesya.sheremet@gmail.com',
        message: 'this is a test'
      })
    })

    const result = await res.json()
    alert(result.message)
  } catch (err) {
    alert('Error sending email')
    console.error(err)
  }
}

const goNext = () => {
  console.log('Proceed with:', {
    date: selectedDate.value,
    time: selectedTime.value,
    treatment: 'Relaxing Massage',
  })
  // Add navigation logic here (e.g., router.push('/confirm'))
}

return{
selectedTime, selectedDate, goNext, availableTimes, form, submitForm, behandelingen, requiredRule, formAfspraak,
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
  //font-size: 14px;
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