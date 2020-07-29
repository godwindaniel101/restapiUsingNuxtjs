<template>
<div class="preloaded_wrapper">
    <div class="preloader_item" v-show="preloader">
      <div class="image_wrap">
        <img src="~assets/images/preloader.gif" />
      </div>
    </div>
    <div class="other_contents" v-show="!preloader">
  <div class="container-fluid">
    <div class="table_container wrap_my_form">
      <div class="employee_headerx">
        <nuxt-link to="/dashboard/employee/create">
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="svg-inline--fa fa-user-plus fa-w-20 fa-3x"
          >
            <path
              fill="yellowgreen"
              d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              class
            />
          </svg>
        </nuxt-link>
      </div>
      <table class="employee" :class="preloader ?'': 'employeeclear'">
        <thead>
        <tr >
          <th>
            <div class="table_header">
              <div class="header_text">
                <p class>SN</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th>
            <div class="table_header">
              <div class="header_text">
                <p class>First Name</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Last Name</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Phone No</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Email</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Department</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Position</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Sex</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Start Date</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
          <th class>
            <div class="table_header">
              <div class="header_text">
                <p class>Action</p>
              </div>
              <div class="header_icon">
                <div class="header_icon_1"></div>
                <div class="header_icon_2"></div>
              </div>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="items.id">
          <td class>
            <p>{{ index + 1 }}</p>
          </td>
          <td class>
            <p>{{ item.first_name }}</p>
          </td>
          <td class>
            <p>{{ item.last_name }}</p>
          </td>
          <td class>
            <p>{{ item.phone_no }}</p>
          </td>
          <td class>
            <p>{{ item.email }}</p>
          </td>
          <td class>
            <p>{{ item.department }}</p>
          </td>
          <td class>
            <p>{{ item.position }}</p>
          </td>
          <td class>
            <p>{{ item.sex }}</p>
          </td>
          <td class>
            <p>{{ item.start_date }}</p>
          </td>
          <td class>
            <p>
              <nuxt-link :to="{ path: '/dashboard/employee/' + item.id }">
                <svg
                  width="20"
                  height="20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="svg-inline--fa fa-eye fa-w-18 fa-3x"
                >
                  <path
                    fill="green"
                    d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                    class
                  />
                </svg> </nuxt-link
              >|
              <nuxt-link :to="{ path: '/dashboard/employee/edit/' + item.id }">
                <svg
                  width="20"
                  height="20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="svg-inline--fa fa-user-edit fa-w-20 fa-3x"
                >
                  <path
                    fill="blue"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                    class
                  />
                </svg> </nuxt-link
              >|
              <span class="trash" @click="deleteEmployee(item.id)">
                <svg
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"
                >
                  <path
                    fill="red"
                    d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    class
                  />
                </svg>
              </span>
            </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import Index from "~/components/EmployeeComponent/index.vue";
export default {
  components: {
    Index
  },
  data() {
    return {
      preloader: true,
      items: []
    };
  },
  methods: {
    deleteEmployee(id) {
      this.$swal({
        customClass: {
          confirmButton: "btn btn-danger",
          cancelButton: "btn btn-success"
        },
        buttonsStyling: false,
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          try {
            this.$axios.delete("auth/deleteEmployee/" + id).then(({ data }) => {
              this.getEmployee();
              this.$swal(
                "Deleted!",
                "Employee Record has been deleted.",
                "success"
              );
            });
          } catch (e) {}
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
    },
    async getEmployee() {
      try {
        await this.$axios.get("auth/getEmployee").then(({ data }) => {
          this.items = data;
          this.preloader = false;
        });
      } catch (e) {}
    }
  },
  mounted() {
    this.getEmployee();
  }
};
</script>
