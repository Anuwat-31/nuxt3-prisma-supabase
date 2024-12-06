<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen">
    <div class="fixed top-0 left-0 right-0">
      <Header />
    </div>
    <div class="flex h-full">
      <div class="h-full w-[200px]">
        <div class="overflow-y-auto h-full bg-slate-800 pt-[50px]">
          <Sidebar />
        </div>
      </div>
      <div class="w-full h-full overflow-y-auto pt-[50px] ps-4 pe-4 pb-4">
        <slot />
      </div>
    </div>
  </div>
</template>
