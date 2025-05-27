import Link from "@/components/Link";
import { buttonVariants } from "@/components/ui/button";
import { Languages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { ArrowRightCircle} from "lucide-react";
import Image from "next/image";
import  getTrans  from "@/lib/translation";
const Hero = async ()=>{
   const locale = await getCurrentLocale()
   const {home}= await getTrans(locale)
   const {hero} = home

    return (
        <section className="section-gap">
        <div className="container grid grid-cols-1 md:grid-cols-2 ">
            <div className="md:py-12">
                <h1 className="text-4xl font-semibold "> {hero.title}</h1>
                <p className="text-accent my-4">{hero.description}</p>
                <div className="flex space-x-2">
                    <Link href={`/${Routes.MENU}`}
                          className={ `${buttonVariants({
                            size:"lg"
                          })}  space-x-2 !px-4 !rounded-full uppercase
                           `}
                    >
                        
                        {hero.orderNow}
                        <ArrowRightCircle
                        className={`!w-5 !h-5
                            ${locale === Languages.ARABIC ? "rotate-180" : ""}
                            ` }
                        />
                    </Link>
                    <Link href={`/${Routes.MENU}`}
                          className={ `${buttonVariants({
                            size:"lg",
                            variant:"link"

                          })}  space-x-2 !px-4 !rounded-full uppercase !text-foreground
                           `}
                    >
                     {hero.learnMore}
                        <ArrowRightCircle
                        className={`!w-5 !h-5
                              ${locale === Languages.ARABIC ? "rotate-180" : ""}
                            ` }
                        />
                    </Link>
                </div>
            </div>


            <div className="relative hidden md:block">
                <Image src='https://png.pngtree.com/png-clipart/20240608/original/pngtree-a-stack-of-pizza-slices-topped-with-sauce-and-cheese-png-image_15273205.png' alt="pizza" fill loading="eager" priority className="object-contain"/>
            </div>
        </div>
        </section>
    )
}

export default Hero;
