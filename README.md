<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NoteAI - Complete Project Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
            background: white;
        }
        
        h1 {
            color: #2563eb;
            border-bottom: 4px solid #2563eb;
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-size: 2.5em;
        }
        
        h2 {
            color: #1e40af;
            margin-top: 40px;
            margin-bottom: 20px;
            font-size: 1.8em;
            border-left: 5px solid #3b82f6;
            padding-left: 15px;
        }
        
        h3 {
            color: #1e3a8a;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 1.4em;
        }
        
        h4 {
            color: #1e293b;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 1.1em;
        }
        
        p {
            margin-bottom: 15px;
            text-align: justify;
        }
        
        .subtitle {
            color: #64748b;
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        
        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }
        
        .info-box {
            background: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 4px;
        }
        
        .warning-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 4px;
        }
        
        .success-box {
            background: #d1fae5;
            border-left: 4px solid #10b981;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 4px;
        }
        
        ul, ol {
            margin-left: 30px;
            margin-bottom: 15px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        code {
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            line-height: 1.5;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 0.9em;
        }
        
        th, td {
            border: 1px solid #cbd5e1;
            padding: 12px;
            text-align: left;
        }
        
        th {
            background: #f1f5f9;
            font-weight: bold;
            color: #1e40af;
        }
        
        tr:nth-child(even) {
            background: #f8fafc;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 20px 0;
        }
        
        .feature-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 15px;
            border-radius: 8px;
        }
        
        .feature-card h4 {
            margin-top: 0;
            color: #3b82f6;
        }
        
        .mockup {
            background: #1e293b;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: monospace;
            color: #e2e8f0;
            white-space: pre;
            overflow-x: auto;
        }
        
        .timeline {
            border-left: 3px solid #3b82f6;
            padding-left: 30px;
            margin: 20px 0;
        }
        
        .timeline-item {
            margin-bottom: 25px;
            position: relative;
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -36px;
            top: 5px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #3b82f6;
            border: 3px solid white;
        }
        
        .timeline-item h4 {
            margin: 0 0 10px 0;
        }
        
        @media print {
            body {
                padding: 0;
            }
            
            .section {
                page-break-inside: avoid;
            }
            
            h2 {
                page-break-after: avoid;
            }
        }
        
        .toc {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
        }
        
        .toc h3 {
            margin-top: 0;
            color: #1e40af;
        }
        
        .toc ul {
            list-style: none;
            margin-left: 0;
        }
        
        .toc li {
            padding: 5px 0;
        }
        
        .toc a {
            color: #3b82f6;
            text-decoration: none;
        }
        
        .toc a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>📝 NoteAI - Complete Project Documentation</h1>
    <p class="subtitle">AI-Powered Notepad for Daily Users | Version 1.0</p>
    
    <div class="info-box">
        <strong>📌 Project Overview:</strong> NoteAI adalah aplikasi notepad desktop minimalis dengan AI assistant terintegrasi. Target user adalah casual daily users yang ingin chat dengan AI langsung di dalam notes mereka.
    </div>

    <!-- Table of Contents -->
    <div class="toc">
        <h3>📑 Table of Contents</h3>
        <ul>
            <li><a href="#overview">1. Project Overview</a></li>
            <li><a href="#target-audience">2. Target Audience</a></li>
            <li><a href="#features">3. Core Features</a></li>
            <li><a href="#ui-design">4. UI/UX Design</a></li>
            <li><a href="#technical">5. Technical Architecture</a></li>
            <li><a href="#workflows">6. User Workflows</a></li>
            <li><a href="#api-setup">7. API Setup Helper</a></li>
            <li><a href="#storage">8. Data Storage</a></li>
            <li><a href="#roadmap">9. Development Roadmap</a></li>
            <li><a href="#learning-path">10. Learning Path</a></li>
        </ul>
    </div>

    <!-- Section 1: Project Overview -->
    <div class="section" id="overview">
        <h2>1. 🎯 Project Overview</h2>
        
        <h3>What is NoteAI?</h3>
        <p>NoteAI adalah aplikasi desktop notepad sederhana yang memungkinkan user untuk berinteraksi dengan AI assistant langsung di dalam dokumen mereka. Berbeda dengan notepad biasa, user bisa mengaktifkan AI toggle untuk memulai conversation tanpa perlu membuka browser atau aplikasi terpisah.</p>
        
        <div class="feature-grid">
            <div class="feature-card">
                <h4>✨ Simple & Clean</h4>
                <p>Interface minimalis seperti Notepad Windows - no bloat, no distraction</p>
            </div>
            <div class="feature-card">
                <h4>🤖 AI Integration</h4>
                <p>Chat dengan AI langsung di notes - toggle ON/OFF kapan saja</p>
            </div>
            <div class="feature-card">
                <h4>🔐 Privacy First</h4>
                <p>API key tersimpan encrypted, semua data lokal, no telemetry</p>
            </div>
            <div class="feature-card">
                <h4>⚡ Lightweight</h4>
                <p>App size ~5-10MB, startup < 2 detik, minimal RAM usage</p>
            </div>
        </div>

        <h3>Key Differentiators</h3>
        <ul>
            <li><strong>Notepad-first approach:</strong> AI adalah optional feature, bukan core functionality</li>
            <li><strong>In-document conversation:</strong> Semua chat tersimpan di document yang sama</li>
            <li><strong>Multi-API support:</strong> Claude, ChatGPT, Gemini dalam satu app</li>
            <li><strong>Context awareness:</strong> AI hanya membaca text setelah toggle activated</li>
            <li><strong>Zero learning curve:</strong> Kalau kamu bisa pakai Notepad, kamu bisa pakai NoteAI</li>
        </ul>
    </div>

    <!-- Section 2: Target Audience -->
    <div class="section" id="target-audience">
        <h2>2. 👥 Target Audience</h2>
        
        <div class="success-box">
            <strong>🎯 Primary Target:</strong> Casual daily users yang familiar dengan chat AI (ChatGPT, Claude) dan ingin convenience chat langsung dari notes mereka.
        </div>

        <h3>Who is NOT our target:</h3>
        <ul>
            <li>❌ Developers (sudah ada Cursor, Claude Code)</li>
            <li>❌ Technical writers yang butuh advanced formatting</li>
            <li>❌ Power users yang butuh complex features</li>
        </ul>

        <h3>Perfect For:</h3>
        <table>
            <tr>
                <th>User Type</th>
                <th>Use Case</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>📚 Students</td>
                <td>Study notes + AI explanations</td>
                <td>"AI, jelasin konsep ini dengan simple"</td>
            </tr>
            <tr>
                <td>📝 Journalers</td>
                <td>Daily journaling with AI insights</td>
                <td>"AI, apa refleksi dari hari gw?"</td>
            </tr>
            <tr>
                <td>✅ Planners</td>
                <td>Todo lists with AI help</td>
                <td>"AI, prioritize tasks gw dong"</td>
            </tr>
            <tr>
                <td>💡 Creators</td>
                <td>Brainstorming ideas</td>
                <td>"AI, expand ide ini jadi 10 poin"</td>
            </tr>
            <tr>
                <td>✍️ Writers</td>
                <td>Creative writing assistance</td>
                <td>"AI, lanjutin cerita ini"</td>
            </tr>
            <tr>
                <td>🌍 Anyone</td>
                <td>Quick translations & questions</td>
                <td>"AI, translate ini ke English"</td>
            </tr>
        </table>

        <h3>Real-World Scenarios</h3>
        
        <h4>Scenario 1: Student Taking Notes</h4>
        <div class="mockup">User writes:
"Catatan Kuliah - Biologi
Photosynthesis:
- Proses tumbuhan bikin makanan
- Butuh cahaya matahari
- Hasilin oksigen"

