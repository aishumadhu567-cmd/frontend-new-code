// import { useState, useRef, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import "./HrDashBoard.css";

// import ventureBizLogo from "./assets/venturebiz_logo.png";

// import HrEmployeeManagement from "./HrEmployeeManagement";
// import HrSalaryManagement from "./HrSalaryManagement";
// import Department from "./Department";
// import EmpMgr from "./EmpMgr";
// import HrLeaveManagement from "./HrLeaveManagement";
// import HolidayCalendar from "./HolidayCalendar";
// import CtcPer from "./CtcPer";

// /* ─────────────────────────────────────────────────────────────
//    SVG ICON COMPONENT  (inline, no external dependency)
// ───────────────────────────────────────────────────────────── */
// const Icon = ({ d, size = 16, color = "currentColor", strokeWidth = 1.8 }) => (
//   <svg
//     width={size} height={size} viewBox="0 0 24 24"
//     fill="none" stroke={color} strokeWidth={strokeWidth}
//     strokeLinecap="round" strokeLinejoin="round"
//     style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
//   >
//     <path d={d} />
//   </svg>
// );

// const Icons = {
//   Dashboard:   "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
//   Employee:    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8 4 4 0 000-8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
//   Department:  "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10 M3 21h18",
//   Salary:      "M12 1v22 M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6",
//   Manager:     "M20 21v-2a4 4 0 00-4-4h-4 M8 7a4 4 0 100 8 4 4 0 000-8z M16 3.13a4 4 0 010 7.75 M21 21v-2a4 4 0 00-3-3.87",
//   Leave:       "M8 2v4 M16 2v4 M3 10h18 M21 8H3a1 1 0 00-1 1v11a2 2 0 002 2h16a2 2 0 002-2V9a1 1 0 00-1-1z",
//   Holiday:     "M12 2a10 10 0 100 20A10 10 0 0012 2z M12 6v6l4 2",
//   CTC:         "M22 12h-4l-3 9L9 3l-3 9H2",
//   Search:      "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35",
//   Menu:        "M3 12h18 M3 6h18 M3 18h18",
//   User:        "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 3a4 4 0 100 8 4 4 0 000-8z",
//   Lock:        "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z M7 11V7a5 5 0 0110 0v4",
//   Logout:      "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
//   Eye:         "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
//   EyeOff:      "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24 M1 1l22 22",
//   Download:    "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
//   File:        "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6",
//   View:        "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
// };

// /* ── Sidebar nav items with SVG paths ── */
// const NAV_ITEMS = [
//   { key: "dashboard",       label: "Dashboard",            icon: Icons.Dashboard  },
//   { key: "employee",        label: "Employee Management",  icon: Icons.Employee   },
//   { key: "department",      label: "Department Management",icon: Icons.Department },
//   { key: "salary",          label: "Salary Management",    icon: Icons.Salary     },
//   { key: "manager",         label: "Manager Management",   icon: Icons.Manager    },
//   { key: "leave",           label: "Leave Management",     icon: Icons.Leave      },
//   { key: "holidaycalendar", label: "Holiday Calendar",     icon: Icons.Holiday    },
//   { key: "ctc",             label: "Set CTC %",            icon: Icons.CTC        },
// ];

// export default function HrDashBoard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [logout, setLogout] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);

//   /* PASSWORD */
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showNewPass, setShowNewPass] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [searchErrors, setSearchErrors] = useState({});

//   const strongPasswordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>?]).{8,16}$/;

//   const [activePage, setActivePage] = useState("dashboard");

//   const [searchParams, setSearchParams] = useState({
//     username: "",
//     firstName: "",
//     departmentName: "",
//     designationName: "",
//     startDate: "",
//     endDate: "",
//   });

//   const [searchResults, setSearchResults]             = useState([]);
//   const [selectedEmployee, setSelectedEmployee]       = useState(null);
//   const [documents, setDocuments]                     = useState([]);
//   const [loadingSearch, setLoadingSearch]             = useState(false);
//   const [loadingDocuments, setLoadingDocuments]       = useState(false);
//   const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);

//   const profileRef = useRef(null);
//   const resultsRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => { window.scrollTo(0, 0); }, [activePage]);

//   if (logout) return <Navigate to="/" replace />;

//   /* ── Password update ── */
//   const updatePassword = async () => {
//     if (!newPassword || !confirmPassword) { alert("Please fill all fields"); return; }
//     if (newPassword !== confirmPassword)  { alert("Passwords do not match"); return; }
//     if (!strongPasswordRegex.test(newPassword)) {
//       alert(
//         "Password must be 8–16 characters and include:\n" +
//         "• Uppercase letter\n• Lowercase letter\n• Number\n• Special character"
//       );
//       return;
//     }
//     try {
//       setLoading(true);
//       await axios.put(`/api/password`, { password: newPassword }, { withCredentials: true });
//       alert("Password updated successfully");
//       setShowPasswordModal(false);
//       setNewPassword("");
//       setConfirmPassword("");
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to update password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ── Search ── */
//   const searchEmployees = async () => {
//     const errors = {};
//     if (searchParams.firstName    && searchParams.firstName.length    < 3) errors.firstName    = "Minimum 3 characters required";
//     if (searchParams.departmentName  && searchParams.departmentName.length  < 3) errors.departmentName  = "Minimum 3 characters required";
//     if (searchParams.designationName && searchParams.designationName.length < 3) errors.designationName = "Minimum 3 characters required";
//     if (Object.keys(errors).length > 0) { setSearchErrors(prev => ({ ...prev, ...errors })); return; }
//     if (searchParams.username && !/^VPPL\d{3}$/.test(searchParams.username)) {
//       setSearchErrors(prev => ({ ...prev, username: "Enter valid Username format: VPPL + 3 digits (e.g., VPPL001)" }));
//       return;
//     }
//     try {
//       setLoadingSearch(true);
//       const params = new URLSearchParams();
//       Object.entries(searchParams).forEach(([key, value]) => { if (value) params.append(key, value); });
//       const response = await axios.get(`/api/hr/search?${params.toString()}`, { withCredentials: true });
//       setSearchResults(response.data);
//       setSelectedEmployee(null);
//       setDocuments([]);
//       setShowEmployeeDetails(false);
//       setTimeout(() => {
//         if (response.data.length > 0 && resultsRef.current)
//           resultsRef.current.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//       if (response.data.length === 0) alert("No employees found with the specified criteria");
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to search employees");
//     } finally {
//       setLoadingSearch(false);
//     }
//   };

