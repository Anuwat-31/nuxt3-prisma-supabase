import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const title = query.title as string;
  if (title) {
    if (title) {
    }
    const getPosts = await prisma.post.findMany({
      where: {
        title: {
          contains: title,
          mode: "insensitive",
        },
      },
    });
    if (getPosts) {
      return getPosts;
    } else {
      setResponseStatus(event, 204, "No Content");
      return {
        statusCode: 204,
        message: "No Content",
      };
    }
  } else {
    const getPosts = await prisma.post.findMany();
    return getPosts;
  }
});
