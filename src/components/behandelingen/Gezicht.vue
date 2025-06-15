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
          class="mb-4 px-4 py-3"
          outlined
          flat
          
        >
<v-expand-transition>
  <div>
        <v-card
      class="pa-4 mb-2 d-flex justify-space-between align-center"
      @click=""
      style="cursor: pointer;"
    >
      <div class="text-left">
        <h3 class="text-h6 mb-1">Treatment Name</h3>
        <p class="text-body-2">Short description</p>
      </div>

      <v-icon>
        fa-solid fa-chevron-up
      </v-icon>


    </v-card>
            <v-card
      class="pa-4 mb-2 d-flex justify-space-between align-center"
      @click=""
      style="cursor: pointer;"
    >
      <div class="text-left">
        <div>Treatment Name</div>
        <div>Short description</div>
      </div>

      <v-icon>
        fa-solid fa-chevron-up
      </v-icon>


    </v-card>
    </div>
    </v-expand-transition>
          <v-row align="start" >
            <!-- LEFT: INFO -->
            <v-col cols="12" md="12">
              <div class="text-subtitle-1 font-weight-medium">{{ treatment.title }}</div>
              <div class="text-body-2 text-grey-darken-1">
                {{ treatment.duration }} •
                {{ treatment.fromPrice ? `vanaf €${treatment.price}` : `€${treatment.price}` }}
              </div>

              <!-- Optional Description Toggle -->
              <v-expand-transition>
                <div v-if="treatment.showDescription" class="text-body-2 text-grey-darken-2 mt-2">
                  {{ treatment.description }}
                </div>
              </v-expand-transition>

              <v-btn
                variant="text"
                size="small"
                class="mt-1"
                @click="treatment.showDescription = !treatment.showDescription"
              >
                {{ treatment.showDescription ? 'Verberg beschrijving' : 'Toon beschrijving' }}
              </v-btn>
        
            </v-col>

            <!-- RIGHT: "Kies" -->
            <v-col cols="12" md="3" class="text-md-right text-left">
              <v-btn color="primary" @click="selectTreatment(treatment)">
                Kies
              </v-btn>
            </v-col>
          </v-row>
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
    const categories = ['Alles', 'Gellak', 'BIAB', 'Verwijderen']
    const treatments = ref([
  {
    title: 'Nagelversteviging - BIAB',
    duration: '1 u 15 min',
    description: 'Verstevig je natuurlijke nagels met BIAB voor een gezonde en langdurige look.',
    price: 65,
    fromPrice: true,
    showDescription: false,
    category: 'Gellak',
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

return {treatments, selectTreatment, categories, activeCategory, filteredTreatments}
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