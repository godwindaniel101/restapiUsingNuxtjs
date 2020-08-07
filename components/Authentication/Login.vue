<template>
  <form class="form_container form_login" @submit.prevent="userLogin">
    <div class="form_group">
      <p class="error_text" v-if="errors.invalidcombo">
        *{{ errors.invalidcombo[0] }}
      </p>
      <label for class>Email Address</label>
      <input
        v-model="formLogin.email"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.email }"
      />
      <p class="error_text" v-if="errors.email">*{{ errors.email[0] }}</p>
      <!-- <has-error :form="form" field="phone_no"></has-error> -->
    </div>
    <div class="form_group">
      <label for class>Password</label>
      <input
        v-model="formLogin.password"
        type="text"
        class="form_contro_l"
        :class="{ 'is-invalid': errors.password }"
      />
      <p class="error_text" v-if="errors.password">*{{ errors.password[0] }}</p>
      <!-- <has-error :form="form" field="password"></has-error> -->
    </div>

    <div class="form_group form_group_zero">
      <button type="text" class="form_contro_l_submit">
        Login
      </button>
    </div>
  </form>
</template>
<script>
export default {
  middleware: "guest",
  data() {
    return {
      // Create a new form instance
      formLogin: {
        email: "",
        password: "",
        remember: false
      }
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local',{ data: this.formLogin });
        
        var user_id = this.$store.state.auth.user.user_role;
        if(user_id == 3){
            this.$router.push({ name: "dashboard" });
        }else{
          this.$router.push({ name: "dashboard" });
        }
      } catch (e) {}
    }
  },
  mounted() {}
};
</script>