//   /* ── Fetch documents ── */
//   const fetchEmployeeDocuments = async (userId) => {
//     try {
//       setLoadingDocuments(true);
//       const response = await axios.get(`/api/hr/search-doc/${userId || 7}`, { withCredentials: true });
//       setDocuments(response.data);
//     } catch (err) {
//       console.error("Failed to fetch documents:", err);
//       alert("Failed to fetch employee documents");
//     } finally {
//       setLoadingDocuments(false);
//     }
//   };

//   /* ── View employee details ── */
//   const viewEmployeeDetails = (employee) => {
//     setSelectedEmployee(employee);
//     fetchEmployeeDocuments(7);
//     setShowEmployeeDetails(true);
//   };

//   /* ── Download document ── */
//   const downloadDocument = async (userId, documentId, documentName) => {
//     try {
//       const response = await axios.get(
//         `/api/v1/users/${userId}/documents/${documentId}/download`,
//         { withCredentials: true, responseType: "arraybuffer" }
//       );
//       const bytes = new Uint8Array(response.data);
//       let extension = "bin";
//       if      (bytes[0]===0x89 && bytes[1]===0x50 && bytes[2]===0x4e && bytes[3]===0x47) extension = "png";
//       else if (bytes[0]===0xff && bytes[1]===0xd8 && bytes[2]===0xff)                    extension = "jpg";
//       else if (bytes[0]===0x25 && bytes[1]===0x50 && bytes[2]===0x44 && bytes[3]===0x46) extension = "pdf";
//       const blob = new Blob([response.data]);
//       const url  = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${documentName}.${extension}`;
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (err) {
//       console.error("Download error:", err.response || err);
//       alert("Failed to download document. Please try again.");
//     }
//   };

//   /* ── Reset search ── */
//   const resetSearch = () => {
//     setSearchParams({ username:"", firstName:"", departmentName:"", designationName:"", startDate:"", endDate:"" });
//     setSearchResults([]);
//     setSelectedEmployee(null);
//     setDocuments([]);
//     setShowEmployeeDetails(false);
//     setSearchErrors({});
//   };

//   /* ── Clear all errors on any field focus ── */
//   const handleFieldFocus = () => { setSearchErrors({}); };

//   /* ────────────────────────────────────────────────────────────
//      BUG FIX: previously this function was also setting
//      username: "" which erased the Employee ID field every time
//      the user typed in First Name / Department / Designation.
//      Now it only updates the field that actually changed and
//      clears only that field's validation error.
//   ──────────────────────────────────────────────────────────── */
//   const handleAlphabetFieldChange = (field, value) => {
//     const cleaned = value.replace(/[^a-zA-Z\s]/g, "");
//     setSearchParams(prev => ({ ...prev, [field]: cleaned }));
//     if (searchErrors[field]) {
//       setSearchErrors(prev => ({ ...prev, [field]: "" }));
//     }
//   };

//   /* ── Format date array ── */
//   const formatDate = (dateArray) => {
//     if (!dateArray || dateArray.length < 3) return "N/A";
//     const [year, month, day] = dateArray;
//     return `${day.toString().padStart(2,"0")}/${month.toString().padStart(2,"0")}/${year}`;
//   };

//   /* ═══════════════ RENDER CONTENT ═══════════════ */
//   const renderContent = () => {
//     switch (activePage) {
//       case "employee":        return <HrEmployeeManagement />;
//       case "department":      return <Department />;
//       case "salary":          return <HrSalaryManagement />;
//       case "ctc":             return <CtcPer />;
//       case "manager":         return <EmpMgr />;
//       case "leave":           return <HrLeaveManagement />;
//       case "holidaycalendar": return <HolidayCalendar />;
//       case "dashboard":       return (
//         <div className="dashboard-content">

//           {/* WELCOME BANNER */}
//           <div className="welcome-banner">
//             <div className="welcome-text">
//               <h2>Welcome to HR Dashboard</h2>
//               <p>Manage employees, departments, and search employee records</p>
//             </div>
//           </div>

//           {/* SEARCH SECTION */}
//           <div className="search-section">
//             <div className="section-header">
//               <div className="section-icon-title">
//                 <div className="section-icon">
//                   <Icon d={Icons.Search} size={17} color="#2563eb" />
//                 </div>
//                 <div>
//                   <h3>Advanced Employee Search</h3>
//                   <p>Search employees by multiple criteria</p>
//                 </div>
//               </div>
//             </div>

//             <div className="search-form">
//               <div className="form-row">

//                 {/* Username */}
//                 <div className="form-group">
//                   <label>Employee ID</label>
//                   <input
//                     type="text"
//                     placeholder="e.g., VPPL001"
//                     value={searchParams.username}
//                     maxLength={7}
//                     onFocus={() => handleFieldFocus('username')}
//                     onChange={(e) => {
//                       let raw = e.target.value.toUpperCase();
//                       if (raw === "") {
//                         setSearchParams(prev => ({ ...prev, username: "" }));
//                         setSearchErrors(prev => ({ ...prev, username: "" }));
//                         return;
//                       }
//                       const digits = raw.replace(/\D/g, "").slice(0, 3);
//                       setSearchParams(prev => ({ ...prev, username: "VPPL" + digits }));
//                       if (searchErrors.username) setSearchErrors(prev => ({ ...prev, username: "" }));
//                     }}
//                   />
//                   {searchErrors.username && <span className="error-text">{searchErrors.username}</span>}
//                 </div>

//                 {/* First Name */}
//                 <div className="form-group">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     placeholder="e.g., John"
//                     value={searchParams.firstName}
//                     maxLength={30}
//                     onFocus={() => handleFieldFocus('firstName')}
//                     onChange={(e) => handleAlphabetFieldChange('firstName', e.target.value)}
//                   />
//                   {searchErrors.firstName && <span className="error-text">{searchErrors.firstName}</span>}
//                 </div>

//                 {/* Department */}
//                 <div className="form-group">
//                   <label>Department</label>
//                   <input
//                     type="text"
//                     placeholder="e.g., Finance"
//                     value={searchParams.departmentName}
//                     maxLength={30}
//                     onFocus={() => handleFieldFocus('departmentName')}
//                     onChange={(e) => handleAlphabetFieldChange('departmentName', e.target.value)}
//                   />
//                   {searchErrors.departmentName && <span className="error-text">{searchErrors.departmentName}</span>}
//                 </div>

//                 {/* Designation */}
//                 <div className="form-group">
//                   <label>Designation</label>
//                   <input
//                     type="text"
//                     placeholder="e.g., Analyst"
//                     value={searchParams.designationName}
//                     maxLength={30}
//                     onFocus={() => handleFieldFocus('designationName')}
//                     onChange={(e) => handleAlphabetFieldChange('designationName', e.target.value)}
//                   />
//                   {searchErrors.designationName && <span className="error-text">{searchErrors.designationName}</span>}
//                 </div>
//               </div>

//               {/* Date range row */}
//               <div className="form-row">
//                 <div className="form-group date-range">
//                   <label>Joining Date Range</label>
//                   <div className="date-inputs">
//                     <input
//                       type="date"
//                       value={searchParams.startDate}
//                       onFocus={() => handleFieldFocus('startDate')}
//                       onChange={(e) => setSearchParams(prev => ({ ...prev, startDate: e.target.value }))}
//                       placeholder="Start Date"
//                     />
//                     <span className="date-separator">to</span>
//                     <input
//                       type="date"
//                       value={searchParams.endDate}
//                       onFocus={() => handleFieldFocus('endDate')}
//                       onChange={(e) => setSearchParams(prev => ({ ...prev, endDate: e.target.value }))}
//                       placeholder="End Date"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="form-actions">
//                 <button className="btn btn-primary" onClick={searchEmployees} disabled={loadingSearch}>
//                   <Icon d={Icons.Search} size={15} color="#fff" />
//                   {loadingSearch ? "Searching..." : "Search Employees"}
//                 </button>
//                 <button className="btn btn-secondary" onClick={resetSearch}>
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* SEARCH RESULTS */}
//           {searchResults.length > 0 && !showEmployeeDetails && (
//             <div className="results-section" ref={resultsRef}>
//               <div className="section-header">
//                 <div className="section-icon-title">
//                   <div className="section-icon">
//                     <Icon d={Icons.Employee} size={17} color="#2563eb" />
//                   </div>
//                   <div>
//                     <h3>Search Results</h3>
//                     <p>{searchResults.length} employee(s) found</p>
//                   </div>
//                 </div>
//                 <button className="btn btn-ghost" onClick={resetSearch}>
//                   Clear Results
//                 </button>
//               </div>

