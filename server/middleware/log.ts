export default defineEventHandler((event) => {
  console.log(`New quuest ${getRequestURL(event)}`);
});
