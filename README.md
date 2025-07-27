# Quiz Application

A full-stack quiz application built with React frontend and Node.js backend, featuring interactive quizzes with real-time scoring and results tracking.

## 🎯 Features

- **Interactive Quiz Interface**: Multiple-choice questions with navigation
- **Real-time Scoring**: Instant feedback and point calculation
- **Results History**: Track all quiz attempts and scores
- **User Authentication**: Simple username-based identification
- **Responsive Design**: Works on desktop and mobile devices
- **Leaderboard**: View all user results in a table format

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI framework
- **Redux Toolkit** - State management
- **React Router v6** - Navigation
- **Axios** - HTTP client for API calls
- **CSS3** - Styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB Atlas account** - [Sign up here](https://www.mongodb.com/atlas)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/quiz-app.git
cd quiz-app
```

### 2. Install Dependencies

#### Backend Dependencies

```bash
cd server
npm install
```

#### Frontend Dependencies

```bash
cd ../client
npm install
```

### 3. Environment Configuration

#### Backend Environment Variables

Create a `.env` file in the `server` directory:

```bash
cd server
touch .env
```

Add the following content to `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
NODE_ENV=development
```

**Note**: Replace `your_username`, `your_password`, and `your_cluster` with your actual MongoDB Atlas credentials.

#### Frontend Environment Variables

Create a `.env` file in the `client` directory:

```bash
cd client
touch .env
```

Add the following content to `client/.env`:

```env
REACT_APP_SERVER_HOSTNAME=http://localhost:5000
```

### 4. Database Setup

#### Option A: Use Existing Questions

If you want to use the pre-loaded questions:

```bash
# Start the server first (see step 5)
# Then in a new terminal, make a POST request to seed the database
curl -X POST http://localhost:5000/api/questions
```

#### Option B: Add Custom Questions

1. Edit `server/database/data.js` to add your own questions
2. Follow the same format as existing questions
3. Update the `answers` array accordingly
4. Make the POST request to seed the database

### 5. Running the Application

#### Start the Backend Server

```bash
cd server
npm start
```

You should see:

```
Server connected to http://localhost:5000
```

#### Start the Frontend Application

Open a new terminal window:

```bash
cd client
npm start
```

The React app will open automatically in your browser at `http://localhost:3000`

## 🎮 How to Use

### Taking a Quiz

1. **Enter your username** on the home page
2. **Click "Start Quiz"** to begin
3. **Answer questions** by selecting one option per question
4. **Navigate** using "Prev" and "Next" buttons
5. **Complete the quiz** to see your results

### Understanding Results

- **Total Quiz Points**: Maximum possible points (10 per question)
- **Questions Attempted**: Number of questions you answered
- **Total Earned Points**: Your actual score
- **Quiz Result**: "Passed" (≥50%) or "Failed" (<50%)

### Viewing History

- **Results Table**: Shows all quiz attempts by all users
- **Sorting**: Results are sorted by username and attempt number
- **Data**: Displays username, earned points, and result status

## 📁 Project Structure

```
quiz_app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── redux/         # Redux store and reducers
│   │   ├── helper/        # Utility functions
│   │   └── styles/        # CSS files
│   ├── package.json
│   └── .env
├── server/                 # Node.js backend
│   ├── controllers/        # API controllers
│   ├── database/          # Database connection and data
│   ├── models/            # Mongoose schemas
│   ├── router/            # API routes
│   ├── server.js          # Main server file
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
```

## 🔧 API Endpoints

### Questions

- `GET /api/questions` - Retrieve all questions
- `POST /api/questions` - Insert questions into database
- `DELETE /api/questions` - Delete all questions

### Results

- `GET /api/result` - Retrieve all quiz results
- `POST /api/result` - Save a new quiz result
- `DELETE /api/result` - Delete all results

## 🐛 Troubleshooting

### Common Issues

#### "No Data Found" in Results Table

1. Check if the server is running on the correct port
2. Verify your `.env` files have correct URLs
3. Check browser console for API errors
4. Ensure MongoDB connection is working

#### Server Connection Issues

1. Verify MongoDB Atlas connection string
2. Check if the server is running on the expected port
3. Look for error messages in the server console

#### Frontend Not Loading

1. Ensure all dependencies are installed (`npm install`)
2. Check if the backend server is running
3. Verify environment variables are set correctly

### Debug Mode

To enable debug logging, check the browser console and server terminal for detailed error messages.

## 🚀 Deployment

This application can be deployed to various platforms:

- **Vercel** (Recommended for beginners)
- **Railway**
- **Render**
- **Heroku**
- **DigitalOcean App Platform**

See deployment documentation for your chosen platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the database
- Express.js team for the web framework
- All contributors and testers

---

**Happy Quizzing! 🎯**