//               <div className="results-table-container">
//                 <table className="results-table">
//                   <thead>
//                     <tr>
//                       <th>Employee ID</th>
//                       <th>Full Name</th>
//                       <th>Department</th>
//                       <th>Designation</th>
//                       <th>Date of Joining</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {searchResults.map((employee, index) => (
//                       <tr key={index}>
//                         <td><span className="username-badge11">{employee.username}</span></td>
//                         <td className="employee-name">{employee.firstName} {employee.lastName}</td>
//                         <td>{employee.departmentName}</td>
//                         <td>{employee.designationName}</td>
//                         <td>{formatDate(employee.dateOfJoining)}</td>
//                         <td>
//                           <button className="btn btn-view" onClick={() => viewEmployeeDetails(employee)}>
//                             <Icon d={Icons.View} size={13} />
//                             View Details
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* EMPLOYEE DETAILS VIEW */}
//           {selectedEmployee && showEmployeeDetails && (
//             <div className="employee-details-section">
//               <div className="section-header">
//                 <div className="section-icon-title">
//                   <div className="section-icon">
//                     <Icon d={Icons.User} size={17} color="#2563eb" />
//                   </div>
//                   <div>
//                     <h3>Employee Details</h3>
//                     <p>{selectedEmployee.firstName} {selectedEmployee.lastName}</p>
//                   </div>
//                 </div>
//                 <div className="header-actions">
//                   <span className="employee-id">ID: {selectedEmployee.username}</span>
//                   <button className="btn btn-ghost" onClick={() => setShowEmployeeDetails(false)}>
//                     ← Back to Results
//                   </button>
//                 </div>
//               </div>

//               <div className="details-grid">
//                 {/* Personal */}
//                 <div className="detail-card">
//                   <h4>👤 Personal Information</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">Full Name</span><span className="detail-value">{selectedEmployee.firstName} {selectedEmployee.middleName} {selectedEmployee.lastName}</span></div>
//                     <div className="detail-item"><span className="detail-label">Email</span><span className="detail-value">{selectedEmployee.emailId}</span></div>
//                     <div className="detail-item"><span className="detail-label">Phone</span><span className="detail-value">{selectedEmployee.phoneNumber}</span></div>
//                     <div className="detail-item"><span className="detail-label">Date of Birth</span><span className="detail-value">{formatDate(selectedEmployee.dob)}</span></div>
//                     <div className="detail-item"><span className="detail-label">Gender</span><span className="detail-value">{selectedEmployee.gender}</span></div>
//                     <div className="detail-item"><span className="detail-label">Marital Status</span><span className="detail-value">{selectedEmployee.maritalStatus}</span></div>
//                     <div className="detail-item"><span className="detail-label">Blood Group</span><span className="detail-value">{selectedEmployee.bloodGroup}</span></div>
//                     <div className="detail-item"><span className="detail-label">Nationality</span><span className="detail-value">{selectedEmployee.nationality}</span></div>
//                   </div>
//                 </div>

//                 {/* Employment */}
//                 <div className="detail-card">
//                   <h4>💼 Employment Information</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">Department</span><span className="detail-value">{selectedEmployee.departmentName}</span></div>
//                     <div className="detail-item"><span className="detail-label">Designation</span><span className="detail-value">{selectedEmployee.designationName}</span></div>
//                     <div className="detail-item"><span className="detail-label">Work Location</span><span className="detail-value">{selectedEmployee.workLocation}</span></div>
//                     <div className="detail-item"><span className="detail-label">Date of Joining</span><span className="detail-value">{formatDate(selectedEmployee.dateOfJoining)}</span></div>
//                     <div className="detail-item"><span className="detail-label">PF UAN</span><span className="detail-value">{selectedEmployee.pfUan}</span></div>
//                     <div className="detail-item"><span className="detail-label">ESI</span><span className="detail-value">{selectedEmployee.esi}</span></div>
//                   </div>
//                 </div>

//                 {/* Financial */}
//                 <div className="detail-card">
//                   <h4>💰 Financial Information</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">CTC</span><span className="detail-value highlight">₹{selectedEmployee.ctc?.toLocaleString()}</span></div>
//                     <div className="detail-item"><span className="detail-label">Basic Salary</span><span className="detail-value">₹{selectedEmployee.basic?.toLocaleString()}</span></div>
//                     <div className="detail-item"><span className="detail-label">HRA</span><span className="detail-value">₹{selectedEmployee.hra?.toLocaleString()}</span></div>
//                     <div className="detail-item"><span className="detail-label">Conveyance Allowance</span><span className="detail-value">₹{selectedEmployee.conveyanceAllowance?.toLocaleString()}</span></div>
//                     <div className="detail-item"><span className="detail-label">PF</span><span className="detail-value">₹{selectedEmployee.pf?.toLocaleString()}</span></div>
//                   </div>
//                 </div>

