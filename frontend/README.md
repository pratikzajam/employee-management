# Employee Management System - Frontend

A modern, responsive React application for managing employee data with a beautiful UI built using Vite, React, and Tailwind CSS.

## 🚀 Features

- **Employee CRUD Operations**: Create, Read, Update, and Delete employees
- **Real-time Search**: Search employees by name instantly
- **Pagination**: Navigate through employee lists with 5 items per page
- **Responsive Design**: Fully responsive UI that works on all devices
- **Toast Notifications**: Real-time feedback for all operations
- **Modern UI/UX**: Beautiful gradient designs and smooth animations
- **Context API**: Centralized state management
- **Lucide Icons**: Clean and modern iconography

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Backend API running (see backend README)

## 🛠️ Installation

1. Navigate to the frontend directory:
```bash
cd employee-management/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000/api/employee/v1
```

4. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Tech Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 3.4.17
- **HTTP Client**: Axios 1.12.2
- **Icons**: Lucide React 0.544.0
- **Notifications**: React Toastify 11.0.5
- **Validation**: Validator 13.15.15

## 📁 Project Structure

```
frontend/
├── src/
│   ├── Components/
│   │   ├── EmployeeList.jsx       # Main employee list with search & pagination
│   │   ├── AddEmployeeModal.jsx   # Modal for adding new employees
│   │   └── EditEmployeeModal.jsx  # Modal for editing employees
│   ├── Context/
│   │   └── EmployeeContext.jsx    # Global state management
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # Application entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Key Features Breakdown

### Employee List
- Displays all employees in a responsive table
- Real-time search functionality
- Pagination (5 employees per page)
- Edit and delete actions for each employee
- Loading states and empty states

### Add/Edit Employee
- Modal-based forms for better UX
- Field validation
- Email format validation
- Toast notifications for success/error

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly interface
- Hidden columns on mobile for better UX

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🌐 Environment Variables

Create a `.env` file with:

```env
VITE_API_URL=http://localhost:3000/api/employee/v1
```

## 📱 UI Components

### Employee Card Features
- Avatar with first letter of name
- Name and email display
- Position and department tags
- Quick action buttons (Edit/Delete)

### Search Bar
- Real-time filtering
- Case-insensitive search
- Search by employee name

### Pagination
- Previous/Next navigation
- Page number buttons
- Shows current page and total items
- Responsive pagination controls

## 🎯 Usage Examples

### Adding an Employee
1. Click "Add Employee" button
2. Fill in the required fields (Name, Email, Position)
3. Optionally add phone number
4. Click "Submit"
5. Toast notification confirms success

### Editing an Employee
1. Click the edit icon (pencil) on any employee row
2. Modal opens with pre-filled data
3. Modify the fields as needed
4. Click "Update"
5. Changes are reflected immediately

### Deleting an Employee
1. Click the delete icon (trash) on any employee row
2. Confirm deletion in the prompt
3. Employee is removed from the list
4. Toast notification confirms deletion

## 🎨 Styling

The application uses Tailwind CSS with custom configurations:

- **Primary Color**: Blue (600-700)
- **Background**: Gradient from gray-50 to gray-100
- **Cards**: White with shadow-lg
- **Hover Effects**: Smooth color transitions
- **Responsive Breakpoints**: sm, md, lg, xl

## 🔒 Form Validation

- **Email**: Validated using validator library
- **Required Fields**: Name, Email, Position
- **Optional Fields**: Phone number
- **Client-side validation** before API calls

## 🚦 API Integration

The frontend communicates with the backend API using Axios:

```javascript
// Example API call structure
const API_URL = import.meta.env.VITE_API_URL;

// Fetch all employees
axios.get(`${API_URL}/employees`)

// Add employee
axios.post(`${API_URL}/employees`, data)

// Update employee
axios.patch(`${API_URL}/employees/${id}`, data)

// Delete employee
axios.delete(`${API_URL}/employees/${id}`)
```

## 🧪 Testing Locally

1. Ensure backend is running on port 3000
2. Start frontend dev server: `npm run dev`
3. Navigate to `http://localhost:5173`
4. Test CRUD operations with sample data

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## 🌟 Component Highlights

### Context Provider
- Centralized state management
- Employee data fetching and caching
- CRUD operation handlers
- Loading and error states

### Toast Notifications
- Success messages (green)
- Error messages (red)
- Auto-dismiss after 3 seconds
- Position: top-right

## 📊 Performance Optimizations

- **Code Splitting**: Vite automatically splits code
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Proper sizing and formats
- **Minimal Re-renders**: React Context optimization

## 🎨 UI/UX Features

- **Gradient Headers**: Beautiful blue gradient backgrounds
- **Avatar System**: Auto-generated avatars from names
- **Icon Library**: Lucide React for consistent icons
- **Hover States**: Interactive feedback on all buttons
- **Loading States**: Spinner animations during API calls
- **Empty States**: Friendly messages when no data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Add employee profile pictures
- [ ] Implement sorting by columns
- [ ] Add filtering by department/position
- [ ] Export employee data to CSV/Excel
- [ ] Dark mode support
- [ ] Advanced search with multiple filters
- [ ] Bulk operations (delete, update)
- [ ] Employee detail view page

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Pratik Zajam**
- GitHub: [@pratikzajam](https://github.com/pratikzajam)

## 📞 Support

For support, open an issue in the repository or contact the development team.

---

Built with ⚛️ React + ⚡ Vite + 🎨 Tailwind CSS