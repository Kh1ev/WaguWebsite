'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiSearch, HiCode, HiCog, HiMusicNote, HiShieldCheck, HiUsers, HiChartBar, HiLightningBolt, HiX } from 'react-icons/hi'

interface Category {
  id: string
  name: string
  icon: React.ReactElement;
}

interface Doc {
  category: string
  title: string
  description: string
  content: string
}

export default function Document() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories: Category[] = [
    { id: 'all', name: 'All', icon: <HiLightningBolt /> },
    { id: 'getting-started', name: 'Getting Started', icon: <HiCode /> },
    { id: 'configuration', name: 'Configuration', icon: <HiCog /> },
    { id: 'music', name: 'Music', icon: <HiMusicNote /> },
    { id: 'moderation', name: 'Moderation', icon: <HiShieldCheck /> },
    { id: 'utility', name: 'Utility', icon: <HiUsers /> },
    { id: 'analytics', name: 'Analytics', icon: <HiChartBar /> },
  ]

  const documentation: Doc[] = [
    {
      category: 'getting-started',
      title: 'Quick Start Installation',
      description: 'Complete guide to install and configure WaguRoom in your Discord server',
      content: `## Installation Guide

### Prerequisites
• Discord Server with "Manage Server" permission
• Administrator access to add bots
• Basic understanding of Discord settings

### Installation Steps
1. Click "Add to Discord" button on our website
2. Select your target server from the dropdown
3. Review and authorize all required permissions
4. Wait for bot to join your server
5. Verify bot status in member list

### First Commands
After installation, verify bot functionality:
\`\`\`
/help - Display all available commands
/setup - Launch configuration wizard
/ping - Check bot response time
\`\`\`

### Troubleshooting
If bot doesn't respond:
• Check bot has proper permissions
• Verify bot is online (green status)
• Ensure channel permissions are correct
• Try re-inviting the bot if issues persist`
    },
    {
      category: 'configuration',
      title: 'Server Configuration',
      description: 'Customize WaguRoom settings to match your server requirements',
      content: `## Configuration Settings

### Basic Setup
Configure essential bot settings:
\`\`\`
/config prefix [new-prefix]
Default: wagu | Example: ! or ?
\`\`\`

\`\`\`
/config language [id/en]
Set bot response language
\`\`\`

### Advanced Settings
\`\`\`
/config log-channel #channel
Set logging destination for events
\`\`\`

\`\`\`
/config mod-role @role
Assign moderator permissions role
\`\`\`

\`\`\`
/config timezone [timezone]
Set server timezone for timestamps
\`\`\`

### Permission Management
Configure role-based command access:
• Admin commands require administrator role
• Moderator commands need mod-role
• User commands available to everyone`
    },
    {
      category: 'music',
      title: 'Music Player Commands',
      description: 'Complete music system with playlist support and quality audio',
      content: `## Music System

### Basic Playback
\`\`\`
/play [song name or URL]
Supports: YouTube, Spotify, SoundCloud
\`\`\`

\`\`\`
/pause - Pause current track
/resume - Resume playback
/stop - Stop and clear queue
\`\`\`

### Queue Management
\`\`\`
/queue - View current playlist
/skip - Skip to next track
/previous - Return to previous track
/shuffle - Randomize queue order
\`\`\`

### Audio Control
\`\`\`
/volume [0-100]
Adjust playback volume
\`\`\`

\`\`\`
/loop [song/queue/off]
Enable repeat modes
\`\`\`

### Advanced Features
• High-quality audio streaming
• Automatic queue management
• Multi-platform support
• Lyrics display (when available)`
    },
    {
      category: 'moderation',
      title: 'Auto-Moderation System',
      description: 'Advanced automated moderation to keep your server safe',
      content: `## Auto-Moderation

### Enable System
\`\`\`
/automod enable
Activate all moderation features
\`\`\`

### Spam Protection
\`\`\`
/automod spam [threshold] [action]
Threshold: messages per 5 seconds
Actions: warn, mute, kick, ban
\`\`\`

### Content Filtering
\`\`\`
/automod badwords add [word]
/automod badwords remove [word]
/automod badwords list
\`\`\`

### Link Management
\`\`\`
/automod links enable #channel
/automod links disable #channel
/automod whitelist-domain [domain]
\`\`\`

### Raid Protection
\`\`\`
/automod raid enable
Protects against mass join attacks
\`\`\`

### Caps Lock Filter
\`\`\`
/automod caps [percentage]
Set maximum caps percentage allowed
\`\`\``
    },
    {
      category: 'moderation',
      title: 'Manual Moderation',
      description: 'Powerful moderation tools for manual server management',
      content: `## Moderation Commands

### Member Actions
\`\`\`
/kick @user [reason]
Remove member from server
\`\`\`

\`\`\`
/ban @user [duration] [reason]
Permanently or temporarily ban member
Duration: 1h, 1d, 7d, 30d, permanent
\`\`\`

\`\`\`
/unban [user-id]
Remove ban from member
\`\`\`

### Timeout System
\`\`\`
/mute @user [duration] [reason]
Temporarily mute member
\`\`\`

\`\`\`
/unmute @user
Remove mute from member
\`\`\`

### Warning System
\`\`\`
/warn @user [reason]
Issue warning to member
\`\`\`

\`\`\`
/warnings @user
View member's warning history
\`\`\`

\`\`\`
/clearwarns @user
Remove all warnings
\`\`\`

### Message Management
\`\`\`
/clear [amount] [user]
Bulk delete messages (max 100)
\`\`\``
    },
    {
      category: 'utility',
      title: 'Utility Commands',
      description: 'Helpful tools and commands for server management',
      content: `## Utility Tools

### Information Commands
\`\`\`
/serverinfo
Display comprehensive server details
Shows: members, roles, channels, creation date
\`\`\`

\`\`\`
/userinfo [@user]
View member information and statistics
\`\`\`

\`\`\`
/avatar [@user]
Display user's avatar in full resolution
\`\`\`

### Interactive Features
\`\`\`
/poll [question] [option1] [option2] ...
Create interactive polls (max 10 options)
\`\`\`

\`\`\`
/reminder [time] [message]
Set personal reminders
Format: 1h, 1d, 1w
\`\`\`

\`\`\`
/giveaway [duration] [winners] [prize]
Host server giveaways
\`\`\`

### Role Management
\`\`\`
/roleinfo @role
Display role information
\`\`\`

\`\`\`
/members @role
List all members with specific role
\`\`\``
    },
    {
      category: 'analytics',
      title: 'Server Analytics & Statistics',
      description: 'Comprehensive analytics dashboard for server insights',
      content: `## Analytics System

### Server Statistics
\`\`\`
/stats server
View complete server metrics
Includes: activity, growth, engagement
\`\`\`

### User Analytics
\`\`\`
/stats user [@user]
View individual member statistics
Shows: messages, activity, join date
\`\`\`

### Channel Analytics
\`\`\`
/stats channel [#channel]
Analyze channel activity
Data: messages, active users, peak times
\`\`\`

### Growth Tracking
\`\`\`
/stats growth [period]
Monitor member growth trends
Period: day, week, month, year
\`\`\`

### Data Export
\`\`\`
/stats export [format]
Export analytics data
Formats: JSON, CSV, PDF
\`\`\`

### Leaderboards
\`\`\`
/leaderboard [type]
Display server rankings
Types: messages, voice, activity
\`\`\``
    },
    {
      category: 'configuration',
      title: 'Advanced Customization',
      description: 'Deep customization options for power users',
      content: `## Advanced Settings

### Custom Commands
\`\`\`
/custom-cmd add [name] [response]
Create custom bot commands
\`\`\`

\`\`\`
/custom-cmd remove [name]
Delete custom command
\`\`\`

\`\`\`
/custom-cmd list
View all custom commands
\`\`\`

### Auto-Responder
\`\`\`
/autorespond add [trigger] [response]
Set automatic message responses
\`\`\`

\`\`\`
/autorespond remove [trigger]
Remove auto-response
\`\`\`

### Welcome System
\`\`\`
/welcome set [message] [#channel]
Configure welcome messages
Variables: {user}, {server}, {count}
\`\`\`

\`\`\`
/welcome embed [title] [description] [color]
Create rich embed welcomes
\`\`\`

### Goodbye Messages
\`\`\`
/goodbye set [message] [#channel]
Configure member leave messages
\`\`\`

### Reaction Roles
\`\`\`
/reactionrole create [message-id]
Setup reaction role system
\`\`\`

\`\`\`
/reactionrole add [emoji] [@role]
Link emoji to role
\`\`\``
    },
  ]

  const filteredDocs = documentation.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-24 xs:py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 xs:px-4 relative z-10">
          <div className="text-center space-y-6 xs:space-y-4 animate-fade-in max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 xs:px-3 py-2.5 xs:py-2">
              <HiCode className="text-white text-lg xs:text-base" />
              <span className="text-sm xs:text-xs font-medium">Complete Documentation</span>
            </div>
            
            <h1 className="text-6xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              WaguRoom{' '}
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            
            <p className="text-xl xs:text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Everything you need to master WaguRoom and unlock its full potential
            </p>

            <div className="max-w-2xl mx-auto pt-6 xs:pt-4">
              <div className="relative group">
                <HiSearch className="absolute left-5 xs:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl xs:text-lg group-focus-within:text-white transition-colors" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl pl-14 xs:pl-12 pr-12 xs:pr-10 py-5 xs:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-base xs:text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 xs:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <HiX className="text-xl xs:text-lg" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xs:py-12">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 xs:gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-4 sticky top-24">
                <h3 className="text-lg xs:text-base font-bold mb-4 xs:mb-3">Categories</h3>
                <div className="space-y-2 xs:space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 xs:gap-2 px-4 xs:px-3 py-3 xs:py-2.5 rounded-xl xs:rounded-lg transition-all duration-300 text-sm xs:text-xs font-medium ${
                        activeCategory === cat.id
                          ? 'bg-white text-black shadow-lg'
                          : 'text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}>
                      <span className="text-lg xs:text-base">{cat.icon}</span>
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-6 xs:space-y-4">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-8 xs:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}>
                      <div className="flex items-start justify-between mb-4 xs:mb-3 flex-wrap gap-3">
                        <div className="flex-1">
                          <h2 className="text-2xl xs:text-xl font-bold mb-2 xs:mb-1.5 group-hover:text-gray-200 transition-colors">{doc.title}</h2>
                          <p className="text-gray-400 text-sm xs:text-xs">{doc.description}</p>
                        </div>
                        <span className="bg-white/10 px-3 xs:px-2.5 py-1.5 xs:py-1 rounded-full text-xs xs:text-[10px] font-medium capitalize whitespace-nowrap">
                          {doc.category.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl xs:rounded-lg p-6 xs:p-4 hover:border-white/10 transition-all">
                        <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm xs:text-xs leading-relaxed overflow-x-auto">
                          {doc.content}
                        </pre>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-16 xs:p-10 text-center">
                    <HiSearch className="text-6xl xs:text-4xl text-gray-600 mx-auto mb-4 xs:mb-3" />
                    <h3 className="text-2xl xs:text-xl font-bold mb-2 xs:mb-1.5">No Results Found</h3>
                    <p className="text-gray-400 text-sm xs:text-xs">
                      Try adjusting your search or filter to find what you're looking for
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 xs:py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="text-center mb-16 xs:mb-10 animate-fade-in">
            <h2 className="text-4xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-3">Quick Access</h2>
            <p className="text-gray-400 text-base xs:text-sm">Jump to frequently accessed documentation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-4 max-w-6xl mx-auto">
            {[
              { title: 'API Reference', desc: 'Complete API documentation', icon: <HiCode className="text-2xl xs:text-xl" /> },
              { title: 'Command List', desc: 'All available commands', icon: <HiLightningBolt className="text-2xl xs:text-xl" /> },
              { title: 'FAQ', desc: 'Frequently asked questions', icon: <HiUsers className="text-2xl xs:text-xl" /> },
              { title: 'Changelog', desc: 'Latest updates and changes', icon: <HiChartBar className="text-2xl xs:text-xl" /> },
              { title: 'Support', desc: 'Get help from community', icon: <HiShieldCheck className="text-2xl xs:text-xl" /> },
              { title: 'Examples', desc: 'Code examples and snippets', icon: <HiCog className="text-2xl xs:text-xl" /> },
            ].map((link, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }} >
                <div className="flex items-start gap-4 xs:gap-3">
                  <div className="flex-shrink-0 bg-white/10 p-3 xs:p-2.5 rounded-xl xs:rounded-lg group-hover:bg-white/20 transition-all">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg xs:text-base font-bold mb-1 group-hover:text-gray-200 transition-colors">{link.title}</h3>
                    <p className="text-gray-400 text-sm xs:text-xs">{link.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 xs:py-16 sm:py-20">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-16 xs:p-8 sm:p-12 text-center hover:border-white/20 transition-all duration-500">
            <h2 className="text-5xl xs:text-3xl sm:text-4xl font-bold mb-6 xs:mb-4">
              Need More Help?
            </h2>
            <p className="text-lg xs:text-sm sm:text-base text-gray-400 mb-10 xs:mb-6 max-w-2xl mx-auto">
              Our support team is ready to assist you. Join our Discord community or check out tutorials
            </p>
            <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 justify-center">
              <a
                href="https://discord.gg/MwNE7Vfb6t"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 xs:px-6 py-4 xs:py-3 bg-white text-black rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Join Discord Support
              </a>
              <Link
                href="/pages/tutorial"
                className="px-8 xs:px-6 py-4 xs:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                View Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}