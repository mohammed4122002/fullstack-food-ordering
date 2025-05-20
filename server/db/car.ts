import { cache } from "@/lib/cache"
import { db } from "@/lib/prisma"


export  const getBestSellers = cache(() => {

    const bestSellers = db.product.findMany({
        include: {
        extras: true,
        sizes: true,
        },
    })
    
    return bestSellers
    }
    ,["best-sellers"], {
        revalidate: 3600, // 1 hour
        }
    )