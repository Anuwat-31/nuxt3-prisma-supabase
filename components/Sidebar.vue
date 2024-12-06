<script setup lang="ts">
const { role } = useAuth();
</script>

<template>
  <div class="h-full w-full">
    <ul
      class="h-full w-full flex flex-col items-center bg-slate-800 text-slate-200 font-Roboto font-medium"
    >
      <NuxtLink
        v-if="role == 1"
        to="/register"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Register</NuxtLink
      >
      <NuxtLink
        to="/home"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
      <NuxtLink
        to="/"
        class="hover:bg-slate-600 w-full text-center p-3 rounded-md"
        >Menu1</NuxtLink
      >
    </ul>
  </div>
</template>
