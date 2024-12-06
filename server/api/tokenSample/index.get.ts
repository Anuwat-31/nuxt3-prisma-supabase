export default defineEventHandler((event) => {
  const jwtToken = useRuntimeConfig(event);
  return {
    jwtToken: jwtToken.JwtToken,
  };
});
