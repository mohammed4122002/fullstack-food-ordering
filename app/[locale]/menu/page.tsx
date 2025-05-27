
import { getProductsByCategory } from '@/server/db/Products'
import React from 'react'
import Menu from '@/components/menu'
const page = async() => {
  
    const categorites = await getProductsByCategory()

  return (
   <main>
   {categorites.map((category) => (
    <section key={category.id}>
   <div className='container text-center '>
    <h1 className='text-primary font-bold text-4xl italic mb-6'>{category.name}</h1>
    <Menu items={category.products} />
    </div>



    
    </section>
    ))}
   </main>
  )
}

export default page