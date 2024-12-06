import { useSupabaseClient } from "#build/imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("auth_token").value;
  if (!token) {
    return navigateTo("/login");
  }

  const supabase = useSupabaseClient();
  const { role, fullName, email } = useAuth();
  const { data: user, error } = await supabase.auth.getUser(token);
  role.value = user.user?.user_metadata.role;
  fullName.value = user.user?.user_metadata.full_name;
  email.value = user.user?.user_metadata.email;
  if (error || !user) {
    return navigateTo("/login");
  }
});
