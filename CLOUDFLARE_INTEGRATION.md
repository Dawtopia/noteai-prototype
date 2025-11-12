# Cloudflare Workers API Integration Guide

## Cara Mengintegrasikan Cloudflare Workers Proxy API

### 1. Buka file `/src/app/api/ai/chat/route.ts`

### 2. Ganti placeholder response dengan implementasi Cloudflare Workers Anda:

```typescript
const response = await fetch('https://your-cloudflare-workers-url.com/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key' // Jika perlu
  },
  body: JSON.stringify({
    message: message,
    context: context,
    // Tambah parameter lain yang Cloudflare Workers Anda butuhkan
  })
})

const data = await response.json()
return NextResponse.json({ response: data.response })
```

### 3. Struktur Request dari Frontend:

```json
{
  "message": "Pesan user",
  "context": "Konten dokumen saat ini (opsional)"
}
```

### 4. Struktur Response yang Diharapkan:

```json
{
  "response": "Jawaban dari AI"
}
```

### 5. Environment Variables (Optional)

Jika Anda menggunakan environment variables untuk API URL atau key:

```typescript
const apiUrl = process.env.CLOUDFLARE_WORKERS_URL
const apiKey = process.env.CLOUDFLARE_WORKERS_API_KEY

const response = await fetch(`${apiUrl}/api/chat`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    message: message,
    context: context
  })
})
```

### 6. Testing

Setelah mengimplementasikan API Anda, test dengan:
1. Buka aplikasi
2. Aktifkan AI Assistant
3. Kirim pesan
4. Cek response di browser network tab

### 7. Error Handling

API sudah memiliki error handling dasar. Anda bisa menambahkan:
- Timeout handling
- Retry logic
- Custom error messages
- Rate limiting

---

**File yang perlu diubah:** `/src/app/api/ai/chat/route.ts`