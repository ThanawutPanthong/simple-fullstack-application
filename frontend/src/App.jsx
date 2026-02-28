import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/items/new" element={<ItemForm />} />
    </Routes>
  );
}

export default App
