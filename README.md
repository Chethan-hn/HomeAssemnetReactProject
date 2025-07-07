# 🛒 SharedCart App

Welcome to **SharedCart** – a real-time collaborative shopping cart experience with built-in chat support. Whether you're shopping with friends or just want to coordinate what to buy, this app makes it easy and fun. Built using **React Native** and a **mock Node.js backend**.

---

## 🏗 Architecture Overview

### 📱 Frontend (React Native)
The mobile app is built with React Native CLI and uses:
- **TypeScript** for safety & scalability
- **React Navigation** for smooth screen transitions
- **FlashList** for fast, optimized list rendering
- **Socket.IO client** to sync chat & cart in real time
- **Image Picker** to let users upload images in chat

### 🌐 Backend (Node.js)
This is a simple mock backend powered by:
- **Express** to serve API routes
- **Socket.IO** for handling real-time chat & cart updates
- **No database** — just in-memory data for quick setup
- **Mock product catalog API** to simulate real products

---

## ⚙️ Setup Instructions

Let’s get everything running in a few minutes:

### ✅ What You Need First
- Node.js (v16+)
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)
- `npm` or `yarn`

---

### 🚀 Getting Started

1. **Clone this repository**

```bash
git clone https://github.com/your-username/shared-cart-app.git
cd shared-cart-app
