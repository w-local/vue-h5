import type{ UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
/* S-按需引入需要的插件 */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
/* E-按需引入需要的插件 */


export default (): UserConfig => {
 return{
  base:  '/',
  server: {
    host: 'localhost',
    port: 8008,
    strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    open: false,
    hmr: true, 
    proxy: { 
      '/api': {
        target: '',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    // viteCompression({
    //   algorithm: 'gzip', // 压缩算法，可选[‘gzip’，‘brotliCompress’，‘deflate’，‘deflateRaw’]
    //   threshold: 10240, // 如果体积大于阈值，则进行压缩，单位为b
    //   deleteOriginFile: true // 压缩后是否删除源文件
    // }),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@config': resolve(__dirname, 'src/config'),
      '@commonImg': resolve(__dirname, 'src/assets/commonImg'),
      '@homeImg': resolve(__dirname, 'src/assets/homeImg'),
      '@vicinityImg': resolve(__dirname, 'src/assets/vicinityImg'),
      '@detailImg': resolve(__dirname, 'src/assets/detailImg'),
      '@publishImg': resolve(__dirname, 'src/assets/publishImg'),
      '@hireImg': resolve(__dirname, 'src/assets/hireImg'),
      '@myImg': resolve(__dirname, 'src/assets/myImg'),
      '@temp': resolve(__dirname, 'src/components'),
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, //构建后是否生成 source map 文件
    minify: 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
    chunkSizeWarningLimit: 2000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
    rollupOptions: {
      output: {
        /** S-静态文件按类型分包 */
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        /** E-静态文件按类型分包 */
        manualChunks(id) {  // 超大静态资源拆分
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    terserOptions: {
      //打包后移除console和注释
      // compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      // },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        //  additionalData: ['@import "./src/style/base.scss";'], // 配置全局公共样式，可多个
        //  charset:false
        lessOptions: {
          modifyVars: {
            'primary-color': '#00ADEF',
            'link-color': '#00ADEF'
          },
          javascriptEnabled: true
        }
      }
    }
  }
 } 
}
