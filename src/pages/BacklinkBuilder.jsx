import React, { useState } from 'react'
import { Link as LinkIcon, Send, Globe, Mail, Building, CheckCircle, Clock, XCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const BacklinkBuilder = () => {
  const [activeTab, setActiveTab] = useState('web2')
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      type: 'web2',
      title: 'Medium & Blogger Submissions',
      status: 'active',
      links: 12,
      pending: 3,
      success: 9,
      created: '2024-01-15'
    },
    {
      id: 2,
      type: 'outreach',
      title: 'Guest Post Outreach Campaign',
      status: 'pending',
      links: 25,
      pending: 18,
      success: 7,
      created: '2024-01-10'
    },
    {
      id: 3,
      type: 'directory',
      title: 'Business Directory Listings',
      status: 'completed',
      links: 45,
      pending: 0,
      success: 45,
      created: '2024-01-05'
    }
  ])

  const [formData, setFormData] = useState({
    targetUrl: '',
    anchorText: '',
    description: '',
    category: 'business'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitWeb2 = (e) => {
    e.preventDefault()
    toast.success('Web 2.0 submission campaign started!')
  }

  const handleSubmitOutreach = (e) => {
    e.preventDefault()
    toast.success('Email outreach campaign initiated!')
  }

  const handleSubmitDirectory = (e) => {
    e.preventDefault()
    toast.success('Directory submission campaign started!')
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />
      case 'active':
        return <Clock className="w-5 h-5" />
      case 'pending':
        return <Clock className="w-5 h-5" />
      default:
        return <XCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success-100 text-success-800'
      case 'active':
        return 'bg-warning-100 text-warning-800'
      case 'pending':
        return 'bg-primary-100 text-primary-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Backlink Builder</h1>
          <p className="text-gray-600 mt-1">Automate your link building campaigns across multiple platforms.</p>
        </div>
      </div>

      {/* Campaign Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6">
          <div className="flex">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Backlinks</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">82</p>
            </div>
            <div className="p-3 rounded-full">
              <LinkIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium">+15 this month</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">74%</p>
            </div>
            <div className="p-3 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium">Above average</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            </div>
            <div className="p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium">2 pending</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Creation */}
        <div className="lg:col-span-1">
          <div className="p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Create Campaign</h2>
            
            {/* Tab Navigation */}
            <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('web2')}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'web2'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Web 2.0
              </button>
              <button
                onClick={() => setActiveTab('outreach')}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'outreach'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Outreach
              </button>
              <button
                onClick={() => setActiveTab('directory')}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'directory'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Directory
              </button>
            </div>

            {/* Web 2.0 Form */}
            {activeTab === 'web2' && (
              <form onSubmit={handleSubmitWeb2} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target URL *
                  </label>
                  <input
                    type="url"
                    name="targetUrl"
                    value={formData.targetUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/page"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anchor Text
                  </label>
                  <input
                    type="text"
                    name="anchorText"
                    value={formData.anchorText}
                    onChange={handleInputChange}
                    placeholder="Your target keyword"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Brief description of your content..."
                    className="w-full"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full"
                  >
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="health">Health</option>
                    <option value="finance">Finance</option>
                    <option value="lifestyle">Lifestyle</option>
                  </select>
                </div>

                <button type="submit" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  Submit to Web 2.0 Sites
                </button>

                <div className="text-xs text-gray-500 mt-2">
                  Will submit to: Medium, Blogger, WordPress.com, Tumblr, and more
                </div>
              </form>
            )}

            {/* Email Outreach Form */}
            {activeTab === 'outreach' && (
              <form onSubmit={handleSubmitOutreach} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target URL *
                  </label>
                  <input
                    type="url"
                    name="targetUrl"
                    value={formData.targetUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/page"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Topic
                  </label>
                  <input
                    type="text"
                    name="anchorText"
                    value={formData.anchorText}
                    onChange={handleInputChange}
                    placeholder="e.g., Digital Marketing Guide"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pitch Message
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Your guest post pitch..."
                    className="w-full"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full"
                  >
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="health">Health</option>
                  </select>
                </div>

                <button type="submit" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Start Email Campaign
                </button>

                <div className="text-xs text-gray-500 mt-2">
                  Will find and contact relevant websites in your industry
                </div>
              </form>
            )}

            {/* Directory Submission Form */}
            {activeTab === 'directory' && (
              <form onSubmit={handleSubmitDirectory} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business URL *
                  </label>
                  <input
                    type="url"
                    name="targetUrl"
                    value={formData.targetUrl}
                    onChange={handleInputChange}
                    placeholder="https://yourbusiness.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="anchorText"
                    value={formData.anchorText}
                    onChange={handleInputChange}
                    placeholder="Your Business Name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Brief description of your business..."
                    className="w-full"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full"
                  >
                    <option value="business">General Business</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail</option>
                    <option value="services">Professional Services</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                </div>

                <button type="submit" className="w-full">
                  <Building className="w-4 h-4 mr-2" />
                  Submit to Directories
                </button>

                <div className="text-xs text-gray-500 mt-2">
                  Will submit to 50+ business directories and citation sites
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Campaign List */}
        <div className="lg:col-span-2">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Active Campaigns</h2>
            
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex mb-3">
                    <div className="flex">
                      {getStatusIcon(campaign.status)}
                      <div>
                        <h3 className="font-medium text-gray-900">{campaign.title}</h3>
                        <p className="text-sm text-gray-600">Created: {new Date(campaign.created).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{campaign.links}</div>
                      <div className="text-xs text-gray-600">Total Links</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">{campaign.success}</div>
                      <div className="text-xs text-gray-600">Successful</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">{campaign.pending}</div>
                      <div className="text-xs text-gray-600">Pending</div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ width: `${(campaign.success / campaign.links) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {Math.round((campaign.success / campaign.links) * 100)}%
                    </span>
                  </div>

                  <div className="flex mt-4">
                    <button className="text-sm">View Details</button>
                    <button className="text-sm">Export Report</button>
                    {campaign.status === 'active' && (
                      <button className="text-sm">
                        Pause Campaign
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Backlinks */}
          <div className="p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Backlinks</h3>
            <div className="space-y-3">
              {[
                { domain: 'medium.com', url: '/article-about-seo', status: 'live', da: 95 },
                { domain: 'blogger.com', url: '/seo-tips-2024', status: 'live', da: 85 },
                { domain: 'wordpress.com', url: '/digital-marketing-guide', status: 'pending', da: 90 },
                { domain: 'tumblr.com', url: '/business-growth-tips', status: 'live', da: 78 },
                { domain: 'yellowpages.com', url: '/business-listing', status: 'live', da: 92 }
              ].map((link, index) => (
                <div key={index} className="flex py-2 border-b border-gray-100">
                  <div className="flex">
                    <div className={`w-2 h-2 rounded-full ${link.status === 'live' ? 'bg-success-500' : 'bg-warning-500'}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{link.domain}</p>
                      <p className="text-xs text-gray-600">{link.url}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      DA {link.da}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      link.status === 'live' ? 'bg-success-100 text-success-800' : 'bg-warning-100 text-warning-800'
                    }`}>
                      {link.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BacklinkBuilder