[Toggle AI ON]

User: AI, jelasin photosynthesis dengan bahasa simple dong

[AI]: Sure! Jadi begini, photosynthesis itu kayak...
[explains in simple Indonesian]</div>

        <h4>Scenario 2: Daily Planning</h4>
        <div class="mockup">User writes:
"Todo Hari Ini:
- Belanja groceries
- Meeting jam 2
- Olahraga
- Bikin laporan
- Call mom"

[Toggle AI ON]

User: AI, which one should I do first?

[AI]: Based on your list, here's my suggestion...
1. Meeting jam 2 (paling time-sensitive)
2. Bikin laporan (butuh fokus)
...</div>
    </div>

    <!-- Section 3: Features -->
    <div class="section" id="features">
        <h2>3. ✨ Core Features</h2>
        
        <h3>3.1 Basic Notepad Functionality</h3>
        
        <h4>Text Editor</h4>
        <ul>
            <li>Plain text editor dengan UTF-8 encoding</li>
            <li>Support semua karakter (Indonesia, emoji, symbols)</li>
            <li>Optional line numbers</li>
            <li>Word count & character count di status bar</li>
            <li>Auto-save feature (configurable)</li>
        </ul>

        <h4>File Operations</h4>
        <table>
            <tr>
                <th>Action</th>
                <th>Shortcut</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>New File</td>
                <td>Ctrl+N</td>
                <td>Create blank document</td>
            </tr>
            <tr>
                <td>Open File</td>
                <td>Ctrl+O</td>
                <td>Open .txt, .md, .log files</td>
            </tr>
            <tr>
                <td>Save</td>
                <td>Ctrl+S</td>
                <td>Save current document</td>
            </tr>
            <tr>
                <td>Save As</td>
                <td>Ctrl+Shift+S</td>
                <td>Save with new name/location</td>
            </tr>
            <tr>
                <td>Close File</td>
                <td>Ctrl+W</td>
                <td>Close current tab (with warning if unsaved)</td>
            </tr>
        </table>

        <h4>Edit Operations</h4>
        <ul>
            <li>Undo/Redo (Ctrl+Z / Ctrl+Y)</li>
            <li>Cut/Copy/Paste (Ctrl+X/C/V)</li>
            <li>Select All (Ctrl+A)</li>
            <li>Find & Replace (Ctrl+F / Ctrl+H)</li>
        </ul>

        <h3>3.2 AI Integration ⭐</h3>
        
        <h4>AI Toggle</h4>
        <div class="info-box">
            <strong>Location:</strong> Kiri atas toolbar (next to File/Edit/View)<br>
            <strong>Visual States:</strong><br>
            🔴 OFF (Grey) - AI dormant, tidak akan respond<br>
            🟢 ON (Green) - AI listening, siap respond<br>
            <strong>Shortcut:</strong> Ctrl+Shift+A
        </div>

        <h4>Conversation Flow</h4>
        <p><strong>Step 1:</strong> User menulis notes seperti biasa dengan toggle OFF</p>
        <p><strong>Step 2:</strong> User mengaktifkan toggle (berubah hijau)</p>
        <p><strong>Step 3:</strong> AI mulai "listening" dari titik toggle activated</p>
        <p><strong>Step 4:</strong> User menulis pertanyaan/request untuk AI</p>
        <p><strong>Step 5:</strong> AI respond langsung di document (dengan prefix nama AI)</p>
        <p><strong>Step 6:</strong> Conversation continues in-document</p>
        <p><strong>Step 7:</strong> User bisa toggle OFF kapan saja untuk stop AI</p>

        <h4>AI Response Format</h4>
        <div class="mockup">User Input:
hai AI, tolong jelasin quantum computing

AI Response:
hai AI, tolong jelasin quantum computing

[Claude]: Quantum computing adalah teknologi komputasi 
yang memanfaatkan prinsip mekanika kuantum seperti 
superposisi dan entanglement untuk melakukan...

User: bisa kasih contoh aplikasinya?

[Claude]: Tentu! Beberapa aplikasi quantum computing:
1. Cryptography - Breaking RSA encryption...
2. Drug discovery - Molecular simulation...
...</div>

        <h4>Context Management</h4>
        <div class="warning-box">
            <strong>⚠️ Important Context Rules:</strong>
            <ul>
                <li>✅ AI HANYA membaca text dari saat toggle activated</li>
                <li>✅ AI remember conversation history selama toggle ON</li>
                <li>❌ AI TIDAK baca text yang ditulis sebelum toggle ON (kecuali user minta)</li>
                <li>❌ AI TIDAK remember conversation di file lain</li>
                <li>🔄 Context reset ketika: Toggle OFF→ON, Close file, New file</li>
            </ul>
        </div>

        <h3>3.3 Multi-API Support</h3>
        
        <h4>Supported Providers (MVP):</h4>
        <ol>
            <li><strong>Claude</strong> (Anthropic) - Primary recommendation</li>
            <li><strong>ChatGPT</strong> (OpenAI)</li>
            <li><strong>Gemini</strong> (Google AI)</li>
        </ol>

        <h4>Future Providers:</h4>
        <ul>
            <li>Groq (ultra-fast inference)</li>
            <li>Together AI</li>
            <li>Custom endpoint (for self-hosted models)</li>
        </ul>

        <h4>API Configuration</h4>
        <p>User dapat:</p>
        <ul>
            <li>Memilih default AI provider</li>
            <li>Menyimpan multiple API keys (satu per provider)</li>
            <li>Switch provider kapan saja dari Settings</li>
            <li>Test connection sebelum save</li>
        </ul>
    </div>

    <!-- Section 4: UI Design -->
    <div class="section" id="ui-design">
        <h2>4. 🎨 UI/UX Design</h2>
        
        <h3>Layout Structure</h3>
        <div class="mockup">┌─────────────────────────────────────────────────┐
│  📄 File  Edit  View   [🤖 AI Toggle]  Settings │ ← Menu Bar
├─────────────────────────────────────────────────┤
│  📁 notes.txt  📁 todo.txt*  📁 ideas.md  [+]  │ ← Tab Bar
├─────────────────────────────────────────────────┤
│                                                 │
│  1  │ your text here                           │
│  2  │ more content                             │
│  3  │                                          │
│  4  │ hey AI, help me                          │ ← Editor
│  5  │                                          │
│  6  │ [Claude]: Sure! I can help...           │
│     │                                          │
├─────────────────────────────────────────────────┤
│ Ln 6, Col 1 │ 250 chars │ Plain text │ UTF-8   │ ← Status Bar
└─────────────────────────────────────────────────┘</div>

        <h3>Color Scheme</h3>
        
        <h4>Light Mode</h4>
        <table>
            <tr>
                <th>Element</th>
                <th>Color</th>
                <th>Hex Code</th>
            </tr>
            <tr>
                <td>Background</td>
                <td>White</td>
                <td>#FFFFFF</td>
            </tr>
            <tr>
                <td>Text</td>
                <td>Black</td>
                <td>#000000</td>
            </tr>
            <tr>
                <td>AI Text</td>
                <td>Blue</td>
                <td>#1E40AF</td>
            </tr>
            <tr>
                <td>AI Prefix</td>
                <td>Purple</td>
                <td>#7C3AED</td>
            </tr>
            <tr>
                <td>Toggle ON</td>
                <td>Green</td>
                <td>#10B981</td>
            </tr>
            <tr>
                <td>Toggle OFF</td>
                <td>Grey</td>
                <td>#6B7280</td>
            </tr>
        </table>

        <h4>Dark Mode</h4>
        <table>
            <tr>
                <th>Element</th>
                <th>Color</th>
                <th>Hex Code</th>
            </tr>
            <tr>
                <td>Background</td>
                <td>Dark Grey</td>
                <td>#1E1E1E</td>
            </tr>
            <tr>
                <td>Text</td>
                <td>Light Grey</td>
                <td>#D4D4D4</td>
            </tr>
            <tr>
                <td>AI Text</td>
                <td>Light Blue</td>
                <td>#60A5FA</td>
            </tr>
            <tr>
                <td>AI Prefix</td>
                <td>Light Purple</td>
                <td>#A78BFA</td>
            </tr>
            <tr>
                <td>Toggle ON</td>
                <td>Green</td>
                <td>#34D399</td>
            </tr>
            <tr>
                <td>Toggle OFF</td>
                <td>Grey</td>
                <td>#9CA3AF</td>
            </tr>
        </table>

        <h3>Settings UI</h3>
        
        <h4>AI Configuration Panel</h4>
        <div class="mockup">┌─────────────────────────────────┐
