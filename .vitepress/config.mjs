import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "Guide - Pokecord++",
  description: "Guide For Pokecord++",
  head: [
    ['link', { rel: 'icon', href: 'https://pokecord.org/favicon-dark', media: '(prefers-color-scheme: dark)' }],
    ['link', { rel: 'icon', href: 'https://pokecord.org/favicon-light', media: '(prefers-color-scheme: light)' }],
    ['meta', { content: 'https://pokecord.org/icon', property: 'og:image' }]
  ],
  cleanUrls: true,
  themeConfig: {
    search: { provider: 'local' },
    logo: "https://pokecord.org/icon",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://pokecord.org', target: '_self' },
    ],

    sidebar: [
      {
        text: 'Commands',
        collapsed: true,
        items: [
          { text: '/profile', link: '/commands/profile.md' },
          { text: '/battle', link: '/commands/battle.md' },
          { text: '/hangmon', link: '/commands/hangmon.md' },
          { text: '/rewards', link: '/commands/rewards.md' },
          { text: '/market', link: '/commands/market.md' },
          { text: '/spawn', link: '/commands/spawn.md' },
          { text: '/teach', link: '/commands/teach.md' },
          { text: '/breed', link: '/commands/breed.md' },
          { text: '/trade', link: '/commands/trade.md' },
          { text: '/daily', link: '/commands/daily.md' },
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
          { text: 'Pokecoins', link: '/strategies/earning.md' },
          { text: 'Party', link: '/strategies/party.md' },
          { text: 'Voting', link: '/strategies/voting.md' },
          { text: 'Badges', link: '/strategies/badges.md' },
          { text: 'Leveling Up', link: '/strategies/levelup.md' },
          { text: 'EV Training', link: '/strategies/ev.md' }
        ]
      }, {
        text: 'Admins',
        collapsed: true,
        items: [
          { text: 'Active Servers', link: '/admins/active.md' },
          {
            text: 'Custom Rulesets',
            link: '/admins/rulesets.md',
            items: [
              { text: 'Ruleset Structure', link: '/admins/structure.md' }
            ]
          },
        ]
      }, {
        items: [
          { text: 'Custom Items', link: '/items.md' },
          { text: 'Bug Bounty', link: '/bounty.md' },
          { text: 'Timeouts', link: '/timeouts.md' },
          { text: 'Limits', link: '/limits.md' },
          { text: 'Glitch', link: '/glitch.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://pokecord.org/server' },
      { icon: 'github', link: 'https://github.com/Pokecord-Official' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"/></svg>' }, link: 'https://www.reddit.com/r/pokecord_official/' }
    ]
  }
})
