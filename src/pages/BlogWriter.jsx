import React, { useState } from 'react'
import { PenTool, Sparkles, Target, FileText, Download, Send, Wand2 } from 'lucide-react'
import toast from 'react-hot-toast'

const BlogWriter = () => {
  const [formData, setFormData] = useState({
    topic: '',
    keywords: '',
    tone: 'professional',
    length: 'medium',
    includeImages: true,
    includeSchema: true
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleGenerate = async (e) => {
    e.preventDefault()
    if (!formData.topic) {
      toast.error('Please enter a blog topic')
      return
    }

    setIsGenerating(true)
    
    // Simulate AI content generation
    setTimeout(() => {
      const mockContent = {
        title: `The Ultimate Guide to ${formData.topic}: Everything You Need to Know in 2024`,
        metaDescription: `Discover comprehensive insights about ${formData.topic}. Learn proven strategies, best practices, and expert tips to master ${formData.topic} in 2024.`,
        content: `# The Ultimate Guide to ${formData.topic}: Everything You Need to Know in 2024

## Introduction

In today's digital landscape, understanding ${formData.topic} has become more crucial than ever. Whether you're a beginner looking to get started or an experienced professional seeking to refine your approach, this comprehensive guide will provide you with the insights and strategies you need to succeed.

## What is ${formData.topic}?

${formData.topic} represents a fundamental aspect of modern business and digital marketing. It encompasses various strategies, techniques, and best practices that can significantly impact your success in the digital realm.

## Key Benefits of ${formData.topic}

### 1. Improved Performance
By implementing effective ${formData.topic} strategies, you can expect to see measurable improvements in your overall performance metrics.

### 2. Enhanced User Experience
A well-executed ${formData.topic} approach leads to better user experiences, which translates to higher engagement and conversion rates.

### 3. Competitive Advantage
Mastering ${formData.topic} gives you a significant edge over competitors who haven't invested in these strategies.

## Best Practices for ${formData.topic}

### Research and Planning
Before diving into ${formData.topic}, it's essential to conduct thorough research and create a comprehensive plan.

### Implementation Strategy
A systematic approach to implementing ${formData.topic} ensures better results and minimizes potential issues.

### Monitoring and Optimization
Continuous monitoring and optimization are key to maintaining success with ${formData.topic}.

## Common Mistakes to Avoid

1. **Lack of Strategy**: Jumping into ${formData.topic} without a clear strategy
2. **Ignoring Analytics**: Not tracking and measuring your ${formData.topic} efforts
3. **Inconsistent Execution**: Failing to maintain consistency in your approach

## Tools and Resources

Here are some valuable tools and resources to help you with ${formData.topic}:

- Industry-leading software solutions
- Educational resources and courses
- Community forums and expert networks

## Conclusion

${formData.topic} is an essential component of modern digital success. By following the strategies and best practices outlined in this guide, you'll be well-equipped to achieve your goals and stay ahead of the competition.

Remember, success with ${formData.topic} requires patience, consistency, and continuous learning. Start implementing these strategies today, and you'll see the results in the coming months.`,
        wordCount: 1247,
        readingTime: '5 min read',
        seoScore: 92,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        suggestions: [
          'Add more internal links to related content',
          'Include relevant statistics and data',
          'Consider adding a FAQ section',
          'Optimize images with descriptive alt text'
        ]
      }
      
      setGeneratedContent(mockContent)
      setIsGenerating(false)
      toast.success('Blog post generated successfully!')
    }, 4000)
  }

  const handlePublish = () => {
    toast.success('Blog post published to WordPress!')
  }

  const handleExport = () => {
    toast.success('Blog post exported as PDF!')
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Blog Writer</h1>
          <p className="text-gray-600 mt-1">Create SEO-optimized blog posts with AI assistance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Blog Generation Form */}
        <div className="lg:col-span-1">
          <div className="p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Blog Settings</h2>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Topic *
                </label>
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  placeholder="e.g., Digital Marketing Strategies"
                  className="w-full"
                  disabled={isGenerating}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Keywords
                </label>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  placeholder="keyword1, keyword2, keyword3"
                  className="w-full"
                  disabled={isGenerating}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Writing Tone
                </label>
                <select
                  name="tone"
                  value={formData.tone}
                  onChange={handleInputChange}
                  className="w-full"
                  disabled={isGenerating}
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="authoritative">Authoritative</option>
                  <option value="conversational">Conversational</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Length
                </label>
                <select
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  className="w-full"
                  disabled={isGenerating}
                >
                  <option value="short">Short (500-800 words)</option>
                  <option value="medium">Medium (800-1500 words)</option>
                  <option value="long">Long (1500+ words)</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex">
                  <input
                    type="checkbox"
                    name="includeImages"
                    checked={formData.includeImages}
                    onChange={handleInputChange}
                    className="rounded border-gray-300"
                    disabled={isGenerating}
                  />
                  <span className="ml-2 text-sm text-gray-700">Include image suggestions</span>
                </label>

                <label className="flex">
                  <input
                    type="checkbox"
                    name="includeSchema"
                    checked={formData.includeSchema}
                    onChange={handleInputChange}
                    className="rounded border-gray-300"
                    disabled={isGenerating}
                  />
                  <span className="ml-2 text-sm text-gray-700">Add schema markup</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Blog Post
                  </>
                )}
              </button>
            </form>

            {/* Topic Suggestions */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Topics</h3>
              <div className="space-y-2">
                {[
                  'SEO Best Practices 2024',
                  'Content Marketing Strategy',
                  'Social Media Optimization',
                  'Local SEO Guide',
                  'E-commerce SEO Tips'
                ].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setFormData(prev => ({ ...prev, topic }))}
                    className="text-sm block"
                    disabled={isGenerating}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          {isGenerating && (
            <div className="p-8">
              <div className="text-center">
                <div className="inline-flex w-16 h-16 rounded-full mb-4">
                  <Wand2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generating Your Blog Post</h3>
                <p className="text-gray-600 mb-4">AI is crafting SEO-optimized content based on your requirements...</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mx-auto">
                  <div className="h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          )}

          {generatedContent && (
            <div className="space-y-6">
              {/* Content Stats */}
              <div className="p-6">
                <div className="flex mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Generated Content</h2>
                  <div className="flex">
                    <button onClick={handleExport} className="btn-outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </button>
                    <button onClick={handlePublish} className="btn-primary">
                      <Send className="w-4 h-4 mr-2" />
                      Publish to WordPress
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{generatedContent.wordCount}</div>
                    <div className="text-sm text-gray-600">Words</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{generatedContent.readingTime}</div>
                    <div className="text-sm text-gray-600">Reading Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{generatedContent.seoScore}</div>
                    <div className="text-sm text-gray-600">SEO Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{generatedContent.keywords.length}</div>
                    <div className="text-sm text-gray-600">Keywords</div>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={generatedContent.title}
                      className="w-full"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                    <textarea
                      value={generatedContent.metaDescription}
                      className="w-full"
                      rows={2}
                      readOnly
                    />
                  </div>
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Keywords</label>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="p-6">
                <div className="flex mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Content</h3>
                  <div className="flex">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">SEO Optimized</span>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <textarea
                    value={generatedContent.content}
                    className="w-full text-sm"
                    readOnly
                  />
                </div>
              </div>

              {/* SEO Suggestions */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Suggestions</h3>
                <div className="space-y-3">
                  {generatedContent.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex">
                      <div className="w-6 h-6 rounded-full flex">
                        <span className="text-xs font-medium">{index + 1}</span>
                      </div>
                      <p className="text-sm text-gray-700">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!generatedContent && !isGenerating && (
            <div className="p-8">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Create Amazing Content</h3>
              <p className="text-gray-600">Fill out the form on the left and click "Generate Blog Post" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogWriter
