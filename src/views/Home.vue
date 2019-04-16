<template>
  <div class="home">
    <img alt="UCrisko logo" src="../assets/ucrisko-logo.png">
    <UCLanding />
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
