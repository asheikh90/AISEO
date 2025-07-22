import React, { useState } from 'react'
import { MapPin, Star, MessageSquare, Camera, Calendar, TrendingUp, Users, Phone } from 'lucide-react'
import toast from 'react-hot-toast'

const GMBHelper = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [gmbData, setGmbData] = useState({
    businessName: 'Your Business Name',
    rating: 4.3,
    totalReviews: 127,
    monthlyViews: 2847,
    searchAppearances: 1523,
    customerActions: 324
  })

  const [postData, setPostData] = useState({
    type: 'update',
    content: '',
    callToAction: 'learn_more'
  })

  const handlePostSubmit = (e) => {
    e.preventDefault()
    toast.success('GMB post scheduled successfully!')
    setPostData({ type: 'update', content: '', callToAction: 'learn_more' })
  }

  const handleReviewResponse = (reviewId, response) => {
    toast.success('Review response posted!')
  }

  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent service! The team was professional and delivered exactly what we needed. Highly recommend!',
      date: '2024-01-20',
      responded: false
    },
    {
      id: 2,
      author: 'Mike Chen',
      rating: 4,
      text: 'Great experience overall. Quick response time and quality work. Will definitely use again.',
      date: '2024-01-18',
      responded: true
    },
    {
      id: 3,
      author: 'Emily Davis',
      rating: 5,
      text: 'Outstanding results! The attention to detail was impressive. Thank you for the great service.',
      date: '2024-01-15',
      responded: false
    }
  ]

  const insights = [
    { label: 'Profile Views', value: '2,847', change: '+12%', icon: Users },
    { label: 'Search Appearances', value: '1,523', change: '+8%', icon: TrendingUp },
    { label: 'Customer Actions', value: '324', change: '+15%', icon: Phone },
    { label: 'Photo Views', value: '1,892', change: '+22%', icon: Camera }
  ]

  const suggestions = [
    {
      category: 'Profile Optimization',
      items: [
        'Add more high-quality photos of your business',
        'Update business hours for holiday season',
        'Add missing business attributes (WiFi, Parking, etc.)',
        'Complete your business description with keywords'
      ]
    },
    {
      category: 'Content Strategy',
      items: [
        'Post weekly updates about your services',
        'Share customer success stories',
        'Create event posts for upcoming promotions',
        'Add product/service photos regularly'
      ]
    },
    {
      category: 'Review Management',
      items: [
        'Respond to 3 pending reviews',
        'Ask satisfied customers for reviews',
        'Set up review monitoring alerts',
        'Create review response templates'
      ]
    }
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Google Business Profile Helper</h1>
          <p className="text-gray-600 mt-1">Optimize your GMB listing and manage your online presence.</p>
        </div>
        <button className="btn-primary">
          <MapPin className="w-4 h-4 mr-2" />
          Connect GMB Account
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex">
          {[
            { id: 'overview', name: 'Overview', icon: TrendingUp },
            { id: 'posts', name: 'Posts', icon: MessageSquare },
            { id: 'reviews', name: 'Reviews', icon: Star },
            { id: 'insights', name: 'Insights', icon: Users },
            { id: 'suggestions', name: 'Suggestions', icon: Camera }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Business Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="flex">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <div className="flex mt-2">
                    <span className="text-3xl font-bold text-gray-900">{gmbData.rating}</span>
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(gmbData.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-yellow-100">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{gmbData.totalReviews} total reviews</p>
            </div>

            {insights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <div key={index} className="p-6">
                  <div className="flex">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{insight.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{insight.value}</p>
                    </div>
                    <div className="p-3 rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-medium">{insight.change} this month</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Create Post', icon: MessageSquare, color: 'bg-blue-500' },
                { title: 'Upload Photos', icon: Camera, color: 'bg-green-500' },
                { title: 'Respond to Reviews', icon: Star, color: 'bg-yellow-500' },
                { title: 'Update Info', icon: MapPin, color: 'bg-purple-500' }
              ].map((action, index) => {
                const Icon = action.icon
                return (
                  <button
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md"
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900">{action.title}</h4>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Posts Tab */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Post</h3>
              
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Type
                  </label>
                  <select
                    value={postData.type}
                    onChange={(e) => setPostData(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full"
                  >
                    <option value="update">What's New</option>
                    <option value="event">Event</option>
                    <option value="offer">Offer</option>
                    <option value="product">Product</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    value={postData.content}
                    onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="What would you like to share with your customers?"
                    className="w-full"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Call to Action
                  </label>
                  <select
                    value={postData.callToAction}
                    onChange={(e) => setPostData(prev => ({ ...prev, callToAction: e.target.value }))}
                    className="w-full"
                  >
                    <option value="learn_more">Learn More</option>
                    <option value="book_now">Book Now</option>
                    <option value="call_now">Call Now</option>
                    <option value="shop_now">Shop Now</option>
                    <option value="sign_up">Sign Up</option>
                  </select>
                </div>

                <button type="submit" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Create Post
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">AI Suggestions</h4>
                <div className="space-y-2">
                  {[
                    'Share your latest customer success story',
                    'Highlight your weekend special offers',
                    'Post about your team achievements',
                    'Showcase new products or services'
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setPostData(prev => ({ ...prev, content: suggestion }))}
                      className="text-sm block w-full"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {[
                  {
                    type: 'update',
                    content: 'We\'re excited to announce our new service offerings! Our team has been working hard to bring you even better solutions.',
                    date: '2024-01-20',
                    views: 234,
                    clicks: 12
                  },
                  {
                    type: 'offer',
                    content: '🎉 Special Weekend Offer: Get 20% off all services this weekend only! Book now to secure your spot.',
                    date: '2024-01-18',
                    views: 456,
                    clicks: 28
                  },
                  {
                    type: 'event',
                    content: 'Join us for our monthly workshop on digital marketing strategies. Free for all attendees!',
                    date: '2024-01-15',
                    views: 189,
                    clicks: 15
                  }
                ].map((post, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex mb-2">
                      <span className="px-2 py-1 text-xs font-medium rounded">
                        {post.type}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <p className="text-gray-900 mb-3">{post.content}</p>
                    <div className="flex text-sm text-gray-600">
                      <span>{post.views} views</span>
                      <span>{post.clicks} clicks</span>
                      <button className="text-primary-600 hover:text-primary-700">Edit</button>
                      <button className="text-danger-600 hover:text-danger-700">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="space-y-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex mb-3">
                    <div className="flex">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex">
                        <span className="text-sm font-medium text-gray-700">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{review.author}</h4>
                        <div className="flex">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {review.responded ? (
                        <span className="px-2 py-1 text-xs rounded">
                          Responded
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded">
                          Needs Response
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  
                  {!review.responded && (
                    <div className="space-y-3">
                      <textarea
                        placeholder="Write your response..."
                        className="w-full"
                        rows={3}
                      />
                      <div className="flex">
                        <button
                          onClick={() => handleReviewResponse(review.id)}
                          className="btn-primary"
                        >
                          Post Response
                        </button>
                        <button className="btn-outline">
                          Use AI Template
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Insights Tab */}
      {activeTab === 'insights' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <div key={index} className="p-6">
                  <div className="flex">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{insight.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{insight.value}</p>
                    </div>
                    <div className="p-3 rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-medium">{insight.change} this month</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
            <div className="h-64 flex bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>
      )}

      {/* Suggestions Tab */}
      {activeTab === 'suggestions' && (
        <div className="space-y-6">
          {suggestions.map((category, index) => (
            <div key={index} className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex">
                    <div className="w-6 h-6 rounded-full flex">
                      <span className="text-xs font-medium">{itemIndex + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GMBHelper
