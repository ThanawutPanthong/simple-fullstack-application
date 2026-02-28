# Full Stack Application (NestJS + React)

A simple full-stack app to view and add items to a list.

- Backend: NestJS (Node.js, TypeScript) — In-memory store
- Frontend: React (Vite, TypeScript, React Router)

---

## Prerequisites

- Node.js (recommended v18+)
- npm

---

## Project Structure

```

.
├── backend
└── frontend

````

---

## 1) Run Backend (NestJS)

### Install dependencies
```bash
cd backend
npm install
````

### Start the server (dev)

```bash
npm run start:dev
```

Backend will run at:

* `http://localhost:3000`

### API Endpoints

* `GET /items` — get all items
* `POST /items` — create new item
  Example body:

  ```json
  {
    "name": "New Gadget",
    "description": "A cool new gadget"
  }
  ```

> Note: Data is stored in-memory and will reset when the backend restarts.

---

## 2) Run Frontend (React + Vite)

### Install dependencies

```bash
cd frontend
npm install
```

### Start the server (dev)

```bash
npm run dev
```

Frontend will run at:

* `http://localhost:5173`

### Routes

* `/` — Item list (fetches from backend `GET /items`)
* `/items/new` — Create new item form (calls backend `POST /items`)

---

## 3) How to Test the Flow (Reviewer Guide)

1. Start Backend

   * Open `http://localhost:3000/items` in browser (should return JSON list)

2. Start Frontend

   * Open `http://localhost:5173/`

3. Add a new item
   * Click **สร้างไอเทมใหม่**
   * Enter **กรอกชื่อ** (required) and optional **คำอธิบาย**
   * Click **เพิ่มข้อมูล**
   * You will be redirected back to the list and should see the newly added item

4. Cancel flow

   * Go to **สร้างไอเทมใหม่**
   * Click **ยกเลิก**
   * Should return to the list without creating anything

---

## Notes

* CORS is enabled on the backend to allow the frontend origin (`http://localhost:5173`).
* In-memory storage is used (no database).
