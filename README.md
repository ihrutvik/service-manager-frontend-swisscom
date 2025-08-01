# 📘 Service Manager Frontend

This is the frontend for the **Service Manager** system built using **Angular 17** and **Standalone Components**.  
It provides a simple UI to manage **Services**, **Resources**, and **Owners** with full **CRUD functionality** integrated with a backend API.

---

## 📦 Tech Stack

- ⚙️ Angular 17 (Standalone API)
- 📡 REST API Integration
- 💅 CSS (customizable layout)
- ✅ Forms with two-way binding (`ngModel`)
- 🛠 Logs & Shell Scripts for dev automation

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js ≥ 18  
- NPM ≥ 10  
- Backend API running on `http://localhost:8080`

---

### 📁 Project Structure

```
src/
  app/
    components/item-list     👉 Main UI
    services                 👉 API Service
    models                   👉 Data Models
  main.ts                    👉 Bootstrap with provideHttpClient
  app.config.ts              👉 Optional routes/configs
public/                      👉 Static assets
```

---

## 🔨 Run Locally

```bash
chmod +x build-frontend.sh
./run-frontend.sh
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.


---


## 🔁 Change Backend API URL (Proxy Setup)

If your backend server is **not running on `http://localhost:8080`**, you can change it in the `proxy.conf.json` file.

### 🔧 Example:

```json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true
  }
}
```

> ✅ Replace `"target"` with your actual backend URL if needed (e.g., `"http://localhost:9090"` or a staging server)

> 💡 This proxy is **used only in development** (`ng serve` or `npm run dev`) and not during production builds.

---


## 💡 Features

- 🧾 **Fetch Service by ID**
- 🆕 **Create New Service with Resources + Owners**
- ✏️ **Update or Delete Services**
- 🔁 **Nested editing of Resource & Owner lists**
- ⚠️ **Error handling and alert messages on all API calls**

---

## 🔗 API Integration

The frontend interacts with these endpoints:

```
POST    /api/v1/services             👉 Create
GET     /api/v1/services/{id}        👉 Fetch
PUT     /api/v1/services/{id}        👉 Update
DELETE  /api/v1/services/{id}        👉 Delete
```

Make sure your backend is running and accessible at `http://localhost:8080`.



---

## 🙌 Contributing

PRs are welcome! This is a simple frontend designed for easy extendability (routing, auth, styling, etc).
