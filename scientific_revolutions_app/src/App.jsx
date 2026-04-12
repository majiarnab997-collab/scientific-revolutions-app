import { Routes, Route } from 'react-router-dom'
import Header from './compound/Header/Header'
import Card from './compound/card/card'
import Explore from './compound/Explore/Explore'
import Home from './compound/Home/Home'
import ProtectedRoute from './compound/ProtectedRoute/ProtectedRoute'
import ReadMoreDetails from './compound/ReadMoreDetails/ReadMoreDetails'
import LogIn from './compound/LogIn/LogIn'
import ErrorMessage from './compound/ErrorMessage/ErrorMessage'
import AddNewCard from './compound/AddNewCard/AddNewCard'

import './App.css'

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<ProtectedRoute><Header /> <Home /></ProtectedRoute>} />
        <Route path="/cards" element={<ProtectedRoute><Header /> <Card /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Header /> <Explore /></ProtectedRoute>} />
        <Route path="/details/:id" element={<ProtectedRoute> <ReadMoreDetails /></ProtectedRoute>} />
        <Route path="/addnewcard" element={<ProtectedRoute><Header /> <AddNewCard /></ProtectedRoute>} />
        <Route path="*" element={ <ErrorMessage /> } />
      </Routes>
    </>
  )
}

export default App