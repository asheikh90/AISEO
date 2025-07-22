import React, { useState } from 'react'
import { BarChart3, Download, Mail, Calendar, TrendingUp, TrendingDown, Eye, Users } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [selectedReport, setSelectedReport] = useState('overview')

  const performanceData = [
    { name: 'Week 1', rankings: 45, traffic: 1200, backlinks: 23 },
    { name: 'Week 2', rankings: 52, traffic: 1400, backlinks: 28 },
    { name: 'Week 3', rankings: 61, traffic: 1800, backlinks: 35 },
    { name: 'Week 4', rankings: 78, traffic: 2100, backlinks: 42 }
  ]

  const keywordData = [
    { name: 'Position 1-3', value: 15, color: '#22c55e' },
    { name: 'Position 4-10', value: 28, color: '#3b82f6' },
    { name: 'Position 11-20', value: 35, color: '#f59e0b' },
    { name: 'Position 21+', value: 22, color: '#ef4444' }
  ]

  const topKeywords = [
    { keyword: 'digital marketing', position: 3, change: 2, traffic: 1250 },
    { keyword: 'seo services', position: 5, change: -1, traffic: 890 },
    { keyword: 'content marketing', position: 8, change: 3, traffic: 650 },
    { keyword: 'social media marketing', position: 12, change: 1, traffic: 420 },
    { keyword: 'email marketing', position: 15, change: 0, traffic: 380 }
  ]

  const reports = [
    {
      id: 'overview',
      name: 'SEO Overview',
      description: 'Complete SEO performance summary',
      lastGenerated: '2024-01-20',
      frequency: 'Weekly'
    },
    {
      id: 'keywords',
      name: 'Keyword Rankings',
      description: 'Detailed keyword position tracking',
      lastGenerated: '2024-01-19',
      frequency: 'Daily'
    },
    {
      id: 'backlinks',
      name: 'Backlink Analysis',
      description: 'Link building progress and quality',
      lastGenerated: '2024-01-18',
      frequency: 'Weekly'
    },
    {
      id: 'technical',
      name: 'Technical SEO',
      description: 'Site health and technical issues',
      lastGenerated: '2024-01-17',
      frequency: 'Monthly'
    }
  ]

  const stats = [
    {
      name: 'Total Keywords',
      value: '142',
      change: '+8',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      name: 'Avg. Position',
      value: '12.3',
      change: '-2.1',
      changeType: 'positive',
      icon: TrendingUp
    },
    {
      name: 'Organic Traffic',
      value: '2,847',
      change: '+15%',
      changeType: 'positive',
      icon: Users
    },
    {
      name: 'Page Views',
      value: '8,234',
      change: '+12%',
      changeType: 'positive',
      icon: Eye
    }
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Track your SEO performance and generate automated reports.</p>
        </div>
        <div className="flex">
          <button className="btn-outline">
            <Mail className="w-4 h-4 mr-2" />
            Schedule Report
          </button>
          <button className="btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex">
        <span className="text-sm font-medium text-gray-700">Time Period:</span>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {[
            { value: '7d', label: '7 Days' },
            { value: '30d', label: '30 Days' },
            { value: '90d', label: '90 Days' },
            { value: '1y', label: '1 Year' }
          ].map((period) => (
            <button
              key={period.value}
              onClick={() => setSelectedPeriod(period.value)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                selectedPeriod === period.value
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {period.label}
            </button>
          ))}
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
                <div className="p-3 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="flex mt-4">
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className={`text-sm font-medium ml-1 ${
                  stat.changeType === 'positive' ? 'text-success-600' : 'text-danger-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="rankings" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Keywords Ranking"
              />
              <Line 
                type="monotone" 
                dataKey="traffic" 
                stroke="#22c55e" 
                strokeWidth={3}
                name="Organic Traffic"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Keyword Distribution */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyword Position Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={keywordData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {keywordData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Keywords Table */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Keywords</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                  Change
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                  Traffic
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {topKeywords.map((keyword, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">#{keyword.position}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      {keyword.change > 0 ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : keyword.change < 0 ? (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      ) : (
                        <div className="w-4 h-4 bg-gray-400 rounded-full mr-1" />
                      )}
                      <span className={`text-sm ${
                        keyword.change > 0 ? 'text-success-600' : 
                        keyword.change < 0 ? 'text-danger-600' : 'text-gray-600'
                      }`}>
                        {keyword.change > 0 ? '+' : ''}{keyword.change}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{keyword.traffic}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Templates */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Automated Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((report) => (
            <div key={report.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{report.name}</h4>
                  <p className="text-sm text-gray-600">{report.description}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-gray-400" />
              </div>
              
              <div className="flex text-sm text-gray-600 mb-4">
                <span>Last: {report.lastGenerated}</span>
                <span>{report.frequency}</span>
              </div>

              <div className="flex">
                <button className="text-sm flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </button>
                <button className="text-sm flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </button>
                <button className="text-sm flex-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Settings */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Email Recipients</h4>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full"
              />
              <div className="flex flex-wrap gap-2">
                {['john@company.com', 'sarah@company.com'].map((email, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm">
                    {email}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Delivery Schedule</h4>
            <div className="space-y-3">
              <select className="w-full">
                <option>Weekly - Every Monday</option>
                <option>Bi-weekly - Every other Monday</option>
                <option>Monthly - 1st of each month</option>
                <option>Quarterly - Every 3 months</option>
              </select>
              <label className="flex">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-700">Include executive summary</span>
              </label>
              <label className="flex">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-700">Attach detailed CSV data</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="btn-primary">
            <Mail className="w-4 h-4 mr-2" />
            Save Report Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reports
