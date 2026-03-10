import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import HrDashBoard from './HrDashBoard';
import EmpDashboard from './EmpDashboard';
import SetPassword from './SetPassword';
import HrLeaveManagement from './HrLeaveManagement';
import EmpLeaveManagement from './EmpLeaveManagement';
import HrEmployeeManagement from './HrEmployeeManagement';
import HolidayCalendar from "./HolidayCalendar";
import EmpMgr from "./EmpMgr";

// Protected Route component with authentication check
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check sessionStorage for login status
        const loggedIn = sessionStorage.getItem('loggedIn');
        const role = sessionStorage.getItem('role');

        // If sessionStorage has valid login data, trust it (user just logged in)
        if (loggedIn === 'true' && (role === 'HR' || role === 'EMP')) {
          setIsAuthenticated(true);
          setIsLoading(false);
          return;
        }

        // If no session data, user is not authenticated
        setIsAuthenticated(false);
        setIsLoading(false);

      } catch (error) {
        console.error('Auth check failed:', error);
        sessionStorage.clear();
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#4b5563'
      }}>
        <div style={{textAlign: 'center'}}>
          <div style={{marginBottom: '12px'}}>⏳</div>
          Checking authentication...
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    // Use the basename in the redirect
    const basePath = window.location.pathname.startsWith('/hrms/dev') ? '/hrms/dev' : '';
    return <Navigate to={`${basePath}/`} replace />;
  }

  // Return the protected component if authenticated
  return children;
};

function App() {
  // Get the basename from the current URL path
  const basename = window.location.pathname.startsWith('/hrms/dev') ? '/hrms/dev' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        
        <Route 
          path="/hr-dashboard" 
          element={
            <ProtectedRoute>
              <HrDashBoard />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/emp-dashboard" 
          element={
            <ProtectedRoute>
              <EmpDashboard />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/hrleave-management" 
          element={
            <ProtectedRoute>
              <HrLeaveManagement/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/empleave-management" 
          element={
            <ProtectedRoute>
              <EmpLeaveManagement/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/hremployee-management" 
          element={
            <ProtectedRoute>
              <HrEmployeeManagement/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/hr-holiday-calendar" 
          element={
            <ProtectedRoute>
              <HolidayCalendar />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/emp_mgr" 
          element={
            <ProtectedRoute>
              <EmpMgr/>
            </ProtectedRoute>
          }
        />

        {/* Catch all unmatched routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;