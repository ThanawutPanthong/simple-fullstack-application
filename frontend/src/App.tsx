import { Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import ItemForm from "./pages/ItemForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/items/new" element={<ItemForm />} />
    </Routes>
  );
}