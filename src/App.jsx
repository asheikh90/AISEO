import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import WebsiteScanner from './pages/WebsiteScanner'
import BlogWriter from './pages/BlogWriter'
import BacklinkBuilder from './pages/BacklinkBuilder'
import GMBHelper from './pages/GMBHelper'
import KeywordTool from './pages/KeywordTool'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import AIAssistant from './pages/AIAssistant'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/scanner" element={<WebsiteScanner />} />
            <Route path="/blog-writer" element={<BlogWriter />} />
            <Route path="/backlinks" element={<BacklinkBuilder />} />
            <Route path="/gmb" element={<GMBHelper />} />
            <Route path="/keywords" element={<KeywordTool />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
