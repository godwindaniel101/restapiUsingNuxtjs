<template>
  <div class="container_wrap">
    <div class="content_wrap">
      <div class="content_left"></div>
      <div class="content_right" id="scroll-div">
        <div class="content_right_header">
          <div class="content_right_quote">
            <!-- {{errors}} -->
            <!-- {{authenticated}} -->
            <h4>. . . Quality Project Management</h4>
          </div>
        </div>
        <div class="content_form">
          <div class="form_wrapper">
            <div :class="!showform ? 'showform' : ''">
              <register />
            </div>
            <div>
              <login :class="showform ? 'showform' : ''" />
            </div>
          </div>
          <div class="form_group_last">
            
            <p @click="toggleForm">
              <span v-show="showform">Already a Member ?<a>Login</a></span>
              <span v-show="!showform">Dont have an Account ?<a>Register</a></span> 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Register from "./Register";
import Login from "./Login";
export default {
  middleware: "guest",
  components: {
    Register,
    Login
  },
  data() {
    return {
      showform: false
    };
  },
  methods: {
    toggleForm() {
      this.showform = !this.showform;
    }
  },
  mounted() {
  }
};
</script>
