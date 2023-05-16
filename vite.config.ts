import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //这个path用到了上面安装的@types/node
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', '@vueuse/core'],
        eslintrc: {
          enabled: false, //  Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver()
        ],
        vueTemplate: true, // 是否在 vue 模板中自动导入
        dts: path.resolve(pathSrc, 'types', 'auto-imports.d.ts') //  自动导入组件类型声明文件位置，默认根目录; false 关闭自动生成
      }),

      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
        ],
        dts: path.resolve(pathSrc, 'types', 'components.d.ts') //  自动导入组件类型声明文件位置，默认根目录; false 关闭自动生成
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      UnoCSS({
        /* options */
      })
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
        '#': path.resolve('./types') // #代替types
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";'
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行是否自动打开浏览器
      proxy: {
        // 反向代理解决跨域
        [env.VITE_APP_BASE_API]: {
          target: 'http://vapi.youlai.tech', // 线上接口地址
          // target: 'http://localhost:8989',  // 本地接口地址 , 后端工程仓库地址：https://gitee.com/youlaiorg/youlai-boot
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '') // 替换 /dev-api 为 target 接口地址
        }
      }
    }
  }
})
