import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

export default ({ command, mode }) => {
    return defineConfig({
        // 🐳:multiple pages
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, "index.html"),
                    // $subpage: resolve(__dirname, "pages/$subpage.html"),
                },
            },
        },

        // 🌈:cross-origin
        server: {
            proxy: {
                // "/path": {
                // target: "https://remote",
                // changeOrigin: true,
                // 前端请求路径不变，用于后端灰度测试替换为测试路径
                // rewrite: (path) => path.replace(/^\/api/, ""),
                // configure: (proxy, options) => {
                // proxy 是 'http-proxy' 的实例
                // }
                // },
            },
        },

        // 📦:CDN
        base: mode == "development" ? "/" : loadEnv(mode, process.cwd()).STATIC_PATH,

        // 🌸:alias @ for ./src
        resolve: {
            alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
        },

        // ❄️:css mixins & global vars
        css: {
            preprocessorOptions: {
                // scss: {
                // additionalData: `$injectedColor: orange;`,
                // },
                less: {
                    globalVars: {
                        hack: `true;
                        @import "./node_modules/csslab/base.less";
                        @import "./src/assets/css/var.less";`,
                    },
                },
            },
        },

        // 🍬:loaders
        plugins: [vue(), svgLoader()],
    });
};
