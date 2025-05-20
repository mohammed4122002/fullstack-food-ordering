import { db } from "@/lib/prisma";
import BestSellers from "./_components/BestSellers";
import Hero from "./_components/hero";
;

export default async function Home() {
/*
const size =  await db.size.createMany({
  data: [
    {name : "SMALL", price: 0, productId : "cmateu68j0001no9gblpzm6ac"},
    {name : "MEDIUM", price: 4, productId : "cmateu68j0001no9gblpzm6ac"},
    {name : "LARGE", price: 8, productId : "cmateu68j0001no9gblpzm6ac"},
  ]
});

const extra =  await db.extra.createMany({
  data: [
    {name : "CHEESE", price: 2, productId : "cmateu68j0001no9gblpzm6ac"},
    {name : "BACON", price: 3, productId : "cmateu68j0001no9gblpzm6ac"},
    {name : "TOMATO", price: 4, productId : "cmateu68j0001no9gblpzm6ac"},
    {name : "ONION", price: 4, productId : "cmateu68j0001no9gblpzm6ac"},
    {name : "PEPPER", price: 4, productId : "cmateu68j0001no9gblpzm6ac"},
  ]
});

*/
  return (

    <main className="" > 
     <Hero/>
       <BestSellers />
    </main>
  );
}
