<template>
<div class="container-fluid">
  <div class="employee_header">
    <nuxt-link to="/dashboard/employee/create" tag="button" class="btn btn-success">
      Create Employee
    </nuxt-link>
  </div>
  <index />
</div>
 
</template>
<script>
import Index from '~/components/EmployeeComponent/index.vue'
export default {
  components:{
    Index
  }
}
</script>