<template>
  <div class="home">
    <img height="500" width="500" alt="University of Crisko logo" src="../assets/uclogo.png">
    <UCLanding msg="The University of CRISKO."/>
  </div>
</template>

<script>
// @ is an alias to /src
import UCLanding from '@/components/UCLanding.vue'

export default {
  name: 'home',
  components: {
    UCLanding
  }
}
</script>
