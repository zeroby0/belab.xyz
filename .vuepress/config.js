module.exports = {
  dest: 'vuepress',
  title: 'BE Lab',
  description: 'Introduction to Electronics lab',
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Labs', items: [
        { text: 'Lab 0', link: '/labs/0.md' },
        { text: 'Lab 1', link: '/labs/1.md' },
        { text: 'Lab 2', link: '/labs/2.md' },
        { text: 'Lab 3', link: '/labs/3.md' },
      ] },

      { text: 'Quizzes', items: [
        { text: 'Quizz 1', link: '/quizzes/1.md' },
        { text: 'Quizz 2', link: '/quizzes/2.md' },
        { text: 'Quizz 3', link: '/quizzes/3.md' },
        { text: 'Mid Term', link: '/quizzes/mid.md' },
        { text: 'End Term', link: '/quizzes/end.md' },
      ] },

      { text: 'Arduino', items: [
        { text: 'Introduction', link: '/arduino/intro.md'},
        { text: 'LED Blink', link: '/arduino/ledblink.md'}
      ]}
    ]
  }
}