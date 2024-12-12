"use client"
import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
  name: string
  price: string
  image: string
}

const ProductCard = ({name, price, image}:ProductCardProps) => {
  return (
    <div className="w-[310px] h-[420px] bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-[250px]">
        <Image src={image} alt={name} layout="fill" objectFit="cover" className="w-full h-full object-cover"/>
      </div>
      <div className="p-4">
        <h3 className="text-[18px] font-semibold text-[#0A1729] truncate">{name}</h3>
        <p className="text-[#134E9B] font-bold text-[16px] mt-2">{price} $</p>
      </div>
      <div className="absolute inset-0 bg-[#0A1729] bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-[18px] font-bold">Buy Now</span>
      </div>
    </div>
  )
}

export default ProductCard