│   AI Configuration              │
├─────────────────────────────────┤
│ Provider:                       │
│ ⦿ Claude  ○ ChatGPT  ○ Gemini  │
│                                 │
│ API Key: [••••••••••] [Change]  │
│                                 │
│ AI Display Name:                │
│ [Claude        ] (default: AI)  │
│                                 │
│ Model:                          │
│ └─ claude-sonnet-4-5 ▼         │
│                                 │
│ Max Response Length:            │
│ └─ [2000] tokens               │
│                                 │
│ [Test Connection]               │
└─────────────────────────────────┘</div>

        <h4>Editor Preferences</h4>
        <div class="mockup">┌─────────────────────────────────┐
│   Editor Preferences            │
├─────────────────────────────────┤
│ □ Show line numbers             │
│ □ Word wrap                     │
│ □ Auto-save (every 30s)         │
│                                 │
│ Font:                           │
│ └─ Consolas ▼                  │
│                                 │
│ Font Size:                      │
│ └─ [14] px                     │
│                                 │
│ Theme:                          │
│ ⦿ Light  ○ Dark                │
└─────────────────────────────────┘</div>
    </div>

    <!-- Section 5: Technical Architecture -->
    <div class="section" id="technical">
        <h2>5. 🔧 Technical Architecture</h2>
        
        <h3>Tech Stack</h3>
        
        <div class="success-box">
            <strong>✅ Recommended: Tauri</strong><br>
            Lightweight, native performance, cross-platform ready
        </div>

        <table>
            <tr>
                <th>Component</th>
                <th>Technology</th>
                <th>Purpose</th>
            </tr>
            <tr>
                <td>Framework</td>
                <td>Tauri</td>
                <td>Desktop app framework</td>
            </tr>
            <tr>
                <td>Backend</td>
                <td>Rust</td>
                <td>Native operations, security</td>
            </tr>
            <tr>
                <td>Frontend</td>
                <td>HTML/CSS/JavaScript</td>
                <td>UI rendering</td>
            </tr>
            <tr>
                <td>Text Editor</td>
                <td>CodeMirror atau Custom</td>
                <td>Text editing component</td>
            </tr>
            <tr>
                <td>HTTP Client</td>
                <td>reqwest (Rust)</td>
                <td>API calls to AI providers</td>
            </tr>
            <tr>
                <td>Storage</td>
                <td>Windows Credential Manager</td>
                <td>Secure API key storage</td>
            </tr>
        </table>

        <h3>Architecture Diagram</h3>
        <div class="mockup">┌─────────────────────────────────────────┐
│           Frontend (UI Layer)           │
│   ┌─────────────────────────────────┐   │
│   │  Text Editor Component          │   │
│   │  - CodeMirror/Custom            │   │
│   │  - Syntax highlighting (future) │   │
│   └─────────────────────────────────┘   │
│   ┌─────────────────────────────────┐   │
│   │  Tab Manager                    │   │
│   │  - Multi-file support           │   │
│   └─────────────────────────────────┘   │
│   ┌─────────────────────────────────┐   │
│   │  AI Toggle UI                   │   │
│   │  - Visual state management      │   │
│   └─────────────────────────────────┘   │
└──────────────┬──────────────────────────┘
               │ IPC (Inter-Process Communication)
┌──────────────┴──────────────────────────┐
│        Backend (Tauri/Rust)             │
│   ┌─────────────────────────────────┐   │
│   │  File Operations                │   │
│   │  - read_file()                  │   │
│   │  - write_file()                 │   │
│   │  - list_recent()                │   │
│   └─────────────────────────────────┘   │
│   ┌─────────────────────────────────┐   │
│   │  AI Operations                  │   │
│   │  - send_to_ai()                 │   │
│   │  - stream_response()            │   │
│   │  - manage_context()             │   │
│   └─────────────────────────────────┘   │
│   ┌─────────────────────────────────┐   │
│   │  API Key Manager                │   │
│   │  - save_key() (encrypted)       │   │
│   │  - get_key() (decrypted)        │   │
│   └─────────────────────────────────┘   │
└──────────────┬──────────────────────────┘
               │ HTTPS
┌──────────────┴──────────────────────────┐
│         External AI APIs                │
│   ┌───────────┐ ┌───────────┐ ┌──────┐ │
│   │  Claude   │ │  ChatGPT  │ │Gemini│ │
│   └───────────┘ └───────────┘ └──────┘ │
└─────────────────────────────────────────┘</div>

        <h3>Data Flow</h3>
        <ol>
            <li>User types text in editor (Frontend)</li>
            <li>User clicks AI Toggle ON</li>
            <li>Frontend marks toggle activation point</li>
            <li>User types AI request</li>
            <li>Frontend sends request + context to Backend</li>
            <li>Backend retrieves API key from secure storage</li>
            <li>Backend makes HTTPS request to AI provider</li>
            <li>AI provider streams response back</li>
            <li>Backend forwards chunks to Frontend</li>
            <li>Frontend displays response with typing effect</li>
            <li>Response appended to document</li>
        </ol>

        <h3>Rust Backend Commands</h3>
        <pre><code>// File operations
#[tauri::command]
async fn read_file(path: String) -> Result&lt;String, String&gt;

#[tauri::command]
async fn write_file(path: String, content: String) -> Result&lt;(), String&gt;

// AI operations
#[tauri::command]
async fn send_to_ai(
    provider: String,
    message: String,
    context: Vec&lt;Message&gt;
) -> Result&lt;String, String&gt;

// API key management
#[tauri::command]
async fn save_api_key(provider: String, key: String) -> Result&lt;(), String&gt;

#[tauri::command]
async fn get_api_key(provider: String) -> Result&lt;String, String&gt;</code></pre>

