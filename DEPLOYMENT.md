# VPS 自动部署配置指南

## 概述
本项目配置了 GitHub Actions 自动部署到 VPS，当代码推送到 `main` 分支时会自动触发部署。

## VPS 准备工作

### 当前服务器配置
- **服务器 IP**: `72.60.108.125`
- **SSH 端口**: `22`
- **SSH 用户**: `root`
- **项目目录**: `/var/www/FunnelFox_Digital`
- **应用端口**: `3010` (映射到容器内部的 `3011`)
- **容器名称**: `funnelfoxdigital`

### 1. 创建部署目录
```bash
mkdir -p "/var/www/FunnelFox_Digital"
cd "/var/www/FunnelFox_Digital"
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
在 GitHub 仓库的 Settings > Secrets and variables > Actions 中添加以下 5 个必需的 secrets：

- **SSH_HOST**: VPS 的 IP 地址（例如：`72.60.108.125`）
- **SSH_PORT**: SSH 端口号（通常为 `22`）
- **SSH_USER**: SSH 用户名（例如：`root` 或部署用户）
- **SSH_PRIVATE_KEY**: SSH 私钥内容（完整的私钥，包括 `-----BEGIN OPENSSH PRIVATE KEY-----` 和 `-----END OPENSSH PRIVATE KEY-----`）
- **SERVER_PROJECT_DIR**: 服务器上的项目目录路径（例如：`/var/www/FunnelFox_Digital`）

**重要提醒**：
- 所有 secrets 名称必须完全匹配（区分大小写）
- SSH_PRIVATE_KEY 必须包含完整的私钥内容，包括开始和结束标记
- 确保私钥格式正确，不要有额外的空格或换行

### 2. SSH 密钥生成和配置

#### 在服务器上生成专用部署密钥（推荐）
```bash
# 在 VPS 上生成专用于 GitHub Actions 的 SSH 密钥对
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy@funnelfoxdigital.com" -f ~/.ssh/funnelfox_deploy

# 将公钥添加到 authorized_keys
cat ~/.ssh/funnelfox_deploy.pub >> ~/.ssh/authorized_keys

# 设置正确的权限
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/funnelfox_deploy

# 获取私钥内容（用于 GitHub Secrets 中的 SSH_PRIVATE_KEY）
cat ~/.ssh/funnelfox_deploy
```

#### 测试 SSH 连接
```bash
# 测试新生成的密钥是否工作正常
ssh -i ~/.ssh/funnelfox_deploy -o StrictHostKeyChecking=no root@localhost "echo 'SSH connection test successful'"
```

#### 获取服务器信息
```bash
# 获取服务器 IP 地址
curl -4 -s ifconfig.me

# 确认当前用户
whoami

# 确认项目目录
pwd
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
```bash
# 测试本地访问
curl -I http://localhost:3010

# 测试完整页面响应
curl -s http://localhost:3010/en | head -10
```

**浏览器访问**：
- 外部访问: `http://72.60.108.125:3010`
- 本地访问: `http://localhost:3010`
- 确认应用正常运行并自动重定向到 `/en`

### 4. 验证 GitHub Secrets 配置
```bash
# 验证所有必需的 secrets 是否已在 GitHub 仓库中配置：
# 1. SSH_HOST: 72.60.108.125
# 2. SSH_PORT: 22
# 3. SSH_USER: root
# 4. SSH_PRIVATE_KEY: (完整私钥内容)
# 5. SERVER_PROJECT_DIR: /var/www/FunnelFox_Digital
```

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
- 备份配置文件

## 部署历史

### 最近更新
- **2025-10-05**: GitHub Secrets 重新配置完成，SSH 密钥更新并验证
- **2025-10-05**: 自动部署流程测试成功，所有组件正常运行
- **2025-10-05**: 文档更新，添加完整的配置指南和故障排除步骤

### 配置验证清单
- [ ] 所有 5 个 GitHub Secrets 已正确配置
- [ ] SSH 连接测试成功
- [ ] Docker 容器正常运行
- [ ] 应用在端口 3010 可访问
- [ ] GitHub Actions 工作流程无错误
