import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import sidebar from './sidebar.json'

export default defineConfig({
  lang: 'ru-RU',
  title: 'ORICHILL Wiki',
  description: 'Википедия Minecraft-сервера ORICHILL',
  cleanUrls: true,
  // файлы из public/assets (архивы и т.п.) VitePress считает «мёртвыми» ссылками
  ignoreDeadLinks: [/^\/assets\//],
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/assets/logo.png' }]],
  markdown: {
    config: (md) => md.use(footnote),
    container: { tipLabel: 'Совет', warningLabel: 'Внимание', dangerLabel: 'Важно', infoLabel: 'Информация', detailsLabel: 'Подробнее' },
  },
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Правила', link: '/main/rules' },
      { text: 'Механики', link: '/mechanics/mechanics/' },
      { text: 'Карта', link: 'https://map.orichill.net' },
    ],
    sidebar,
    socialLinks: [{ icon: 'discord', link: 'https://discord.orichill.net' }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: { noResultsText: 'Ничего не найдено', resetButtonTitle: 'Сбросить', footer: { selectText: 'выбрать', navigateText: 'перейти', closeText: 'закрыть' } },
        },
      },
    },
    outline: { label: 'На этой странице', level: [2, 3] },
    docFooter: { prev: 'Назад', next: 'Далее' },
    lastUpdated: { text: 'Обновлено' },
    darkModeSwitchLabel: 'Тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
  },
})
