import React, { useState, useEffect } from 'react';
import type { ItemResponseInterface } from '../types/item';
import { getItems } from '../api/item';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<ItemResponseInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data: ItemResponseInterface[] = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {items.map((item) => (
        <>
          <li key={item.id}>{item.name}</li>
          <li key={item.id}>{item.description}</li>
          <li key={item.id}>{new Date(item.createdAt).toLocaleString()}</li>
          <br />
        </>
      ))}
    </ul>
  );
};

export default ItemList;