import React from 'react'
import { 
  TrendingUp, 
  Globe, 
  Users, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  PenTool,
  Link as LinkIcon,
  MapPin
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const Dashboard = () => {
  const stats = [
    {
      name: 'SEO Score',
      value: '78',
      change: '+12%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      name: 'Keywords Ranking',
      value: '142',
      change: '+8',
      changeType: 'positive',
      icon: Target,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      name: 'Backlinks',
      value: '89',
      change: '+23',
      changeType: 'positive',
      icon: LinkIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      name: 'Organic Traffic',
      value: '2,847',
      change: '-3%',
      changeType: 'negative',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const rankingData = [
    { name: 'Jan', rankings: 45, traffic: 1200 },
    { name: 'Feb', rankings: 52, traffic: 1400 },
    { name: 'Mar', rankings: 61, traffic: 1800 },
    { name: 'Apr', rankings: 78, traffic: 2100 },
    { name: 'May', rankings: 89, traffic: 2400 },
    { name: 'Jun', rankings: 142, traffic: 2847 }
  ]

  const quickActions = [
    {
      title: 'Scan Website',
      description: 'Run a comprehensive SEO audit',
      icon: Search,
      color: 'bg-blue-500',
      href: '/scanner'
    },
    {
      title: 'Write Blog Post',
      description: 'Create SEO-optimized content',
      icon: PenTool,
      color: 'bg-green-500',
      href: '/blog-writer'
    },
    {
      title: 'Build Backlinks',
      description: 'Automate link building campaigns',
      icon: LinkIcon,
      color: 'bg-purple-500',
      href: '/backlinks'
    },
    {
      title: 'Optimize GMB',
      description: 'Improve Google Business Profile',
      icon: MapPin,
      color: 'bg-red-500',
      href: '/gmb'
    }
  ]

  const recentActivities = [
    {
      type: 'scan',
      message: 'Website scan completed for example.com',
      time: '2 hours ago',
      status: 'success'
    },
    {
      type: 'blog',
      message: 'New blog post published: "10 SEO Tips for 2024"',
      time: '5 hours ago',
      status: 'success'
    },
    {
      type: 'backlink',
      message: '5 new backlinks acquired from directory submissions',
      time: '1 day ago',
      status: 'success'
    },
    {
      type: 'keyword',
      message: 'Keyword "digital marketing" moved to position 8',
      time: '2 days ago',
      status: 'warning'
    }
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your SEO performance overview.</p>
        </div>
        <div className="flex">
          <button className="btn-outline">
            <Globe className="w-4 h-4 mr-2" />
            View Website
          </button>
          <button className="btn-primary">
            <Search className="w-4 h-4 mr-2" />
            Run Quick Scan
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="p-6">
              <div className="flex">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="flex mt-4">
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span className={`text-sm font-medium ml-1 ${
                  stat.changeType === 'positive' ? 'text-success-600' : 'text-danger-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Keyword Rankings Chart */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyword Rankings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={rankingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="rankings" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Chart */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Organic Traffic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rankingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="traffic" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <a
                  key={action.title}
                  href={action.href}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-success-500' : 
                  activity.status === 'warning' ? 'bg-warning-500' : 'bg-gray-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
