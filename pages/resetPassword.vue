<script setup lang="ts">
import { useSupabaseClient } from "#build/imports";
const router = useRouter();
const supabase = useSupabaseClient();
const newPassword = ref<string>("");

async function funcResetPasswassword() {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword.value,
    });
    console.log(`After Succes reset password => ${data.user}`);
    if (error) throw error;
    const authTokens = useCookie("auth_token");
    authTokens.value = null;
    router.push("/login");
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
      <form @submit.prevent="funcResetPasswassword">
        <div class="flex flex-col space-y-4 border p-4 w-[350px] rounded-lg">
          <h1 class="font-semibold text-xl">Register</h1>
          <div class="flex flex-col space-y-2">
            <label for="password">Password</label>
            <input
              v-model.trim="newPassword"
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
