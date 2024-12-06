import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();
type TPost = {
  title: string;
  content: string;
  published: boolean;
};

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const body = await readBody<TPost>(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      message: "incalid id",
    });
  } else {
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    setResponseStatus(event, 200);
    return {
      statusCode: 200,
      message: "deleted",
      detial: post,
    };
  }
});
