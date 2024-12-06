import cookies from "./server/api/cookies";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      key: "12sss",
    },
    JwtToken: "defaultToken",
  },
  modules: ["@nuxtjs/supabase"],

  supabase: {
    redirect: false,
    cookieOptions: {
      secure: false,
      //   maxAge: 60 * 60 * 8,
      // sameSite: 'lax',
      // secure: true
    },
    // redirectOptions: {
    //   login: "/home",
    //   callback: "/confirm",
    //   include: undefined,
    //   exclude: [],
    //   cookieRedirect: false,
    // },
  },
});
