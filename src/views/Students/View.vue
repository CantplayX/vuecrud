<template>
  <div class="p-6">
    <div class="mb-4 flex justify-between items-center">
      <h4 class="text-lg font-semibold">Students</h4>
      <RouterLink
        to="/students/create"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Student
      </RouterLink>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow rounded-lg">
        <thead class="bg-gray-100">
          <tr>
            <th class="text-left p-4">ID</th>
            <th class="text-left p-4">Name</th>
            <th class="text-left p-4">Course</th>
            <th class="text-left p-4">Email</th>
            <th class="text-left p-4">Phone</th>
            <th class="text-left p-4">Created At</th>
            <th class="text-left p-4">Action</th>
          </tr>
        </thead>
        <tbody v-if="this.students.length > 0">
          <tr
            v-for="(student, index) in this.students"
            :key="index"
            class="border-t"
          >
            <td class="py-4">{{ student.ID }}</td>
            <td class="space-y-2 gap-2 py-4">{{ student.name }}</td>
            <td class="space-y-2 gap-2 py-4">{{ student.course }}</td>
            <td class="space-y-2 gap-2 py-4">{{ student.email }}</td>
            <td class="space-y-2 gap-2 py-4">{{ student.phone }}</td>
            <td class="space-y-2 gap-2 py-4">{{ student.createdAt }}</td>

            <td>
              <RouterLink
                :to="`/students/${student.ID}/edit`"
                class="px-4 py-2 mx-2 bg-green-400 text-white rounded hover:bg-green-600"
              >
                Edit
              </RouterLink>

              <button
                type="button"
                class="px-4 py-2 mx-2 bg-red-600 text-white rounded hover:bg-red-400"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="7">Loading...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    // console.log('i am here')
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:5000/students").then((res) => {
        this.students = res.data;
        console.log(this.students);
        console.log("new api");
      });
    },
  },
};
</script>
