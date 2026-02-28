import type { ItemResponseInterface,CreateItemInputInterface } from "../types/item";

export const getItems = async (): Promise<ItemResponseInterface[]> => {
      const response = await fetch('http://localhost:3000/items');
      return response.json();
  };

export const createItem = async (newItem: CreateItemInputInterface):Promise<ItemResponseInterface> => {
    const response = await fetch('http://localhost:3000/items', {
      method: 'POST',   
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    return response.json();
  };