//                 {/* Bank */}
//                 <div className="detail-card">
//                   <h4>🏦 Bank Information</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">Bank Name</span><span className="detail-value">{selectedEmployee.bankName}</span></div>
//                     <div className="detail-item"><span className="detail-label">Account Number</span><span className="detail-value">{selectedEmployee.accountNumber}</span></div>
//                     <div className="detail-item"><span className="detail-label">IFSC Code</span><span className="detail-value">{selectedEmployee.ifsc}</span></div>
//                     <div className="detail-item"><span className="detail-label">Branch</span><span className="detail-value">{selectedEmployee.branchName}</span></div>
//                     <div className="detail-item"><span className="detail-label">Beneficiary Name</span><span className="detail-value">{selectedEmployee.beneficiaryName}</span></div>
//                   </div>
//                 </div>

//                 {/* Identity */}
//                 <div className="detail-card">
//                   <h4>🆔 Identity Information</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">PAN Number</span><span className="detail-value">{selectedEmployee.panNumber}</span></div>
//                     <div className="detail-item"><span className="detail-label">Aadhaar Number</span><span className="detail-value">{selectedEmployee.aadhaarNumber}</span></div>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="detail-card">
//                   <h4>📍 Address</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">Address Line 1</span><span className="detail-value">{selectedEmployee.address1}</span></div>
//                     <div className="detail-item"><span className="detail-label">Address Line 2</span><span className="detail-value">{selectedEmployee.address2}</span></div>
//                   </div>
//                 </div>

//                 {/* Emergency Contact */}
//                 <div className="detail-card">
//                   <h4>🚨 Emergency Contact</h4>
//                   <div className="detail-content">
//                     <div className="detail-item"><span className="detail-label">Contact Name</span><span className="detail-value">{selectedEmployee.emergencyContactName}</span></div>
//                     <div className="detail-item"><span className="detail-label">Phone Number</span><span className="detail-value">{selectedEmployee.emergencyPhoneNumber}</span></div>
//                     <div className="detail-item"><span className="detail-label">Relation</span><span className="detail-value">{selectedEmployee.emergencyContactRelation}</span></div>
//                   </div>
//                 </div>

//                 {/* Documents */}
//                 {documents.length > 0 && (
//                   <div className="detail-card full-width">
//                     <h4>
//                       <Icon d={Icons.File} size={16} color="#2563eb" />
//                       {" "}Employee Documents
//                     </h4>
//                     {loadingDocuments ? (
//                       <div className="loading-state">Loading documents...</div>
//                     ) : (
//                       <div className="documents-grid">
//                         {documents.map((doc, index) => (
//                           <div key={index} className="document-item">
//                             <div className="document-info">
//                               <div className="document-icon">
//                                 <Icon d={Icons.File} size={20} color="#2563eb" />
//                               </div>
//                               <div className="document-details">
//                                 <div className="document-name">{doc.documentName}</div>
//                               </div>
//                             </div>
//                             <button
//                               className="btn btn-download"
//                               onClick={() => downloadDocument(doc.userId, doc.docId, doc.documentName)}
//                               disabled={loadingDocuments}
//                             >
//                               <Icon d={Icons.Download} size={13} color="#fff" />
//                               Download
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       );
//       default: return null;
//     }
//   };

//   /* ═══════════════ MAIN RENDER ═══════════════ */
//   return (
//     <div className="dashboard-wrapper">
//       {sidebarOpen && (
//         <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/* SIDEBAR */}
//       <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-content">
//           <div className="sidebar-header">
//             <img src={ventureBizLogo} alt="VB Logo" />
//             <span>HRMS PORTAL</span>
//           </div>

//           <nav className="sidebar-nav">
//             {NAV_ITEMS.map(({ key, label, icon }) => (
//               <button
//                 key={key}
//                 className={`side-item ${activePage === key ? "active" : ""}`}
//                 onClick={() => { setActivePage(key); setSidebarOpen(false); resetSearch(); }}
//               >
//                 <span className="nav-icon">
//                   <Icon
//                     d={icon}
//                     size={16}
//                     color={activePage === key ? "#60a5fa" : "rgba(255,255,255,0.65)"}
//                   />
//                 </span>
//                 <span className="nav-label">{label}</span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* MAIN */}
//       <div className="main-content-area">
//         <header className="dashboard-header">
//           <div className="header-left">
//             <button className="hamburger-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
//               <Icon d={Icons.Menu} size={18} color="#fff" />
//             </button>
//             <h1>HR Dashboard</h1>
//           </div>

//           <div className="header-right">
//             {/* Profile dropdown */}
//             <div className="profile-dropdown" ref={profileRef}>
//               <div className="profile" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
//                 <div className="avatar">
//                   <Icon d={Icons.User} size={16} color="#fff" />
//                 </div>
//                 <span>HR Admin</span>
//               </div>

//               {profileMenuOpen && (
//                 <div className="profile-menu">
//                   <button
//                     className="profile-menu-item"
//                     onClick={() => { setShowPasswordModal(true); setProfileMenuOpen(false); }}
//                   >
//                     <span className="pm-icon">
//                       <Icon d={Icons.Lock} size={13} color="#2563eb" />
//                     </span>
//                     Change Password
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Logout */}
//             <button className="logout-btn" onClick={() => setLogout(true)}>
//               <Icon d={Icons.Logout} size={14} color="currentColor" />
//               Logout
//             </button>
//           </div>
//         </header>

//         <main className="dashboard-main">{renderContent()}</main>

//         <footer className="app-fixed-footer">© 2026 VentureBiz HRMS</footer>
//       </div>

//       {/* CHANGE PASSWORD MODAL */}
//       {showPasswordModal && (
//         <div className="modal-overlay">
//           <div className="password-modal">
//             <div className="modal-header">
//               <div className="modal-icon">
//                 <Icon d={Icons.Lock} size={20} color="#2563eb" />
//               </div>
//               <h3>Update Password</h3>
//             </div>

