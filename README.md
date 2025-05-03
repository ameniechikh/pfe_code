# 📦 Sidenor Backend

This is the backend service for the Sidenor platform. It is built using **Node.js**, **GraphQL**, and **MongoDB**. This service handles user management and other core business logic for the application.

## 🚀 Getting Started

Follow the steps below to set up the backend locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/sidenor-backend.git
cd sidenor-backend
```

### 2. Install Dependencies

Make sure you install [nvm-windows](https://github.com/coreybutler/nvm-windows):

1. Download the installer: [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)
2. Run the installer and follow the setup instructions
3. Open a new Command Prompt (or PowerShell) and run:

```cmd
nvm install 22.14.0
nvm use 22.14.0
```

Then run:

```bash
yarn
```

### 3. Configure Environment Variables

- Rename the example environment file:

```bash
mv .env.example .env
```

- Request MongoDB credentials (username & password) from the project administrator.
- Update the `MONGODB_URI` in `.env` with the provided credentials:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/your-db?retryWrites=true&w=majority
```

## 🛠️ Development

To start the development server:

```bash
yarn dev
```

The GraphQL playground will be available at:  
`http://localhost:4000/graphql`


## 🧪 Scripts

- **`yarn dev`** — Start the development server with hot reload.


## 🧾 Technologies Used

- **Node.js**
- **Apollo Server (GraphQL)**
- **TypeScript**
- **MongoDB (via Mongoose)**
- **dotenv**

---

## 🧑‍💼 Contact

For access, credentials, or issues, please contact the system administrator or project lead.
