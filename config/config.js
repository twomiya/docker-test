import pageRoutes from './router.config';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'demo001',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  // publicPath:'./',
  // 路由配置
  routes: pageRoutes,
}