//             {/* New Password */}
//             <div className="form-group">
//               <label>New Password</label>
//               <div className="password-field">
//                 <input
//                   type={showNewPass ? "text" : "password"}
//                   placeholder="Enter new password"
//                   value={newPassword}
//                   maxLength={16}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <button type="button" className="eye-btn" onClick={() => setShowNewPass(!showNewPass)}>
//                   <Icon d={showNewPass ? Icons.EyeOff : Icons.Eye} size={15} color="#94a3b8" />
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div className="form-group">
//               <label>Confirm Password</label>
//               <div className="password-field">
//                 <input
//                   type={showConfirm ? "text" : "password"}
//                   placeholder="Confirm new password"
//                   value={confirmPassword}
//                   maxLength={16}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <button type="button" className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
//                   <Icon d={showConfirm ? Icons.EyeOff : Icons.Eye} size={15} color="#94a3b8" />
//                 </button>
//               </div>
//             </div>

//             <div className="modal-actions">
//               <button
//                 className="cancel-btn"
//                 onClick={() => {
//                   setShowPasswordModal(false);
//                   setNewPassword("");
//                   setConfirmPassword("");
//                   setShowNewPass(false);
//                   setShowConfirm(false);
//                 }}
//               >
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={updatePassword} disabled={loading}>
//                 {loading ? "Saving..." : "Update Password"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./HrDashBoard.css";

import ventureBizLogo from "./assets/venturebiz_logo.png";

import HrEmployeeManagement from "./HrEmployeeManagement";
import HrSalaryManagement from "./HrSalaryManagement";
import Department from "./Department";
import EmpMgr from "./EmpMgr";
import HrLeaveManagement from "./HrLeaveManagement";
import HolidayCalendar from "./HolidayCalendar";
import CtcPer from "./CtcPer";

/* ─────────────────────────────────────────────────────────────
   SVG ICON COMPONENT  (inline, no external dependency)
───────────────────────────────────────────────────────────── */
const Icon = ({ d, size = 16, color = "currentColor", strokeWidth = 1.8 }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke={color} strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
  >
    <path d={d} />
  </svg>
);

const Icons = {
  Dashboard:   "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
  Employee:    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8 4 4 0 000-8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
  Department:  "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10 M3 21h18",
  Salary: "M6 3h12M6 7h12M10 7c3 0 5 2 5 4s-2 4-5 4H6l8 6",
  Manager:     "M20 21v-2a4 4 0 00-4-4h-4 M8 7a4 4 0 100 8 4 4 0 000-8z M16 3.13a4 4 0 010 7.75 M21 21v-2a4 4 0 00-3-3.87",
  Leave:       "M8 2v4 M16 2v4 M3 10h18 M21 8H3a1 1 0 00-1 1v11a2 2 0 002 2h16a2 2 0 002-2V9a1 1 0 00-1-1z",
  Holiday:     "M12 2a10 10 0 100 20A10 10 0 0012 2z M12 6v6l4 2",
  CTC:         "M22 12h-4l-3 9L9 3l-3 9H2",
  Search:      "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35",
  Menu:        "M3 12h18 M3 6h18 M3 18h18",
  User:        "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 3a4 4 0 100 8 4 4 0 000-8z",
  Lock:        "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z M7 11V7a5 5 0 0110 0v4",
  Rupee:       "M10 4h6M10 8h6M12 4v16M9 14h4a3 3 0 010 6H9",
  Logout:      "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
  Eye:         "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
  EyeOff:      "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24 M1 1l22 22",
  Download:    "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  File:        "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6",
  View:        "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
};

/* ── Sidebar nav items with SVG paths ── */
const NAV_ITEMS = [
  { key: "dashboard",       label: "Dashboard",            icon: Icons.Dashboard  },
  { key: "employee",        label: "Employee Management",  icon: Icons.Employee   },
  { key: "department",      label: "Department Management",icon: Icons.Department },
  { key: "salary",          label: "Salary Management",    icon: Icons.Salary      },
  { key: "manager",         label: "Manager Management",   icon: Icons.Manager    },
  { key: "leave",           label: "Leave Management",     icon: Icons.Leave      },
  { key: "holidaycalendar", label: "Holiday Calendar",     icon: Icons.Holiday    },
  { key: "ctc",             label: "Set CTC %",            icon: Icons.CTC        },
];


