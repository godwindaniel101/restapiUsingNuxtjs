<template>
  <form class="form_container" @submit.prevent="userRegister">
    <div class="form_group">
      <label for="" class="">Company Name</label>
      <input
        v-model="form.company_name"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.company_name }"
      />
      <p class="error_text" v-if="errors.company_name">
        *{{ errors.company_name[0] }}
      </p>
    </div>
    <div class="form_group">
      <label for="" class="">Email Address</label>
      <input
        v-model="form.email"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.email }"
      />
      <p class="error_text" v-if="errors.email">*{{ errors.email[0] }}</p>
    </div>
    <div class="form_group">
      <label for="" class="">Phone Number</label>
      <input
        v-model="form.phone_no"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.phone_no }"
      />
      <p class="error_text" v-if="errors.phone_no">*{{ errors.phone_no[0] }}</p>
    </div>
    <div class="form_group">
      <label for="" class="">Password</label>
      <input
        v-model="form.password"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.password }"
      />
      <p class="error_text" v-if="errors.password">*{{ errors.password[0] }}</p>
    </div>
    <div class="form_group">
      <label for="" class="">Confirm Password</label>
      <input
        v-model="form.confirm_password"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.confirm_password }"
      />
      <p class="error_text" v-if="errors.confirm_password">
        *{{ errors.confirm_password[0] }}
      </p>
    </div>
    <div class="form_group form_group_zero">
      <button type="text" class="form_contro_l_submit">Register</button>
    </div>
  </form>
</template>
<script>
export default {
  middleware: "guest",
  data() {
    return {
      // Create a new form instance
      form: {
        company_name: "",
        email: "",
        phone_no: "",
        password: "",
        confirm_password: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    async userRegister() {
      try {
        await this.$axios.post("/auth/register", this.form);
        await this.$auth.loginWith('local',{ data: this.form });
        var user_id = this.$store.state.auth.user.user_role;
        if(user_id == 3){
            this.$router.push({ name: "dashboard" });
        }else{
          this.$router.push({ name: "panel" });
        }
      } catch (e) {}
    },
    godashboard() {
      this.$router.push({ name: "dashboard" });
    }
  },
  mounted() {}
};
</script>
