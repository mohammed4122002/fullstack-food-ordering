"use client";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { formatCurrency } from '@/lib/formatters';
import { Checkbox } from '../ui/checkbox';
import { ProductSize, type Extra, type Product, type Size } from '@prisma/client';
import type { ProductWithRelations } from '@/types/product';
import { useAppSelector } from '@/redux/hooks';
import { selectCartItems } from '@/features/cart/cartSlice';
import { useState } from 'react';
 






const AddToCartButton = ({
  item,
}: {
  item:ProductWithRelations
}) => {  


const cart = useAppSelector(selectCartItems)
const defaultSize = cart.find(element => element.id === item.id)?.size ||
item.sizes.find(size => size.name === ProductSize.SMALL);
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);

  const defaultExtras = cart.find(element => element.id === item.id)?.extras || []
  const [selectedExtras , setSelectedExtras] = useState<Extra[]>(defaultExtras)




 let totalPrice = item.basePrice

 if(selectedSize){
  totalPrice += selectedSize.price;
 }

 if(selectedExtras.length > 0){
  for(const extra of selectedExtras){
    totalPrice += extra.price
  }
 }


 const handleAddToCart = ()=>{
  
 }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size={"lg"} className="mt-4 rounded-full !px-8">
          Add to cart
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] max-h-[80vh] overflow-y-auto'>

        <DialogHeader className='flex items-center'>
            <Image src={item.image} alt={item.name} width={200} height={200} />
            <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>
          {item.description}
          </DialogDescription>

        </DialogHeader>
       <div className='space-y-10'>

        <div className='text-center space-y-4'>
            <Label htmlFor="pick-size" >Pick Your Size</Label>
            <PickSize sizes={item.sizes} item={item} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
        </div>
        <div className='text-center space-y-4'>
            <Label htmlFor="add-extras" >Any extras ? </Label>
            <Extras extras={item.extras} selectedExtras={selectedExtras} setSelectedExtras={setSelectedExtras}/>
        </div>
       
       </div>
        <DialogFooter>
          <Button type="submit" onClick={()=>handleAddToCart()} className='w-full h-10 '>Add to cart {formatCurrency(totalPrice)}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddToCartButton;





function PickSize({sizes , item , selectedSize , setSelectedSize} : { sizes :Size[] , item : Product , selectedSize : Size , setSelectedSize : (size: Size) => void }) {

  return (
    <RadioGroup defaultValue="comfortable">
        
     {sizes.map((size) => ( 
        <div className="flex items-center space-x-2" key={size.id}>
        <RadioGroupItem value={selectedSize.name} checked={selectedSize.id === size.id} onClick={()=>setSelectedSize(size)} id={size.id} />
        <Label htmlFor={size.id}>{size.name} {formatCurrency(size.price + item.basePrice)}</Label>
      </div>
      ))}
     
    </RadioGroup>
  )
}


function Extras({extras , selectedExtras  , setSelectedExtras } : { extras : Extra[]  ,selectedExtras:Extra[] , setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>> }) {
  const handleExtra= (extra : Extra)=>{
    if(selectedExtras.find(e => e.id === extra.id)){
      const filteredSelectedExtras = selectedExtras.filter(e => e.id !== extra.id)
      setSelectedExtras(filteredSelectedExtras)
    }
    else{
      setSelectedExtras(prev => [...prev , extra])
    }

  }
  return (
   
       extras.map((extra)=>(
         <div key={extra.id} className="flex items-center  space-x-2 border border-gray-100 rounded-md p-4 ">
        <Checkbox id={extra.id}
        onClick={()=>handleExtra(extra)}
        checked={Boolean(selectedExtras.find(e => e.id === extra.id))} />
      <Label
        htmlFor={extra.id} 
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
     </div>
       ))
    
  )
}