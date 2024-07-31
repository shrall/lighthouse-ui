import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "./lib/index.ts"),
            name: "tutorial-ui-library",
            fileName: function (format) { return "index.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ["react", "react-dom", "tailwindcss"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    tailwindcss: "tailwindcss",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), dts({ rollupTypes: true })],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./lib"),
        },
    },
});
