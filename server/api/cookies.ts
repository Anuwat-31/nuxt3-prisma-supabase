export default defineEventHandler((event) => {
  setCookie(event, "mycookies", "myValueCookies", {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    secure: process.env.NOOD_ENV === "production",
  });
  const cookies = parseCookies(event);
  setResponseStatus(event, 200, "success");
  return {
    statusCode: 200,
    message: "success",
    cookies,
  };
});
