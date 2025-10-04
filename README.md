# FunnelFox Digital Website

Conversion-first websites, SEO, and funnel services — built with **Next.js 14 App Router** + **TypeScript** + **Tailwind CSS**.  
Supports **multi-language (en / zh / ms)**, **Docker** deployment, **Nginx** reverse proxy, **Let's Encrypt SSL**, **GA4**, and **SMTP (Hostinger)**.

<!-- GitHub Actions Auto-Deployment Test -->

---

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router, RSC)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **i18n**: next-intl (`/en`, `/zh`, `/ms`)
- **Analytics**: Google Analytics 4 (`G-RBP37ZLXKF`)
- **Email**: Nodemailer（Hostinger SMTP 465/SSL）
- **Deploy**: Docker + Docker Compose（VPS）
- **Edge**: Nginx reverse proxy + Certbot SSL

---

## 📂 Project Structure
```txt
app/[locale]/...        # Multi-language routes (en/zh/ms)
  layout.tsx
  page.tsx
  about/page.tsx
  services/... etc
api/
  lead/route.ts
  contact/route.ts
components/
  Modal.tsx
  Schema.tsx
lib/
  mail.ts
messages/
  en.json
  zh.json
  ms.json
public/
  logo-3.png
  favicons...
middleware.ts
Dockerfile
docker-compose.yml
README.md
```

---

## ⚙️ Environment Variables (.env)
```env
# Site
SITE_URL=https://funnelfoxdigital.com

# Analytics (GA4)
NEXT_PUBLIC_GA_ID=G-RBP37ZLXKF

# SMTP (Hostinger Mail)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=hello@funnelfoxdigital.com
SMTP_PASS=YOUR_SMTP_PASSWORD
LEAD_TO_EMAIL=hello@funnelfoxdigital.com
```

> **Note**: Hostinger recommends port 465 with SSL. The `SMTP_USER` must match the `from` address (hello@funnelfoxdigital.com).

---

## 🚀 Development
```bash
npm install
npm run dev
# open https://funnelfoxdigital.com/en
```

---

## 📦 Docker

docker-compose.yml 示例：

```yaml
version: "3.9"
services:
  funnelfoxdigital:
    build: .
    container_name: funnelfoxdigital
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - PORT=3011
    ports:
      - "3011:3011"
```

构建与启动：

```bash
docker compose down
docker compose up -d --build
docker logs funnelfoxdigital --tail=50
```

The Dockerfile includes ENV PORT=3011 and EXPOSE 3011 to ensure consistency with Nginx proxy and Docker Compose.

---

## 🌐 Nginx Reverse Proxy

路径：`/etc/nginx/sites-available/funnelfoxdigital.conf`

```nginx
# HTTP → HTTPS
server {
  listen 80;
  listen [::]:80;
  server_name funnelfoxdigital.com www.funnelfoxdigital.com;
  location /.well-known/acme-challenge/ { root /var/www/html; }
  location / { return 301 https://$host$request_uri; }
}

# HTTPS
server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name funnelfoxdigital.com www.funnelfoxdigital.com;

  ssl_certificate     /etc/letsencrypt/live/funnelfoxdigital.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/funnelfoxdigital.com/privkey.pem;

  location / {
    proxy_pass http://127.0.0.1:3010;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }
}
```

重载配置：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d funnelfoxdigital.com -d www.funnelfoxdigital.com
sudo certbot renew --dry-run
```

---

## ✉️ SMTP (Nodemailer)

**实现文件：**
- `lib/mail.ts`
- `app/api/contact/route.ts` 
- `app/api/lead/route.ts`

**配置要点：**
- 端口 465 → `secure: true`
- `from` 地址必须等于 `SMTP_USER`

Remember: after modifying .env, rebuild the container using docker compose down && docker compose up -d --build.

---

## 🌍 i18n (next-intl)

- **路由：** `app/[locale]/...`
- **中间件：** `middleware.ts`
- **支持语言：** en (默认), zh, ms

The middleware.ts enforces language prefixes, and app/[locale]/layout.tsx uses generateStaticParams() returning en/zh/ms.

---

## 🔎 SEO Essentials

- **站点地图：** `app/sitemap.ts`
- **robots.txt：** `public/robots.txt`
- **JSON-LD：** `components/Schema.tsx`
- **页面级 metadata：** 每页导出 `metadata` 对象

---

## 📈 GA4 Analytics

- **Measurement ID：** `G-RBP37ZLXKF`
- **脚本注入：** `app/layout.tsx`
- **跟踪事件：** `lead_submit`, `contact_submit`, `book_meeting`

---

## 🧪 Deployment Checklist

```bash
# 1. 构建并启动容器
docker compose up -d --build

# 2. 检查并重载 Nginx
sudo nginx -t && sudo systemctl reload nginx

# 3. SSL 证书续期测试
certbot renew --dry-run
```

**功能验证：**
- ✅ 表单提交 → 邮件送达 `hello@funnelfoxdigital.com`
- ✅ 多语言路由正常：`/`, `/zh`, `/ms`
- ✅ GA4 DebugView 显示事件数据
- ✅ `curl -I https://funnelfoxdigital.com/`

This verifies Nginx proxy and SSL are serving correctly.

---

## 📜 Scripts

```bash
npm run dev       # 本地开发服务器
npm run build     # 构建生产版本
npm run start     # 启动生产服务器
docker compose up -d --build    # Docker 构建并启动
docker compose down             # 停止 Docker 容器
```

---

## 🤝 Contact

**Email:** hello@funnelfoxdigital.com

**Website:** https://funnelfoxdigital.com

Built with ❤️ by FunnelFox Digital.