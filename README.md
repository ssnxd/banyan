
## Banyan Tree</h1>
*Banyan Tree* is an open-source platform for live, collaborative teaching.



## ✨ What It Offers

- Teachers and institutions can create public teaching pages.
- Students can discover, subscribe to, and attend live online classes.
- Slack-like real-time chat for in-class collaboration.
- Stripe/Razorpay integration for regional payment support.
- Open-source and fully Dockerized for easy local deployment.

## 💡 Phase 1 Goal (MVP)

Launch a fully working MVP focused on:

- Live class listings
- Real-time class collaboration (chat + video)
- Teacher and student dashboards
- Basic search & payments
- Fully runnable with Docker for self-hosting

## 🔧 Tech Stack

| Layer            | Tech                        |
|------------------|-----------------------------|
| Frontend         | React.js                    |
| Backend          | Node.js                     |
| Database         | PostgreSQL                  |
| Real-time        | WebSocket / Socket.io       |
| Chat Infra       | In-app chat system          |
| Video            | Zoom SDK or Jitsi           |
| Payments         | Stripe + Razorpay           |
| Containerization | Docker + Docker Compose     |

## 🛣️ Roadmap – Phase 1 (v0.0.1 to v1.0.0)

| Version    | Feature Set                              | Status     |
|------------|------------------------------------------|------------|
| `v0.0.1`   | Project Bootstrap (Docker + Monorepo)    | ❌ Not Done |
| `v0.0.2`   | Authentication & Role System             | ❌ Not Done |
| `v0.1.0`   | Public Profile Pages                     | ❌ Not Done |
| `v0.2.0`   | Live Class Listings (CRUD)               | ❌ Not Done |
| `v0.3.0`   | Enrollment System                        | ❌ Not Done |
| `v0.4.0`   | Payment Integration                      | ❌ Not Done |
| `v0.5.0`   | Dashboards for Teachers & Students       | ❌ Not Done |
| `v0.6.0`   | Slack-like Chat per Class                | ❌ Not Done |
| `v0.7.0`   | Live Class Video Integration             | ❌ Not Done |
| `v0.8.0`   | Search & Filtering                       | ❌ Not Done |
| `v1.0.0`   | Docker Release + Final MVP               | ❌ Not Done |

## 📋 Chronological User Stories

### 🔹 `v0.0.1` – Project Bootstrap
- Set up monorepo structure for frontend/backend.
- Provide `docker-compose.yml` for local dev.
- Enable GitHub Actions for CI builds and linter/test checks.

### 🔹 `v0.0.2` – Authentication System
- Users can register/login as student, teacher, or institution.
- Institutions can invite other teachers.
- Secure sessions via JWT or cookies.

### 🔹 `v0.1.0` – Profile Setup
- Teachers/Institutions can set display name, avatar, and bio.
- Public profiles show upcoming live classes.
- Profile edit UI for logged-in users.

### 🔹 `v0.2.0` – Class Listings
- Teachers can create, update, and delete live classes.
- Students can view class info (title, time, price).
- Public listings page with sorting.

### 🔹 `v0.3.0` – Enrollment Flow
- Students can enroll in classes.
- Teachers see enrollment lists.
- Email or in-app enrollment confirmations.

### 🔹 `v0.4.0` – Payments
- Stripe + Razorpay integrations.
- Region-based currency detection.
- Payment flow with success/failure states.

### 🔹 `v0.5.0` – Dashboards
- Teacher dashboard: manage classes & enrollments.
- Student dashboard: view upcoming/joinable classes.
- Unified sidebar navigation.

### 🔹 `v0.6.0` – Real-Time Chat
- Chat rooms for each class.
- Simple UI with messages, replies, emoji (optional).
- WebSocket-based infra for real-time updates.

### 🔹 `v0.7.0` – Live Class Integration
- Embed Zoom or Jitsi for live class delivery.
- “Join Class” button activates at class time.
- Teachers start session; students join in.

### 🔹 `v0.8.0` – Class Discovery
- Keyword and tag-based search.
- Filters by date, teacher, topic.
- List & grid view of classes.

### 🔹 `v1.0.0` – Stable MVP Release
- Polish all workflows.
- One-click deploy using Docker.
- Setup guide for contributors.
- GitHub release tag & announcement.

## 🤝 Contributing

We welcome contributors! Please check the following soon:
- [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)

## 📄 License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

You are free to use, modify, and distribute this software with proper attribution. Contributions are welcome!