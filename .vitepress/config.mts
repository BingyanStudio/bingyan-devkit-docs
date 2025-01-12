import { defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from "vitepress-sidebar";
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const vitepressOptions: UserConfig = {
  title: "Bingyan DevKit",
  description: "Unity DevKit powered by Bingyan Studio",
  appearance: "dark",

  

  themeConfig: {

    logo: '/logo.avif',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/introduction' }
    ],

    outline: {
      level: [2, 3],
      label: "本页内容"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BingyanStudio/BingyanDevKit' }
    ],

    search: {
      provider: "local",
    },

    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },

  lastUpdated: true,
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
}

const vitePressSidebarOptions: VitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,

  sortMenusByFrontmatterOrder: true,
  sortMenusOrderByDescending: true,

  sortFolderTo: "bottom",
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(vitepressOptions, vitePressSidebarOptions)
)
