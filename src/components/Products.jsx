import React, { useEffect, useState } from 'react';

export default function Products() {
  const [Products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data');
        setProducts(data);
      });
    return () => {
      console.log('클린');
    };
  }, [checked]);

  return (
    <div>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'> show only sale</label>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
