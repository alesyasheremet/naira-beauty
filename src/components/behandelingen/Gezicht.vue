<template>
 
    <!-- TABS ON THE LEFT -->
    <v-row align="start" class="pa-4" >
      <v-col cols="12" md="4" style="height: 100%">
        <v-list nav>
          <v-list-item
            v-for="subcategory in Array.from(new Set(filteredCategoryTreatments.map(x => x.subcategory)))"
            :key="subcategory"
            :active="activeSubCategory === subcategory"
            @click="activeSubCategory = subcategory"
            style="text-align: left;"
            
            >
            <v-list-item-title style="font-size: 14px !important;">{{ subcategory }}({{getSubCategoryCount(subcategory) }})</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-col>

      <!-- TREATMENTS RIGHT -->
      <v-col cols="12" md="8" style="height: 100%">
       
        <v-card
          v-for="(treatment, index) in filteredTreatments"
          :key="treatment.title"
          class=""
          outlined
          flat
          style="text-align: left;"
         
          
        >
          
            <!-- LEFT: INFO -->
           
              <v-card
      class="pa-4 mb-2 d-flex justify-space-between align-center"
      flat
      outlined>
      <div class="text-left" style="font-size: 14px; font-weight: 400;">
              <div >{{ treatment.title }}</div>
              <div >
                {{ treatment.duration }} 
                {{ treatment.price ? `vanaf €${treatment.price}` : `€${treatment.price}` }}
              
                   <v-btn
                variant="text"
                size="small"
                class="mt-1"
               
              >
                 Toon beschrijving
              </v-btn>
</div>
              </div>
                      <v-btn color="primary" v-if="treatment.treatments && treatment.treatments.length == 0" @click="selectTreatment(treatment, undefined)">
                {{isTreatmentSelected(treatment.title) ? 'Gekozen' : 'Kies'}}
              </v-btn>
<v-icon size="16" v-if="treatment.treatments && treatment.treatments.length > 0" @click="expandCard(index)">
        {{isCardExpanded(index) ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}}
      </v-icon>
         
        
          
      
            
              </v-card>
            
         
<v-expand-transition v-if="isCardExpanded(index)">
  <div>
        <v-card  v-for="tr in treatment.treatments"
          :key="tr.title"
          style="text-align: left;"
      class="pa-4 mb-2 d-flex justify-space-between align-center"

      outlined
          flat
    >
      <div class="text-left" style="font-size: 14px; font-weight: 400;">
        <div>{{ tr.title }}</div>
        <div>{{ tr.duration}}</div>

      </div>

     <v-btn color="primary"  @click="selectTreatment(treatment, tr)">
                Kies
              </v-btn>

    </v-card>
    </div>
    </v-expand-transition>
       
        </v-card>
       
      </v-col>
    </v-row>
 

</template>

<script lang="ts">
import { ref, defineComponent, computed, ComputedRef, watch } from 'vue'
import {SubTreatment, type Treatment} from '../types'

import { useBehandelingStore } from '@/components/behandelingen/behandelingen-store'



