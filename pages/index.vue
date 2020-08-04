<template>
  <div class="container_x">
    <landing-page />
  </div>
</template>

<script>
import LandingPage from '~/components/Authentication/LandingPage.vue'

export default {
  middleware:'guest',
  components: {
    LandingPage
  }
}
</script>
<style scoped>
    /* @import '~/assets/css/main.css'; */
    </style>