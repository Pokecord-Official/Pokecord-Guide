import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "Guide - Pokecord++",
  description: "Guide For Pokecord++",
  cleanUrls: true,
  themeConfig: {
    logo: "https://pokecord.org/icon",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://pokecord.org' },
    ],

    sidebar: [
      {
        text: 'Commands',
        collapsed: false,
        items: [
          { text: '/profile', link: '/commands/profile.md' },
          { text: '/battle', link: '/commands/battle.md' },
          { text: '/spawn', link: '/commands/spawn.md' },
          { text: '/teach', link: '/commands/teach.md' },
          { text: '/breed', link: '/commands/breed.md' },
          { text: '/trade', link: '/commands/trade.md' },
          { text: '/view', link: '/commands/view.md' },
          { text: '/info', link: '/commands/info.md' },
          { text: '/gift', link: '/commands/gift.md' },
          { text: '/shop', link: '/commands/shop.md' },
          { text: '/help', link: '/commands/help.md' },
          { text: '/ping', link: '/commands/ping.md' },
        ]
      },
      {
        text: 'Strategies',
        collapsed: true,
        items: [
          { text: 'Limits', link: '/strategies/limits.md' },
          { text: 'Pokecoins', link: '/strategies/earning.md' },
          { text: 'Leveling Up', link: '/strategies/levelup.md' },
          { text: 'EV Training', link: '/strategies/ev.md' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://pokecord.org/server' }
    ]
  }
})