<h3>Performance Requirements</h3>
        <table>
            <tr>
                <th>Metric</th>
                <th>Target</th>
                <th>Priority</th>
            </tr>
            <tr>
                <td>App Startup (Cold)</td>
                <td>&lt; 2 seconds</td>
                <td>High</td>
            </tr>
            <tr>
                <td>App Startup (Warm)</td>
                <td>&lt; 1 second</td>
                <td>High</td>
            </tr>
            <tr>
                <td>File Open (&lt;1MB)</td>
                <td>&lt; 100ms</td>
                <td>High</td>
            </tr>
            <tr>
                <td>File Save</td>
                <td>&lt; 50ms</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>AI First Token</td>
                <td>&lt; 2 seconds</td>
                <td>High</td>
            </tr>
            <tr>
                <td>AI Streaming</td>
                <td>Real-time (no buffer lag)</td>
                <td>High</td>
            </tr>
            <tr>
                <td>Memory (Idle)</td>
                <td>&lt; 50 MB RAM</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Memory (Active + AI)</td>
                <td>&lt; 100 MB RAM</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>App Size (Installer)</td>
                <td>&lt; 10 MB</td>
                <td>Low</td>
            </tr>
        </table>
    </div>

    <!-- Section 6: User Workflows -->
    <div class="section" id="workflows">
        <h2>6. 🚀 User Workflows</h2>
        
        <h3>Workflow 1: First-Time User (No AI)</h3>
        <ol>
            <li>Download NoteAI-Setup-1.0.0.exe</li>
            <li>Run installer</li>
            <li>Launch app → Welcome screen appears</li>
            <li>Click "Skip for now" on AI setup</li>
            <li>Start using as normal notepad:
                <ul>
                    <li>Create/edit files</li>
                    <li>Save documents</li>
                    <li>Use all notepad features</li>
                </ul>
            </li>
            <li>AI toggle visible but inactive (grey)</li>
        </ol>

        <h3>Workflow 2: First-Time User (With AI)</h3>
        <ol>
            <li>Download and install NoteAI</li>
            <li>Launch app → Welcome screen</li>
            <li>Click "Configure AI"</li>
            <li>Select provider (e.g., Claude)</li>
            <li>See "Don't have API key?" links</li>
            <li>Click "Watch Tutorial" or "Get API Key Guide"</li>
            <li>Follow guide to get API key from provider</li>
            <li>Paste API key in NoteAI</li>
            <li>Click "Test Connection" → Success ✓</li>
            <li>Click "Save"</li>
            <li>Start using NoteAI with AI features</li>
        </ol>

        <h3>Workflow 3: Daily Usage Session</h3>
        <div class="mockup">08:00 - Open NoteAI
       - Recent files shown
       - Click "todo.txt"
       
08:05 - Write morning tasks
       [Toggle OFF - Writing normally]
       "Today's tasks:
        - Finish presentation
        - Email client
        - Gym at 6pm"
       
08:10 - Need AI help
       [Click Toggle ON - Turns green]
       "AI, help me prioritize these tasks"
       
08:11 - AI responds
       [Claude]: "Based on urgency, here's my suggestion:
       1. Email client (quick, important)
       2. Finish presentation (time-consuming)
       3. Gym at 6pm (scheduled)
       
       Would you like me to help with the presentation?"
       
08:12 - Continue conversation
       "Yes, give me an outline for the presentation"
       
08:13 - AI provides outline
       [Claude]: "Here's a suggested outline:..."
       
08:15 - Done with AI
       [Click Toggle OFF - Back to grey]
       Continue writing notes normally
       
08:20 - Auto-save kicks in (if enabled)
       
08:30 - Close file, open new one</div>

        <h3>Workflow 4: Switch AI Provider</h3>
        <ol>
            <li>Open NoteAI</li>
            <li>Click Settings (gear icon)</li>
            <li>Go to "AI Configuration"</li>
            <li>Current: Claude (Anthropic)</li>
            <li>Change to: ChatGPT (OpenAI)</li>
            <li>Enter ChatGPT API key</li>
            <li>Click "Test Connection"</li>
            <li>Success → Click "Save"</li>
            <li>Return to editor</li>
            <li>Toggle AI ON → Now uses ChatGPT</li>
        </ol>

        <h3>Workflow 5: Multi-File Context</h3>
        <div class="mockup">File: "project-notes.txt" (Tab 1)
[Toggle ON]
"AI, help me with project planning"
[Claude]: "Sure! What's the project about?"
... conversation continues ...

[Open new file - Tab 2]
File: "grocery-list.txt"
[Toggle ON]
"AI, suggest healthy meal prep ideas"
[Claude]: "Of course! Here are some ideas..."
← AI has NO memory of Tab 1 conversation
← Fresh context for this file

[Switch back to Tab 1]
"AI, continue with the project planning"
[Claude]: "Right, let's continue from where we left off..."
← AI remembers Tab 1 conversation (still ON)</div>

        <h3>Workflow 6: Error Recovery</h3>
        
        <h4>Scenario: Invalid API Key</h4>
        <div class="mockup">User: "AI, hello"
[3 dots appear... then error]

❌ Notification:
"Hmm, API key-nya kayaknya salah deh. 
Coba cek lagi ya! [Open Settings]"

User clicks [Open Settings]
→ AI Configuration panel opens
→ Shows current provider & key (masked)
→ User fixes API key
→ Test Connection → Success ✓
→ Return to editor
→ Try again → Works!</div>

        <h4>Scenario: Network Error</h4>
        <div class="mockup">User: "AI, help me"
[3 dots... timeout]

⚠️ Notification:
"Koneksi internet lagi bermasalah. 
Coba lagi sebentar? [Retry]"

User clicks [Retry]
→ Request sent again
→ Success!</div>

        <h4>Scenario: Context Too Large</h4>
        <div class="mockup">User: [Has 50,000 words of conversation]
"AI, continue..."

⚠️ Notification:
"Wah, chat-nya kepanjangan nih! 
Coba mulai chat baru ya 😊 [Toggle OFF]"

User clicks [Toggle OFF]
→ Conversation saved in document
→ User scrolls down, writes new text
→ Click [Toggle ON] again
→ Fresh start with new context</div>
    </div>

    <!-- Section 7: API Setup Helper -->
    <div class="section" id="api-setup">
        <h2>7. 🔑 API Setup Helper Feature</h2>
        
        <div class="success-box">
            <strong>🎯 Goal:</strong> Make API key setup as easy as possible for non-technical users
        </div>

        <h3>First Launch Screen</h3>
        <div class="mockup">┌─────────────────────────────────────────────────┐
│   Welcome to NoteAI! 👋                         │
│                                                 │
│   🤖 Configure AI Assistant (Optional)          │
│                                                 │
│   Choose your AI provider:                      │
│   ┌─────────────────────────────────────────┐  │
│   │ ⦿ Claude (Anthropic)    [Recommended]  │  │
│   │ ○ ChatGPT (OpenAI)                      │  │
│   │ ○ Gemini (Google AI)                    │  │
│   └─────────────────────────────────────────┘  │
│                                                 │
│   API Key:                                      │
│   ┌─────────────────────────────────────────┐  │
│   │ [sk-ant-________________________]       │  │
│   └─────────────────────────────────────────┘  │
│                                                 │
│   📺 Don't have an API key?                     │
│   ┌──────────────┐  ┌──────────────────────┐  │
│   │ Watch        │  │ Get API Key Guide    │  │
│   │ Tutorial     │  │ (Step-by-step)       │  │
│   │ (2 minutes)  │  │                      │  │
│   └──────────────┘  └──────────────────────┘  │
│                                                 │
│   [Skip for now]              [Test & Save]     │
└─────────────────────────────────────────────────┘</div>

        <h3>Watch Tutorial Button</h3>
        <p><strong>Action:</strong> Opens YouTube video (in browser or embedded)</p>
        
        <h4>Tutorial Video Content (2 minutes):</h4>
        <ol>
            <li><strong>[0:00-0:10]</strong> "Hey! Mau pakai AI di NoteAI? Gampang banget!"</li>
            <li><strong>[0:10-0:20]</strong> "Kita bakal pakai Claude dari Anthropic"</li>
            <li><strong>[0:20-0:40]</strong> Screen recording:
                <ul>
                    <li>Open browser</li>
                    <li>Go to console.anthropic.com</li>
                    <li>Sign up with email</li>
                </ul>
            </li>
            <li><strong>[0:40-1:00]</strong> "Setelah login, klik API Keys di sidebar"</li>
            <li><strong>[1:00-1:20]</strong> "Klik Create Key, kasih nama 'NoteAI', copy key"</li>
            <li><strong>[1:20-1:40]</strong> "Balik ke NoteAI, paste di API Key field"</li>
            <li><strong>[1:40-1:50]</strong> "Klik Test & Save"</li>
            <li><strong>[1:50-2:00]</strong> "Done! Sekarang AI siap dipakai. Happy note-taking!"</li>
        </ol>

        <h3>Get API Key Guide Button</h3>
        <p><strong>Action:</strong> Opens mini guide dengan tabs untuk setiap provider</p>

        <div class="mockup">┌─────────────────────────────────────────────────┐
