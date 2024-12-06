<script setup lang="ts">
import { useSupabaseClient } from "#build/imports";
const { fullName, email } = useAuth();

const router = useRouter();
const supabase = useSupabaseClient();

async function funcLogout() {
  try {
    const { error } = await supabase.auth.signOut();
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
async function resetPassword() {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      email.value || ""
    );
    console.log(`Success Password=>${data}`);
    if (error) throw error;
    router.push("/resetPassword");
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
  <div>
    <nav class="h-[50px] bg-slate-800 text-slate-200 w-full">
      <div class="px-2 flex justify-between items-center h-full">
        <div class="flex justify-center items-center">
          <h4 class="text-xl font-Roboto font-bold">Logo Company</h4>
        </div>
        <div>
          <ul class="flex h-full justify-center items-center gap-4 font-Roboto">
            <li @click="resetPassword" class="cursor-pointer">{{ email }}</li>
            <li>{{ fullName }}</li>
            <li @click="funcLogout" class="cursor-pointer">ออกจากระบบ</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
