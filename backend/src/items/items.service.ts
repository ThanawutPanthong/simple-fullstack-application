import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemResponseInterface } from './interface/items.interface';

@Injectable()
export class ItemsService {
  private items: ItemResponseInterface[] = [
    {
      id: 1,
      name: 'Sample Item',
      description: 'This is a sample item',
      createdAt: new Date('2026-02-28'),
    },{ 
      id: 2,
      name: 'Another Item',
      description: 'This is another sample item',
      createdAt: new Date('2026-02-28'),
    }
  ];
  create(createItemDto: CreateItemDto) {
    const newItem: ItemResponseInterface = {
      ...createItemDto,
      id: this.items.length + 1,
      createdAt: new Date(),
    };
    this.items.push(newItem);
    return newItem;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    const item = this.items.find(item => item.id === id);
    if (!item) {
      throw new Error(`Item with ID ${id} not found`);
    }
    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
     const item = this.items.find(item => item.id === id);
    if (!item) {
      throw new Error(`Item with ID ${id} not found`);
    }
    this.items = this.items.map(item => {
      if (item.id === id) {
        return { ...item, ...updateItemDto };
      }
      return item;
    });
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
     const item = this.items.find(item => item.id === id);
    if (!item) {
      throw new Error(`Item with ID ${id} not found`);
    }
    this.items = this.items.filter(item => item.id !== id);
    return `This action removes a #${id} item`;
  }
}
