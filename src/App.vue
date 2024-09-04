<script setup>
import { RouterLink, RouterView } from "vue-router";
import "../src/style.css";
</script>

<template>
  <header class="bg-gray-800 p-4">
    <div>
      <ul class="flex gap-3 justify-around text-white">
        <li>
          <RouterLink class="w-full h-full p-2 bg-gray-700 hover:bg-sky-500 rounded" to="/">Navbar</RouterLink>
        </li>
        <li>
          <RouterLink class="w-full h-full p-2 bg-gray-700 hover:bg-sky-500 rounded" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="w-full h-full p-2 bg-gray-700 hover:bg-sky-500 rounded" to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink class="w-full h-full p-2 bg-gray-700 hover:bg-sky-500 rounded" to="/students">Students</RouterLink>
        </li>
      </ul>
    </div>
  </header>

  <main class="p-6">
    <RouterView />
  </main>
</template>
