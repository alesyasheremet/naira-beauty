// stores/counter.ts
import { defineStore } from 'pinia'
import { Treatment } from '../types'


export const useBehandelingStore = defineStore('behandeling', {
  state: () => ({
    treatment: [] as Treatment[]
  }),
  actions: {
    increment(t: Treatment) {
      if (this.treatment.filter((tr) => tr.title == t.title).length == 0){
this.treatment.push(t)
      }


      
    },
    remove(t: Treatment) {
      if (this.treatment.filter((tr) => tr.title == t.title).length > 0){
 this.treatment = this.treatment.filter(tr => tr.title != t.title)
      }

      
      
    }
  },
  persist: true,
})