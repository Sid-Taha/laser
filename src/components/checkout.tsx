'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useEffect, useState } from "react"
import Link from "next/link"

interface Product{
  name: string
  image: string
  price: number
  quantity: number
}

export default function CheckoutForm() {
  
  const [cartItem, setCartItem] = useState<Product[]>([])
  const [shipCost, setShipCost] = useState(0)

  const shipData = {
    shipment_cost: {
      amount: 10.00 // Example amount, replace with actual value
    }
  }


  useEffect(()=>{
    const data = localStorage.getItem("cart")
    const cart = data ? JSON.parse(data) : []
    setCartItem(cart)
    
     const shipCost = Number(shipData.shipment_cost.amount.toFixed(2))
    setShipCost(shipCost)
  },[])
  

  function handlePayment(){
    alert("payment successfull ✅")
    
    localStorage.setItem("cart", JSON.stringify([]))
    setCartItem([])
  }

 const totalAmount = Number(cartItem.reduce((acc: number, item:Product) => acc + Number(item.price * item.quantity), 0)) + Number(shipCost ? shipCost : 0)








  return (
    <div className="w-full min-h-screen bg-white px-4 py-8 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Billing Details Section */}
       
        <div className="space-y-8">
          <h1 className="text-3xl font-semibold">Billing details</h1>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name (Optional)</Label>
              <Input id="companyName" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select defaultValue="sri-lanka">
                <SelectTrigger className="h-[75px] rounded-[10px] border-[#9F9F9F]">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Street address</Label>
              <Input id="street" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select defaultValue="western">
                <SelectTrigger className="h-[75px] rounded-[10px] border-[#9F9F9F]">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="western">Western Province</SelectItem>
                  <SelectItem value="central">Central Province</SelectItem>
                  <SelectItem value="southern">Southern Province</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">ZIP code</Label>
              <Input id="zip" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" className="h-[75px] rounded-[10px] border-[#9F9F9F]" />
            </div>

            <div className="space-y-2">
              <Input 
                id="additional" 
                placeholder="Additional information"
                className="h-[75px] rounded-[10px] border-[#9F9F9F] text-[#9F9F9F]" 
              />
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:pl-8">

          <div className="bg-white p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium">Product</h2>
              <h2 className="text-2xl font-medium">Subtotal</h2>
            </div>
            {cartItem.map((item:Product, index: number)=>{return (
            <div className="space-y-4" key={index} >
           
              <div className="flex justify-between items-center text-base">
                 <div className="text-[#888888]">
                   {item.name} <span className="text-black mx-1">×</span> {item.quantity}
                </div>
                <div>Rs. {item.price * item.quantity}.00</div>
               </div>

              
          
            </div>
          )})} 

<div className="flex justify-between items-center text-base">
                 <div>Subtotal</div>
                 <div>Rs. {(cartItem.reduce((acc: number, item: Product) => acc + Number(item.price * item.quantity), 0))+(shipCost ? shipCost : 0)}.00</div>
               </div>
               <div className="flex justify-between items-center text-base">
               <div>Delivery & Shipping</div>
                <div>Rs. {shipCost ? "Rs. " + shipCost : "Free"} </div>
                </div>
             <div className="flex justify-between items-center">
               <div>Total</div>
           <div className="text-2xl font-bold text-[#B88E2F]">Rs. {totalAmount}</div>
            </div> 


{/* direct bank transfer */}
            <div className="border-t border-[#D9D9D9] pt-6">
              <RadioGroup defaultValue="bank-transfer" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
                </div>
                <p className="text-[#9F9F9F] text-justify ">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer-2" id="bank-transfer-2" />
                  <Label htmlFor="bank-transfer-2" className="text-[#9F9F9F]">Direct Bank Transfer</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="text-[#9F9F9F]">Cash On Delivery</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-6">
              <p className="text-justify text-sm text-[16px]">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                <Link href="#" className="underline font-bold"> privacy policy</Link>.
              </p>

              <Button className="w-full md:w-auto md:min-w-[318px] h-16 rounded-[15px] text-xl mx-auto block border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"  onClick={handlePayment}>
                Place order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}