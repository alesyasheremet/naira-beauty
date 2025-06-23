<template>

  <v-row>
              <v-col cols="12" class="text-center">
        <v-img
  :src="iconRaw"
  width="96"
  height="96"
  style="transform: rotate(345deg);"
  class="mb-3 my-colored-icon"
/>
        <v-img
  :src="iconRaw17"
  width="96"
  height="96"
    style="transform: rotate(35deg);"
  class="mb-3 my-colored-icon"
/>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
         
            <p>Mijn naam is Naira en mijn beauty salon is gespecialiseerd in wimpers, nagels en wenkbrauwen. Ik heb ruim 10 jaar ervaring in de beauty branche. Met veel liefde en passie zorg ik ervoor dat elke klant tevreden de deur uit gaat. *ook heb ik de benodigde opleidingen behaald en cursussen afgerond.</p>
          </v-col>

          <div class="rounded-rectangle">
            
            <div style="font-size: 35px;">Nairabeauty</div>
            <br >
            <span style="font-size: 15px;">• • • • • • • • • • </span>
            <span style="font-size: 20px;">✴</span>
            <span style="font-size: 15px;"> • • • • • • • • • •</span>
            <br>
 
  </div>
        </v-row>


</template>

<script>
import WebsiteFooter from '@/components/Footer.vue';
//convertio.co from png to svg
import iconRaw from '@/assets/images/14.svg'
import iconRaw17 from '@/assets/images/17.svg'
export default {
  name: 'AboutMe',
  components: {WebsiteFooter},
  props: {
    msg: String
  },
  setup(){
return {
  iconRaw,
  iconRaw17,
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my-colored-icon {
  color: blue; /* works only if SVG uses currentColor */
  fill: red !important;
}
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

 .rounded-rectangle {
  font-family: inherit;
      width: 38.33vw;    /* 1/3 of the screen width */
      height: 66.66vh;   /* 2/3 of the screen height */
      background-color: #F4CDD4;
border-bottom-left-radius: 60% 12%;
border-bottom-right-radius: 60% 12%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      //font-family: sans-serif;
      padding: 10px;
      //box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      top: 0px;
      position: absolute;
      left: 63.33vw;
      margin-top: 30px;
      }
</style>
