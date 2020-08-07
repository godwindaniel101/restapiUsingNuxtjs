<template>
  <div class="container-fz">
      <Dashboard />
  </div>
</template>

<script>
import Dashboard from '~/components/Authentication/Admin/Dashboard.vue'

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