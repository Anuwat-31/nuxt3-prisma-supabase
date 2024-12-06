export default defineEventHandler(async (event) => {
  const jsonBody = await readBody(event);
  return {
    statusCode: 200,
    data: jsonBody,
    message: "Success method post",
  };
});
