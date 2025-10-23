"use client";

import Link from "next/link";
import {
  HiDocumentText,
  HiUserGroup,
  HiShieldCheck,
  HiBan,
} from "react-icons/hi";

interface Section {
  icon: React.ReactElement;
  title: string;
  content: string;
}

export default function TermsOfService() {
  const sections: Section[] = [
    {
      icon: <HiDocumentText className="text-4xl xs:text-3xl" />,
      title: "Agreement to Terms",
      content: `By accessing and using WaguRoom, you accept and agree to be bound by the terms and provisions of this agreement.

By using WaguRoom, you represent that:
• You are at least 13 years old (or minimum age required by Discord)
• You have the legal authority to bind yourself to these terms
• You will comply with Discord's Terms of Service and Community Guidelines
• You will use the bot in accordance with all applicable laws and regulations
• You have the authority to manage the server where you install the bot

If you do not agree to these terms, you must immediately discontinue use of our service. Continued use of the service constitutes acceptance of these terms.`,
    },
    {
      icon: <HiUserGroup className="text-4xl xs:text-3xl" />,
      title: "Use License",
      content: `Permission is granted to use WaguRoom for Discord server management and entertainment purposes.

You are granted a non-exclusive, non-transferable, revocable license to:
• Add the bot to Discord servers you manage or have permission to manage
• Use all features and commands provided by the bot
• Configure bot settings and preferences for your server
• Access support documentation and community resources
• Receive updates and improvements to the service

This license shall automatically terminate if you violate any of these restrictions and may be terminated by WaguRoom at any time without prior notice.`,
    },
    {
      icon: <HiBan className="text-4xl xs:text-3xl" />,
      title: "Prohibited Uses",
      content: `You may not use WaguRoom for any illegal or unauthorized purpose.

Specifically, you must NOT:
• Violate Discord's Terms of Service or Community Guidelines
• Use the bot for harassment, hate speech, discrimination, or bullying
• Attempt to exploit, hack, reverse engineer, or decompile the bot
• Use the bot to spam, flood channels, or disrupt Discord services
• Impersonate WaguRoom staff, support team, or official representatives
• Distribute malware, viruses, or harmful content through the bot
• Use the bot for unauthorized commercial purposes or resale
• Attempt to overload, crash, or disrupt bot services or infrastructure
• Bypass rate limits, access controls, or security measures
• Use the bot to violate any applicable laws or regulations

Violation of these terms may result in immediate termination of access and potential legal action.`,
    },
    {
      icon: <HiShieldCheck className="text-4xl xs:text-3xl" />,
      title: "Disclaimer & Liability",
      content: `WaguRoom is provided "as is" without warranties of any kind, express or implied.

We do not guarantee that:
• The service will be uninterrupted, timely, secure, or error-free
• Defects or bugs will be corrected in a timely manner
• The service is free from viruses or other harmful components
• Results obtained from the service will be accurate or reliable
• Any errors in the software will be corrected

WaguRoom and its creators shall not be liable for any damages arising from:
• Use or inability to use the service
• Unauthorized access to or alteration of your data
• Statements or conduct of any third party on the service
• Any other matter relating to the service

This includes direct, indirect, incidental, consequential, special, or punitive damages, even if we have been advised of the possibility of such damages.`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 xs:py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 xs:px-4 relative z-10">
          <div className="text-center space-y-6 xs:space-y-4 animate-fade-in max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 xs:px-3 py-2.5 xs:py-2">
              <HiDocumentText className="text-white text-lg xs:text-base" />
              <span className="text-sm xs:text-xs font-medium">
                Terms & Conditions
              </span>
            </div>

            <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Terms of Service
            </h1>

            <p className="text-base xs:text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Please read these terms carefully before using WaguRoom Discord
              Bot
            </p>

            <p className="text-xs xs:text-xs text-gray-500">
              Last Updated: October 10, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xs:py-12">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mb-8 xs:mb-6 animate-fade-in hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h2 className="text-3xl xs:text-2xl font-bold mb-6 xs:mb-4">
                Introduction
              </h2>
              <p className="text-gray-400 mb-4 xs:mb-3 leading-relaxed text-base xs:text-sm">
                Welcome to WaguRooms Terms of Service. These terms govern your
                use of WaguRoom Discord bot and related services. Please read
                these terms carefully before using our service.
              </p>
              <p className="text-gray-400 leading-relaxed text-base xs:text-sm">
                By adding WaguRoom to your Discord server or using any of its
                features, you acknowledge that you have read, understood, and
                agree to be bound by these Terms of Service and our Privacy
                Policy.
              </p>
            </div>

            <div className="space-y-8 xs:space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6 xs:gap-4 mb-6 xs:mb-4">
                    <div className="flex-shrink-0 bg-white/10 p-4 xs:p-3 rounded-2xl xs:rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl xs:text-xl font-bold">
                        {section.title}
                      </h3>
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
                <h3 className="text-xl xs:text-lg font-bold mb-4 xs:mb-3">
                  Service Modifications
                </h3>
                <p className="text-gray-400 text-sm xs:text-xs mb-4 xs:mb-3">
                  We reserve the right to:
                </p>
                <ul className="text-gray-400 text-sm xs:text-xs space-y-2 xs:space-y-1.5">
                  <li>• Modify or discontinue any feature at any time</li>
                  <li>• Update these terms with reasonable notice</li>
                  <li>
                    • Change pricing or introduce new fees (with 30 days notice)
                  </li>
                  <li>• Suspend service temporarily for maintenance</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in">
                <h3 className="text-xl xs:text-lg font-bold mb-4 xs:mb-3">
                  Termination Rights
                </h3>
                <p className="text-gray-400 text-sm xs:text-xs mb-4 xs:mb-3">
                  We may terminate or suspend access if:
                </p>
                <ul className="text-gray-400 text-sm xs:text-xs space-y-2 xs:space-y-1.5">
                  <li>• Terms of Service are violated</li>
                  <li>• Abuse or misuse is detected</li>
                  <li>• Illegal activity occurs</li>
                  <li>• At our sole discretion for any reason</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 animate-fade-in hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-6 xs:mb-4">
                User Responsibilities
              </h3>
              <p className="text-gray-400 mb-6 xs:mb-4 text-base xs:text-sm leading-relaxed">
                As a user of WaguRoom, you are responsible for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-3">
                {[
                  {
                    title: "Server Management",
                    desc: "Ensuring appropriate bot permissions and role configurations",
                  },
                  {
                    title: "Content Moderation",
                    desc: "Monitoring and moderating bot-generated content in your server",
                  },
                  {
                    title: "Compliance",
                    desc: "Following all Discord and WaguRoom guidelines and policies",
                  },
                  {
                    title: "Security",
                    desc: "Protecting your server credentials and bot configurations",
                  },
                ].map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-white/5 p-5 xs:p-4 rounded-xl xs:rounded-lg hover:border-white/10 transition-all"
                  >
                    <h4 className="font-bold mb-2 xs:mb-1.5 text-base xs:text-sm">
                      {responsibility.title}
                    </h4>
                    <p className="text-gray-400 text-sm xs:text-xs">
                      {responsibility.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 animate-fade-in hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-4 xs:mb-3">
                Limitation of Liability
              </h3>
              <p className="text-gray-400 mb-4 xs:mb-3 text-base xs:text-sm leading-relaxed">
                To the maximum extent permitted by applicable law, WaguRoom
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses resulting
                from:
              </p>
              <ul className="text-gray-400 space-y-2 xs:space-y-1.5 text-base xs:text-sm">
                <li>• Your use or inability to use the service</li>
                <li>
                  • Any unauthorized access to or use of our servers and/or any
                  personal information stored therein
                </li>
                <li>
                  • Any interruption or cessation of transmission to or from the
                  service
                </li>
                <li>
                  • Any bugs, viruses, trojan horses, or other harmful code that
                  may be transmitted to or through the service
                </li>
                <li>
                  • Any errors or omissions in any content or for any loss or
                  damage incurred as a result of your use of any content
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 animate-fade-in hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-4 xs:mb-3">
                Governing Law
              </h3>
              <p className="text-gray-400 mb-4 xs:mb-3 text-base xs:text-sm leading-relaxed">
                These Terms shall be governed and construed in accordance with
                the laws of Indonesia, without regard to its conflict of law
                provisions.
              </p>
              <p className="text-gray-400 text-base xs:text-sm leading-relaxed">
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 animate-fade-in hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-4 xs:mb-3">
                Changes to Terms
              </h3>
              <p className="text-gray-400 mb-4 xs:mb-3 text-base xs:text-sm leading-relaxed">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-400 text-base xs:text-sm leading-relaxed">
                By continuing to access or use our service after any revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, you must stop using the
                service immediately.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-10 xs:p-6 mt-8 xs:mt-6 text-center animate-fade-in hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl xs:text-2xl font-bold mb-4 xs:mb-3">
                Questions About Terms?
              </h3>
              <p className="text-gray-400 mb-8 xs:mb-6 text-base xs:text-sm max-w-2xl mx-auto">
                If you have any questions about these Terms of Service, please
                contact our legal team:
              </p>
              <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 justify-center">
                <a
                  href="https://discord.gg/MwNE7Vfb6t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 xs:px-6 py-4 xs:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Discord Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
