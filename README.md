# APC Medical English Landing

Landing page đào tạo Tiếng Anh Y khoa — APC Cao đẳng Việt Mỹ Hà Nội × EQuest.

## Chạy local

```bash
npm install
npm run dev:full
```

- Trang chủ: http://localhost:5173
- Admin: http://localhost:5173/admin (mật khẩu mặc định: `apc-admin-2025`)

## Deploy Vercel

1. Import repo từ GitHub trên [vercel.com/new](https://vercel.com/new)
2. Thêm **Environment Variables**:
   - `ADMIN_PASSWORD` — mật khẩu trang admin
   - `BLOB_READ_WRITE_TOKEN` — tạo trong Vercel → Storage → Blob
3. Deploy

Trang admin production: `https://your-domain.vercel.app/admin`
