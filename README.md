# @lukisanjaya/ui-library

A comprehensive React UI component library built with TypeScript, Tailwind CSS, and shadcn/ui design system.

## 🚀 Features

- **46+ Components** - Complete set of UI components
- **TypeScript** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first styling with design tokens
- **shadcn/ui** - Modern design system
- **Dark/Light Mode** - Built-in theme support
- **Responsive** - Mobile-first design
- **Accessible** - ARIA compliant components
- **Tree Shakeable** - Import only what you need

## 📦 Installation

### From GitHub Packages

```bash
# Using npm
npm install @lukisanjaya/ui-library

# Using bun
bun add @lukisanjaya/ui-library

# Using yarn
yarn add @lukisanjaya/ui-library
```

### Setup .npmrc (for GitHub Packages)

Create `.npmrc` in your project root:

```
@lukisanjaya:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## 🎯 Quick Start

### 1. Install Dependencies

```bash
npm install @lukisanjaya/ui-library react react-dom
```

### 2. Setup Tailwind CSS

Install Tailwind CSS and configure:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@lukisanjaya/ui-library/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... other colors
      },
    },
  },
  plugins: [],
}
```

### 3. Add CSS Variables

Add to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... other dark mode colors */
  }
}
```

### 4. Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@lukisanjaya/ui-library'

function App() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

## 📚 Components

### Basic Components
- **Button** - Various styles and sizes
- **Card** - Content containers
- **Input** - Form inputs
- **Label** - Form labels
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection

### Data Display
- **Table** - Basic tables
- **DataTable** - Advanced tables with search/pagination
- **Avatar** - Profile images
- **Badge** - Status indicators
- **Empty** - Empty state displays

### Navigation
- **Tabs** - Tabbed navigation
- **Breadcrumb** - Hierarchical navigation
- **Pagination** - Page navigation
- **DropdownMenu** - Context menus

### Feedback
- **Alert** - Notification messages
- **Toast** - Temporary notifications
- **Progress** - Progress indicators
- **Spinner** - Loading indicators
- **Skeleton** - Loading placeholders

### Overlays
- **Modal** - Simple modals
- **Dialog** - Structured dialogs
- **AlertDialog** - Confirmation dialogs
- **Tooltip** - Hover information
- **Popover** - Positioned content

### Advanced
- **Calendar** - Date selection
- **DatePicker** - Date input
- **Combobox** - Searchable select
- **Carousel** - Content carousel
- **Accordion** - Collapsible sections

## 🎨 Theming

The library supports dark/light mode through CSS variables. Use the `useTheme` hook:

```tsx
import { useTheme } from '@lukisanjaya/ui-library'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </Button>
  )
}
```

## 🔧 Development

### Building the Library

```bash
git clone https://github.com/lukisanjaya/ui-library.git
cd ui-library
bun install
bun run build
```

### Publishing

```bash
# Build first
bun run build

# Publish to GitHub Packages
npm run publish:github

# Or publish to npm
npm run publish:npm
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- 🐛 [Report Issues](https://github.com/lukisanjaya/ui-library/issues)
- 💬 [Discussions](https://github.com/lukisanjaya/ui-library/discussions)
- 📖 [Documentation](https://github.com/lukisanjaya/ui-library#readme)