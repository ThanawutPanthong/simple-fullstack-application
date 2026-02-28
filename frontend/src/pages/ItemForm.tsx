import React, { useState } from 'react';
import type { CreateItemInputInterface,ItemResponseInterface } from '../types/item';
import { createItem } from '../api/item';


const ItemForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleCreateItem = async (newItem: CreateItemInputInterface) => {
    setIsSubmitting(true);
    try {
      const response = await createItem(newItem);

      if (!response) throw new Error('Failed to create item');

      const result: ItemResponseInterface = response;

      alert(`สร้างข้อมูลสำเร็จ: ${result.name} ${result.description ? `(${result.description})` : ''} (ID: ${result.id})`);
      setName('');
      setDescription('');
    } catch (error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการสร้างข้อมูล");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    
    handleCreateItem({ name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="กรอกชื่อไอเทม"
        disabled={isSubmitting}
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="กรอกคำอธิบายไอเทม"
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'กำลังบันทึก...' : 'เพิ่มข้อมูล'}
      </button>
    </form>
  );
};

export default ItemForm;
