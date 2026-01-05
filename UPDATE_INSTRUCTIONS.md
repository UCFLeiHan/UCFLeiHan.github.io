# 如何修改和更新网站

## 修改流程

### 1. 在本地修改文件

使用你喜欢的编辑器（VS Code、记事本等）直接修改项目中的文件：
- 修改页面内容：编辑 `_pages/` 目录下的 `.md` 文件
- 修改样式：编辑 `_sass/` 目录下的 `.scss` 文件
- 添加新文章：在 `_posts/` 目录下创建新的 `.md` 文件
- 添加新论文：在 `_publications/` 目录下创建新的 `.md` 文件
- 修改配置：编辑 `_config.yml` 文件

### 2. 本地测试（可选但推荐）

如果你想在本地预览修改效果：

```bash
# 使用 Docker（如果已安装）
docker compose up

# 或者使用 Jekyll（如果已安装）
bundle exec jekyll serve
```

然后在浏览器访问：http://localhost:4000

### 3. 在 GitHub Desktop 中提交更改

1. **打开 GitHub Desktop**
   - 你会看到左侧显示所有修改过的文件（红色表示删除，绿色表示新增，黄色表示修改）

2. **查看更改**
   - 点击任意文件，可以在右侧看到具体的修改内容

3. **提交更改**
   - 在左下角的 "Summary" 输入框中输入提交信息，例如：
     - `Update research page content`
     - `Add new publication`
     - `Fix styling issues`
     - `Update CV information`
   - 点击 "Commit to main" 按钮

4. **推送到 GitHub**
   - 点击右上角的 "Push origin" 按钮（或按 `Ctrl + P`）
   - 文件会自动上传到 GitHub

### 4. 等待自动部署

- GitHub Actions 会自动检测到你的更改
- 开始重新构建网站（通常需要 2-5 分钟）
- 构建完成后，网站会自动更新

### 5. 查看部署状态

1. 在 GitHub Desktop 中点击 "View on GitHub"
2. 点击 "Actions" 标签
3. 查看最新的构建任务，等待显示绿色的 ✓ 表示成功
4. 访问 https://ucfleihan.github.io 查看更新后的网站

## 常见修改场景

### 修改首页内容
编辑：`_pages/about.md` 或 `index.html`

### 修改导航菜单
编辑：`_data/navigation.yml`

### 添加新文章
1. 在 `_posts/` 目录下创建新文件，文件名格式：`YYYY-MM-DD-title.md`
2. 添加 front matter 和内容
3. 提交并推送

### 添加新论文
1. 在 `_publications/` 目录下创建新文件，文件名格式：`YYYY-MM-DD-title.md`
2. 添加 front matter 和内容
3. 提交并推送

### 修改样式
编辑 `_sass/` 目录下的相应 `.scss` 文件，例如：
- `_sass/layout/_archive.scss` - 归档页面样式
- `_sass/layout/_page.scss` - 单页样式
- `_sass/layout/_navigation.scss` - 导航样式

### 修改配置文件
编辑 `_config.yml` 文件，修改后需要重启本地服务器（如果正在运行）

## 快速更新命令（如果使用命令行）

```bash
# 1. 修改文件后，添加所有更改
git add .

# 2. 提交更改
git commit -m "描述你的修改"

# 3. 推送到 GitHub
git push
```

## 注意事项

- ⚠️ 不要直接修改 `_site/` 目录（这是自动生成的，会被忽略）
- ✅ 每次修改后都要提交并推送，网站才会更新
- ✅ 提交信息要清晰，方便以后查看修改历史
- ✅ 如果修改后网站没有更新，检查 GitHub Actions 是否有错误

