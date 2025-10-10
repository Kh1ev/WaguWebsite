'use client'

import Link from 'next/link'
import { HiShieldCheck, HiLockClosed, HiEye, HiDatabase } from 'react-icons/hi'

interface Section {
  icon: React.ReactElement;
  title: string
  content: string
}

export default function PrivacyPolicy() {
  const sections: Section[] = [
    {
      icon: <HiDatabase className="text-4xl xs:text-3xl" />,
      title: 'Data Collection',
      content: `We collect minimal data necessary for the bot to function properly. This includes:

• Server ID and basic server information
• User IDs for command execution and tracking
• Message content only when necessary for moderation features
• Configuration settings specific to your server
• Usage statistics for performance improvement

We do NOT collect or store:
• Private direct messages
• Personal information beyond Discord IDs
• Payment or financial information
• Browsing history or external activities
• Voice chat content or recordings`
    },
    {
      icon: <HiLockClosed className="text-4xl xs:text-3xl" />,
      title: 'Data Storage & Security',
      content: `Your data security is our highest priority:

• All data is encrypted in transit using TLS 1.3
• Data at rest is encrypted using AES-256 encryption
• Stored on secure servers with regular automated backups
• Access restricted to authorized personnel only with 2FA
• Regular security audits and penetration testing
• Automatic data retention policies enforced

Server configuration data is retained for the duration of bot usage. When the bot is removed from a server, all associated data is automatically purged within 30 days. Backup data is retained for an additional 30 days for recovery purposes only.`
    },
    {
      icon: <HiEye className="text-4xl xs:text-3xl" />,
      title: 'Data Usage',
      content: `We use collected data exclusively for:

• Providing bot functionality and services
• Improving bot performance and features
• Troubleshooting and customer support
• Aggregate analytics (fully anonymized)
• Security and fraud prevention

We will NEVER:
• Sell your data to third parties
• Use data for advertising purposes
• Share data without your explicit consent (except as required by law)
• Access data beyond operational necessity
• Use data for purposes not disclosed in this policy`
    },
    {
      icon: <HiShieldCheck className="text-4xl xs:text-3xl" />,
      title: 'Your Rights',
      content: `You have full control over your data:

• Request a complete copy of your data at any time
• Request immediate deletion of your data
• Opt-out of optional data collection features
• Update or correct your information
• Withdraw consent for data processing
• File complaints with data protection authorities

To exercise these rights, contact us through our Discord server or email support@waguroom.com. We will respond to all requests within 30 days.`
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-24 xs:py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 xs:px-4 relative z-10">
          <div className="text-center space-y-6 xs:space-y-4 animate-fade-in max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 xs:px-3 py-2.5 xs:py-2">
              <HiShieldCheck className="text-white text-lg xs:text-base" />
              <span className="text-sm xs:text-xs font-medium">Privacy & Data Protection</span>
            </div>
            
            <h1 className="text-6xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Privacy{' '}
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <p className="text-xl xs:text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Your privacy matters. Learn how we collect, use, and protect your data
            </p>
            
            <p className="text-sm xs:text-xs text-gray-500">
              Last Updated: October 10, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xs:py-12">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mb-8 xs:mb-6 animate-fade-in hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h2 className="text-3xl xs:text-2xl font-bold mb-6 xs:mb-4">Introduction</h2>
              <p className="text-gray-400 mb-4 xs:mb-3 leading-relaxed text-base xs:text-sm">
                Welcome to WaguRoom's Privacy Policy. This policy describes how WaguRoom ("we", "us", or "our") collects, uses, and protects your information when you use our Discord bot service.
              </p>
              <p className="text-gray-400 leading-relaxed text-base xs:text-sm">
                By using WaguRoom, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </div>

            <div className="space-y-8 xs:space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }} >
                  <div className="flex items-start gap-6 xs:gap-4 mb-6 xs:mb-4">
                    <div className="flex-shrink-0 bg-white/10 p-4 xs:p-3 rounded-2xl xs:rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl xs:text-xl font-bold">{section.title}</h3>
                    </div>
                  </div>
                  <div className="text-gray-400 whitespace-pre-line leading-relaxed text-base xs:text-sm ml-0 sm:ml-20">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-4 mt-8 xs:mt-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in">
                <h3 className="text-xl xs:text-lg font-bold mb-4 xs:mb-3">Third-Party Services</h3>
                <p className="text-gray-400 text-sm xs:text-xs mb-4 xs:mb-3">
                  We may use third-party services that collect information:
                </p>
                <ul className="text-gray-400 text-sm xs:text-xs space-y-2 xs:space-y-1.5">
                  <li>• Discord API for bot functionality</li>
                  <li>• Cloud hosting providers (AWS, Google Cloud)</li>
                  <li>• Analytics services (anonymized data only)</li>
                  <li>• CDN services for content delivery</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in">
                <h3 className="text-xl xs:text-lg font-bold mb-4 xs:mb-3">Data Retention</h3>
                <p className="text-gray-400 text-sm xs:text-xs mb-4 xs:mb-3">
                  We retain your data only as long as necessary:
                </p>
                <ul className="text-gray-400 text-sm xs:text-xs space-y-2 xs:space-y-1.5">
                  <li>• Active servers: Ongoing retention</li>
                  <li>• Removed bot: 30 days</li>
                  <li>• Event logs: 90 days maximum</li>
                  <li>• Backups: 30 days rolling retention</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 animate-fade-in hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-6 xs:mb-4">GDPR Compliance</h3>
              <p className="text-gray-400 mb-6 xs:mb-4 text-base xs:text-sm leading-relaxed">
                WaguRoom is fully committed to GDPR compliance. EU users have additional rights including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-3">
                {[
                  { title: 'Right to Access', desc: 'Request a complete copy of your personal data' },
                  { title: 'Right to Erasure', desc: 'Request immediate deletion of your data' },
                  { title: 'Right to Portability', desc: 'Transfer your data to another service provider' },
                  { title: 'Right to Object', desc: 'Object to specific data processing activities' }
                ].map((right, index) => (
                  <div 
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-white/5 p-5 xs:p-4 rounded-xl xs:rounded-lg hover:border-white/10 transition-all">
                    <h4 className="font-bold mb-2 xs:mb-1.5 text-base xs:text-sm">{right.title}</h4>
                    <p className="text-gray-400 text-sm xs:text-xs">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 text-center animate-fade-in hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-4 xs:mb-3">Contact Us</h3>
              <p className="text-gray-400 mb-8 xs:mb-6 text-base xs:text-sm max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 justify-center">
                <a
                  href="mailto:support@waguroom.com"
                  className="px-8 xs:px-6 py-4 xs:py-3 bg-white text-black rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Email Support
                </a>
                <a
                  href="https://discord.gg/MwNE7Vfb6t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 xs:px-6 py-4 xs:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Discord Server
                </a>
              </div>
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