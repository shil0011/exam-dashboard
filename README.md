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

### Frontend Development

The React development server includes hot module reloading, so changes are reflected immediately.

## License

MIT License - feel free to use this project for learning and development.

## Support

For issues or questions, please open an issue on GitHub.