export default defineComponent({
  name: 'GezichtBehandeling',
  components: {

  },
  props: {
category: String,
  },
  setup(props) {
    const behandelingenStore = useBehandelingStore()
    const categories = ['Alle', 'Gezicht', 'Nagels', 'Ontharen', 'Wimpers', 'Verwijderen']
    const treatments = ref<Treatment[]>([
  {
  category: "Nagels",
  subcategory: "Manicure & Pedicure",
  title: "Manicure Russian",
  duration: "25 min",
  price: 25,
  treatments: []
  
},
  {
  category: "Nagels",
  subcategory: "Manicure & Pedicure",
  title: "paraffine wax +gouden masker 24k+hand scrub +olie massage",
  duration: "45 min",
  price: 60,
  treatments: []
  
},
  {
  category: "Nagels",
  subcategory: "Gellak - Manicure & Pedicure",
  title: "Gellak,handen zonder manicure",
  duration: "45 min",
  price: 30,
  treatments: []
  
},
 {
  category: "Nagels",
  subcategory: "Gellak - Manicure & Pedicure",
  title: "Gellak - Verwijderen",
  duration: "5 min",
  price: 15,
  treatments: []
  
},
 {
  category: "Nagels",
  subcategory: "Gellak - Manicure & Pedicure",
  title: "Gellak - Met een laag Biab",
  duration: "45 min",
  price: 40,
  treatments: []
  
},
 {
  category: "Nagels",
  subcategory: "Gellak - Manicure & Pedicure",
  title: "Gellak handen met Manicure",
  duration: "50 min",
  price: 45,
  treatments: []
  
},
  {
  category: "Nagels",
  subcategory: "Kunstnagels",
  title: "Nagelversteviging - BIAB - Opvullen",
  duration: "",
  price: 60,
  treatments: [{
    title: "Enkel opvullen Twee weken",
    duration: "1 u",
    price:55,
  },
  {
    title: "Enkel opvullen drie weken",
    duration: "1 u",
    price:55,
  },
    {
    title: "Met manicure",
    duration: "1 u 10 min",
    price:55,
  },
      {
    title: "Biab Opvullen met gellak",
    duration: "1 u 10 min",
    price:55,
  },
   {
    title: "Biab Opvullen met manicure gellak",
    duration: "1 u 15 min",
    price:65,
  },
]
  
},
  {
  category: "Nagels",
  subcategory: "Kunstnagels",
  title: "Nagelversteviging BIAB+Gellak new set",
  duration: "1 u 30 min",
  price: 80,
  treatments: []},
  
    {
  category: "Gezicht",
  subcategory: "Gezichtsbehandelingen",
  title: "LED Licht Therapie",
  duration: "25 min",
  price: 69,
  treatments: []},
  {
  category: "Ontharen",
  subcategory: "Threaden",
  title: "Threaden - Gezicht",
  duration: "1 u 30 min",
  price: 80,
  treatments: []},
]);

const activeCategory = ref(props.category)
console.log(activeCategory.value)

const activeSubCategory = ref('Kunstnagels')

const selectTreatment = (treatment: Treatment, subTreatment?: SubTreatment) => {
  const selectedTreatment = { category: treatment.category,
    subcategory: treatment.subcategory,
    duration: treatment.duration,
    price: treatment.price,
    title: treatment.title,
    treatments: [{

    }]

  } as Treatment

  if (subTreatment != undefined){
    selectedTreatment.treatments.push(subTreatment)
  }

behandelingenStore.increment(selectedTreatment)
}

watch(() => props.category, (newVal) => {
  activeCategory.value = newVal;
  activeSubCategory.value = treatments.value.filter(tr => tr.category.toLowerCase() == newVal?.toLowerCase())[0]?.subcategory;
})

const filteredTreatments : ComputedRef<Treatment[]> = computed(() => {

  return activeSubCategory.value === 'Alle'.toLowerCase()
    ? treatments.value as Treatment[]
    : treatments.value.filter(t => t.subcategory === activeSubCategory.value) as Treatment[]
}
)

const filteredCategoryTreatments : ComputedRef<Treatment[]> = computed(() => {
  
  return activeCategory.value === 'Alle'.toLowerCase()
    ? treatments.value as Treatment[]
    : treatments.value.filter(t => t.category.toLowerCase() === activeCategory.value?.toLowerCase()) as Treatment[]
}
)

const expanded = ref(false)
const expandedArr = ref<number[]>([]);

const expandCard = (index: number) => {
  if (!expandedArr.value.includes(index)) {
    expandedArr.value.push(index);
  }
  else{
    expandedArr.value = expandedArr.value.filter(item => item !== index);
  }
}

const isCardExpanded = (index: number) => {
  return expandedArr.value.includes(index);
}


const isTreatmentSelected = (title: string) => {
  return behandelingenStore.$state.treatment.filter(t => t.title == title)?.length > 0
}

const getSubCategoryCount = (subcategory: string) => {
return treatments.value.filter(t => t.subcategory.toLowerCase() === subcategory.toLowerCase())?.length;
}

return {treatments, selectTreatment, categories, activeCategory, activeSubCategory, filteredTreatments
  , expandCard, expanded, expandedArr, isCardExpanded, filteredCategoryTreatments, getSubCategoryCount, isTreatmentSelected}
  }
})
</script>

<style>
.card-table {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.card-row {
  margin: 0 !important;
  width: 100%;
  box-shadow: none !important;
}

.card-row:last-child {
  border-bottom: none;
}
</style>