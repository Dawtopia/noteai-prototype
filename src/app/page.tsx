'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toggle } from '@/components/ui/toggle'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Save, 
  FolderOpen, 
  Bot, 
  Send, 
  MessageCircle,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function NotepadApp() {
  const [content, setContent] = useState('')
  const [aiEnabled, setAiEnabled] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setFileName] = useState('Untitled Document')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSave = () => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${fileName}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleLoad = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.txt'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setContent(e.target?.result as string)
          setFileName(file.name.replace('.txt', ''))
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          context: content
        })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const insertText = (format: string) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    
    let newText = ''
    let cursorOffset = 0
    
    switch (format) {
      case 'bold':
        newText = `**${selectedText}**`
        cursorOffset = selectedText ? 2 : 2
        break
      case 'italic':
        newText = `*${selectedText}*`
        cursorOffset = selectedText ? 1 : 1
        break
      case 'underline':
        newText = `__${selectedText}__`
        cursorOffset = selectedText ? 2 : 2
        break
      case 'list':
        newText = `\n- ${selectedText}`
        cursorOffset = selectedText ? 2 : 2
        break
      default:
        newText = selectedText
        cursorOffset = 0
    }

    const newContent = content.substring(0, start) + newText + content.substring(end)
    setContent(newContent)

    setTimeout(() => {
      textarea.focus()
      if (selectedText) {
        textarea.setSelectionRange(start + cursorOffset, start + cursorOffset + selectedText.length)
      } else {
        textarea.setSelectionRange(start + cursorOffset, start + cursorOffset)
      }
    }, 0)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-lg font-semibold">NoteAI/prototype/sahrulmubarrok</h1>
                <p className="text-sm text-muted-foreground">{fileName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleLoad}>
                <FolderOpen className="w-4 h-4 mr-2" />
                Buka
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Simpan
              </Button>
              <Toggle
                pressed={aiEnabled}
                onPressedChange={setAiEnabled}
                aria-label="Toggle AI Assistant"
              >
                <Bot className="w-4 h-4 mr-2" />
                AI Assistant
              </Toggle>
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="border-b bg-muted/50 p-2">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('bold')}
              title="Bold"
            >
              <Bold className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('italic')}
              title="Italic"
            >
              <Italic className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('underline')}
              title="Underline"
            >
              <Underline className="w-4 h-4" />
            </Button>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => insertText('list')}
              title="Bullet List"
            >
              <AlignLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Text Editor */}
          <div className={`flex-1 flex flex-col ${aiEnabled ? 'w-1/2' : 'w-full'}`}>
            <div className="flex-1 p-4">
              <Textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Mulai menulis di sini..."
                className="w-full h-full resize-none border-0 focus-visible:ring-0 text-base leading-relaxed"
              />
            </div>
          </div>

          {/* AI Panel */}
          {aiEnabled && (
            <>
              <Separator orientation="vertical" />
              <div className="w-1/2 flex flex-col border-l">
                <Card className="flex-1 m-4 rounded-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MessageCircle className="w-5 h-5" />
                      AI Assistant
                      <Badge variant="secondary" className="ml-auto">
                        Online
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <Separator />
                  <CardContent className="flex-1 p-0">
                    <ScrollArea className="h-[400px] p-4">
                      <div className="space-y-4">
                        {messages.length === 0 ? (
                          <div className="text-center text-muted-foreground py-8">
                            <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Halo! Saya adalah AI Assistant Anda.</p>
                            <p className="text-sm">Tanyakan apa saja tentang dokumen Anda.</p>
                          </div>
                        ) : (
                          messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div
                                className={`max-w-[80%] rounded-lg p-3 ${
                                  message.role === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                                <p className="text-xs opacity-70 mt-1">
                                  {message.timestamp.toLocaleTimeString('id-ID', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </p>
                              </div>
                            </div>
                          ))
                        )}
                        {isLoading && (
                          <div className="flex justify-start">
                            <div className="bg-muted rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <Separator />
                  <div className="p-4">
                    <div className="flex gap-2">
                      <Textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Ketik pesan Anda..."
                        className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button 
                        onClick={handleSendMessage} 
                        disabled={!inputMessage.trim() || isLoading}
                        size="icon"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}