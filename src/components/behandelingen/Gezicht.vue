<template>
 
    <!-- TABS ON THE LEFT -->
    <v-row align="start" class="pa-4">
      <v-col cols="12" md="4">
        <v-list nav>
          <v-list-item
            v-for="category in categories"
            :key="category"
            :active="activeCategory === category"
            @click="activeCategory = category"
            >
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-col>

      <!-- TREATMENTS RIGHT -->
      <v-col cols="12" md="8">
       
        <v-card
          v-for="treatment in filteredTreatments"
          :key="treatment.title"
          class=""
          outlined
          flat
          style="text-align: left;"
          @click="expandCard"
          
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
                {{ treatment.fromPrice ? `vanaf €${treatment.price}` : `€${treatment.price}` }}
              
                   <v-btn
                variant="text"
                size="small"
                class="mt-1"
                @click="treatment.showDescription = !treatment.showDescription"
              >
                {{ treatment.showDescription ? 'Verberg beschrijving' : 'Toon beschrijving' }}
              </v-btn>
</div>
              </div>
                      <v-btn color="primary" v-if="treatment.treatments && treatment.treatments.length == 0" @click="selectTreatment(treatment)">
                Kies
              </v-btn>
<v-icon size="16" v-if="treatment.treatments && treatment.treatments.length > 0">
        fa-solid fa-chevron-up
      </v-icon>
         
        
          
      
            
              </v-card>
            
         
<v-expand-transition v-if="expanded">
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

     <v-btn color="primary"  @click="selectTreatment(tr)">
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
import { ref, defineComponent, computed } from 'vue'


export default defineComponent({
  name: 'GezichtBehandeling',
  components: {

  },
  setup() {
    const categories = ['Alles', 'Gezicht', 'Nagels', 'Ontharen', 'Verwijderen']
    const treatments = ref([
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
  subcategory: "Kunstnagels",
  title: "Nagelversteviging - BIAB - Opvullen",
  duration: "",
  price: 60,
  treatments: [{
    title: "Enkel opvullen Twee weken",
    duration: "1 u",
    price:55,
  }]
  
},
  {
    title: 'Nagelversteviging - BIAB - Verwijderen',
    duration: '30 min',
    description: 'Veilig verwijderen van je BIAB versteviging.',
    price: 15,
    fromPrice: false,
    showDescription: false,
    category: 'BIAB',
  },
  {
    title: 'Nagelversteviging - BIAB - Opvullen',
    duration: '1 u - 1 u 15 min',
    description: 'Opvullen van je bestaande BIAB set om ze weer als nieuw te maken.',
    price: 55,
    fromPrice: true,
    showDescription: false,
    category: 'Gellak',
  },
  {
    title: 'Nagelversteviging BIAB + Gellak new set',
    duration: '1 u 30 min',
    description: 'Combinatie van BIAB met gellak voor een mooie, sterke en gekleurde afwerking.',
    price: 80,
    fromPrice: false,
    showDescription: false,
    category: 'Gellak',
  },
]);

const activeCategory = ref('Alles')

const selectTreatment = (text: any) => {
console.log(text)
}

const filteredTreatments = computed(() =>
  activeCategory.value === 'Alles'
    ? treatments.value
    : treatments.value.filter(t => t.category === activeCategory.value)
)

const expanded = ref(false)
const expandCard = (title: string) => {
expanded.value = !expanded.value;
}

return {treatments, selectTreatment, categories, activeCategory, filteredTreatments, expandCard, expanded}
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
  border-bottom: 1px solid #eee;
  border-radius: 0 !important;
  width: 100%;
  box-shadow: none !important;
}

.card-row:last-child {
  border-bottom: none;
}
</style>