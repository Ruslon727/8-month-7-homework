// Home.tsx
"use client"
import { useCategories } from "@/service/Category"
import { useProducts } from "@/service/Products"
import ProductCard from "@/components/ProductCard"
import Image from "next/image"

export default function Home() {
  const { categories, loading: categoriesLoading } = useCategories()
  const { products, loading: productsLoading } = useProducts()

  return (
    <>
      <div className="bg-[#F3F0F0] flex items-center justify-between px-[130px] py-[70px]">
        <div>
          <h2 className="font-extrabold text-[44px] text-[#0A1729] mb-[6px]">Siz kutgan Xiaomi 12 Mi Laite</h2>
          <p className="w-[596px] text-[16px] mb-[22px] text-[#545D6A]">
            Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!
          </p>
          <button className="w-[161px] bg-[#0F4A97] rounded-md hover:scale-[0.9] border-[2px] border-[#0F4A97] py-[18px] duration-300">
            <span className="text-[16px] text-white duration-300 font-bold">Batafsil</span>
          </button>
        </div>
        <Image width={755} height={731} src={"/Telephone.png"} alt="telephone" priority />
      </div>

      <div className="px-[130px] py-[100px]">
        {categoriesLoading ? (
          <p>Loading categories...</p>
        ) : categories.length === 0 ? (
          <p>No categories available</p>
        ) : (
          <ul className="flex flex-wrap gap-[10px] items-stretch justify-center">
            {categories.map((category) => (
              <li key={category.id} className="w-[310px] h-[98px] bg-[#67B43733] hover:scale-[0.9] duration-300 flex rounded-md items-center justify-center">
                <span className="font-bold text-[#134E9B]">{category.name}</span>
              </li>
            ))}
            <li className="w-[310px] h-[98px] bg-[#EBEFF3] flex rounded-md items-center justify-center hover:scale-[0.9] duration-300">
              <strong className="font-bold text-[18px] text-[#134E9B]">Ko'proq</strong>
            </li>
          </ul>
        )}
      </div>

      <div className="px-[130px] py-[100px]">
        {productsLoading ? (
          <p>Loading products...</p>
        ) : (
          <ul className="flex flex-wrap gap-[10px] space-x-5 justify-center">
            {products.map((product) => (
              <li className="w-[300px] py-5" key={product.id}>
                <ProductCard name={product.name} price={product.price} image={product.images[0]} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
