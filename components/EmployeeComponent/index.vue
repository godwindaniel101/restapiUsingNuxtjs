<template>
  <div class="table_container">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
  export default {
      middleware:'auth',
    data() {
      return {
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        form:{
          name :'',
          position : '',
          age:'',
          role:'',
          birth_date:'',
          experience_years:'',
          qualification:'',
          department:'',
          status:'',
          salary:'',
          bonus:'',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        }
      }
    },
        methods :{
            toggleClass(){
                this.mobilePoint = !this.mobilePoint;
            },
            async createEmployee(){
             await this.$axios.post("/auth/employee" , this.form);
            },
            async getEmployee(){
             await this.$axios.get("/auth/employee");
            },
            deleteUser($id){
                 this.$axios.delete('http://localhost:8000/api/employee/' + $id).then((datas)=>{
                     alert(data.data.data.message);
                     this.getEmployee()
                 }).catch(()=>{

                 })
            },
        },
        mounted(){
            this.getEmployee()
        },
  }
</script>