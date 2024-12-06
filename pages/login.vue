<script setup lang="ts">
import { useSupabaseClient } from "#build/imports";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const supabase = useSupabaseClient();
const inputLogin = reactive({
  email: "",
  password: "",
});

async function funcLogin() {
  if (inputLogin.email == "" || inputLogin.password == "") {
    return console.log(`please Enter Email & Password`);
  }
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: inputLogin.email,
      password: inputLogin.password,
    });
    if (error) throw error;
    const token = data.session.access_token;
    if (token) {
      const authTokens = useCookie("auth_token", {
        // httpOnly: true,
        maxAge: 60 * 60 * 24,
      });
      authTokens.value = token;
    }
    // console.log(data.user.user_metadata.role);
    router.push("/home");
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
    <div class="w-full h-full">
      <div class="flex max-w-5xl border rounded-lg shadow-md">
        <div class="w-[250px] border-e p-4">
          <img src="../public/image/key.png" class="object-cover" alt="" />
        </div>
        <div class="w-[400px]">
          <form @submit.prevent="funcLogin" class="rounded-md p-4">
            <h2
              class="font-Roboto text-xl font-bold text-slate-500 text-center"
            >
              เข้าสู่ระบบ
            </h2>
            <div class="grid grid-rows-2 gap-y-2">
              <div>
                <label for="" class="form-input">อีเมล์</label>
                <input
                  v-model.trim="inputLogin.email"
                  type="email"
                  class="input-form"
                />
              </div>
              <div>
                <label for="" class="form-input">รหัสผ่าน</label>
                <input
                  v-model.trim="inputLogin.password"
                  type="password"
                  class="input-form"
                />
              </div>
            </div>
            <div class="mt-4">
              <button class="btn-login">เข้าสู่ระบบ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
