import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CreateItemInputInterface,ItemResponseInterface } from '../types/item';
import { createItem } from '../api/item';


const ItemForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreateItem = async (newItem: CreateItemInputInterface) => {
    setIsSubmitting(true);
    try {
      const response = await createItem(newItem);

      if (!response) throw new Error('Failed to create item');

      const result: ItemResponseInterface = response;

      alert(`สร้างข้อมูลสำเร็จ: ${result.name} ${result.description ? `(${result.description})` : ''} (ID: ${result.id})`);
      setName('');
      setDescription('');
      setNameError(false);
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาดในการสร้างข้อมูล");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }
    handleCreateItem({ name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (nameError && e.target.value.trim()) setNameError(false);
        }}
        placeholder="กรอกชื่อไอเทม"
        disabled={isSubmitting}
        style={{ border: nameError ? '2px solid red' : undefined }}
      />
      {nameError && (
        <div style={{ color: 'red', marginBottom: 8 }}>ต้องกรอกชื่อไอเทม</div>
      )}
      <div style={{ marginTop: 16 }}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="กรอกคำอธิบายไอเทม"
          disabled={isSubmitting}
        />
      </div>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'กำลังบันทึก...' : 'เพิ่มข้อมูล'}
        </button>
        <button type="button" onClick={() => navigate('/')} disabled={isSubmitting}>
          ยกเลิก
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
