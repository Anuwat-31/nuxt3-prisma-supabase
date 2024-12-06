import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // const query = getQuery(event);
  // const title = query.title as string;

  const getUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  if (getUsers) {
    return getUsers;
  } else {
    setResponseStatus(event, 204, "No Content");
    return {
      statusCode: 204,
      message: "No Content",
    };
  }
});
