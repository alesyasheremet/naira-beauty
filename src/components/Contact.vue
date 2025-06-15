<template>
  <v-container class="py-8">
    <v-row>
      <!-- Left Column: Contact Info -->
      <v-col cols="12" md="5">
        <h2 class="text-h5 mb-4">Contact Information</h2>
        <v-list density="comfortable">
          <v-list-item>
            <v-list-item-title><strong>Address</strong></v-list-item-title>
            <v-list-item-subtitle>123 Main Street, Cityville, Country</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><strong>Phone</strong></v-list-item-title>
            <v-list-item-subtitle>+1 (555) 123-4567</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><strong>Email</strong></v-list-item-title>
            <v-list-item-subtitle>info@example.com</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Right Column: Contact Form -->
      <v-col cols="12" md="7">
        <h2 class="text-h5 mb-4">Send Us a Message</h2>
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'ContactDetails',
  props: {
    msg: String
  }, setup(){
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
return {form, submitForm}
  }
}
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
