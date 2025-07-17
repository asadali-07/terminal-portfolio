# 💻 Terminal Portfolio

An interactive terminal-style portfolio website built with Next.js that lets visitors explore my professional information through command-line interface.

## ✨ Features

- 🖥️ **Terminal UI**: Authentic command-line interface experience
- ⌨️ **Interactive Commands**: Type commands to navigate through portfolio content
- 🎨 **Smooth Animations**: Powered by Framer Motion for engaging transitions
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎯 **Command History**: Navigate through previous commands with arrow keys

## 🚀 Available Commands

Try these commands in the terminal:

- `help` - Show all available commands
- `about` - Learn about me and my background
- `skills` - View my technical skills and expertise
- `projects` - Explore my featured projects
- `education` - My educational background
- `contact` - Get my contact information
- `social` - Find me on social media
- `resume` - Download my resume
- `clear` - Clear the terminal screen

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: JavaScript
- **Styling**: Tailwind CSS with custom terminal theme

## 🏃‍♂️ Getting Started

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd terminal-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) and start typing commands!

## 🎮 How to Use

1. Click on the terminal input area
2. Type any of the available commands (start with `help`)
3. Press Enter to execute
4. Use ↑/↓ arrow keys to navigate command history
5. Type `clear` to reset the terminal

## 📁 Project Structure

```
terminal-portfolio/
├── app/
│   ├── globals.css      # Global styles and terminal theme
│   ├── layout.js        # Root layout component
│   └── page.js          # Main terminal component
├── data/
│   └── command.js       # Command definitions and responses
└── package.json
```

## 🎨 Customization

To customize the portfolio for your own use:

1. **Update personal information** in `data/command.js`
2. **Modify commands** by editing the commands object
3. **Change styling** in `app/globals.css`
4. **Add new commands** by extending the commands object

## 📱 Responsive Design

The terminal interface adapts to different screen sizes while maintaining the authentic terminal experience on both desktop and mobile devices.

## 🚀 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or build for production:

```bash
npm run build
npm start
```
