import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Search, 
  PenTool, 
  Link as LinkIcon, 
  MapPin, 
  Target, 
  BarChart3, 
  Settings, 
  Bot,
  Menu,
  X,
  Zap
} from 'lucide-react'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Website Scanner', href: '/scanner', icon: Search },
    { name: 'Blog Writer', href: '/blog-writer', icon: PenTool },
    { name: 'Backlink Builder', href: '/backlinks', icon: LinkIcon },
    { name: 'GMB Helper', href: '/gmb', icon: MapPin },
    { name: 'Keyword Tool', href: '/keywords', icon: Target },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 flex w-64 flex-col bg-white shadow-xl">
          <div className="flex h-16 px-4 border-b border-gray-200">
            <div className="flex">
              <Zap className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">SEO Pro</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-4">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed">
        <div className="flex flex-col bg-white border-r border-gray-200 shadow-sm">
          <div className="flex h-16 px-4 border-b border-gray-200">
            <div className="flex">
              <Zap className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">SEO Pro</span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-4">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 lg:pl-64">
        {/* Mobile header */}
        <div className="flex h-16 px-4 bg-white border-b border-gray-200 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-400 hover:text-gray-600"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex ml-4">
            <Zap className="h-6 w-6" />
            <span className="text-lg font-semibold text-gray-900">SEO Pro</span>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
