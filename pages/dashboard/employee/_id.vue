<template>
  <div class="container-fluid" style="padding:0;">
    <div class="row">
      <div class="col-lg-10 offset-lg-1 wrap_my_form">
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
                ></path>
              </svg>
            </nuxt-link>
          </div>
          <div class="tag-wrapper">
            <p>
              Employee Detail
            </p>
          </div>
        </div>

        <div class="  col-lg-12 form_wrapper_unit" id="style-2">
          <div class="preloader" v-show="preloader">
            <div class="image_wrap">
              <img src="~assets/images/preloader.gif" />
            </div>
          </div>
          <div class="row" v-if="record != null"  v-show="!preloader">
            <div class="col-lg-4">
              <div class="profile_side">
                <div class="profile_side_head">
                  <div class="profile_pic_wrap"></div>
                  <div class="profile_name">
                    <p>
                      {{ record.first_name }} {{ record.middle_name }}
                      {{ record.last_name }}
                    </p>
                    <p></p>
                  </div>
                </div>
                <div class="profile_side_body">
                  <table class="profie_side_table">
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
            <div class="col-lg-8">
              <div class="profile_center">
                <table class="profile_center_1">
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
                </table>
                <hr class="profile_center_hr">
                <table class="profile_center_1">
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
                   </table>
                <hr class="profile_center_hr">
                <table class="profile_center_1">
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
      var id = this.$route.params.id;
      try {
        await this.$axios
          .get("auth/getEmployeeRecord/" + id)
          .then(({ data }) => {
            this.record = data;
            this.preloader = false;
          });
      } catch (e) {}
    }
  },
  mounted() {
    this.getEmployeeRecord();
  }
};
</script>
