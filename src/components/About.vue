<template>

  <v-row>
          <v-col cols="12" class="text-center">
         
            <p>Mijn naam is Naira en mijn beauty salon is gespecialiseerd in wimpers, nagels en wenkbrauwen. Ik heb ruim 10 jaar ervaring in de beauty branche. Met veel liefde en passie zorg ik ervoor dat elke klant tevreden de deur uit gaat. *ook heb ik de benodigde opleidingen behaald en cursussen afgerond.</p>
          </v-col>
        </v-row>


</template>

<script>
import WebsiteFooter from '@/components/Footer.vue';

export default {
  name: 'AboutMe',
  components: {WebsiteFooter},
  props: {
    msg: String
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