│  How to Get API Key                             │
│  ┌───────────┬──────────────┬─────────────┐    │
│  │  Claude   │   ChatGPT    │   Gemini    │    │
│  └───────────┴──────────────┴─────────────┘    │
│                                                 │
│  📝 Get Claude API Key:                         │
│                                                 │
│  Step 1: Visit Console                          │
│  🔗 console.anthropic.com                       │
│  [Copy Link] [Open in Browser]                  │
│                                                 │
│  Step 2: Create Account                         │
│  • Use your email                               │
│  • Verify email                                 │
│  • Login                                        │
│                                                 │
│  Step 3: Navigate to API Keys                   │
│  • Click "API Keys" in left sidebar             │
│  • You'll see your keys dashboard               │
│                                                 │
│  Step 4: Create New Key                         │
│  • Click "Create Key" button                    │
│  • Name it: "NoteAI" (or any name)              │
│  • Click "Create"                               │
│                                                 │
│  Step 5: Copy the Key                           │
│  • Key starts with: sk-ant-                     │
│  • Click copy button                            │
│  • ⚠️ Save it! Can't view again                 │
│                                                 │
│  Step 6: Paste in NoteAI                        │
│  • Return to NoteAI setup                       │
│  • Paste key in "API Key" field                 │
│  • Click "Test & Save"                          │
│                                                 │
│  💡 Pricing Info:                               │
│  • Free tier: $5 credit                         │
│  • Pay as you go after                          │
│  • ~$0.003 per 1K tokens (very cheap!)          │
│                                                 │
│  [Open Official Docs] [Back to Setup]           │
└─────────────────────────────────────────────────┘</div>

        <h3>Provider-Specific Links</h3>
        
        <table>
            <tr>
                <th>Provider</th>
                <th>Console URL</th>
                <th>Docs URL</th>
                <th>Pricing URL</th>
            </tr>
            <tr>
                <td>Claude</td>
                <td>console.anthropic.com</td>
                <td>docs.anthropic.com/en/api/getting-started</td>
                <td>anthropic.com/pricing</td>
            </tr>
            <tr>
                <td>ChatGPT</td>
                <td>platform.openai.com/api-keys</td>
                <td>platform.openai.com/docs/quickstart</td>
                <td>openai.com/api/pricing</td>
            </tr>
            <tr>
                <td>Gemini</td>
                <td>aistudio.google.com/app/apikey</td>
                <td>ai.google.dev/gemini-api/docs</td>
                <td>ai.google.dev/pricing</td>
            </tr>
        </table>

        <h3>Help Section in Settings</h3>
        <p>User dapat mengakses help kapan saja dari Settings → Help</p>

        <div class="mockup">┌─────────────────────────────────────┐
