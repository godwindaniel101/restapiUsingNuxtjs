<template>
  <div class="container-fluid" style="padding:0;margin:0;height:100vh;overflow:hidden">
      <Dashboard />
  </div>
</template>

<script>
import Dashboard from '~/components/Authentication/Dashboard.vue'

export default {
  middleware:'auth',
  components: {
    Dashboard,
  }
}
</script>
<style scoped>
    /* @import '~/assets/css/main.css'; */
    </style>