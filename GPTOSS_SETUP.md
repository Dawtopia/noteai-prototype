# GPTOSS-Proxy Integration Guide for NoteAI

## 🚀 Setup Instructions

### 1. Deploy GPTOSS-Proxy

1. **One-Click Deploy**:
   - Kunjungi: https://deploy.workers.cloudflare.com/?url=https://github.com/junioralive/gptoss-proxy
   - Login ke Cloudflare Workers
   - Klik "Deploy Worker"
   - Tunggu deployment selesai

2. **Copy Worker URL**:
   - Setelah deploy, Anda akan mendapatkan URL seperti: `https://your-worker-name.your-subdomain.workers.dev`

### 2. Configure Environment Variables

Tambahkan environment variables di aplikasi NoteAI Anda:

**Buat file `.env.local`** di root project:

```env
# GPTOSS-Proxy Configuration
GPTOSS_BASE_URL=https://your-worker-name.your-subdomain.workers.dev
GPTOSS_API_KEY=dummy
GPTOSS_MODEL=gpt-oss-20b

# Optional: Use gpt-oss-120b for better quality (slower)
# GPTOSS_MODEL=gpt-oss-120b
```

### 3. Test Integration

1. **Restart development server**:
   ```bash
   npm run dev
   ```

2. **Test AI Chat**:
   - Buka aplikasi NoteAI
   - Aktifkan AI Assistant
   - Kirim pesan test

## 🔧 Configuration Options

### Model Options:
- `gpt-oss-20b`: Lebih cepat, good untuk simple tasks
- `gpt-oss-120b`: Lebih berkualitas, sedikit lebih lambat

### Reasoning Effort:
- `none`: Tidak ada reasoning, tercepat
- `low`: Light reasoning
- `medium`: Balanced (default)
- `high`: Deep reasoning, terlama

### API Features:
- ✅ **OpenAI Compatible**: Full OpenAI API compatibility
- ✅ **Reasoning**: AI akan berpikir sebelum menjawab
- ✅ **Thread Persistence**: Context tersimpan
- ✅ **CORS Enabled**: Bisa dipakai di browser
- ✅ **Free**: Tidak perlu API key berbayar

## 🎯 Usage Examples

### Basic Chat:
```
User: "Buatkan summary dari dokumen ini"
AI: [akan menganalisis konten dan membuat summary]
```

### Document Analysis:
```
User: "Apa saja poin penting dalam dokumen saya?"
AI: [akan menganalisis dan memberikan poin-poin penting]
```

### Content Enhancement:
```
User: "Tolong perbaiki grammar paragraf ini"
AI: [akan memperbaiki grammar dan struktur kalimat]
```

## 🛠️ Troubleshooting

### Error: "GPTOSS API Error: 404"
- **Cause**: URL worker salah
- **Fix**: Periksa `GPTOSS_BASE_URL` di environment variables

### Error: "GPTOSS API Error: 500"
- **Cause**: Worker tidak berjalan dengan benar
- **Fix**: Redeploy worker atau cek Cloudflare Workers dashboard

### No Response
- **Cause**: Model tidak tersedia atau rate limit
- **Fix**: Coba ganti model atau tunggu beberapa saat

## 📚 Additional Resources

- **GPTOSS-Proxy Repository**: https://github.com/junioralive/gptoss-proxy
- **Discord Support**: https://discord.gg/cwDTVKyKJz
- **Cloudflare Workers Docs**: https://developers.cloudflare.com/workers/

## 🎉 Ready to Use!

Setelah setup selesai, aplikasi NoteAI Anda akan memiliki:
- AI Assistant yang powerful
- Reasoning capabilities
- Document context awareness
- Bahasa Indonesia support
- Free unlimited usage

Selamat menggunakan AI Assistant di NoteAI Anda! 🚀