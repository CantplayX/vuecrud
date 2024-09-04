<template>
  <div class="mt-5">
    <h4>Edit Students</h4>
  </div>
  <div class="mb-3">
    <label>Name</label>
    <input
      type="text"
      class="border border-black p-2"
      v-model="model.student.name"
    />
  </div>
  <div class="mb-3">
    <label>Course</label>
    <input
      type="text"
      class="border border-black p-2"
      v-model="model.student.course"
    />
  </div>
  <div class="mb-3">
    <label>Email</label>
    <input
      type="text"
      class="border border-black p-2"
      v-model="model.student.email"
    />
  </div>
  <div class="mb-3">
    <label>Phone</label>
    <input
      type="text"
      class="border border-black p-2"
      v-model="model.student.phone"
    />
  </div>
  <div class="mb-3">
    <button
      class="px-4 py-2 mx-2 bg-green-400 text-white rounded hover:bg-green-600"
      @click="saveStudent"
    >
      Save
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "studentEdit",
  data() {
    return {
      model: {
        student: {
          ID: "",
          name: "",
          email: "",
          course: "",
          phone: "",
        },
      },
    };
  },
  mounted() {
    // console.log(this.$route.params.id)
    this.getStudentsData(this.$route.params.id);
  },
  methods: {
    getStudentsData(studentId) {
  axios.get(`http://localhost:5000/students/${studentId}`)
    .then((res) => {
      this.model.student = res.data; // Populate the form with the student data
    })
    .catch((error) => {
      console.error(error);
      if (error.response && error.response.status === 404) {
        alert("Student not found");
      } else {
        alert("An error occurred while fetching the student data");
      }
    });
},

    saveStudent() {
      axios
        .post("http://localhost:5000/students", this.model.student)
        .then((res) => {
          console.log(res);
          alert(res.data);
          this.model.student = {
            name: "",
            email: "",
            course: "",
            phone: "",
          };
        })
        .catch((error) => {
          if (error.response) {
            console.log(error);
          }
        });
    },
  },
};
</script>
