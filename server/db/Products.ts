import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getProductsByCategory = cache(
  () => {
    const products = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extras: true,
          },
        },
      },
    });
    return products;
  },
  ["products-by-category"],
  { revalidate: 3600 }
);
export const getBestSellers = cache(
  (limit?: number | undefined) => {
    const bestSellers = db.product.findMany({
      where: {
        orders: {
          some: {},
        },
      },
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      take: limit,
      include: {
        extras: true,
        sizes: true,
      },
    });

    return bestSellers;
  },
  ["best-sellers"],
  {
    revalidate: 3600, // 1 hour
  }
);
