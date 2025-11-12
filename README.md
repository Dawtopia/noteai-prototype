# 📝 NoteAI - Prototype v0.1

> A simple notepad with AI assistant - Early prototype built with Next.js

---

## 🎯 About This Prototype

This is an early-stage prototype of **NoteAI** - a minimalist notepad application with integrated AI assistance. The goal is to validate the core concept: seamless AI chat within a notepad interface.

**Current Status:** Basic functionality working - notepad features + AI toggle with side panel.

---

## ✨ Features (Prototype v0.1)

### ✅ Implemented

#### 📄 Basic Notepad Features
- **Text editing** - Write and edit plain text documents
- **File operations:**
  - ✅ Save file
  - ✅ Open file
  - ✅ New file
- **Standard text editor** - Clean, distraction-free writing interface

#### 🤖 AI Integration (Basic)
- **AI Toggle** - Button to enable/disable AI assistant
  - When **OFF**: Regular notepad mode
  - When **ON**: AI side panel appears on the right
- **Side Panel UI** - Dedicated space for AI interaction
  - Appears when AI is toggled ON
  - Hidden when toggled OFF
  - Clean separation between notes and AI chat

---

## 🖼️ Interface Overview

```
┌─────────────────────────────────────────────────────────────┐
│  📄 File  Edit  View          [🤖 AI Toggle: OFF]          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Your notes here...                                         │
│                                                             │
│  This is the main text editor.                              │
│  Write freely, save files, open documents.                  │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**When AI Toggle is ON:**

```
┌────────────────────────────────┬────────────────────────────┐
│  📄 File  Edit  View           │  [🤖 AI Toggle: ON]       │
├────────────────────────────────┼────────────────────────────┤
│                                │                            │
│  Your notes here...            │   AI Assistant Panel       │
│                                │                            │
│  Main editor continues         │   (Chat interface)         │
│  to work normally.             │                            │
│                                │   Currently being          │
│  You can still type,           │   implemented...           │
│  edit, and save.               │                            │
│                                │                            │
└────────────────────────────────┴────────────────────────────┘
```

---

## 🛠️ Technical Details

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Prisma ORM
- **Deployment:** Ready for Vercel/Netlify

### Project Structure
```
noteai/
├── src/                    # Source code
│   └── (app structure)     # Next.js app directory
├── public/                 # Static files
├── prisma/                 # Database schema
├── db/                     # Database files
├── node_modules/           # Dependencies
├── .next/                  # Next.js build output
├── .git/                   # Git repository
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS config
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
└── README.md              # This file
```
---

## 🚧 Current Limitations

This is a **prototype** - many features are incomplete or missing:

### ❌ Not Yet Implemented
- AI conversation functionality (side panel is just UI)
- Actual AI API integration (Claude/ChatGPT/Gemini)
- API key management
- Context management
- AI response streaming
- Multi-tab support
- Dark mode
- Advanced text editing features
- Settings panel
- Full keyboard shortcuts support

### ⚠️ Known Issues
- AI side panel is purely visual (must add manually API at src)
- Limited error handling
- No file format validation
- Basic UI styling
- Performance not optimized
- No data persistence between sessions

---

## 🗺️ Roadmap

### Next Steps (v0.2)
- [ ] Set up API routes for AI providers
- [ ] Connect AI toggle to actual API (Claude/ChatGPT)
- [ ] Implement basic chat functionality in side panel
- [ ] Add API key configuration UI
- [ ] Basic context management
- [ ] Improve UI/UX of side panel
- [ ] Add loading states

### Future Features (v0.3+)
- [ ] Multiple AI provider support (Claude, ChatGPT, Gemini)
- [ ] Conversation history persistence
- [ ] Better error handling
- [ ] Settings panel with preferences
- [ ] Dark mode toggle
- [ ] Multi-tab/file support
- [ ] Export conversation as Markdown
- [ ] Auto-save functionality

---

## 🧪 Testing

### Manual Testing Checklist
- [x] App launches successfully
- [x] Can create new file
- [x] Can open existing file
- [x] Can save file
- [x] Can type and edit text
- [x] AI toggle button works
- [x] Side panel appears/disappears correctly
- [ ] AI responds to messages (pending)
- [ ] File persistence works (pending)

---

## 💡 Prototype Goals

This prototype aims to validate:
1. ✅ Basic notepad functionality is solid
2. ✅ AI toggle mechanism works smoothly
3. ✅ Side panel layout is intuitive
4. ⏳ AI integration feels natural (in progress)
5. ⏳ User experience is seamless (in progress)

---

## 📝 Development Notes

### Configuration Files
- **`next.config.ts`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript compiler options
- **`prisma/schema.prisma`** - Database schema (if using Prisma)

### Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
# ANTHROPIC_API_KEY=your_claude_api_key
# OPENAI_API_KEY=your_openai_api_key
# DATABASE_URL=your_database_url
```

## 👨‍💻 Author

**Your Name**
- GitHub: [@Dawtopia](https://github.com/Dawtopia)
- Email: shdry123@gmail.com
---

## 📌 Notes

**Important:** This is a **prototype** (v0.1) - not production-ready. The core concept is being tested and validated. Many features shown in the full project documentation are not yet implemented.

### What's Different from Full Spec?
- Using **Next.js** instead of Tauri (easier to prototype quickly)
- Web-based instead of desktop app (for now)
- Simplified architecture for rapid iteration
- Focus on proving the concept before building native app

### Future Migration Path
Once the concept is validated, the plan is to:
1. Migrate to Tauri for native desktop experience
2. Add Rust backend for performance
3. Implement full feature set from project documentation
4. Add advanced features (multi-provider, plugins, etc.)

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)

---

**Status:** 🚧 Work in Progress | **Last Updated:** November 2025
