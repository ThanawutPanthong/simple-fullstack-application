import React, { useState, useEffect } from 'react';
import type { ItemResponseInterface } from '../types/item';
import { getItems } from '../api/item';
import { useNavigate } from 'react-router-dom';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<ItemResponseInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

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
    <div>
      <button
        style={{ marginBottom: 16 }}
        onClick={() => navigate('/items/new')}
      >
        สร้างไอเทมใหม่
      </button>
      <ul>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <li>{item.name}</li>
            <li>{item.description}</li>
            <li>{new Date(item.createdAt).toLocaleString()}</li>
            <br />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;