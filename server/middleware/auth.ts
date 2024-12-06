export default defineEventHandler((event) => {
  event.context.auth = {
    user: "Aof",
    role: "admin",
    permissions: ["read", "write"],
  };
  //   console.log(event.context.auth);
});
