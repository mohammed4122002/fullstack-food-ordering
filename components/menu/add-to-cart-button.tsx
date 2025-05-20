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
import type { Extra, Product, Size } from '@prisma/client';
import type { ProductWithRelations } from '@/types/product';
 






const AddToCartButton = ({
  item,
}: {
  item:ProductWithRelations
}) => {
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
            <PickSize sizes={item.sizes} item={item}/>
        </div>
        <div className='text-center space-y-4'>
            <Label htmlFor="add-extras" >Any extras ? </Label>
            <Extras extras={item.extras}/>
        </div>
       
       </div>
        <DialogFooter>
          <Button type="submit" className='w-full h-10 '>Add to cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddToCartButton;





function PickSize({sizes , item} : { sizes :Size[] , item : Product}) {

  return (
    <RadioGroup defaultValue="comfortable">
        
     {sizes.map((size) => ( 
        <div className="flex items-center space-x-2" key={size.id}>
        <RadioGroupItem value="default" id={size.id} />
        <Label htmlFor={size.id}>{size.name} {formatCurrency(size.price + item.basePrice)}</Label>
      </div>
      ))}
     
    </RadioGroup>
  )
}


function Extras({extras } : { extras : Extra[] }) {
  return (
   
       extras.map((extra)=>(
         <div key={extra.id} className="flex items-center  space-x-2 border border-gray-100 rounded-md p-4 ">
        <Checkbox id={extra.id} />
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