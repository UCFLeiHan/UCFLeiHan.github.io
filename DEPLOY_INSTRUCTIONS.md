# 部署到 GitHub Pages 的步骤

## 方法一：使用 GitHub Desktop（推荐）

1. 下载 GitHub Desktop: https://desktop.github.com/
2. 安装后，打开 GitHub Desktop
3. 点击 File → Add Local Repository
4. 选择文件夹：`C:\Users\Lei Han\Downloads\UCFLeiHan.github.io-master`
5. 如果提示不是 Git 仓库，点击 "create a repository"
6. 在 GitHub Desktop 中：
   - 输入提交信息："Initial commit: Deploy Jekyll site"
   - 点击 "Commit to main"
   - 点击 "Publish branch" 或 "Push origin"
   - 在弹出窗口中，选择你的 GitHub 账户和仓库 `UCFLeiHan/UCFLeiHan.github.io`

## 方法二：使用命令行

如果你已经安装了 Git，在项目目录下执行以下命令：

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交文件
git commit -m "Initial commit: Deploy Jekyll site to GitHub Pages"

# 4. 重命名分支为 main（如果需要）
git branch -M main

# 5. 添加远程仓库
git remote add origin https://github.com/UCFLeiHan/UCFLeiHan.github.io.git

# 6. 推送到 GitHub
git push -u origin main
```

## 方法三：使用 GitHub 网页界面上传文件

1. 访问：https://github.com/UCFLeiHan/UCFLeiHan.github.io
2. 点击 "uploading an existing file"
3. 将项目文件夹中的所有文件拖拽到网页上
4. 在底部输入提交信息："Initial commit: Deploy Jekyll site"
5. 点击 "Commit changes"

## 上传完成后

1. 等待几分钟，GitHub Actions 会自动构建网站
2. 在仓库页面点击 "Actions" 标签查看构建进度
3. 构建完成后，访问：https://ucfleihan.github.io

## 注意事项

- 不要上传 `_site` 文件夹（已在 .gitignore 中排除）
- 不要上传 `node_modules` 文件夹（已在 .gitignore 中排除）
- 确保所有图片和资源文件都已包含

