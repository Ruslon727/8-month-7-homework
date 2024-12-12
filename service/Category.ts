"use client"
import { instance } from "@/hook/instance"
import { useEffect, useState } from "react"

interface CategoryType {
  id: number
  name: string
  createdAt?: string
  lastUpdateAt?: string
}

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    instance().get("/category/search").then((res) => {
      if (res.data && res.data.data && res.data.data.categories) {
        setCategories(res.data.data.categories)
      }
      else {
        console.error("Categories data is missing or malformed")
      }
      setLoading(false)
    })
  }, [])

  return { categories, loading }
}
