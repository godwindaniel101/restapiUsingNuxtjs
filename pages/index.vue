<template>
  <div class="container_x">
    <landing-page />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LandingPage from '~/components/Authentication/LandingPage.vue'

export default {
  middleware:'guest',
  components: {
    Logo,
    LandingPage
  }
}
</script>
<style scoped>
    /* @import '~/assets/css/main.css'; */
    </style>