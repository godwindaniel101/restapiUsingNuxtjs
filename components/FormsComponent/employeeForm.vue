<template>
  <div class="container-fx">
    <div class="_sub_project">
      <nuxt-link to="/dashboard/employee" class="back_icon" tag="div">
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
        <span class>{{ triggerEdit ? "Edit Employee" : "Create Employee" }}</span>
      </div>
    </div>

    <form @submit.prevent="triggerEdit ? updateEmployee() : createEmployee()" class="_form_wrap">
      <div class="_form_image"></div>
      <div class="_form_content">
         <div class="_form_row">
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>First Name
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.first_name"
              @click="error.first_name = ''"
            />
            <span class="_form_error" v-text="error.first_name"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Middle Name
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.middle_name"
              @click="error.middle_name = ''"
            />
            <span class="_form_error" v-text="error.middle_name"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>last Name
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.last_name"
              @click="error.last_name = ''"
            />
            <span class="_form_error" v-text="error.last_name"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Date Of Birth
            </label>
            <input
              type="date"
              class="_form_case"
              v-model="form.date_of_birth"
              @change="error.date_of_birth = ''"
            />
            <span class="_form_error" v-text="error.date_of_birth"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Martial status
            </label>
            <select
              v-model="form.martial_status"
              class="_form_case"
              @change="error.martial_status = ''"
            >
              <option value class>~Select~</option>
              <option value="single" class>Single</option>
              <option value="married" class>Married</option>
              <option value="seperated" class>Divorced</option>
            </select>
            <span class="_form_error" v-text="error.martial_status"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Sex
            </label>
            <div class="radio_wrap">
              <div class="radio_item">
                <input type="radio" class="form-radio" v-model="form.sex" value="male" />
                <p class="sex_class">Male</p>
              </div>
              <div class="radio_item">
                <input type="radio" class="form-radio" v-model="form.sex" value="female" />
                <p class="sex_class">Female</p>
              </div>
              <div class="radio_item">
                <input type="radio" class="form-radio" v-model="form.sex" value="others" />
                <p class="sex_class">None</p>
              </div>
            </div>
            <span class="_form_error" v-text="error.sex"></span>
          </div>
        </div>

        <div class="_form_row">
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Phone No
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.phone_no"
              @click="error.phone_no = ''"
            />
            <span class="_form_error"  v-text="error.phone_no"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              Alt Phone No(Optional)
            </label>
            <input type="text" class="_form_case" v-model="form.alt_phone_no" />
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Email
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.email"
              @click="error.email = ''"
              :class="{ 'is-invalid': errors.email }"
            />
            <span  class="_form_error" v-text="error.email"></span>
            <span class="error_text" v-if="errors.email">
              <span class="hash_red">*</span>
              {{ errors.email[0] }}
            </span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Country
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.country"
              @click="error.country = ''"
            />
            <span  class="_form_error" v-text="error.country"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>State
            </label>
            <input type="text" class="_form_case" v-model="form.state" @click="error.state = ''" />
            <span  class="_form_error" v-text="error.state"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>City
            </label>
            <input type="text" class="_form_case" v-model="form.city" @click="error.city = ''" />
            <span  class="_form_error" v-text="error.city"></span>
          </div>
        </div>

        <div class="_form_row">
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Department
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.department"
              @click="error.first_name = ''"
            />
            <span class="_form_error" v-text="error.first_name"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Position
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.position"
              @click="error.position = ''"
            />
            <span  class="_form_error" v-text="error.first_name"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Salary
            </label>
            <input type="text" class="_form_case" v-model="form.salary" @click="error.salary = ''" />
            <span class="_form_error" v-text="error.salary"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Experience(Years)
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.experience_years"
              @click="error.experience_years = ''"
            />
            <span  class="_form_error" v-text="error.experience_years"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Qualification
            </label>
            <input
              type="text"
              class="_form_case"
              v-model="form.qualification"
              @click="error.qualification = ''"
            />
            <span class="_form_error"  v-text="error.qualification"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Employement Type
            </label>
            <select
              v-model="form.employee_type"
              class="_form_case"
              @click="error.employee_type = ''"
            >
              <option value>~Select~</option>
              <option value="0" class>Full</option>
              <option value="1" class>Contract</option>
              <option value="2" class>Liquidity</option>
            </select>
            <span  class="_form_error" v-text="error.employee_type"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Start Date
            </label>
            <input
              type="date"
              class="_form_case"
              v-model="form.start_date"
              @click="error.start_date = ''"
            />
            <span class="_form_error"  v-text="error.start_date"></span>
          </div>
          <div class="_form_navigator">
            <label for="name">
              <span class="hash_red">*</span>Access Level
            </label>
            <select v-model="form.access_level" class="_form_case" @click="error.access_level = ''">
              <option value>~Select~</option>
              <option value="0" class>Employee</option>
              <option value="1" class>HR</option>
              <option value="2" class>Admin</option>
            </select>
            <span  class="_form_error" v-text="error.access_level"></span>
          </div>

          <div class="_btn_row">
            <div class="_form_controller" v-show="triggerEdit">
              <button class="_form_btn b_green" placeholder="Update">Update</button>
            </div>
            <div class="_form_controller" v-show="!triggerEdit">
              <button class="_form_btn b_green" placeholder="Update">Create</button>
            </div>
            <div class="_form_controller" v-show="triggerEdit">
              <span class="_form_btn b_red" placeholder="Update" @click="restoreForm()">Restore</span>
            </div>
            <div class="_form_controller" v-show="!triggerEdit">
              <span class="_form_btn b_red" placeholder="Update" @click="resetForm()">Reset</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    formRecord: {
      type: Object,
    },
    triggerEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        id: "",
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
        city: "",
      },
      error: {
        id: "",
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
        city: "",
      },
    };
  },
  watch: {
    formRecord: function (val) {
      this.form = val;
      this.$nuxt.$emit("changPreloader", false);
    },
  },
  methods: {
    resetForm() {
      this.clearfield();
      this.clearError();
    },
    restoreForm() {
      this.form = this.formRecord;
    },
    checkfield() {
      var result = true;
      for (const [key, value] of Object.entries(this.form)) {
        if (key == "alt_phone_no" || key == "id") {
        } else {
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
      // if (true) {
        if (this.checkfield()) {
        try {
          await this.$axios
            .post("/auth/createEmployee", this.form)
            .then(({ data }) => {
              this.resetForm();
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: data.message,
              });
            });
        } catch (e) {}
      }
    },
    async updateEmployee() {
      if (this.form.id == null) {
        this.$swal({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "warning",
          title: "An Error Ocuured",
        });
        return;
      }
      if (this.checkfield()) {
        try {
          await this.$axios
            .post("/auth/updateEmployee/" + this.form.id, this.form)
            .then(({ data }) => {
              this.$router.push({ path: "/dashboard/employee" });
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: data.message,
              });
            });
        } catch (e) {}
      }
    },
      removePreloader(){
        if(!this.triggerEdit){
            this.$nuxt.$emit("changPreloader", false);
        }
        
      }
  },
    mounted(){
      this.removePreloader()
    },
}
</script>
