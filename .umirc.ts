import { defineConfig } from "umi";
import Board from "@/pages/Board";
import AllShopList from "@/pages/AllShopList";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/Login", component: "Login" },
    { path: "/Home", component: "Home", },
    { path: "/CreateShop", component: "CreateShop", },
    { path: "/AllShopList", component: "AllShopList", },
    { path: '/*', component: '404' },
  ],
  npmClient: 'npm',
  plugins: [
    '@umijs/plugins/dist/request'
  ],
  request: {
    dataField: 'data'
  }
});
