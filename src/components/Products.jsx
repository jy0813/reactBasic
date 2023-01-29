import React, { useState } from 'react';
import useProducts from "../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, Products] = useProducts({salesOnly : checked});
  const handleChange = () => setChecked((prev) => !prev);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        checked={checked}
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
