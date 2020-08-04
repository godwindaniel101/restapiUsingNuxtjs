<template>
  <div class="container-fluid" style="padding:0;">
    <div class="row">

    <div class="col-lg-8 offset-lg-2 wrap_my_form" >
    <div class="employee_header">
      <div class="back_nav">
        <nuxt-link to="/dashboard/project">
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-arrow-left fa-w-14 fa-3x"
          >
            <path
              fill="#000"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
              class=""
            ></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="tag-wrapper">
        <p class="" @click="getEmployee">
         {{triggerEdit ? 'Edit Project' : 'Create Project'}}
        </p>
      </div>
    </div>
    <form @submit.prevent="triggerEdit ? updateProject() : createProject()">
      <div class="  col-lg-12 form_wrapper_unit" id="style-2">
        <div class="refresh_class">
          <svg
          @click="triggerEdit ? restoreForm():resetForm()"
           width="25"
           height="25"
           stroke="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-sync fa-w-16 fa-3x"
          >
            <path
              fill="grey"
              d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
              class=""
            ></path>
          </svg>
        </div>
        <div class="row">
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Project Name</label>
              <input
                type="text"
                class="form-case"
                v-model="form.project_name"
                @click="error.project_name = ''"
              />
              <span v-text="error.project_name"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Project Address</label>
              <input
                type="text"
                class="form-case"
                v-model="form.project_address"
                @click="error.project_address = ''"
              />
              <span v-text="error.project_address"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Project Supervisor</label>
              <select
                v-model="form.project_supervisor"
                class="form-case"
                @click="error.project_supervisor = ''"
                
              >
                <option value="">~Select~</option>
                <option  :value="data.id" class="" v-for="data in employees" :key="employees.id">{{data.first_name}}</option>
              </select>
              <span v-text="error.project_supervisor"></span>
            </div>
          </div>
       <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Ast Project Supervisor</label>
              <select
                v-model="form.ast_project_supervisor"
                class="form-case"
                @click="error.ast_project_supervisor = ''"
                
              >
                <option value="">~Select~</option>
                <option multiple :value="data.id" class="" v-for="data in employees" :key="employees.id">{{data.first_name}}</option>
              </select>
              <span v-text="error.project_supervisor"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Start Date</label>
              <input
                type="date"
                class="form-case"
                v-model="form.start_date"
                @change="error.start_date = ''"
              />
              <span v-text="error.start_date"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>End Date</label>
              <input
                type="date"
                class="form-case"
                v-model="form.end_date"
                @change="error.end_date = ''"
              />
              <span v-text="error.end_date"></span>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <label for="" class="">Project Description</label>
                <textarea name="" id="" class="project_textarea" v-model="form.project_description"></textarea>
            <span v-text="error.project_description"></span>
            </div>
        </div>
        <div class="row">
          <div class=" col-lg-6 zero_class">
            <!-- <label for="name"><span class="hash_red">*</span>helllo</label>  -->
            <div class="form_navigator "  v-show="triggerEdit">
              <input
                type="submit"
                class="form-case btn-primary"
                placeholder="Update"
              />
            </div>
            <div class="form_navigator "  v-show="!triggerEdit">
              <input
                type="submit"
                class="form-case btn-success"
                placeholder="Create"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  </div>
  </div>
</template>
<script>
export default {
    props:{
    formRecord:{
        type:Object,
    },
     triggerEdit:{
        type:Boolean,
        default:false,
    }
    },
  data() {
    return {
    employees:[],
      form: {
        id:"",
        project_name: "",
        project_supervisor: "",
        project_address: "",
        start_date: "",
        end_date: "",
        project_description:"",
        ast_project_supervisor:""
     
      },
      error: {
        id:"",
        project_name: "",
        project_supervisor: "",
        project_address: "",
        start_date: "",
        project_description:"",
        end_date: "",
        ast_project_supervisor:"",
     
      }
    };
  },
   watch: {
    formRecord: function (val) {
      this.form = val;
    },
   },
  methods: {
    
    resetForm(){
        this.clearfield();
        this.clearError();
    },
    restoreForm(){
        this.form = this.formRecord;
    },
    checkfield() {
      var result = true;
      for (const [key, value] of Object.entries(this.form)) {
        if (key == "alt_phone_no" || key == "id" ) {}
        else{
          if (value == null || value == "") {
            this.error[key] = key + " is required";
            result = false;
          }
        }
      }
      return result;
    },
    clearfield() {
      var result = true;
      for (const [key, value] of Object.entries(this.form)) {
        this.form[key] = "";

        result = false;
      }
      return result;
    },
    clearError() {
      var result = true;
      for (const [key, value] of Object.entries(this.form)) {
        this.error[key] = "";

        result = false;
      } 
      return result;
    },
    async createProject() {
      // if (true) {
      if (this.checkfield()) {
        try {
          await this.$axios.post("/auth/createProject", this.form).then(({data}) => {
            this.resetForm();
            this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: data.message
        });
          });
        } catch (e) {}
      }
    },
   async updateProject() {
        if(this.form.id == null){
            this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "warning",
            title: 'An Error Ocuured'
        });
        return
        }
        if (this.checkfield()) {
        try {
          await this.$axios.post("/auth/updateProject/" + this.form.id, this.form).then(({data}) => {
             this.$router.push({ path: "/dashboard/project" });
            this.$swal({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: data.message
        });
          });
        } catch (e) {}
      }
   },
    async getEmployee() {
      try {
        await this.$axios.get("auth/getEmployee").then(({ data }) => {
          this.employees = data;
          console.log(data)
        });
      } catch (e) {}
    }
    },
    mounted(){
        this.getEmployee()
  }
};
</script>
