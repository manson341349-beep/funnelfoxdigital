# VPS 自动部署配置指南

## 概述
本项目配置了 GitHub Actions 自动部署到 VPS，当代码推送到 `main` 分支时会自动触发部署。

## VPS 准备工作

### 1. 创建部署目录
```bash
mkdir -p "/var/www/FunnelFox Digital"
cd "/var/www/FunnelFox Digital"
```

### 2. 确保 Docker 和 Docker Compose 可用
```bash
# 检查 Docker
docker --version

# 检查 Docker Compose
docker compose version
```

### 3. 配置防火墙（如果需要）
```bash
# 开放应用端口 3010
ufw allow 3010
```

## GitHub 仓库配置

### 1. 添加 GitHub Secrets
在 GitHub 仓库的 Settings > Secrets and variables > Actions 中添加以下 secrets：

- **SSH_HOST**: VPS 的 IP 地址
- **SSH_USER**: SSH 用户名（如 `root` 或部署用户）
- **SSH_KEY**: SSH 私钥内容（完整的私钥，包括 `-----BEGIN OPENSSH PRIVATE KEY-----` 和 `-----END OPENSSH PRIVATE KEY-----`）

### 2. SSH 密钥生成（如果没有）
```bash
# 在本地生成 SSH 密钥对
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# 将公钥添加到 VPS 的 authorized_keys
ssh-copy-id user@your-vps-ip
```

## 部署流程

### 自动部署
1. 推送代码到 `main` 分支
2. GitHub Actions 自动触发
3. 使用 rsync 同步文件到 VPS
4. 在 VPS 上执行 `docker compose up -d --build`

### 手动部署（如果需要）
```bash
# 在 VPS 上手动部署
cd "/var/www/FunnelFox Digital"
git pull origin main
docker compose up -d --build
```

## 验证部署

### 1. 检查 GitHub Actions 状态
- 访问 GitHub 仓库的 Actions 页面
- 确认最新的部署工作流成功完成

### 2. 检查 VPS 服务状态
```bash
# 检查容器状态
docker ps

# 检查应用日志
docker logs funnelfoxdigital

# 检查端口监听
netstat -tlnp | grep 3010
```

### 3. 访问应用
- 浏览器访问: `http://your-vps-ip:3010`
- 确认应用正常运行

## 故障排除

### 常见问题

1. **SSH 连接失败**
   - 检查 SSH_HOST、SSH_USER、SSH_KEY 是否正确
   - 确认 VPS 防火墙允许 SSH 连接

2. **Docker 构建失败**
   - 检查 VPS 磁盘空间
   - 查看 Docker 日志: `docker logs funnelfoxdigital`

3. **端口访问问题**
   - 检查防火墙设置
   - 确认 Docker 端口映射正确

### 日志查看
```bash
# GitHub Actions 日志
# 在 GitHub 仓库的 Actions 页面查看

# VPS 应用日志
docker logs -f funnelfoxdigital

# 系统日志
journalctl -u docker
```

## 安全建议

1. **SSH 密钥管理**
   - 定期轮换 SSH 密钥
   - 使用强密码保护私钥

2. **防火墙配置**
   - 只开放必要的端口
   - 考虑使用 fail2ban 防止暴力攻击

3. **定期更新**
   - 保持 VPS 系统更新
   - 定期更新 Docker 镜像

## 监控和维护

### 定期检查
- 磁盘空间使用情况
- 应用性能和响应时间
- 安全更新和补丁

### 备份策略
- 定期备份应用数据
- 备份 Docker 镜像
- 备份配置文件# Deployment test Sun Oct  5 14:28:13 +08 2025
Sun Oct  5 14:38:04 +08 2025: Testing updated rsync deployment workflow with proper secrets configuration
$(date): GitHub Secrets reconfiguration test - SSH keys updated and validated
