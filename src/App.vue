

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    body {
      background-image: url('assets/Image003.jpg'); /* Replace with your image path */
      background-size: cover;      /* Ensures the image covers the entire page */
      background-repeat: no-repeat; /* Prevents tiling */
      background-position: center;  /* Centers the image */
      background-attachment: fixed; /* Optional: Makes the image stay fixed during scroll */
    }
  </style>
