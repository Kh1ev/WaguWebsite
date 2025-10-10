# 🤖 WaguRoom - Discord Bot Website

A modern, feature-rich website for WaguRoom Discord Bot built with Next.js 14, TypeScript, and Tailwind CSS.

![WaguRoom Banner](./public/banner.png)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek black and white minimalist design
- 📱 **Fully Responsive** - Optimized for all devices (XS to 4K)
- ⚡ **Lightning Fast** - Built with Next.js 14 App Router
- 🎭 **Smooth Animations** - Beautiful transitions and micro-interactions
- 🔍 **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- ♿ **Accessibility First** - ARIA labels and keyboard navigation
- 📝 **TypeScript** - Type-safe development
- 🎯 **TailwindCSS** - Utility-first styling
- 🔄 **Loading Screen** - Elegant loading animation on first visit

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/waguroom-website.git
cd waguroom-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
waguroom-website/
├── app/
│   ├── document/
│   │   └── page.tsx          # Documentation page
│   ├── tutorial/
│   │   └── page.tsx          # Tutorial page
│   ├── privacy-policy/
│   │   └── page.tsx          # Privacy Policy page
│   ├── terms-of-service/
│   │   └── page.tsx          # Terms of Service page
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles & animations
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer with links
│   ├── Loading.tsx           # Loading screen (full)
│   ├── SimpleLoading.tsx     # Loading screen (minimal)
│   └── LoadingWrapper.tsx    # Loading wrapper component
├── public/
│   ├── favicon.ico
│   └── images/
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## 🎨 Color Palette

```css
Primary Background: #000000 (Black)
Secondary Background: #0a0a0a - #1a1a1a (Dark Gray)
Text Primary: #ffffff (White)
Text Secondary: #a1a1a1 (Gray)
Accent: Linear gradients with white variations
Border: rgba(255, 255, 255, 0.1)
```

## 🔧 Configuration

### Tailwind Config

Custom breakpoints and animations configured in `tailwind.config.ts`:

```typescript
screens: {
  'xs': '475px',  // Extra small devices
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Custom Animations

- `animate-float` - Floating animation
- `animate-shimmer` - Text shimmer effect
- `animate-pulse-slow` - Slow pulse effect
- `animate-fade-in` - Fade in animation
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right

## 📄 Pages

### 🏠 Home (`/`)
- Hero section with animated background
- Server statistics
- About section
- Feature showcase
- Call-to-action

### 📚 Documentation (`/document`)
- Searchable documentation
- Category filtering
- Code examples
- Quick links

### 🎓 Tutorial (`/tutorial`)
- Step-by-step guide
- Video tutorials
- Quick commands reference

### 🔒 Privacy Policy (`/privacy-policy`)
- Data collection information
- GDPR compliance
- User rights

### 📋 Terms of Service (`/terms-of-service`)
- Terms and conditions
- User responsibilities
- Disclaimers

## 🎯 Key Components

### Header
- Responsive navigation
- Mobile hamburger menu
- Active link highlighting
- Scroll-based transparency

### Footer
- Multi-column layout
- Social media links
- Quick links
- Contact information

### Loading Screen
Two variants available:
1. **Full Featured** (`Loading.tsx`) - With progress bar
2. **Simple** (`SimpleLoading.tsx`) - Minimal design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
npm run build
```

### Other Platforms

Build the project:
```bash
npm run build
npm run start
```

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.5s
- ✅ Cumulative Layout Shift: < 0.1

## 🔨 Built With

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library

## 📱 Responsive Breakpoints

```css
xs:  475px  /* Extra small devices */
sm:  640px  /* Small devices */
md:  768px  /* Medium devices */
lg:  1024px /* Large devices */
xl:  1280px /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## 🎨 Custom Utilities

### Glass Effect
```tsx
className="glass" // Glassmorphism effect
```

### Glow Effect
```tsx
className="glow hover:glow-lg" // Subtle glow on hover
```

### Grid Background
```tsx
className="grid-bg" // Animated grid pattern
```

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **WaguRoom Team** - *Initial work*

## 🙏 Acknowledgments

- Design inspiration from modern Discord bots
- Icon library from React Icons
- Animations inspired by Framer Motion

## 📞 Support

- 📧 Email: support@waguroom.com
- 💬 Discord: [Join our server](https://discord.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/waguroom-website/issues)

## 🔗 Links

- 🌐 Website: [waguroom.com](https://waguroom.com)
- 📖 Documentation: [docs.waguroom.com](https://docs.waguroom.com)
- 💬 Discord: [discord.gg/waguroom](https://discord.gg/waguroom)

---

<div align="center">
  
### ⭐ Star this repository if you found it helpful!

Made with ❤️ by WaguRoom Team

</div>
