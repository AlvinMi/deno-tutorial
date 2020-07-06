import Ga from '/_ga.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-169223577-1" }),
    'sidebar': [
        {
            "text": "Deno 钻研之术",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "link": "articles/index.html",
            "children": [
                {
                    "text": "(1) Hello，从多样化安装到简单实战",
                    "link": "articles/001-install-and-hello-world.html",
                    "pagePath": "articles/001-install-and-hello-world.md"
                },
                {
                    "text": "(2) Awesome Deno 中文资源全图谱",
                    "link": "articles/002-awesome-deno-cn.html",
                    "pagePath": "articles/002-awesome-deno-cn.md"
                }
            ],
            "text": "文章",
            "pagePath": "articles/README.md"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "Deno 入门手册：附大量 TypeScript 代码实例",
                    "link": "translations/001-the-deno-handbook.html",
                    "pagePath": "translations/001-the-deno-handbook.md"
                },
                {
                    "text": "Deno + WebSockets 打造聊天室应用",
                    "link": "translations/002-deno-chat-app.html",
                    "pagePath": "translations/002-deno-chat-app.md"
                },
                {
                    "text": "从 Node 到 Deno：探索各大主流库替代方案",
                    "link": "translations/003-from-node-to-deno.html",
                    "pagePath": "translations/003-from-node-to-deno.md"
                },
                {
                    "text": "Deno + Oak 构建酷炫的 Todo API",
                    "link": "translations/004-deno-oak-todo-api.html",
                    "pagePath": "translations/004-deno-oak-todo-api.md"
                },
                {
                    "text": "Deno + Oak 连接 MySQL 实战教程",
                    "link": "translations/005-deno-oak-mysql.html",
                    "pagePath": "translations/005-deno-oak-mysql.md"
                }
            ],
            "text": "翻译",
            "pagePath": "translations/README.md"
        }
    ],
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "articles/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/index.html",
    'title': "文章",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>文章</h1>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol></ol></nav>'
        } })
};
