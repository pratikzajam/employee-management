# Employee Management System

A full-stack MERN application for managing employee records with a modern, responsive UI and RESTful API backend.

## 📋 Overview

This Employee Management System provides a complete solution for managing employee data with features like adding, editing, deleting, and searching employees. The application is built with a React frontend and Node.js/Express backend, using MongoDB for data persistence.

## ✨ Features

- **Full CRUD Operations**: Create, Read, Update, and Delete employee records
- **Real-time Search**: Search employees by name instantly
- **Pagination**: Navigate through employee lists with 5 items per page
- **Email Validation**: Validates email addresses before adding employees
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Toast Notifications**: Real-time feedback for all operations
- **Modern UI**: Beautiful gradient designs with smooth animations
- **RESTful API**: Well-structured backend API with proper error handling

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.1 - UI library
- **Vite** 7.1.7 - Build tool
- **Tailwind CSS** 3.4.17 - Styling
- **Axios** 1.12.2 - HTTP client
- **Lucide React** 0.544.0 - Icons
- **React Toastify** 11.0.5 - Notifications
- **Validator** 13.15.15 - Form validation

### Backend
- **Node.js** - Runtime environment
- **Express** 5.1.0 - Web framework
- **MongoDB** - Database
- **Mongoose** 8.18.2 - ODM
- **CORS** 2.8.5 - Cross-origin resource sharing
- **Dotenv** 17.2.2 - Environment variables
- **Email Validator** 2.0.4 - Email validation

## 📁 Project Structure

```
employee-management/
│
├── backend/
│   ├── api/
│   │   └── index.js                        # Main application entry point
│   ├── src/
│   │   ├── Controllers/
│   │   │   └── employee.controller.js      # Employee business logic
│   │   ├── Models/
│   │   │   └── employee.model.js           # Mongoose employee schema
│   │   ├── Routes/
│   │   │   └── employee.routes.js          # API route definitions
│   │   ├── Middlewares/
│   │   │   └── fieldValidator.js           # Request validation middleware
│   │   ├── config/
│   │   │   └── db.config.js                # MongoDB connection configuration
│   │   └── __tests__/
│   │       └── employee.test.js            # Jest test suite
│   ├── .gitignore                          # Git ignore file
│   ├── package.json                        # Dependencies and scripts
│   ├── vercel.json                         # Vercel deployment configuration
│   └── README.md                           # Backend documentation
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── EmployeeList.jsx            # Main employee list component
│   │   │   ├── AddEmployeeModal.jsx        # Add employee modal
│   │   │   └── EditEmployeeModal.jsx       # Edit employee modal
│   │   ├── Context/
│   │   │   └── EmployeeContext.jsx         # Global state management
│   │   ├── assets/
│   │   │   └── react.svg                   # React logo
│   │   ├── App.jsx                         # Main app component
│   │   ├── App.css                         # App-specific styles
│   │   ├── main.jsx                        # Application entry point
│   │   └── index.css                       # Global styles with Tailwind
│   ├── public/
│   │   └── vite.svg                        # Vite logo
│   ├── .gitignore                          # Git ignore file
│   ├── .env                                # Environment variables
│   ├── index.html                          # HTML entry point
│   ├── package.json                        # Dependencies and scripts
│   ├── vite.config.js                      # Vite configuration
│   ├── tailwind.config.js                  # Tailwind CSS configuration
│   ├── postcss.config.js                   # PostCSS configuration
│   ├── eslint.config.js                    # ESLint configuration
│   └── README.md                           # Frontend documentation
│
├── .gitignore                              # Root git ignore
└── README.md                               # Main project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/pratikzajam/employee-management.git
cd employee-management
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file
echo "PORT=3000" > .env
echo "MONGO_URI=your_mongodb_connection_string" >> .env

# Start backend server
npm start
```

3. **Frontend Setup**
```bash
cd frontend/my-project
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:3000/api/employee/v1" > .env

# Start frontend dev server
npm run dev
```

4. **Access the application**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/employee-management
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/employee-management
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000/api/employee/v1
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employee/v1/employees` | Get all employees |
| GET | `/api/employee/v1/employees/:id` | Get employee by ID |
| POST | `/api/employee/v1/employees` | Add new employee |
| PATCH | `/api/employee/v1/employees/:id` | Update employee |
| DELETE | `/api/employee/v1/employees/:id` | Delete employee |

## 💾 Database Schema

```javascript
{
  name: String (required),
  email: String (required, unique),
  position: String (required),
  phone: String (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🎯 Key Features Explained

### Search Functionality
- Real-time filtering as you type
- Searches through employee names
- Case-insensitive search
- Pagination resets on search

### Pagination
- 5 employees per page
- Previous/Next navigation
- Direct page number buttons
- Shows current range and total count

### Modals
- Add Employee Modal - Form to create new employee
- Edit Employee Modal - Pre-filled form for updating
- Clean, centered overlay design
- Easy close with X button or Cancel

### Toast Notifications
- Success: Green notifications for successful operations
- Error: Red notifications for errors
- Info: Blue notifications for information
- Auto-dismiss after 3 seconds

## 🎨 UI Components

### Employee List
- Table view with employee data
- Avatar with first letter of name
- Email and phone display
- Position/role badge
- Action buttons (Edit/Delete)
- Loading and empty states

### Forms
- Input validation
- Required field indicators
- Email format validation
- Phone number validation (10 digits)
- Clean, accessible design

## 🔐 Validation

### Frontend
- Required fields checking
- Email format validation
- Phone number length validation (10 digits)
- Real-time validation feedback

### Backend
- Field presence validation
- Email format validation
- Duplicate email checking
- MongoDB ObjectId validation

## 🚦 Error Handling

### Backend Responses
```json
{
  "status": true/false,
  "message": "Description of result",
  "data": {} // or [] or null
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `409` - Conflict
- `500` - Server Error

## 🧪 Testing the Application

1. **Add Employee**: Click "Add Employee" button and fill the form
2. **Search**: Type in the search bar to filter employees
3. **Edit**: Click the edit (pencil) icon on any employee
4. **Delete**: Click the delete (trash) icon and confirm
5. **Pagination**: Navigate through pages using pagination controls

## 📦 Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend/my-project
npm run build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Role-based access control
- [ ] Employee profile pictures/avatars
- [ ] Advanced filtering (by position, department, etc.)
- [ ] Sorting capabilities
- [ ] Export data to CSV/Excel
- [ ] Import employees from CSV
- [ ] Email notifications
- [ ] Activity logs
- [ ] Department management
- [ ] Bulk operations
- [ ] Advanced search with multiple criteria
- [ ] Dashboard with analytics
- [ ] Dark mode support
- [ ] Multi-language support

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Pratik Zajam**

- GitHub: [@pratikzajam](https://github.com/pratikzajam)
- Repository: [employee-management](https://github.com/pratikzajam/employee-management)

## 🙏 Acknowledgments

- React team for the amazing library
- Express.js for the robust backend framework
- MongoDB for the flexible database
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors



## 📄 Additional Documentation

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

---

**Note**: Make sure MongoDB is running before starting the backend server. For MongoDB Atlas, ensure your IP address is whitelisted in the Atlas dashboard.

Made with ❤️ using MERN Stack