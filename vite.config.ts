import { PluginOption, defineConfig, loadEnv } from "vite"
import { visualizer } from "rollup-plugin-visualizer"
import react from "@vitejs/plugin-react-swc"
import glsl from "vite-plugin-glsl"
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""))
  const BASE_URL =
    process.env.VITE_ENV === "AWS"
      ? process.env.VITE_AWS_API_BASE_URL
      : process.env.VITE_LOCAL_BASE_URL
  const build =
    process.env.BUILD_MODE === "PROD"
      ? {}
      : {
          build: {
            sourcemap: true,
            minify: false,
          },
        }
  return defineConfig({
    ...build,
    server: {
      proxy: {
        "/socket.io": {
          changeOrigin: true,
          target: BASE_URL,
        },
        "/v1": {
          target: BASE_URL,
          changeOrigin: true,
          ws: true,
          rewrite(path) {
            return path.replace(/^\/v1/, "")
          },
        },
      },
    },
    plugins: [
      react(),
      glsl(),
      visualizer({
        template: "treemap", // or sunburst
        open: false,
        gzipSize: true,
        brotliSize: false,
        filename: "analysis.html",
      }) as PluginOption,
    ],
    // build: {
    //   sourcemap: true,
    //   minify: false
    // }
  })
}
