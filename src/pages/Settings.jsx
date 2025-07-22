import React, { useState } from 'react'
import { Settings as SettingsIcon, User, Globe, Bell, Key, CreditCard, Shield } from 'lucide-react'
import toast from 'react-hot-toast'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [settings, setSettings] = useState({
    profile: {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Digital Marketing Agency',
      website: 'https://example.com'
    },
    notifications: {
      emailReports: true,
      rankingAlerts: true,
      backlinkNotifications: false,
      weeklyDigest: true
    },
    seo: {
      defaultCountry: 'US',
      defaultLanguage: 'en',
      trackingFrequency: 'daily',
      maxKeywords: 500
    }
  })

  const handleSave = (section) => {
    toast.success(`${section} settings saved successfully!`)
  }

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'seo', name: 'SEO Settings', icon: Globe },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'api', name: 'API Keys', icon: Key },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'security', name: 'Security', icon: Shield }
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account and application preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <div>
                    <button className="btn-outline">Change Avatar</button>
                    <p className="text-sm text-gray-600 mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={settings.profile.name}
                      onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={settings.profile.email}
                      onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={settings.profile.company}
                      onChange={(e) => handleInputChange('profile', 'company', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={settings.profile.website}
                      onChange={(e) => handleInputChange('profile', 'website', e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleSave('Profile')}
                    className="btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SEO Settings */}
          {activeTab === 'seo' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">SEO Configuration</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Default Country
                    </label>
                    <select
                      value={settings.seo.defaultCountry}
                      onChange={(e) => handleInputChange('seo', 'defaultCountry', e.target.value)}
                      className="w-full"
                    >
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Default Language
                    </label>
                    <select
                      value={settings.seo.defaultLanguage}
                      onChange={(e) => handleInputChange('seo', 'defaultLanguage', e.target.value)}
                      className="w-full"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="it">Italian</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tracking Frequency
                    </label>
                    <select
                      value={settings.seo.trackingFrequency}
                      onChange={(e) => handleInputChange('seo', 'trackingFrequency', e.target.value)}
                      className="w-full"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Keywords to Track
                    </label>
                    <input
                      type="number"
                      value={settings.seo.maxKeywords}
                      onChange={(e) => handleInputChange('seo', 'maxKeywords', parseInt(e.target.value))}
                      className="w-full"
                      min="100"
                      max="10000"
                      step="100"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleSave('SEO')}
                    className="btn-primary"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="flex">
                    <input
                      type="checkbox"
                      checked={settings.notifications.emailReports}
                      onChange={(e) => handleInputChange('notifications', 'emailReports', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-900">Email Reports</span>
                      <p className="text-sm text-gray-600">Receive automated SEO reports via email</p>
                    </div>
                  </label>

                  <label className="flex">
                    <input
                      type="checkbox"
                      checked={settings.notifications.rankingAlerts}
                      onChange={(e) => handleInputChange('notifications', 'rankingAlerts', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-900">Ranking Alerts</span>
                      <p className="text-sm text-gray-600">Get notified when keyword rankings change significantly</p>
                    </div>
                  </label>

                  <label className="flex">
                    <input
                      type="checkbox"
                      checked={settings.notifications.backlinkNotifications}
                      onChange={(e) => handleInputChange('notifications', 'backlinkNotifications', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-900">Backlink Notifications</span>
                      <p className="text-sm text-gray-600">Alerts for new backlinks and lost links</p>
                    </div>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.notifications.weeklyDigest}
                      onChange={(e) => handleInputChange('notifications', 'weeklyDigest', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-900">Weekly Digest</span>
                      <p className="text-sm text-gray-600">Summary of your SEO performance every week</p>
                    </div>
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleSave('Notification')}
                    className="btn-primary"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* API Keys */}
          {activeTab === 'api' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">API Integration</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Google Search Console
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        placeholder="Enter API key"
                        className="flex-1"
                      />
                      <button className="btn-outline">Connect</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Google Analytics
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        placeholder="Enter API key"
                        className="flex-1"
                      />
                      <button className="btn-outline">Connect</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WordPress
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        placeholder="Enter API key"
                        className="flex-1"
                      />
                      <button className="btn-outline">Connect</button>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        API Key Security
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>Your API keys are encrypted and stored securely. They are only used to fetch data for your SEO reports and automation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Current Plan</h2>
                
                <div className="border rounded-lg p-6">
                  <div className="flex">
                    <div>
                      <h3 className="text-lg font-semibold">Professional Plan</h3>
                      <p className="text-primary-700">$49/month • Billed monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$49</p>
                      <p className="text-sm">per month</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>✓ Up to 500 keywords</div>
                    <div>✓ Daily rank tracking</div>
                    <div>✓ Unlimited website scans</div>
                    <div>✓ Backlink monitoring</div>
                    <div>✓ AI content generation</div>
                    <div>✓ Email reports</div>
                  </div>
                </div>

                <div className="flex mt-6">
                  <button className="btn-outline">Change Plan</button>
                  <button className="btn-outline">Cancel Subscription</button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                
                <div className="flex p-4 border border-gray-200 rounded-lg">
                  <div className="w-12 h-8 bg-gray-200 rounded flex">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/25</p>
                  </div>
                  <button className="btn-outline">Update</button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
                
                <div className="space-y-3">
                  {[
                    { date: '2024-01-01', amount: '$49.00', status: 'Paid' },
                    { date: '2023-12-01', amount: '$49.00', status: 'Paid' },
                    { date: '2023-11-01', amount: '$49.00', status: 'Paid' }
                  ].map((invoice, index) => (
                    <div key={index} className="flex py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">{invoice.date}</p>
                        <p className="text-sm text-gray-600">Professional Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{invoice.amount}</p>
                        <span className="text-xs px-2 py-1 rounded">
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Change Password</h3>
                  <div className="space-y-4 max-w-md">
                    <input
                      type="password"
                      placeholder="Current password"
                      className="w-full"
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-full"
                    />
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full"
                    />
                    <button className="btn-primary">Update Password</button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <button className="btn-outline">Enable 2FA</button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Active Sessions</h3>
                  <div className="space-y-3">
                    {[
                      { device: 'MacBook Pro', location: 'New York, US', current: true },
                      { device: 'iPhone 13', location: 'New York, US', current: false },
                      { device: 'Chrome Browser', location: 'Los Angeles, US', current: false }
                    ].map((session, index) => (
                      <div key={index} className="flex p-3 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{session.device}</p>
                          <p className="text-sm text-gray-600">{session.location}</p>
                        </div>
                        <div className="flex">
                          {session.current && (
                            <span className="text-xs px-2 py-1 rounded">
                              Current
                            </span>
                          )}
                          {!session.current && (
                            <button className="text-sm">
                              Revoke
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
