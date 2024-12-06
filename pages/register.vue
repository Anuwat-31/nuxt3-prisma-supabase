<script setup lang="ts">
import { useSupabaseClient } from "#build/imports";
const router = useRouter();
const supabase = useSupabaseClient();
const inputRegister = reactive({
  email: "",
  password: "",
  fullName: "",
});

const message = ref("");
const status = ref(false);

async function funcRegisterLogin() {
  if (
    inputRegister.fullName == "" ||
    inputRegister.email == "" ||
    inputRegister.password == ""
  ) {
    return console.log("Please enter Email Or Password");
  }
  try {
    const { data, error } = await supabase.auth.signUp({
      email: inputRegister.email,
      password: inputRegister.password,
      options: {
        data: {
          full_name: inputRegister.fullName,
          role: 1,
        },
      },
    });
    if (error) {
      throw error;
    } else {
      console.dir(data.user);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`????????${error.message}`);
    } else {
      console.log(`????????${error}`);
    }
  }
}
</script>

<template>
  <div class="h-full w-full font-Roboto">
    <div class="flex justify-center items-center w-full h-full">
      <form @submit.prevent="funcRegisterLogin">
        <div class="flex flex-col space-y-4 border p-4 w-[350px] rounded-lg">
          <h1 class="font-semibold text-xl">Register</h1>
          <div class="flex flex-col space-y-2">
            <label for="name">Name</label>
            <input
              v-model.trim="inputRegister.fullName"
              type="text"
              class="input-form"
              id="name"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="email">Email</label>
            <input
              v-model.trim="inputRegister.email"
              type="email"
              class="input-form"
              id="email"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="password">Password</label>
            <input
              v-model.trim="inputRegister.password"
              type="password"
              class="input-form"
              id="password"
            />
          </div>
          <div>
            <button class="btn-login">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