│   Help & Resources                  │
├─────────────────────────────────────┤
│                                     │
│  📚 Getting Started                 │
│  └─ [Quick Start Guide]            │
│  └─ [First Steps with AI]          │
│                                     │
│  🔑 API Key Setup                   │
│  └─ [How to get Claude API]        │
│  └─ [How to get ChatGPT API]       │
│  └─ [How to get Gemini API]        │
│                                     │
│  📺 Video Tutorials                 │
│  └─ [Setup Tutorial (2 min)]       │
│  └─ [Basic Usage (3 min)]          │
│  └─ [Tips & Tricks (5 min)]        │
│                                     │
│  💬 Troubleshooting                 │
│  └─ [API Key not working]          │
│  └─ [Connection issues]            │
│  └─ [AI not responding]            │
│                                     │
│  🌐 Official Links                  │
│  └─ [NoteAI Website]               │
│  └─ [Support / FAQ]                │
│  └─ [Report Bug]                   │
│  └─ [GitHub Repository]            │
│                                     │
│  ℹ️  Version: 1.0.0                 │
│  📅 Last Updated: Nov 2024          │
└─────────────────────────────────────┘</div>

        <h3>Onboarding Flow for Casual Users</h3>
        
        <div class="timeline">
            <div class="timeline-item">
                <h4>Step 1: Welcome</h4>
                <p>"Welcome to NoteAI! 👋<br>
                Notepad yang bisa chat sama AI"</p>
                <p><strong>Button:</strong> [Next]</p>
            </div>
            
            <div class="timeline-item">
                <h4>Step 2: How It Works</h4>
                <p>"Cara pakainya gampang:<br>
                1️⃣ Tulis notes kayak biasa<br>
                2️⃣ Klik toggle AI kalau butuh bantuan<br>
                3️⃣ Chat langsung di notes kamu!"</p>
                <p><strong>Button:</strong> [Got it!]</p>
            </div>
            
            <div class="timeline-item">
                <h4>Step 3: API Setup (Optional)</h4>
                <p>"Mau pakai fitur AI?<br>
                Butuh API key (gratis kok untuk trial!)"</p>
                <p><strong>Options:</strong><br>
                [Watch 2-min tutorial]<br>
                [Get API Key Guide]<br>
                [I'll set it up later]</p>
            </div>
            
            <div class="timeline-item">
                <h4>Step 4: You're Ready!</h4>
                <p>"You're all set! 🎉<br>
                Mulai nulis notes kamu sekarang"</p>
                <p><strong>Button:</strong> [Start Writing]</p>
            </div>
        </div>
    </div>

    <!-- Section 8: Data Storage -->
    <div class="section" id="storage">
        <h2>8. 💾 Data Storage</h2>
        
        <h3>8.1 API Keys (Secure Storage)</h3>
        
        <div class="warning-box">
            <strong>⚠️ Security Critical:</strong> API keys MUST be stored encrypted. Never in plain text!
        </div>

        <h4>Storage Location:</h4>
        <p><strong>Windows Credential Manager</strong> (built-in secure vault)</p>
        <ul>
            <li>Access via Windows API</li>
            <li>Encrypted by OS</li>
            <li>Protected by user authentication</li>
            <li>Cannot be accessed by other apps without permission</li>
        </ul>

        <h4>Storage Format:</h4>
        <table>
            <tr>
                <th>Key Name</th>
                <th>Value</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>noteai_claude_api</td>
                <td>sk-ant-xxxxx (encrypted)</td>
                <td>Claude API key</td>
            </tr>
            <tr>
                <td>noteai_openai_api</td>
                <td>sk-xxxxx (encrypted)</td>
                <td>OpenAI API key</td>
            </tr>
            <tr>
                <td>noteai_google_api</td>
                <td>AIzaSyxxxxx (encrypted)</td>
                <td>Google Gemini API key</td>
            </tr>
        </table>

        <h4>Rust Implementation:</h4>
        <pre><code>use keyring::Entry;

#[tauri::command]
async fn save_api_key(provider: String, key: String) -> Result&lt;(), String&gt; {
    let service = "NoteAI";
    let username = format!("{}_api", provider);
    
    let entry = Entry::new(service, &username)
        .map_err(|e| e.to_string())?;
    
    entry.set_password(&key)
        .map_err(|e| e.to_string())?;
    
    Ok(())
}

#[tauri::command]
async fn get_api_key(provider: String) -> Result&lt;String, String&gt; {
    let service = "NoteAI";
    let username = format!("{}_api", provider);
    
    let entry = Entry::new(service, &username)
        .map_err(|e| e.to_string())?;
    
    entry.get_password()
        .map_err(|e| e.to_string())
}</code></pre>

        <h3>8.2 App Settings (Config File)</h3>
        
        <h4>Location:</h4>
        <p><code>C:\Users\[Username]\AppData\Local\NoteAI\config.json</code></p>

        <h4>Content Structure:</h4>
        <pre><code>{
  "version": "1.0.0",
  "ai": {
    "default_provider": "claude",
    "providers": {
      "claude": {
        "display_name": "Claude",
        "model": "claude-sonnet-4-5-20250929",
        "max_tokens": 2000,
        "has_api_key": true
      },
      "openai": {
        "display_name": "GPT",
        "model": "gpt-4",
        "max_tokens": 2000,
        "has_api_key": false
      },
      "google": {
        "display_name": "Gemini",
        "model": "gemini-pro",
        "max_tokens": 2000,
        "has_api_key": false
      }
    }
  },
  "editor": {
    "font_family": "Consolas",
    "font_size": 14,
    "line_numbers": true,
    "word_wrap": true,
    "auto_save": false,
    "auto_save_interval": 30,
    "theme": "dark"
  },
  "window": {
    "width": 1200,
    "height": 800,
    "x": 100,
    "y": 100,
    "maximized": false
  },
  "recent_files": [
    "C:\\Users\\User\\Documents\\notes.txt",
    "C:\\Users\\User\\Documents\\todo.txt"
  ]
}</code></pre>

        <h3>8.3 Conversation Context (In-Memory)</h3>
        
        <div class="info-box">
            <strong>💡 Important:</strong> Context is NEVER saved to disk. It exists only in RAM during app session.
        </div>

        <h4>Memory Structure:</h4>
        <pre><code>// JavaScript (Frontend)
const fileContexts = {
  "notes.txt": {
    toggleActive: true,
    toggleActivatedAtLine: 10,
    toggleActivatedAtTimestamp: 1699876543210,
    conversationHistory: [
      { role: "user", content: "hey AI, help me" },
      { role: "assistant", content: "Sure! How can I help?" },
      { role: "user", content: "explain this concept" },
      { role: "assistant", content: "Here's an explanation..." }
    ]
  },
  "todo.txt": {
    toggleActive: false,
    toggleActivatedAtLine: null,
    toggleActivatedAtTimestamp: null,
    conversationHistory: []
  }
}</code></pre>

        <h4>Context Lifecycle:</h4>
        <ol>
            <li><strong>Created:</strong> When toggle is activated</li>
            <li><strong>Updated:</strong> Every user/AI message</li>
            <li><strong>Preserved:</strong> While toggle ON and file open</li>
            <li><strong>Cleared:</strong> When:
                <ul>
                    <li>Toggle OFF</li>
                    <li>File closed</li>
                    <li>App closed</li>
                    <li>New file created</li>
                </ul>
            </li>
        </ol>

        <h3>8.4 Storage Size Estimates</h3>
        
        <table>
            <tr>
                <th>Data Type</th>
                <th>Size</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>API Keys (3 providers)</td>
                <td>~500 bytes</td>
                <td>Windows Credential Manager</td>
            </tr>
            <tr>
                <td>Config File</td>
                <td>~2 KB</td>
                <td>AppData\Local\NoteAI\</td>
            </tr>
            <tr>
                <td>Context (per file, in RAM)</td>
                <td>~50-500 KB</td>
                <td>RAM (temporary)</td>
            </tr>
            <tr>
                <td>App Binaries</td>
                <td>~5-10 MB</td>
                <td>Program Files\NoteAI\</td>
            </tr>
            <tr>
                <td><strong>Total on Disk</strong></td>
                <td><strong>~10 MB</strong></td>
                <td></td>
            </tr>
        </table>
    </div>

    <!-- Section 9: Development Roadmap -->
    <div class="section" id="roadmap">
        <h2>9. 🗺️ Development Roadmap</h2>
        
        <h3>Phase 1: MVP (Minimum Viable Product)</h3>
        
        <div class="success-box">
            <strong>🎯 Goal:</strong> Core functionality yang memungkinkan user untuk note-taking dengan AI assistant
            <br><strong>⏱️ Timeline:</strong> 4-6 minggu
        </div>

        <h4>Features:</h4>
        <ul>
            <li>✅ Basic text editor (single tab)</li>
            <li>✅ File operations (New, Open, Save, Save As)</li>
            <li>✅ AI toggle (ON/OFF)</li>
            <li>✅ Claude API integration</li>
            <li>✅ In-document conversation</li>
            <li>✅ API key management (secure storage)</li>
            <li>✅ Basic settings (font, theme)</li>
            <li>✅ Light mode only</li>
            <li>✅ Windows installer</li>
        </ul>

        <h4>Success Criteria:</h4>
        <ul>
            <li>User dapat menulis notes seperti notepad biasa</li>
            <li>User dapat mengaktifkan AI dan chat langsung di document</li>
            <li>API key tersimpan dengan aman</li>
            <li>App stabil dan tidak crash</li>
        </ul>

        <h3>Phase 2: Polish & Enhancement</h3>
        
        <div class="info-box">
            <strong>🎯 Goal:</strong> Improve UX dan tambah features yang frequently requested
            <br><strong>⏱️ Timeline:</strong> 3-4 minggu
        </div>

        <h4>Features:</h4>
        <ul>
            <li>✅ Multi-tab support</li>
            <li>✅ Dark mode</li>
            <li>✅ Multi-API support (ChatGPT, Gemini)</li>
            <li>✅ Find & Replace</li>
            <li>✅ Recent files list</li>
            <li>✅ Keyboard shortcuts customization</li>
            <li>✅ Auto-save option</li>
            <li>✅ Better error messages (user-friendly)</li>
            <li>✅ API setup helper (tutorial links)</li>
            <li>✅ Onboarding flow</li>
        </ul>

        <h3>Phase 3: Advanced Features</h3>
        
        <div class="info-box">
            <strong>🎯 Goal:</strong> Features untuk power users dan differentiation
            <br><strong>⏱️ Timeline:</strong> 4-6 minggu
        </div>

        <h4>Features:</h4>
        <ul>
            <li>⏳ Syntax highlighting (for code blocks)</li>
            <li>⏳ AI quick commands (right-click context menu)</li>
            <li>⏳ Export conversation as Markdown</li>
            <li>⏳ Custom AI prompts/templates</li>
            <li>⏳ AI response editing/regeneration</li>
            <li>⏳ Voice input (speech-to-text)</li>
            <li>⏳ Cloud sync (optional)</li>
            <li>⏳ Plugin system</li>
            <li>⏳ Collaboration features</li>
        </ul>

        <h3>Development Timeline (Gantt Chart)</h3>
        
        <div class="timeline">
            <div class="timeline-item">
                <h4>Week 1-2: Setup & Learning</h4>
                <p>• Install development tools<br>
                • Learn JavaScript, HTML, CSS basics<br>
                • Learn API & Fetch concepts<br>
                • Setup Tauri project</p>
            </div>
            
            <div class="timeline-item">
                <h4>Week 3-4: Core Editor</h4>
                <p>• Build text editor component<br>
                • Implement file operations<br>
                • Basic UI layout<br>
                • Save/Load functionality</p>
            </div>
            
            <div class="timeline-item">
                <h4>Week 5-6: AI Integration</h4>
                <p>• AI toggle UI<br>
                • Claude API integration<br>
                • Context management<br>
                • Streaming responses</p>
            </div>
            
            <div class="timeline-item">
                <h4>Week 7-8: Security & Storage</h4>
                <p>• API key encryption<br>
                • Windows Credential Manager integration<br>
                • Config file management<br>
                • Settings UI</p>
            </div>
            
            <div class="timeline-item">
                <h4>Week 9-10: Testing & Bug Fixes</h4>
                <p>• Manual testing all features<br>
                • Fix bugs<br>
                • Performance optimization<br>
                • Error handling improvements</p>
            </div>
            
            <div class="timeline-item">
                <h4>Week 11-12: Release Prep</h4>
                <p>• Create installer<br>
                • Write documentation<br>
                • Beta testing dengan users<br>
                • Final polish & release!</p>
            </div>
        </div>

        <h3>Version Release Plan</h3>
        
        <table>
            <tr>
                <th>Version</th>
                <th>Release Date</th>
                <th>Key Features</th>
                <th>Status</th>
            </tr>
            <tr>
<td>v0.1.0-alpha</td>
                <td>Week 6</td>
                <td>Basic editor + Claude integration</td>
                <td>Internal testing</td>
            </tr>
            <tr>
                <td>v0.5.0-beta</td>
                <td>Week 10</td>
                <td>MVP complete, bug fixes</td>
                <td>Private beta</td>
            </tr>
            <tr>
                <td>v1.0.0</td>
                <td>Week 12</td>
                <td>Public release (MVP)</td>
                <td>Public</td>
            </tr>
            <tr>
                <td>v1.1.0</td>
                <td>+4 weeks</td>
                <td>Multi-tab, Dark mode</td>
                <td>Planned</td>
            </tr>
            <tr>
                <td>v1.2.0</td>
                <td>+6 weeks</td>
                <td>Multi-API support</td>
                <td>Planned</td>
            </tr>
            <tr>
                <td>v2.0.0</td>
                <td>+12 weeks</td>
                <td>Advanced features</td>
                <td>Future</td>
            </tr>
        </table>
    </div>

    <!-- Section 10: Learning Path -->
    <div class="section" id="learning-path">
        <h2>10. 📚 Learning Path</h2>
        
        <div class="info-box">
            <strong>🎓 Total Time Estimate:</strong> 6-8 minggu dari zero knowledge ke app bisa dipakai
            <br><strong>⏰ Daily Commitment:</strong> 1-2 jam per hari
        </div>

        <h3>Prerequisites</h3>
        <ul>
            <li>Computer dengan Windows 10/11</li>
            <li>Internet connection</li>
            <li>Basic computer skills (install software, browse web)</li>
            <li>Passion untuk belajar! 🔥</li>
        </ul>

        <h3>Phase 1: Web Development Basics (2 minggu)</h3>
        
        <h4>Week 1: HTML & CSS</h4>
        <table>
            <tr>
                <th>Topic</th>
                <th>Resource</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>HTML Basics</td>
                <td>FreeCodeCamp (Responsive Web Design)</td>
                <td>5 hours</td>
            </tr>
            <tr>
                <td>CSS Basics</td>
                <td>FreeCodeCamp (Responsive Web Design)</td>
                <td>5 hours</td>
            </tr>
            <tr>
                <td>Flexbox</td>
                <td>CSS Tricks Guide + Practice</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Practice Project</td>
                <td>Build simple static notepad UI</td>
                <td>3 hours</td>
            </tr>
        </table>

        <h4>Week 2: JavaScript Fundamentals</h4>
        <table>
            <tr>
                <th>Topic</th>
                <th>Resource</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>JS Basics</td>
                <td>JavaScript.info (Part 1)</td>
                <td>8 hours</td>
            </tr>
            <tr>
                <td>DOM Manipulation</td>
                <td>JavaScript.info (Browser section)</td>
                <td>4 hours</td>
            </tr>
            <tr>
                <td>Events</td>
                <td>JavaScript.info (Events section)</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Practice</td>
                <td>Make notepad UI interactive</td>
                <td>3 hours</td>
            </tr>
        </table>

        <h3>Phase 2: API & Modern JS (1 minggu)</h3>
        
        <h4>Week 3: APIs & Async Programming</h4>
        <table>
            <tr>
                <th>Topic</th>
                <th>Resource</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>What is API</td>
                <td>MDN Web Docs - Introduction to APIs</td>
                <td>1 hour</td>
            </tr>
            <tr>
                <td>Fetch API</td>
                <td>JavaScript.info - Network requests</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Async/Await</td>
                <td>JavaScript.info - Promises, async/await</td>
                <td>3 hours</td>
            </tr>
            <tr>
                <td>JSON</td>
                <td>MDN - Working with JSON</td>
                <td>1 hour</td>
            </tr>
            <tr>
                <td>Practice</td>
                <td>Call a public API (like JSONPlaceholder)</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Claude API</td>
                <td>Test calling Claude API from browser</td>
                <td>3 hours</td>
            </tr>
        </table>

        <h3>Phase 3: Tauri & Rust (2 minggu)</h3>
        
        <h4>Week 4: Development Environment Setup</h4>
        <ul>
            <li><strong>Day 1-2:</strong> Install Node.js, Rust, VS Build Tools
                <ul>
                    <li>Follow Tauri Prerequisites guide</li>
                    <li>Troubleshoot installation issues</li>
                </ul>
            </li>
            <li><strong>Day 3-4:</strong> Create first Tauri project
                <ul>
                    <li>Follow Tauri "Getting Started" tutorial</li>
                    <li>Understand project structure</li>
                </ul>
            </li>
            <li><strong>Day 5-7:</strong> Learn Tauri commands
                <ul>
                    <li>Frontend ↔ Backend communication</li>
                    <li>Simple "Hello World" commands</li>
                    <li>Practice with examples</li>
                </ul>
            </li>
        </ul>

        <h4>Week 5: Rust Basics</h4>
        <div class="warning-box">
            <strong>💡 Note:</strong> You don't need to be a Rust expert! Just learn enough to read and modify code.
        </div>

        <table>
            <tr>
                <th>Topic</th>
                <th>Resource</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>Variables & Types</td>
                <td>Rust Book - Chapter 3</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Functions</td>
                <td>Rust Book - Chapter 3</td>
                <td>1 hour</td>
            </tr>
            <tr>
                <td>Ownership (basic)</td>
                <td>Rust Book - Chapter 4 (skim)</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Structs</td>
                <td>Rust Book - Chapter 5</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Error Handling</td>
                <td>Rust Book - Chapter 9</td>
                <td>2 hours</td>
            </tr>
            <tr>
                <td>Practice</td>
                <td>Rustlings exercises</td>
                <td>5 hours</td>
            </tr>
        </table>

        <h3>Phase 4: Build NoteAI (3-4 minggu)</h3>
        
        <h4>Week 6-7: Core Functionality</h4>
        <ul>
            <li><strong>Sprint 1:</strong> Text Editor
                <ul>
                    <li>Implement textarea with styling</li>
                    <li>Add line numbers (optional)</li>
                    <li>Word/character count</li>
                </ul>
            </li>
            <li><strong>Sprint 2:</strong> File Operations
                <ul>
                    <li>Implement Open file dialog (Tauri)</li>
                    <li>Read file content</li>
                    <li>Save file functionality</li>
                    <li>Unsaved changes warning</li>
                </ul>
            </li>
            <li><strong>Sprint 3:</strong> AI Toggle UI
                <ul>
                    <li>Create toggle button</li>
                    <li>Visual states (ON/OFF)</li>
                    <li>Mark toggle activation point in document</li>
                </ul>
            </li>
        </ul>

        <h4>Week 8-9: AI Integration</h4>
        <ul>
            <li><strong>Sprint 4:</strong> API Key Management
                <ul>
                    <li>Input UI for API key</li>
                    <li>Save to Windows Credential Manager</li>
                    <li>Retrieve API key</li>
                    <li>Test connection button</li>
                </ul>
            </li>
            <li><strong>Sprint 5:</strong> Claude API Connection
                <ul>
                    <li>Create Rust command to call Claude API</li>
                    <li>Handle authentication</li>
                    <li>Parse response</li>
                    <li>Error handling</li>
                </ul>
            </li>
            <li><strong>Sprint 6:</strong> Conversation Flow
                <ul>
                    <li>Extract context from toggle point</li>
                    <li>Send to API with context</li>
                    <li>Display AI response in document</li>
                    <li>Format with AI name prefix</li>
                    <li>Multi-turn conversation support</li>
                </ul>
            </li>
        </ul>

        <h4>Week 10: Polish & Testing</h4>
        <ul>
            <li>Settings panel</li>
            <li>Error messages (user-friendly)</li>
            <li>Loading indicators</li>
            <li>Keyboard shortcuts</li>
            <li>Bug fixes</li>
            <li>Performance optimization</li>
        </ul>

        <h3>Learning Resources Summary</h3>
        
        <table>
            <tr>
                <th>Resource</th>
                <th>Type</th>
                <th>Cost</th>
                <th>Link</th>
            </tr>
            <tr>
                <td>FreeCodeCamp</td>
                <td>Interactive</td>
                <td>Free</td>
                <td>freecodecamp.org</td>
            </tr>
            <tr>
                <td>JavaScript.info</td>
                <td>Tutorial</td>
                <td>Free</td>
                <td>javascript.info</td>
            </tr>
            <tr>
                <td>MDN Web Docs</td>
                <td>Reference</td>
                <td>Free</td>
                <td>developer.mozilla.org</td>
            </tr>
            <tr>
                <td>Rust Book</td>
                <td>Book</td>
                <td>Free</td>
                <td>doc.rust-lang.org/book/</td>
            </tr>
            <tr>
                <td>Rustlings</td>
                <td>Exercises</td>
                <td>Free</td>
                <td>github.com/rust-lang/rustlings</td>
            </tr>
            <tr>
                <td>Tauri Docs</td>
                <td>Documentation</td>
                <td>Free</td>
                <td>tauri.app</td>
            </tr>
        </table>

        <h3>Study Tips</h3>
        
        <div class="success-box">
            <strong>✅ Best Practices:</strong>
            <ul>
                <li><strong>Consistency:</strong> 1-2 hours per day lebih baik dari 8 hours sekali seminggu</li>
                <li><strong>Practice:</strong> Don't just read/watch - code along!</li>
                <li><strong>Build Projects:</strong> Apply what you learn immediately</li>
                <li><strong>Debug:</strong> Embrace errors - they're learning opportunities</li>
                <li><strong>Google:</strong> 90% of programming is googling error messages 😄</li>
                <li><strong>Community:</strong> Join Discord/Reddit communities for help</li>
                <li><strong>Break It Down:</strong> Big tasks → small chunks</li>
            </ul>
        </div>

        <h3>Milestones & Celebration 🎉</h3>
        
        <ul>
            <li>✅ <strong>Milestone 1:</strong> Build working notepad UI (Week 2)</li>
            <li>✅ <strong>Milestone 2:</strong> Successfully call an API (Week 3)</li>
            <li>✅ <strong>Milestone 3:</strong> Run first Tauri app (Week 4)</li>
            <li>✅ <strong>Milestone 4:</strong> Save/load files work (Week 7)</li>
            <li>✅ <strong>Milestone 5:</strong> AI responds in app! (Week 9)</li>
            <li>✅ <strong>FINAL MILESTONE:</strong> Ship v1.0! (Week 12) 🚀</li>
        </ul>
    </div>

    <!-- Final Section: Summary -->
    <div class="section">
        <h2>📊 Project Summary</h2>
        
        <h3>Quick Facts</h3>
        <table>
            <tr>
                <th>Aspect</th>
                <th>Details</th>
            </tr>
            <tr>
                <td>App Name</td>
                <td>NoteAI</td>
            </tr>
            <tr>
                <td>Category</td>
                <td>Productivity / Text Editor</td>
            </tr>
            <tr>
                <td>Platform</td>
                <td>Windows (MVP), Cross-platform ready</td>
            </tr>
            <tr>
                <td>Target Users</td>
                <td>Casual daily users (students, journalers, planners)</td>
            </tr>
            <tr>
                <td>Core Feature</td>
                <td>AI chat directly in notepad</td>
            </tr>
            <tr>
                <td>Tech Stack</td>
                <td>Tauri + Rust + HTML/CSS/JS</td>
            </tr>
            <tr>
                <td>App Size</td>
                <td>~5-10 MB</td>
            </tr>
            <tr>
                <td>Development Time</td>
                <td>10-12 weeks (MVP)</td>
            </tr>
            <tr>
                <td>Learning Time</td>
                <td>6-8 weeks (from zero)</td>
            </tr>
        </table>

        <h3>Success Metrics (v1.0)</h3>
        <ul>
            <li>✅ App launches in &lt; 2 seconds</li>
            <li>✅ Users can write notes without AI (works as regular notepad)</li>
            <li>✅ AI responds within 2 seconds (first token)</li>
            <li>✅ No crashes during normal usage</li>
            <li>✅ API keys stored securely</li>
            <li>✅ User-friendly error messages</li>
            <li>✅ Easy API setup (with guides/tutorials)</li>
        </ul>

        <h3>Future Vision</h3>
        <p>NoteAI akan menjadi go-to notepad untuk casual users yang ingin convenience AI assistant tanpa kompleksitas. Simple, fast, dan privacy-focused.</p>

        <div class="success-box">
            <strong>🎯 Mission:</strong> "Make AI conversation as easy as taking notes"
            <br><br>
            <strong>🚀 Vision:</strong> "Every note is a potential conversation"
        </div>

        <h3>Key Takeaways</h3>
        <div class="feature-grid">
            <div class="feature-card">
                <h4>🎯 Clear Vision</h4>
                <p>Simple notepad + AI chat, no bloat, focused on casual users</p>
            </div>
            <div class="feature-card">
                <h4>✅ Feasible Scope</h4>
                <p>MVP achievable in 10-12 weeks with clear milestones</p>
            </div>
            <div class="feature-card">
                <h4>🔐 Privacy First</h4>
                <p>Local-first, encrypted storage, no telemetry</p>
            </div>
            <div class="feature-card">
                <h4>📚 Learning Path</h4>
                <p>6-8 weeks from beginner to building the app</p>
            </div>
        </div>

        <h3>Next Steps</h3>
        <ol>
            <li><strong>Review this documentation</strong> - Make sure everything aligns with your vision</li>
            <li><strong>Set up learning schedule</strong> - Block 1-2 hours daily for learning</li>
            <li><strong>Start with basics</strong> - Begin with HTML/CSS/JavaScript fundamentals</li>
            <li><strong>Practice consistently</strong> - Code every day, even if just 30 minutes</li>
            <li><strong>Build incrementally</strong> - Don't rush, master each phase before moving on</li>
            <li><strong>Join communities</strong> - Discord/Reddit for help and motivation</li>
            <li><strong>Track progress</strong> - Celebrate small wins along the way</li>
            <li><strong>Ship it!</strong> - Launch MVP and iterate based on feedback</li>
        </ol>

        <div class="info-box">
            <strong>💪 You Got This!</strong><br>
            Building software is challenging but incredibly rewarding. Every expert was once a beginner. Stay consistent, embrace the learning process, and you'll have NoteAI running in no time!
        </div>
    </div>

    <!-- Footer -->
    <div style="margin-top: 60px; padding-top: 30px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b;">
        <p><strong>NoteAI Project Documentation</strong></p>
        <p>Version 1.0 | November 2024</p>
        <p style="font-size: 0.9em;">Built with ❤️ for casual daily users</p>
        <p style="margin-top: 20px; font-size: 0.85em;">
            📧 Questions? Feedback? Let's build something amazing together!
        </p>
    </div>

</body>
</html>
    