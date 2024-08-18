// import React from "react"


import UserConfigurationPage from "./pages/UserConfigurationPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetailsPage from "./pages/UserDetailsPage";
import AddUserPage from "./pages/AddUserPage";






function App() {
  
  return (
    <>
    
    {/* <UserConfigurationPage /> */}

    <Router>
      <Routes>
        <Route path="/dashboard" element={<UserConfigurationPage />} />
        <Route path="/userDetailsPage/:id" element={<UserDetailsPage />} />
        <Route path="/addUserPage" element={<AddUserPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
