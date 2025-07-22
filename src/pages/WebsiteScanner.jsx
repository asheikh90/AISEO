import React, { useState } from 'react'
import { Search, Globe, Zap, CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react'
import toast from 'react-hot-toast'

const WebsiteScanner = () => {
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanResults, setScanResults] = useState(null)

  const handleScan = async (e) => {
    e.preventDefault()
    if (!url) {
      toast.error('Please enter a website URL')
      return
    }

    setIsScanning(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        url: url,
        overallScore: 78,
        scannedAt: new Date().toISOString(),
        onPage: {
          score: 85,
          issues: [
            { type: 'success', title: 'Page Title', description: 'All pages have unique titles', count: 12 },
            { type: 'warning', title: 'Meta Descriptions', description: '3 pages missing meta descriptions', count: 3 },
            { type: 'success', title: 'H1 Tags', description: 'All pages have proper H1 structure', count: 12 },
            { type: 'error', title: 'Image Alt Text', description: '8 images missing alt text', count: 8 }
          ]
        },
        technical: {
          score: 72,
          issues: [
            { type: 'success', title: 'Site Speed', description: 'Page loads in 2.3s (Good)', value: '2.3s' },
            { type: 'warning', title: 'Mobile Responsive', description: 'Some elements not mobile optimized', value: 'Partial' },
            { type: 'error', title: 'Broken Links', description: '5 broken internal links found', count: 5 },
            { type: 'success', title: 'SSL Certificate', description: 'Valid SSL certificate installed', value: 'Valid' }
          ]
        },
        indexing: {
          score: 90,
          issues: [
            { type: 'success', title: 'Sitemap', description: 'XML sitemap found and valid', value: 'Valid' },
            { type: 'success', title: 'Robots.txt', description: 'Robots.txt file properly configured', value: 'Valid' },
            { type: 'warning', title: 'Indexing', description: '2 pages blocked from indexing', count: 2 }
          ]
        },
        recommendations: [
          'Add meta descriptions to 3 pages without them',
          'Optimize 8 images by adding descriptive alt text',
          'Fix 5 broken internal links',
          'Improve mobile responsiveness for better user experience',
          'Review and unblock 2 pages from indexing if needed'
        ]
      }
      
      setScanResults(mockResults)
      setIsScanning(false)
      toast.success('Website scan completed!')
    }, 3000)
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-success-600'
    if (score >= 60) return 'text-warning-600'
    return 'text-danger-600'
  }

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-success-100'
    if (score >= 60) return 'bg-warning-100'
    return 'bg-danger-100'
  }

  const getIssueIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />
      case 'warning':
        return <AlertCircle className="w-5 h-5" />
      case 'error':
        return <XCircle className="w-5 h-5" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Website SEO Scanner</h1>
          <p className="text-gray-600 mt-1">Analyze your website's SEO performance and get actionable insights.</p>
        </div>
      </div>

      {/* Scan Form */}
      <div className="p-6">
        <form onSubmit={handleScan} className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Globe className="absolute left-3 transform text-gray-400 w-5 h-5" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., https://example.com)"
                className="pl-10 w-full"
                disabled={isScanning}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isScanning}
            className="btn-primary min-w-[120px]"
          >
            {isScanning ? (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Scanning...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Scan Website
              </>
            )}
          </button>
        </form>
      </div>

      {/* Scanning Progress */}
      {isScanning && (
        <div className="p-6">
          <div className="text-center">
            <div className="inline-flex w-16 h-16 rounded-full mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scanning Your Website</h3>
            <p className="text-gray-600 mb-4">Analyzing on-page SEO, technical issues, and indexing status...</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Scan Results */}
      {scanResults && (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="p-6">
            <div className="flex mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Overall SEO Score</h2>
                <p className="text-gray-600">Scanned: {new Date(scanResults.scannedAt).toLocaleString()}</p>
              </div>
              <a
                href={scanResults.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Site
              </a>
            </div>
            
            <div className="flex">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${getScoreBgColor(scanResults.overallScore)}`}>
                <span className={`text-2xl font-bold ${getScoreColor(scanResults.overallScore)}`}>
                  {scanResults.overallScore}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {scanResults.overallScore >= 80 ? 'Excellent' : 
                   scanResults.overallScore >= 60 ? 'Good' : 'Needs Improvement'}
                </h3>
                <p className="text-gray-600">
                  Your website has {scanResults.overallScore >= 80 ? 'strong' : 'room for'} SEO optimization
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* On-Page SEO */}
            <div className="p-6">
              <div className="flex mb-4">
                <h3 className="text-lg font-semibold text-gray-900">On-Page SEO</h3>
                <span className={`text-2xl font-bold ${getScoreColor(scanResults.onPage.score)}`}>
                  {scanResults.onPage.score}
                </span>
              </div>
              <div className="space-y-3">
                {scanResults.onPage.issues.map((issue, index) => (
                  <div key={index} className="flex">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{issue.title}</p>
                      <p className="text-xs text-gray-600">{issue.description}</p>
                    </div>
                    {issue.count && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {issue.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical SEO */}
            <div className="p-6">
              <div className="flex mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Technical SEO</h3>
                <span className={`text-2xl font-bold ${getScoreColor(scanResults.technical.score)}`}>
                  {scanResults.technical.score}
                </span>
              </div>
              <div className="space-y-3">
                {scanResults.technical.issues.map((issue, index) => (
                  <div key={index} className="flex">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{issue.title}</p>
                      <p className="text-xs text-gray-600">{issue.description}</p>
                    </div>
                    {(issue.count || issue.value) && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {issue.count || issue.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Indexing & Crawling */}
            <div className="p-6">
              <div className="flex mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Indexing & Crawling</h3>
                <span className={`text-2xl font-bold ${getScoreColor(scanResults.indexing.score)}`}>
                  {scanResults.indexing.score}
                </span>
              </div>
              <div className="space-y-3">
                {scanResults.indexing.issues.map((issue, index) => (
                  <div key={index} className="flex">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{issue.title}</p>
                      <p className="text-xs text-gray-600">{issue.description}</p>
                    </div>
                    {(issue.count || issue.value) && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {issue.count || issue.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
            <div className="space-y-3">
              {scanResults.recommendations.map((recommendation, index) => (
                <div key={index} className="flex">
                  <div className="w-6 h-6 rounded-full flex">
                    <span className="text-xs font-medium">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="btn-primary">
                <Zap className="w-4 h-4 mr-2" />
                Auto-Fix Issues
              </button>
              <button className="ml-3">
                Export Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WebsiteScanner
