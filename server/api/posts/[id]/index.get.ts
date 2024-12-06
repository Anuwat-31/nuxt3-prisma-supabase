import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  if (id) {
    const getPosts = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (getPosts) {
      return getPosts;
    } else {
      setResponseStatus(event, 204);
      return {
        statusCode: 204,
        message: "No Content",
      };
    }
  } else {
    const getPosts = await prisma.post.findMany();
    setResponseStatus(event, 200);
    return getPosts;
  }
});
