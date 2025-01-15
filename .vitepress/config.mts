import { defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from "vitepress-sidebar";
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';
import { withMermaid } from "vitepress-plugin-mermaid";

const vitepressOptions: UserConfig = withMermaid({
  title: "Bingyan DevKit",
  description: "Unity DevKit powered by Bingyan Studio",
  appearance: "dark",

  themeConfig: {

    logo: '/logo.avif',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/1-introduction' }
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
    },

    container: {
      tipLabel: ':gem: 提示',
      warningLabel: ':warning: 注意',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  mermaid: {
    theme: "base",
    themeVariables: {
      primaryColor: "#ffa60044",
      primaryBorderColor: "#ff8c00",
      secondaryColor: "#fff",
    }
  },

  mermaidPlugin: {
    class: "mermaid", // set additional css classes for parent container 
  },
})

const vitePressSidebarOptions: VitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,

  sortMenusByFrontmatterOrder: true,
  sortMenusOrderByDescending: true,

  sortFolderTo: "bottom",
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(vitepressOptions, vitePressSidebarOptions),
)
