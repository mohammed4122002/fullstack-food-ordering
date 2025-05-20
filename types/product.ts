import type { Prisma } from "@prisma/client";



export type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    extras: true;
    sizes: true;
  };
}>;
