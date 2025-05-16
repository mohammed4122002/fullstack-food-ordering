import Link from "@/components/Link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle, Languages } from "lucide-react";
import Image from "next/image";

const Hero = ()=>{

    return (
        <section className="section-gap">
        <div className="container grid grid-cols-1 md:grid-cols-2 ">
            <div className="md:py-12">
                <h1 className="text-4xl font-semibold "> Slice into Happiness</h1>
                <p className="text-accent my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem possimus et ex consequuntur. Debitis vitae iusto dolorem recusandae quae.</p>
                <div className="flex space-x-2">
                    <Link href={`/${Routes.MENU}`}
                          className={ `${buttonVariants({
                            size:"lg"
                          })}  space-x-2 !px-4 !rounded-full uppercase
                           `}
                    >
                        Order Now
                        <ArrowRightCircle
                        className={`!w-5 !h-5 ` }
                        />
                    </Link>
                    <Link href={`/${Routes.MENU}`}
                          className={ `${buttonVariants({
                            size:"lg",
                            variant:"link"

                          })}  space-x-2 !px-4 !rounded-full uppercase !text-foreground
                           `}
                    >
                       Learn More
                        <ArrowRightCircle
                        className={`!w-5 !h-5 ` }
                        />
                    </Link>
                </div>
            </div>


            <div className="relative hidden md:block">
                <Image src='/assets/pizza.png' alt="pizza" fill loading="eager" priority className="object-contain"/>
            </div>
        </div>
        </section>
    )
}

export default Hero;
