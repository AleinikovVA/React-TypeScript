import React, { createElement as e, useEffect, useState } from 'react';
// import { Product } from '../component/Product'
import { IProduct } from '../modeles';
import axios, { AxiosError } from 'axios'

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product: IProduct) {
      setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
  
      try {
        setError('')
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
  
      } catch (e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])
    return {products, error, loading, addProduct}
}