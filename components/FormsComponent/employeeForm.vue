<template>
  <div class="container-fluid" style="padding:0;">
    <!-- <button @click="tryNote">alerta</button>
    <button @click="clearfield">alerta</button> -->
    <div class="row">

    <div class="col-lg-8 offset-lg-2 wrap_my_form" >
    <div class="employee_header">
      <div class="back_nav">
        <nuxt-link to="/dashboard/employee">
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
        <p class="">
         {{triggerEdit ? 'Edit Employee' : 'Create Employee'}}
        </p>
      </div>
    </div>
    <form @submit.prevent="triggerEdit ? updateEmployee() : createEmployee()">
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
              <label for="name"><span class="hash_red">*</span>First Name</label>
              <input
                type="text"
                class="form-case"
                v-model="form.first_name"
                @click="error.first_name = ''"
              />
              <span v-text="error.first_name"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Middle Name</label>
              <input
                type="text"
                class="form-case"
                v-model="form.middle_name"
                @click="error.middle_name = ''"
              />
              <span v-text="error.middle_name"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>last Name</label>
              <input
                type="text"
                class="form-case"
                v-model="form.last_name"
                @click="error.last_name = ''"
              />
              <span v-text="error.last_name"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Date Of Birth</label>
              <input
                type="date"
                class="form-case"
                v-model="form.date_of_birth"
                @change="error.date_of_birth = ''"
              />
              <span v-text="error.date_of_birth"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Martial status</label>
              <select
                v-model="form.martial_status"
                class="form-case"
                @change="error.martial_status = ''"
              >
                <option value="" class="">~Select~</option>
                <option value="single" class="">Single</option>
                <option value="married" class="">Married</option>
                <option value="seperated" class="">Divorced</option>
              </select>
              <span v-text="error.martial_status"></span>
            </div>
          </div>
          <div class="col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Sex</label>
              <div class="radio_wrap">
                <div class="radio_item">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="form.sex"
                    value="male"
                  />
                  <p class="sex_class">Male</p>
                </div>
                <div class="radio_item">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="form.sex"
                    value="female"
                  />
                  <p class="sex_class">Female</p>
                </div>
                <div class="radio_item">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="form.sex"
                    value="others"
                  />
                  <p class="sex_class">None</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Phone No</label>
              <input
                type="text"
                class="form-case"
                v-model="form.phone_no"
                @click="error.phone_no = ''"
              />
              <span v-text="error.phone_no"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Alt Phone No(Optional) </label>
              <input
                type="text"
                class="form-case"
                v-model="form.alt_phone_no"
              />
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Email</label>
              <input
                type="text"
                class="form-case"
                v-model="form.email"
                @click="error.email = ''"
                :class="{ 'is-invalid': errors.email }"
              />
              <span v-text="error.email"></span>
              <span class="error_text" v-if="errors.email"
                ><span class="hash_red">*</span>{{ errors.email[0] }}</span
              >
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Country </label>
              <input
                type="text"
                class="form-case"
                v-model="form.country"
                @click="error.country = ''"
              />
              <span v-text="error.country"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>State </label>
              <input
                type="text"
                class="form-case"
                v-model="form.state"
                @click="error.state = ''"
              />
              <span v-text="error.state"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>City </label>
              <input
                type="text"
                class="form-case"
                v-model="form.city"
                @click="error.city = ''"
              />
              <span v-text="error.city"></span>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Department</label>
              <input
                type="text"
                class="form-case"
                v-model="form.department"
                @click="error.first_name = ''"
              />
              <span v-text="error.first_name"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Position</label>
              <input
                type="text"
                class="form-case"
                v-model="form.position"
                @click="error.position = ''"
              />
              <span v-text="error.first_name"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Salary</label>
              <input
                type="text"
                class="form-case"
                v-model="form.salary"
                @click="error.salary = ''"
              />
              <span v-text="error.salary"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Experience(Years)</label>
              <input
                type="text"
                class="form-case"
                v-model="form.experience_years"
                @click="error.experience_years = ''"
              />
              <span v-text="error.experience_years"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Qualification</label>
              <input
                type="text"
                class="form-case"
                v-model="form.qualification"
                @click="error.qualification = ''"
              />
              <span v-text="error.qualification"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Employement Type</label>
              <select
                v-model="form.employee_type"
                class="form-case"
                @click="error.employee_type = ''"
              >
                <option value="">~Select~</option>
                <option value="0" class="">Full</option>
                <option value="1" class="">Contract</option>
                <option value="2" class="">Liquidity</option>
              </select>
              <span v-text="error.employee_type"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Start Date</label>
              <input
                type="date"
                class="form-case"
                v-model="form.start_date"
                @click="error.start_date = ''"
              />
              <span v-text="error.start_date"></span>
            </div>
          </div>
          <div class=" col-lg-6 zero_class">
            <div class="form_navigator">
              <label for="name"><span class="hash_red">*</span>Access Level</label>
              <select
                v-model="form.access_level"
                class="form-case"
                @click="error.access_level = ''"
              >
                <option value="">~Select~</option>
                <option value="0" class="">Employee</option>
                <option value="1" class="">HR</option>
                <option value="2" class="">Admin</option>
              </select>
              <span v-text="error.access_level"></span>
            </div>
          </div>
        </div>
        <hr>
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
      form: {
        id:"",
        first_name: "",
        last_name: "",
        middle_name: "",
        date_of_birth: "",
        martial_status: "",
        sex: "",
        phone_no: "",
        alt_phone_no: "",
        email: "",
        department: "",
        position: "",
        salary: "",
        access_level: "",
        experience_years: "",
        qualification: "",
        employee_type: "",
        start_date: "",
        country: "",
        state: "",
        city: ""
      },
      error: {
        id:"",
        first_name: "",
        last_name: "",
        middle_name: "",
        date_of_birth: "",
        martial_status: "",
        sex: "",
        phone_no: "",
        alt_phone_no: "",
        email: "",
        department: "",
        position: "",
        salary: "",
        access_level: "",
        experience_years: "",
        qualification: "",
        employee_type: "",
        start_date: "",
        country: "",
        state: "",
        city: ""
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
    async createEmployee() {
      if (true) {
      // if (this.checkfield()) {
        try {
          await this.$axios.post("/auth/createEmployee", this.form).then(({data}) => {
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
   async updateEmployee() {
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
          await this.$axios.post("/auth/updateEmployee/" + this.form.id, this.form).then(({data}) => {
             this.$router.push({ path: "/dashboard/employee" });
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
  }
};
</script>
