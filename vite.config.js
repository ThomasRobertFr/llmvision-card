import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                "llmvision-card": "src/llmvision-card.js",
                "llmvision-preview-card": "src/llmvision-preview-card.js",
                "llmvision-horizontal-card": "src/llmvision-horizontal-card.js",
            },
            output: {
                entryFileNames: "[name].js",
                format: "es",
            },
        },
    },
});