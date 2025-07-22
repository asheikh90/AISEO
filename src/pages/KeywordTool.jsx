import React, { useState } from 'react'
import { Search, Target, TrendingUp, Eye, DollarSign, BarChart3 } from 'lucide-react'
import toast from 'react-hot-toast'

const KeywordTool = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [keywordData, setKeywordData] = useState(null)
  const [activeTab, setActiveTab] = useState('keywords')

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm) {
      toast.error('Please enter a keyword or domain')
      return
    }

    setIsSearching(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockData = {
        searchTerm,
        keywords: [
          {
            keyword: 'digital marketing',
            volume: 49500,
            difficulty: 72,
            cpc: 3.45,
            trend: 'up',
            position: 15,
            opportunity: 'high'
          },
          {
            keyword: 'digital marketing agency',
            volume: 12100,
            difficulty: 68,
            cpc: 5.20,
            trend: 'up',
            position: 8,
            opportunity: 'medium'
          },
          {
            keyword: 'digital marketing services',
            volume: 8100,
            difficulty: 65,
            cpc: 4.80,
            trend: 'stable',
            position: 12,
            opportunity: 'high'
          },
          {
            keyword: 'digital marketing strategy',
            volume: 6600,
            difficulty: 58,
            cpc: 2.90,
            trend: 'up',
            position: 23,
            opportunity: 'high'
          },
          {
            keyword: 'digital marketing consultant',
            volume: 3600,
            difficulty: 52,
            cpc: 6.10,
            trend: 'stable',
            position: 18,
            opportunity: 'medium'
          }
        ],
        competitors: [
          {
            domain: 'hubspot.com',
            commonKeywords: 1247,
            organicTraffic: 2847000,
            paidKeywords: 892,
            adSpend: 125000
          },
          {
            domain: 'semrush.com',
            commonKeywords: 956,
            organicTraffic: 1923000,
            paidKeywords: 1205,
            adSpend: 89000
          },
          {
            domain: 'moz.com',
            commonKeywords: 743,
            organicTraffic: 1456000,
            paidKeywords: 567,
            adSpend: 67000
          }
        ],
        suggestions: [
          'Create a comprehensive guide on digital marketing fundamentals',
          'Target long-tail keywords like "digital marketing for small business"',
          'Develop location-based content for "digital marketing [city]"',
          'Focus on industry-specific keywords like "digital marketing for healthcare"'
        ]
      }
      
      setKeywordData(mockData)
      setIsSearching(false)
      toast.success('Keyword research completed!')
    }, 2000)
  }

  const getDifficultyColor = (difficulty) => {
    if (difficulty >= 70) return 'text-danger-600 bg-danger-100'
    if (difficulty >= 50) return 'text-warning-600 bg-warning-100'
    return 'text-success-600 bg-success-100'
  }

  const getOpportunityColor = (opportunity) => {
    switch (opportunity) {
      case 'high':
        return 'text-success-600 bg-success-100'
      case 'medium':
        return 'text-warning-600 bg-warning-100'
      case 'low':
        return 'text-gray-600 bg-gray-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4" />
      case 'down':
        return <TrendingUp className="w-4 h-4 rotate-180" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Keyword & Competitor Tool</h1>
          <p className="text-gray-600 mt-1">Discover profitable keywords and analyze your competition.</p>
        </div>
      </div>

      {/* Search Form */}
      <div className="p-6">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 transform text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter keyword or competitor domain (e.g., digital marketing or competitor.com)"
                className="pl-10 w-full"
                disabled={isSearching}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="btn-primary min-w-[120px]"
          >
            {isSearching ? (
              <>
                <Target className="w-4 h-4 mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Research
              </>
            )}
          </button>
        </form>
      </div>

      {/* Loading State */}
      {isSearching && (
        <div className="p-8">
          <div className="text-center">
            <div className="inline-flex w-16 h-16 rounded-full mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Keywords</h3>
            <p className="text-gray-600 mb-4">Gathering keyword data and competitor insights...</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mx-auto">
              <div className="h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {keywordData && (
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'keywords', name: 'Keywords', icon: Target },
                { id: 'competitors', name: 'Competitors', icon: BarChart3 },
                { id: 'suggestions', name: 'Suggestions', icon: TrendingUp }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex py-2 px-1 border-b-2 font-medium text-sm ${
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

          {/* Keywords Tab */}
          {activeTab === 'keywords' && (
            <div className="p-6">
              <div className="flex mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Keyword Opportunities</h3>
                <button className="btn-outline">
                  Export Keywords
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        Keyword
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        Volume
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        Difficulty
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        CPC
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        Trend
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        Position
                      </th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider">
                        Opportunity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {keywordData.keywords.map((keyword, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex">
                            <Eye className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-900">{keyword.volume.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(keyword.difficulty)}`}>
                            {keyword.difficulty}%
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-900">${keyword.cpc}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getTrendIcon(keyword.trend)}
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">#{keyword.position}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOpportunityColor(keyword.opportunity)}`}>
                            {keyword.opportunity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Competitors Tab */}
          {activeTab === 'competitors' && (
            <div className="space-y-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Competitors</h3>
                
                <div className="space-y-4">
                  {keywordData.competitors.map((competitor, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex mb-4">
                        <div className="flex">
                          <div className="w-10 h-10 rounded-lg flex">
                            <span className="text-sm font-medium">
                              {competitor.domain.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{competitor.domain}</h4>
                            <p className="text-sm text-gray-600">{competitor.commonKeywords} common keywords</p>
                          </div>
                        </div>
                        <button className="btn-outline">
                          Analyze
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {competitor.organicTraffic.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">Organic Traffic</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {competitor.paidKeywords.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">Paid Keywords</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            ${competitor.adSpend.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600">Est. Ad Spend</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Suggestions Tab */}
          {activeTab === 'suggestions' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Content & Strategy Suggestions</h3>
              
              <div className="space-y-4">
                {keywordData.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex">
                    <div className="w-6 h-6 rounded-full flex">
                      <span className="text-xs font-medium">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700">{suggestion}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md">
                    <h5 className="font-medium text-gray-900 mb-1">Create Content Calendar</h5>
                    <p className="text-sm text-gray-600">Plan blog posts around high-opportunity keywords</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md">
                    <h5 className="font-medium text-gray-900 mb-1">Optimize Existing Pages</h5>
                    <p className="text-sm text-gray-600">Update current content with target keywords</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md">
                    <h5 className="font-medium text-gray-900 mb-1">Build Topic Clusters</h5>
                    <p className="text-sm text-gray-600">Create comprehensive content around main topics</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md">
                    <h5 className="font-medium text-gray-900 mb-1">Monitor Rankings</h5>
                    <p className="text-sm text-gray-600">Track progress on target keywords</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!keywordData && !isSearching && (
        <div className="p-8">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Research Keywords</h3>
          <p className="text-gray-600">Enter a keyword or competitor domain above to get started with your research.</p>
        </div>
      )}
    </div>
  )
}

export default KeywordTool
