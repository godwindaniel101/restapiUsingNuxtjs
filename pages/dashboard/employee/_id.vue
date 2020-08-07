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
        <span>Employee Profile</span>
      </div>
    </div>
          <div class="_profile_wrap" v-if="record != null" >
            <div class="_profile_left">
              <div class="_profile_side">
                <div class="_profile_side_head">
                  <div class="_profile_pic_wrap">
                    <img src="~assets/images/default.png" alt="" class="">
                  </div>
                  <div class="_profile_name">
                    <span>
                      {{ record.first_name }} {{ record.middle_name }}
                      {{ record.last_name }}
                    </span>
                    <p></p>
                  </div>
                </div>
                <div class="_profile_side_body">
                  <table class="_profie_side_table">
                    <tr>
                      <td>
                        Sex
                      </td>
                      <td>
                        {{ record.sex }}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Date Of Birth
                      </td>
                      <td>
                        {{ record.date_of_birth }}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Mairtal Status
                      </td>
                      <td>
                        {{ record.martial_status }}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Next Of Kin
                      </td>
                      <td>
                        Nill
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Start Date
                      </td>
                      <td>
                        {{ record.start_date }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="_profile_right">
              <div class="_profile_center">
                <table class="_profile_center_1">
                  <tr>
                    <td>
                      City
                    </td>
                    <td>
                      {{ record.city }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      State
                    </td>
                    <td>
                      {{ record.state }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Country
                    </td>
                    <td>
                      {{ record.country }}
                    </td>
                  </tr>
                   <tr>
                    <td>
                      Phone No
                    </td>
                    <td>
                      {{ record.phone_no }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Alt Phone No
                    </td>
                    <td>
                      {{ record.alt_phone_no ? record.alt_phone_no : "" }}
                    </td>
                  </tr>
                   <tr>
                    <td>
                       Email
                    </td>
                    <td>
                      {{ record.alt_phone_no ? record.email : "" }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Department
                    </td>
                    <td>
                      {{ record.department }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Position
                    </td>
                    <td>
                      {{ record.position }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Salary
                    </td>
                    <td>
                      {{ record.salary }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Department
                    </td>
                    <td>
                      {{ record.qualification }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Years of Experience
                    </td>
                    <td>
                      {{ record.experience_years }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  data() {
    return {
      preloader: true,
      record: {}
    };
  },
  methods: {
    async getEmployeeRecord() {
    this.$nuxt.$emit("changPreloader", true);
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getEmployeeRecord/" + id)
          .then(({ data }) => {
            this.record = data;
    this.$nuxt.$emit("changPreloader", false);
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getEmployeeRecord();
  }
};
</script>
