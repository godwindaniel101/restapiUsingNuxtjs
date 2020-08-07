<template>
  <div class="container-fx">
  <div class="_sub_project">
      <nuxt-link :to="!triggerEdit ?'/dashboard/project':'/dashboard/project/'+form.id" class="back_icon" tag="div">
        <div class="_back_nav">
          <div style="auto 20px">
            <svg
              width="20"
              height="20"
              stroke-width="1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-arrow-left fa-w-14 fa-3x"
            >
              <path
                fill="#000"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
              />
            </svg>
          </div>
        </div>
      </nuxt-link>
      <div class="_back_nav_text">
        <span>{{triggerEdit ? 'Edit Project' : 'Create Project'}}</span>
      </div>
    </div>

    <form @submit.prevent="triggerEdit ? updateProject() : createProject()" class="_form_wrap">
 
        <div class="_form_content">
          <div class="_form_row">
            <div class="_form_navigator">
              <label for="name"><span class="hash_red">*</span>Project Name</label>
              <input
                type="text"
                class="_form_case"
                v-model="form.project_name"
                @click="error.project_name = ''"
              />
              <span class="_form_error"  v-text="error.project_name"></span>
            </div>
            <div class="_form_navigator">
              <label for="name"><span class="hash_red">*</span>Project Address</label>
              <input
                type="text"
                class="_form_case"
                v-model="form.project_address"
                @click="error.project_address = ''"
              />
              <span class="_form_error"  v-text="error.project_address"></span>
            </div>
            <div class="_form_navigator">
              <label for="name"><span class="hash_red">*</span>Project Supervisor</label>
              <select
                v-model="form.project_supervisor"
                class="_form_case"
                @click="error.project_supervisor = ''"
                
              >
                <option value="">~Select~</option>
                <option  :value="data.id" class="" v-for="data in employees" :key="employees.id">{{data.first_name}}</option>
              </select>
              <span class="_form_error"  v-text="error.project_supervisor"></span>
            </div>
            <div class="_form_navigator">
              <label for="name"><span class="hash_red">*</span>Ast Project Supervisor</label>
              <select
                v-model="form.ast_project_supervisor"
                class="_form_case"
                @click="error.ast_project_supervisor = ''"
                
              >
                <option value="">~Select~</option>
                <option multiple :value="data.id" class="" v-for="data in employees" :key="employees.id">{{data.first_name}}</option>
              </select>
              <span class="_form_error"  v-text="error.project_supervisor"></span>
            </div>
            <div class="_form_navigator">
              <label for="name"><span class="hash_red">*</span>Start Date</label>
              <input
                type="date"
                class="_form_case"
                v-model="form.start_date"
                @change="error.start_date = ''"
              />
              <span  class="_form_error" v-text="error.start_date"></span>
            </div>
            <div class="_form_navigator">
              <label for="name"><span class="hash_red">*</span>End Date</label>
              <input
                type="date"
                class="_form_case"
                v-model="form.end_date"
                @change="error.end_date = ''"
              />
              <span class="_form_error"  v-text="error.end_date"></span>
            </div>
          
        <div class="_form_navigator">
                <label for="" class="">Project Description</label>
                <textarea name="" id="" class="_form_case" v-model="form.project_description"></textarea>
            <span  class="_form_error" v-text="error.project_description"></span>
        </div>
       
        <div class="_btn_row">
            <!-- <label for="name"><span class="hash_red">*</span>helllo</label>  -->
            <div class="_form_controller "  v-show="triggerEdit">
              <input
                type="submit"
                class="_form_btn b_green"
                placeholder="Update"
              />
            </div>
            <div class="_form_controller "  v-show="!triggerEdit">
              <input
                type="submit"
                class="_form_btn b_green"
                placeholder="Create"
              />
          </div>
           <div class="_form_controller "  v-show="!triggerEdit" >
              <span
              @click="resetForm()"
                class="_form_btn b_red"
                placeholder="Create"
              >Reset</span>
          </div>
           <div class="_form_controller "  v-show="triggerEdit">
              <span
                @click="restoreForm()"
                class="_form_btn b_red"
                placeholder="Create"
              >Restore</span>
          </div>
        </div>
      </div>
       </div>
    </form>
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
      // this.$nuxt.$emit("changPreloader", true);
      try {
        await this.$axios.get("auth/getEmployee").then(({ data }) => {
          this.employees = data;
          // this.$nuxt.$emit("changPreloader", false);
        });
      } catch (e) {}
    }
    },
    mounted(){
        this.getEmployee()
  }
};
</script>
