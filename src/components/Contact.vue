<template>
  <v-container class="py-8">
    <v-row style="background: white">
      <!-- Left Column: Contact Info -->
      <v-col cols="12" md="5">
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
        <v-form @submit.prevent="submitForm" ref="formContact" >
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
              <v-textarea label="Bericht" v-model="form.message" rows="4" required :rules="[requiredRule]"/>
            </v-col>
            <v-col cols="12">
              <v-btn color="primary" type="submit">Bericht sturen</v-btn>
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


const formContact = ref()

const requiredRule = (value: string) => {
  return value != '' ? true : false;
}

const submitForm = async() => {
    const validation = await formContact.value.validate();
  if (!validation.valid) {
       return;
      }
  console.log('Form submitted:', form.value)
  // Add logic to send the message
}
return {form, submitForm, formContact, requiredRule,}
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
