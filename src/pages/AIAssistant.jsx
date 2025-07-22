import React, { useState } from 'react'
import { Bot, Send, Sparkles, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hi! I'm your AI SEO assistant. I can help you with keyword research, content optimization, technical SEO issues, and strategic recommendations. What would you like to work on today?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickActions = [
    {
      title: 'Analyze my website',
      description: 'Get a comprehensive SEO audit',
      icon: TrendingUp,
      prompt: 'Please analyze my website and provide SEO recommendations'
    },
    {
      title: 'Keyword suggestions',
      description: 'Find profitable keywords for my niche',
      icon: Lightbulb,
      prompt: 'Help me find high-value keywords for my business'
    },
    {
      title: 'Content ideas',
      description: 'Generate blog post topics',
      icon: MessageSquare,
      prompt: 'Suggest content ideas that will help me rank better'
    },
    {
      title: 'Fix technical issues',
      description: 'Resolve SEO technical problems',
      icon: Bot,
      prompt: 'Help me identify and fix technical SEO issues'
    }
  ]

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message)
      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 2000)
  }

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('keyword') || lowerMessage.includes('research')) {
      return `Great! For effective keyword research, I recommend:

1. **Start with seed keywords** - Think about what your customers search for
2. **Use long-tail variations** - Target specific, less competitive phrases
3. **Analyze search intent** - Match content to what users actually want
4. **Check competition** - Look for keywords with good volume but manageable difficulty

Would you like me to help you research keywords for a specific topic or industry?`
    }
    
    if (lowerMessage.includes('content') || lowerMessage.includes('blog')) {
      return `Excellent! Here are some proven content strategies:

**Content Ideas:**
- "Ultimate Guide to [Your Topic]" - Comprehensive resources rank well
- "Common [Industry] Mistakes to Avoid" - Problem-solving content
- "[Number] Tips for [Goal]" - List posts are highly shareable
- "How to [Achieve Result] in [Timeframe]" - Specific, actionable guides

**SEO Optimization Tips:**
- Include target keywords naturally in titles and headers
- Write compelling meta descriptions
- Use internal linking to connect related content
- Optimize images with descriptive alt text

What industry or topic would you like content ideas for?`
    }
    
    if (lowerMessage.includes('technical') || lowerMessage.includes('audit') || lowerMessage.includes('analyze')) {
      return `Perfect! Let me help you with technical SEO. Here's what I typically check:

**Core Technical Issues:**
- Page speed (aim for under 3 seconds)
- Mobile responsiveness
- SSL certificate
- XML sitemap
- Robots.txt configuration

**Common Problems I Find:**
- Broken internal links
- Missing meta descriptions
- Duplicate content
- Poor URL structure
- Slow loading images

**Quick Wins:**
- Compress images
- Enable browser caching
- Fix broken links
- Add missing alt text

Would you like me to walk you through checking any of these specific areas?`
    }
    
    if (lowerMessage.includes('ranking') || lowerMessage.includes('position')) {
      return `Let's improve your rankings! Here's my strategic approach:

**Immediate Actions:**
- Optimize existing high-performing pages
- Fix technical issues that might be holding you back
- Improve page loading speed
- Enhance user experience signals

**Medium-term Strategy:**
- Create topic clusters around main keywords
- Build quality backlinks from relevant sites
- Regularly update and expand existing content
- Monitor and respond to algorithm changes

**Long-term Growth:**
- Establish topical authority in your niche
- Build a strong internal linking structure
- Create comprehensive, expert-level content
- Develop a consistent publishing schedule

What specific keywords or pages are you trying to improve rankings for?`
    }
    
    return `I understand you're looking for SEO help! I can assist with:

- **Keyword Research** - Finding profitable keywords for your niche
- **Content Strategy** - Creating SEO-optimized content that ranks
- **Technical SEO** - Fixing website issues that hurt rankings
- **Link Building** - Strategies to earn quality backlinks
- **Local SEO** - Optimizing for local search results
- **Analytics** - Understanding your SEO performance data

Could you be more specific about what SEO challenge you're facing? I'm here to provide detailed, actionable advice!`
  }

  const handleQuickAction = (action) => {
    handleSendMessage(action.prompt)
  }

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI SEO Assistant</h1>
          <p className="text-gray-600 mt-1">Get expert SEO advice and personalized recommendations.</p>
        </div>
        <div className="flex px-3 py-2 rounded-full">
          <Bot className="w-5 h-5" />
          <span className="text-sm font-medium">AI Powered</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${
                  message.type === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
              
              {message.type === 'assistant' && (
                <div className="w-8 h-8 rounded-full flex mr-3">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              
              {message.type === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex ml-3">
                  <span className="text-sm font-medium text-gray-700">You</span>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex">
              <div className="w-8 h-8 rounded-full flex mr-3">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg">
                <div className="flex">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="p-3 border border-gray-200 rounded-lg hover:shadow-md"
                  >
                    <div className="flex">
                      <div className="w-8 h-8 rounded-lg flex">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900">{action.title}</h4>
                        <p className="text-xs text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex">
            <div className="flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about SEO..."
                className="w-full"
                disabled={isTyping}
              />
            </div>
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="btn-primary"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex mt-2">
            <div className="flex text-xs text-gray-500">
              <Sparkles className="w-3 h-3" />
              <span>Powered by advanced AI</span>
            </div>
            <div className="text-xs text-gray-500">
              Press Enter to send
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAssistant
