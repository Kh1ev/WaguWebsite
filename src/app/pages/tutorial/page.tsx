"use client";

import Link from "next/link";
import {
  HiPlay,
  HiCheckCircle,
  HiCog,
  HiLightningBolt,
  HiCode,
  HiSparkles,
} from "react-icons/hi";
import { SiDiscord } from "react-icons/si";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  details: string[];
}

interface VideoTutorial {
  title: string;
  duration: string;
  thumbnail: string;
}

interface Command {
  command: string;
  description: string;
}

export default function Tutorial() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Invite Bot to Server",
      description: "Add WaguRoom to your Discord server in seconds",
      icon: <SiDiscord className="text-4xl xs:text-3xl" />,
      details: [
        'Ensure you have "Manage Server" permission',
        'Click "Add to Discord" button on homepage',
        "Select your server from the dropdown menu",
        "Review and authorize all required permissions",
        'Click "Authorize" to complete installation',
      ],
    },
    {
      number: "02",
      title: "Setup",
      description: "Setup Configuration Waguroom",
      icon: <SiDiscord className="text-4xl xs:text-3xl" />,
      details: [
        "Use /partyroom to show partyroom game configuration available",
        "Select game room from the dropdown menu",
        "Use Install button interaction",
        "Partyroom categories and game room channel have been created automaticly",
        "Create room menu and ready to use for interaction",
      ],
    },
    {
      number: "03",
      title: "Permission",
      description: "Setup bot permissions",
      icon: <HiCog className="text-4xl xs:text-3xl" />,
      details: [
        "Make sure bot have Adminstator Permission",
        "Waguroom need some permission for thread, webhook, message, channel",
        "Partyroom Configuration including for safety and privacy",
        "Create new category and channel for simply usage",
        "Encryption room and moderation security",
      ],
    },
    {
      number: "04",
      title: "Enable Features",
      description: "Activate powerful features for your community",
      icon: <HiLightningBolt className="text-4xl xs:text-3xl" />,
      details: [
        "Type /help for view all available command",
        "/globalchat configuration menu for relay chat",
        "/avatar for lookup user avatar usage",
        "New containers discord bot",
        "Join support server for any questions",
      ],
    },
  ];

  const quickCommands: Command[] = [
    { command: "/help", description: "Display command list" },
    {
      command: "/ping",
      description: "Get ping responsive a bot",
    },
    { command: "/avatar", description: "Get avatar user purpose" },
    {
      command: "/globalchat",
      description: "Global Chat feature with global relay chat",
    },
    { command: "/partyroom", description: "Partyroom for configuration" },
    {
      command: "/language",
      description: "Language Configuration",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-24 xs:py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 xs:px-4 relative z-10">
          <div className="text-center space-y-6 xs:space-y-4 animate-fade-in max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 xs:px-3 py-2.5 xs:py-2">
              <HiCode className="text-white text-lg xs:text-base" />
              <span className="text-sm xs:text-xs font-medium">
                Step-by-Step Tutorial
              </span>
            </div>

            <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Complete Guide to{" "}
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                WaguRoom Bot
              </span>
            </h1>

            <p className="text-base xs:text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Master WaguRoom with our comprehensive tutorials and step-by-step
              guides
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 xs:py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="text-center mb-20 xs:mb-12 animate-fade-in">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 xs:mb-4">
              Quick{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Start Guide
              </span>
            </h2>
            <p className="text-base xs:text-sm sm:text-base text-gray-400">
              Follow these 4 simple steps to get WaguRoom running on your server
            </p>
          </div>

          <div className="space-y-12 xs:space-y-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xs:gap-6 p-10 xs:p-6">
                  <div className="lg:col-span-1 flex flex-col items-start space-y-6 xs:space-y-4">
                    <div className="text-8xl xs:text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                      {step.number}
                    </div>
                    <div className="bg-white/10 p-4 xs:p-3 rounded-2xl xs:rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-base xs:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl xs:rounded-xl p-8 xs:p-5 hover:border-white/10 transition-all">
                      <h4 className="text-xl xs:text-lg font-bold mb-6 xs:mb-4 flex items-center gap-2">
                        <HiSparkles className="text-white" />
                        Step Details
                      </h4>
                      <ul className="space-y-4 xs:space-y-3">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-4 xs:gap-3 group/item"
                          >
                            <HiCheckCircle className="text-white text-2xl xs:text-xl flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-gray-300 text-base xs:text-sm leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 xs:py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="text-center mb-16 xs:mb-10 animate-fade-in">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 xs:mb-4">
              Essential{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Commands
              </span>
            </h2>
            <p className="text-base xs:text-sm sm:text-base text-gray-400">
              Most frequently used commands to get you started quickly
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 xs:space-y-3">
            {quickCommands.map((cmd, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-2 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 xs:gap-3">
                  <code className="text-green-400 font-mono font-bold text-lg xs:text-base bg-black/40 px-4 xs:px-3 py-2 xs:py-1.5 rounded-lg border border-white/5 group-hover:border-white/10 transition-all">
                    {cmd.command}
                  </code>
                  <span className="text-gray-400 text-base xs:text-sm flex-1 sm:text-right">
                    {cmd.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 xs:py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-16 xs:p-8 sm:p-12 text-center hover:border-white/20 transition-all duration-500">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 xs:mb-4">
              Still Have Questions?
            </h2>
            <p className="text-base xs:text-sm sm:text-base text-gray-400 mb-10 xs:mb-6 max-w-2xl mx-auto">
              Join our Discord community or explore detailed documentation for
              more help
            </p>
            <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 justify-center">
              <a
                href="https://discord.gg/MwNE7Vfb6t"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 xs:px-6 py-4 xs:py-3 bg-white text-black rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Join Discord Server
              </a>
              <Link
                href="/pages/document"
                className="px-8 xs:px-6 py-4 xs:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Read Documentation
              </Link>
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
