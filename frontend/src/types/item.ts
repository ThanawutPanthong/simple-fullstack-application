export type ItemResponseInterface = {
  id: number;
  name: string; 
  description?: string
  createdAt: string
}

export type CreateItemInputInterface = {
  name: string;
  description?: string;
} 