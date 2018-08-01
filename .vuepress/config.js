module.exports = {
  dest: 'vuepress',
  title: 'Basic Electronics Lab',
  description: 'Introduction to Electronics',
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Labs', items: labLinks() },

      { text: 'Quizzes', items: quizzLinks() },

      { text: 'Arduino', items: arduinoLinks() },

      { text: 'Other', items: otherLinks() },

    ]
  }
}


function labLinks() {
  return [
        { text: 'Lab 0', link: '/labs/0.md' },
        { text: 'Lab 1', link: '/labs/1.md' },
        { text: 'Lab 2', link: '/labs/2.md' },
        { text: 'Lab 3', link: '/labs/3.md' },
      ];
}

function quizzLinks() {
  return [
        { text: 'Quizz 1', link: '/quizzes/1.md' },
        { text: 'Quizz 2', link: '/quizzes/2.md' },
        { text: 'Quizz 3', link: '/quizzes/3.md' },
        { text: 'Mid Term', link: '/quizzes/mid.md' },
        { text: 'End Term', link: '/quizzes/end.md' },
      ];
}

function arduinoLinks() {
  return [
        { text: 'Introduction', link: '/arduino/intro.md' },
        { text: 'LED Blink', link: '/arduino/ledblink.md' },
      ];
}

function otherLinks() {
  return [
        { text: 'Course Details', link: '/other/course-details.md' },
        { text: 'What\'s new?', link: '/other/whatsnew.md'},
  ];
}
