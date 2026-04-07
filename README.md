# Exam Management Dashboard

A full-stack web application for managing and visualizing exam data with a FastAPI backend and React frontend.

## Features

- **Backend API**: FastAPI server providing exam statistics
- **Frontend Dashboard**: React application with interactive charts
- **Data Visualization**: Grouped bar chart showing students admitted vs registered
- **Cross-Origin Support**: CORS enabled for frontend-backend communication

## Project Structure

```
exam-dashboard/
├── backend/
│   ├── main.py              # Flask application with API endpoints
│   ├── requirements.txt     # Python dependencies
│   └── .venv/              # Virtual environment (ignored in git)
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # React entry point
│   │   └── components/
│   │       └── ExamFunnelChart.js  # Chart component
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── package.json        # Node.js dependencies
│   └── node_modules/       # Dependencies (ignored in git)
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## Backend Setup

### 1. Navigate to the backend directory

```bash
cd backend
```

### 2. Create and activate a virtual environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the backend server

```bash
python main.py
```

The backend will start on `http://127.0.0.1:5000`

**API Endpoints:**
- `GET /` - Health check
- `GET /api/exam/1` - Get exam data for all groups

## Frontend Setup

### 1. Navigate to the frontend directory

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

The frontend will open at `http://localhost:3000`

## Running Both Services

### Option 1: Using Multiple Terminals

**Terminal 1 (Backend):**
```bash
cd backend
python main.py
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

### Option 2: Using a Task Runner

Create a `Makefile` or use npm scripts to run both services concurrently.

## API Response Example

```json
[
  {"group": "IT", "v1": 100, "v2": 95},
  {"group": "CSE", "v1": 120, "v2": 110},
  {"group": "ECE", "v1": 90, "v2": 85}
]
```

**Response Schema:**
- `group` (string): Department/group name
- `v1` (integer): Number of students admitted
- `v2` (integer): Number of students registered

## Technologies Used

### Backend
- Flask 2.3.3
- Flask-CORS 4.0.0
- Python 3.8+

### Frontend
- React 18.2.0
- Recharts 2.8.0
- Axios 1.6.0
- Tailwind CSS

## Development

### Backend Development

The backend runs in development mode with auto-reload disabled. To enable debug mode:

```python
app.run(host="127.0.0.1", port=5000, debug=True)
```

### Frontend Development

The React development server includes hot module reloading, so changes are reflected immediately.

## Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

This creates an optimized build in the `build/` directory.

### Backend Deployment

For production deployment, use a WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 main:app
```

## Git Setup and Deployment

### 1. Initialize git repository (if not already initialized)

```bash
git init
git add .
git commit -m "Initial commit: Exam Dashboard project"
```

### 2. Create a repository on GitHub

- Go to [GitHub](https://github.com/new)
- Create a new repository named `exam-dashboard`
- Do NOT initialize with README, .gitignore, or license (we have them locally)

### 3. Add remote and push

```bash
git remote add origin https://github.com/YOUR_USERNAME/exam-dashboard.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 4. Verify on GitHub

Visit `https://github.com/YOUR_USERNAME/exam-dashboard` to confirm the push was successful.

## What Gets Committed to Git

✅ **Source code:**
- `backend/main.py`
- `backend/requirements.txt`
- `frontend/src/`
- `frontend/public/`
- `frontend/package.json`
- `README.md`
- `.gitignore`

❌ **NOT committed:**
- `backend/.venv/` (ignored)
- `frontend/node_modules/` (ignored)
- `__pycache__/` (ignored)
- `.env` files (ignored)
- Build artifacts (ignored)

## Troubleshooting

### Backend not starting
- Check if port 5000 is already in use: `netstat -an | grep 5000`
- Ensure virtual environment is activated
- Run `pip install -r requirements.txt` again

### Frontend can't connect to backend
- Verify backend is running on `http://127.0.0.1:5000`
- Check browser console for CORS errors
- Ensure Flask-CORS is installed: `pip install flask-cors`

### Frontend build issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear npm cache: `npm cache clean --force`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning and development.

## Support

For issues or questions, please open an issue on GitHub.

---

**Happy coding!** 🚀
