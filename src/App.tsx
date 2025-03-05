import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import DocumentPage from './components/DocumentPage'
import DocumentsList from './components/DocumentsList'
import UploadPage from './pages/UploadPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/upload' />} />
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/documents' element={<DocumentsList />} />
        <Route path='/document/:token' element={<DocumentPage />} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