export default function HrDashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  /* PASSWORD */
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchErrors, setSearchErrors] = useState({});

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>?]).{8,16}$/;

  const [activePage, setActivePage] = useState("dashboard");

  const [searchParams, setSearchParams] = useState({
    username: "",
    firstName: "",
    departmentName: "",
    designationName: "",
    startDate: "",
    endDate: "",
  });

  const [searchResults, setSearchResults]             = useState([]);
  const [selectedEmployee, setSelectedEmployee]       = useState(null);
  const [documents, setDocuments]                     = useState([]);
  const [loadingSearch, setLoadingSearch]             = useState(false);
  const [loadingDocuments, setLoadingDocuments]       = useState(false);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);

  const resultsRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [activePage]);

  if (logout) return <Navigate to="/" replace />;

  /* ── Password update ── */
  const updatePassword = async () => {
    if (!newPassword || !confirmPassword) { alert("Please fill all fields"); return; }
    if (newPassword !== confirmPassword)  { alert("Passwords do not match"); return; }
    if (!strongPasswordRegex.test(newPassword)) {
      alert(
        "Password must be 8–16 characters and include:\n" +
        "• Uppercase letter\n• Lowercase letter\n• Number\n• Special character"
      );
      return;
    }
    try {
      setLoading(true);
      await axios.put(`/api/password`, { password: newPassword }, { withCredentials: true });
      alert("Password updated successfully");
      setShowPasswordModal(false);
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  /* ── Search ── */
  const searchEmployees = async () => {
    const errors = {};
    if (searchParams.firstName    && searchParams.firstName.length    < 3) errors.firstName    = "Minimum 3 characters required";
    if (searchParams.departmentName  && searchParams.departmentName.length  < 3) errors.departmentName  = "Minimum 3 characters required";
    if (searchParams.designationName && searchParams.designationName.length < 3) errors.designationName = "Minimum 3 characters required";
    if (Object.keys(errors).length > 0) { setSearchErrors(prev => ({ ...prev, ...errors })); return; }
    if (searchParams.username && !/^VPPL\d{3}$/.test(searchParams.username)) {
      setSearchErrors(prev => ({ ...prev, username: "Enter valid Username format: VPPL + 3 digits (e.g., VPPL001)" }));
      return;
    }
    try {
      setLoadingSearch(true);
      const params = new URLSearchParams();
      Object.entries(searchParams).forEach(([key, value]) => { if (value) params.append(key, value); });
      const response = await axios.get(`/api/hr/search?${params.toString()}`, { withCredentials: true });
      setSearchResults(response.data);
      setSelectedEmployee(null);
      setDocuments([]);
      setShowEmployeeDetails(false);
      setTimeout(() => {
        if (response.data.length > 0 && resultsRef.current)
          resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
      if (response.data.length === 0) alert("No employees found with the specified criteria");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to search employees");
    } finally {
      setLoadingSearch(false);
    }
  };

  /* ── Fetch documents ── */
  const fetchEmployeeDocuments = async (userId) => {
    try {
      setLoadingDocuments(true);
      const response = await axios.get(`/api/hr/search-doc/${userId || 7}`, { withCredentials: true });
      setDocuments(response.data);
    } catch (err) {
      console.error("Failed to fetch documents:", err);
      alert("Failed to fetch employee documents");
    } finally {
      setLoadingDocuments(false);
    }
  };

  /* ── View employee details ── */
  const viewEmployeeDetails = (employee) => {
    setSelectedEmployee(employee);
    fetchEmployeeDocuments(7);
    setShowEmployeeDetails(true);
  };

  /* ── Download document ── */
  const downloadDocument = async (userId, documentId, documentName) => {
    try {
      const response = await axios.get(
        `/api/v1/users/${userId}/documents/${documentId}/download`,
        { withCredentials: true, responseType: "arraybuffer" }
      );
      const bytes = new Uint8Array(response.data);
      let extension = "bin";
      if      (bytes[0]===0x89 && bytes[1]===0x50 && bytes[2]===0x4e && bytes[3]===0x47) extension = "png";
      else if (bytes[0]===0xff && bytes[1]===0xd8 && bytes[2]===0xff)                    extension = "jpg";
      else if (bytes[0]===0x25 && bytes[1]===0x50 && bytes[2]===0x44 && bytes[3]===0x46) extension = "pdf";
      const blob = new Blob([response.data]);
      const url  = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${documentName}.${extension}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download error:", err.response || err);
      alert("Failed to download document. Please try again.");
    }
  };

  /* ── Reset search ── */
  const resetSearch = () => {
    setSearchParams({ username:"", firstName:"", departmentName:"", designationName:"", startDate:"", endDate:"" });
    setSearchResults([]);
    setSelectedEmployee(null);
    setDocuments([]);
    setShowEmployeeDetails(false);
    setSearchErrors({});
  };

  /* ── Clear all errors on any field focus ── */
  const handleFieldFocus = () => { setSearchErrors({}); };

  /* ────────────────────────────────────────────────────────────
     BUG FIX: previously this function was also setting
     username: "" which erased the Employee ID field every time
     the user typed in First Name / Department / Designation.
     Now it only updates the field that actually changed and
     clears only that field's validation error.
  ──────────────────────────────────────────────────────────── */
  const handleAlphabetFieldChange = (field, value) => {
    const cleaned = value.replace(/[^a-zA-Z\s]/g, "");
    setSearchParams(prev => ({ ...prev, [field]: cleaned }));
    if (searchErrors[field]) {
      setSearchErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  /* ── Format date array ── */
  const formatDate = (dateArray) => {
    if (!dateArray || dateArray.length < 3) return "N/A";
    const [year, month, day] = dateArray;
    return `${day.toString().padStart(2,"0")}/${month.toString().padStart(2,"0")}/${year}`;
  };

  /* ═══════════════ RENDER CONTENT ═══════════════ */
  const renderContent = () => {
    switch (activePage) {
      case "employee":        return <HrEmployeeManagement />;
      case "department":      return <Department />;
      case "salary":          return <HrSalaryManagement />;
      case "ctc":             return <CtcPer />;
      case "manager":         return <EmpMgr />;
      case "leave":           return <HrLeaveManagement />;
      case "holidaycalendar": return <HolidayCalendar />;
      case "dashboard":       return (
        <div className="dashboard-content">

          {/* WELCOME BANNER */}
          <div className="welcome-banner">
            <div className="welcome-text">
              <h2>Welcome to HR Dashboard</h2>
              <p>Manage employees, departments, and search employee records</p>
            </div>
          </div>

          {/* SEARCH SECTION */}
          <div className="search-section">
            <div className="section-header">
              <div className="section-icon-title">
                <div className="section-icon">
                  <Icon d={Icons.Search} size={17} color="#2563eb" />
                </div>
                <div>
                  <h3>Advanced Employee Search</h3>
                  <p>Search employees by multiple criteria</p>
                </div>
              </div>
            </div>

            <div className="search-form">
              <div className="form-row">

                {/* Username */}
                <div className="form-group">
                  <label>Employee ID</label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <Icon d={Icons.User} size={14} color="#94a3b8" />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., VPPL001"
                      value={searchParams.username}
                      maxLength={7}
                      onFocus={() => handleFieldFocus('username')}
                      onChange={(e) => {
                        let raw = e.target.value.toUpperCase();
                        if (raw === "") {
                          setSearchParams(prev => ({ ...prev, username: "" }));
                          setSearchErrors(prev => ({ ...prev, username: "" }));
                          return;
                        }
                        const digits = raw.replace(/\D/g, "").slice(0, 3);
                        setSearchParams(prev => ({ ...prev, username: "VPPL" + digits }));
                        if (searchErrors.username) setSearchErrors(prev => ({ ...prev, username: "" }));
                      }}
                      className={searchErrors.username ? "input-error" : ""}
                    />
                  </div>
                  {searchErrors.username && <span className="error-text">{searchErrors.username}</span>}
                </div>

                {/* First Name */}
                <div className="form-group">
                  <label>First Name</label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <Icon d="M4 6h16M4 12h8m-8 6h16" size={14} color="#94a3b8" />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., John"
                      value={searchParams.firstName}
                      maxLength={32}
                      onFocus={() => handleFieldFocus('firstName')}
                      onChange={(e) => handleAlphabetFieldChange('firstName', e.target.value)}
                      className={searchErrors.firstName ? "input-error" : ""}
                    />
                  </div>
                  {searchErrors.firstName && <span className="error-text">{searchErrors.firstName}</span>}
                </div>

                {/* Department */}
                <div className="form-group">
                  <label>Department</label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <Icon d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" size={14} color="#94a3b8" />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., Finance"
                      value={searchParams.departmentName}
                      maxLength={30}
                      onFocus={() => handleFieldFocus('departmentName')}
                      onChange={(e) => handleAlphabetFieldChange('departmentName', e.target.value)}
                      className={searchErrors.departmentName ? "input-error" : ""}
                    />
                  </div>
                  {searchErrors.departmentName && <span className="error-text">{searchErrors.departmentName}</span>}
                </div>

                {/* Designation */}
                <div className="form-group">
                  <label>Designation</label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <Icon d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" size={14} color="#94a3b8" />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g., Analyst"
                      value={searchParams.designationName}
                      maxLength={30}
                      onFocus={() => handleFieldFocus('designationName')}
                      onChange={(e) => handleAlphabetFieldChange('designationName', e.target.value)}
                      className={searchErrors.designationName ? "input-error" : ""}
                    />
                  </div>
                  {searchErrors.designationName && <span className="error-text">{searchErrors.designationName}</span>}
                </div>
              </div>

              {/* Date range row */}
             {/* Date range + Actions row */}
<div className="form-row date-actions-row">
  <div className="form-group date-range">
    <label>Joining Date Range</label>
    <div className="date-inputs">
      <div className="input-wrapper" style={{ flex: 1 }}>
        <span className="input-icon">
          <Icon d="M8 2v4 M16 2v4 M3 10h18 M21 8H3a1 1 0 00-1 1v11a2 2 0 002 2h16a2 2 0 002-2V9a1 1 0 00-1-1z" size={14} color="#94a3b8" />
        </span>
        <input type="date" value={searchParams.startDate}
          onFocus={() => handleFieldFocus('startDate')}
          onChange={(e) => setSearchParams(prev => ({ ...prev, startDate: e.target.value }))} />
      </div>
      <span className="date-separator">→</span>
      <div className="input-wrapper" style={{ flex: 1 }}>
        <span className="input-icon">
          <Icon d="M8 2v4 M16 2v4 M3 10h18 M21 8H3a1 1 0 00-1 1v11a2 2 0 002 2h16a2 2 0 002-2V9a1 1 0 00-1-1z" size={14} color="#94a3b8" />
        </span>
        <input type="date" value={searchParams.endDate}
          onFocus={() => handleFieldFocus('endDate')}
          onChange={(e) => setSearchParams(prev => ({ ...prev, endDate: e.target.value }))} />
      </div>
    </div>
  </div>

  {/* Actions — sits next to date range, aligned to bottom */}
<div className="form-actions-bottom">
  <button
    className="btn btn-primary"
    onClick={searchEmployees}
    disabled={loadingSearch}
  >
    <Icon d={Icons.Search} size={15} color="#fff" />
    {loadingSearch ? "Searching..." : "Search Employees"}
  </button>

  <button className="btn btn-secondary" onClick={resetSearch}>
    Reset
  </button>
</div>
</div>

             
            </div>
          </div>

          {/* SEARCH RESULTS */}
          {searchResults.length > 0 && !showEmployeeDetails && (
            <div className="results-section" ref={resultsRef}>
              <div className="section-header">
                <div className="section-icon-title">
                  <div className="section-icon">
                    <Icon d={Icons.Employee} size={17} color="#2563eb" />
                  </div>
                  <div>
                    <h3>Search Results</h3>
                    <p>{searchResults.length} employee(s) found</p>
                  </div>
                </div>
                
              </div>

              <div className="results-table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Full Name</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>Date of Joining</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((employee, index) => (
                      <tr key={index}>
                        <td><span className="username-badge11">{employee.username}</span></td>
                        <td className="employee-name">{employee.firstName} {employee.lastName}</td>
                        <td>{employee.departmentName}</td>
                        <td>{employee.designationName}</td>
                        <td>{formatDate(employee.dateOfJoining)}</td>
                        <td>
                          <button className="btn btn-view" onClick={() => viewEmployeeDetails(employee)}>
                            <Icon d={Icons.View} size={13} />
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* EMPLOYEE DETAILS VIEW */}
          {selectedEmployee && showEmployeeDetails && (
            <div className="employee-details-section">
              <div className="section-header">
                <div className="section-icon-title">
                  <div className="section-icon">
                    <Icon d={Icons.User} size={17} color="#2563eb" />
                  </div>
                  <div>
                    <h3>Employee Details</h3>
                    <p>{selectedEmployee.firstName} {selectedEmployee.lastName}</p>
                  </div>
                </div>
                <div className="header-actions">
                  <span className="employee-id">ID: {selectedEmployee.username}</span>
                  <button className="btn btn-ghost" onClick={() => setShowEmployeeDetails(false)}>
                    ← Back to Results
                  </button>
                </div>
              </div>

              <div className="details-grid">
                {/* Personal */}
                <div className="detail-card">
                  <h4>👤 Personal Information</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">Full Name</span><span className="detail-value">{selectedEmployee.firstName} {selectedEmployee.middleName} {selectedEmployee.lastName}</span></div>
                    <div className="detail-item"><span className="detail-label">Email</span><span className="detail-value">{selectedEmployee.emailId}</span></div>
                    <div className="detail-item"><span className="detail-label">Phone</span><span className="detail-value">{selectedEmployee.phoneNumber}</span></div>
                    <div className="detail-item"><span className="detail-label">Date of Birth</span><span className="detail-value">{formatDate(selectedEmployee.dob)}</span></div>
                    <div className="detail-item"><span className="detail-label">Gender</span><span className="detail-value">{selectedEmployee.gender}</span></div>
                    <div className="detail-item"><span className="detail-label">Marital Status</span><span className="detail-value">{selectedEmployee.maritalStatus}</span></div>
                    <div className="detail-item"><span className="detail-label">Blood Group</span><span className="detail-value">{selectedEmployee.bloodGroup}</span></div>
                    <div className="detail-item"><span className="detail-label">Nationality</span><span className="detail-value">{selectedEmployee.nationality}</span></div>
                  </div>
                </div>

                {/* Employment */}
                <div className="detail-card">
                  <h4>💼 Employment Information</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">Department</span><span className="detail-value">{selectedEmployee.departmentName}</span></div>
                    <div className="detail-item"><span className="detail-label">Designation</span><span className="detail-value">{selectedEmployee.designationName}</span></div>
                    <div className="detail-item"><span className="detail-label">Work Location</span><span className="detail-value">{selectedEmployee.workLocation}</span></div>
                    <div className="detail-item"><span className="detail-label">Date of Joining</span><span className="detail-value">{formatDate(selectedEmployee.dateOfJoining)}</span></div>
                    <div className="detail-item"><span className="detail-label">PF UAN</span><span className="detail-value">{selectedEmployee.pfUan}</span></div>
                    <div className="detail-item"><span className="detail-label">ESI</span><span className="detail-value">{selectedEmployee.esi}</span></div>
                  </div>
                </div>

                {/* Financial */}
                <div className="detail-card">
                  <h4>💰 Financial Information</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">CTC</span><span className="detail-value highlight">₹{selectedEmployee.ctc?.toLocaleString()}</span></div>
                    <div className="detail-item"><span className="detail-label">Basic Salary</span><span className="detail-value">₹{selectedEmployee.basic?.toLocaleString()}</span></div>
                    <div className="detail-item"><span className="detail-label">HRA</span><span className="detail-value">₹{selectedEmployee.hra?.toLocaleString()}</span></div>
                    <div className="detail-item"><span className="detail-label">Conveyance Allowance</span><span className="detail-value">₹{selectedEmployee.conveyanceAllowance?.toLocaleString()}</span></div>
                    <div className="detail-item"><span className="detail-label">PF</span><span className="detail-value">₹{selectedEmployee.pf?.toLocaleString()}</span></div>
                  </div>
                </div>

                {/* Bank */}
                <div className="detail-card">
                  <h4>🏦 Bank Information</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">Bank Name</span><span className="detail-value">{selectedEmployee.bankName}</span></div>
                    <div className="detail-item"><span className="detail-label">Account Number</span><span className="detail-value">{selectedEmployee.accountNumber}</span></div>
                    <div className="detail-item"><span className="detail-label">IFSC Code</span><span className="detail-value">{selectedEmployee.ifsc}</span></div>
                    <div className="detail-item"><span className="detail-label">Branch</span><span className="detail-value">{selectedEmployee.branchName}</span></div>
                    <div className="detail-item"><span className="detail-label">Beneficiary Name</span><span className="detail-value">{selectedEmployee.beneficiaryName}</span></div>
                  </div>
                </div>

                {/* Identity */}
                <div className="detail-card">
                  <h4>🆔 Identity Information</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">PAN Number</span><span className="detail-value">{selectedEmployee.panNumber}</span></div>
                    <div className="detail-item"><span className="detail-label">Aadhaar Number</span><span className="detail-value">{selectedEmployee.aadhaarNumber}</span></div>
                  </div>
                </div>

                {/* Address */}
                <div className="detail-card">
                  <h4>📍 Address</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">Address Line 1</span><span className="detail-value">{selectedEmployee.address1}</span></div>
                    <div className="detail-item"><span className="detail-label">Address Line 2</span><span className="detail-value">{selectedEmployee.address2}</span></div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="detail-card">
                  <h4>🚨 Emergency Contact</h4>
                  <div className="detail-content">
                    <div className="detail-item"><span className="detail-label">Contact Name</span><span className="detail-value">{selectedEmployee.emergencyContactName}</span></div>
                    <div className="detail-item"><span className="detail-label">Phone Number</span><span className="detail-value">{selectedEmployee.emergencyPhoneNumber}</span></div>
                    <div className="detail-item"><span className="detail-label">Relation</span><span className="detail-value">{selectedEmployee.emergencyContactRelation}</span></div>
                  </div>
                </div>

                {/* Documents */}
                {documents.length > 0 && (
                  <div className="detail-card full-width">
                    <h4>
                      <Icon d={Icons.File} size={16} color="#2563eb" />
                      {" "}Employee Documents
                    </h4>
                    {loadingDocuments ? (
                      <div className="loading-state">Loading documents...</div>
                    ) : (
                      <div className="documents-grid">
                        {documents.map((doc, index) => (
                          <div key={index} className="document-item">
                            <div className="document-info">
                              <div className="document-icon">
                                <Icon d={Icons.File} size={20} color="#2563eb" />
                              </div>
                              <div className="document-details">
                                <div className="document-name">{doc.documentName}</div>
                              </div>
                            </div>
                            <button
                              className="btn btn-download"
                              onClick={() => downloadDocument(doc.userId, doc.docId, doc.documentName)}
                              disabled={loadingDocuments}
                            >
                              <Icon d={Icons.Download} size={13} color="#fff" />
                              Download
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
      default: return null;
    }
  };

  /* ═══════════════ MAIN RENDER ═══════════════ */
  return (
    <div className="dashboard-wrapper">
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <img src={ventureBizLogo} alt="VB Logo" />
            <div className="sidebar-title">
              <span>HRMS PORTAL</span>
              
            </div>
          </div>

          <nav className="sidebar-nav">
            {NAV_ITEMS.map(({ key, label, icon }) => (
              <button
                key={key}
                className={`side-item ${activePage === key ? "active" : ""}`}
                onClick={() => { setActivePage(key); setSidebarOpen(false); resetSearch(); }}
              >
                <span className="nav-icon">
                  <Icon
                    d={icon}
                    size={16}
                    color={activePage === key ? "#60a5fa" : "rgba(255,255,255,0.65)"}
                  />
                </span>
                <span className="nav-label">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* MAIN */}
      <div className="main-content-area">
        <header className="dashboard-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Icon d={Icons.Menu} size={18} color="#fff" />
            </button>
            
          </div>

          <div className="header-right">
            <button
              className="update-password-btn"
              onClick={() => setShowPasswordModal(true)}
            >
              <span className="rupee-symbol">🔑</span>
              Update Password
            </button>

            {/* Logout */}
            <button className="logout-btn" onClick={() => setLogout(true)}>
              <Icon d={Icons.Logout} size={14} color="currentColor" />
              Logout
            </button>
          </div>
        </header>

        <main className="dashboard-main">{renderContent()}</main>

        <footer className="app-fixed-footer">© 2026 VentureBiz HRMS</footer>
      </div>

      {/* CHANGE PASSWORD MODAL */}
      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="password-modal">
            <div className="modal-header">
             
              <h3>Update Password</h3>
            </div>

            {/* New Password */}
            <div className="form-group">
              <label>New Password</label>
              <div className="password-field">
                <input
                  type={showNewPass ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  maxLength={16}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="button" className="eye-btn" onClick={() => setShowNewPass(!showNewPass)}>
                  <Icon d={showNewPass ? Icons.EyeOff : Icons.Eye} size={15} color="#94a3b8" />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="password-field">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  maxLength={16}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="button" className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                  <Icon d={showConfirm ? Icons.EyeOff : Icons.Eye} size={15} color="#94a3b8" />
                </button>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => {
                  setShowPasswordModal(false);
                  setNewPassword("");
                  setConfirmPassword("");
                  setShowNewPass(false);
                  setShowConfirm(false);
                }}
              >
                Cancel
              </button>
              <button className="save-btn" onClick={updatePassword} disabled={loading}>
                {loading ? "Saving..." : "Update Password"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
