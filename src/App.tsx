import { FC } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import { DocumentListPage } from './components/DocumentListPage/DocumentListPage'
import { Layout } from './components/Layout/Layout'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/personal" replace />} />
          <Route path=":type" element={<DocumentListPage />} />
          <Route path="documents" element={<div>Documents Page</div>} />
          <Route path="insights" element={<div>Insights Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="help" element={<div>Help Page</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/personal" replace />} />
      </Routes>
    </Router>
  )
}

export default App
