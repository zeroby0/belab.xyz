module.exports = {
  dest: 'vuepress',
  title: 'Basic Electronics Lab',
  description: 'Introduction to Electronics',
  serviceWorker: true,
  themeConfig: {

    serviceWorker: {
      updatePopup: true,
    },

    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Labs', items: labLinks() },

      { text: 'Guides', items: guideLinks() },

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

function arduinoLinks() {
  return [
        { text: 'Introduction', link: '/arduino/intro.md' },
        { text: 'LED Blink', link: '/arduino/ledblink.md' },
      ];
}

function guideLinks() {
  return [
        { text: 'Bread boards', link: '/guides/breadboard.md' },
  ];
}


function otherLinks() {
  return [
        { text: 'Course Details', link: '/other/course-details.md' },
        { text: 'What\'s new?', link: '/other/whatsnew.md'},
  ];
}
