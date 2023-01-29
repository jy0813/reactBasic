import React, { useEffect, useState } from 'react';
export default function useProducts({salesOnly}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log('data');
          setProducts(data);
        })
        .catch(e => setError('에러가 발생했습니다.'))
        .finally(() => setLoading(false))
    return () => {
      console.log('클린');
    };
  }, [salesOnly]);

  return [loading, error, Products];
}