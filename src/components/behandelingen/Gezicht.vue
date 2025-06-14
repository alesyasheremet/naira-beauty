<template>
  <v-container>
    <!-- TABS ON THE LEFT -->
    <v-row>
      <v-col cols="12" md="3">
        <v-list nav>
          <v-list-item
            v-for="category in categories"
            :key="category"
            :active="activeCategory === category"
            @click="activeCategory = category"
            rounded
          >
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- TREATMENTS RIGHT -->
      <v-col cols="12" md="9">
        <v-card
          v-for="treatment in filteredTreatments"
          :key="treatment.title"
          class="mb-4 px-4 py-3"
          variant="outlined"
        >
          <v-row align="center" justify="space-between">
            <!-- LEFT: INFO -->
            <v-col cols="12" md="9">
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
  </v-container>

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

const selectedTreatment = () => {
console.log('test')
}

const filteredTreatments = computed(() =>
  activeCategory.value === 'Alles'
    ? treatments.value
    : treatments.value.filter(t => t.category === activeCategory.value)
)

return {treatments, selectedTreatment, categories, activeCategory, filteredTreatments}
  }
})
</script>

