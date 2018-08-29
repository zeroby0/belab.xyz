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

    ],

    sidebar: sidebarLinks(),

  }
}


function sidebarLinks() {
  return {
    '/guides/gnuplot/': [
      '0/0',
      '1/1',
      '2/2',
      '3/3',
      '4/4',
      '5/5',
      '6/6',
      '7/7'
    ]
  };
}

function labLinks() {
  return [
        { text: 'Lab 0', link: '/labs/0.md' },
        { text: 'Lab 1', link: '/labs/1.md' },
        { text: 'Lab 2', link: '/labs/2.md' },
        { text: 'Lab 3', link: '/labs/3.md' },
        { text: 'Lab 4', link: '/labs/4.md' },
      ];
}

function arduinoLinks() {
  return [
        { text: 'Introduction', link: '/arduino/intro.md' },
        { text: 'LED Blink', link: '/arduino/ledblink.md' },
        { text: 'Wire', link: '/arduino/wire.md' }
      ];
}

function guideLinks() {
  return [
        { text: 'Bread boards', link: '/guides/breadboard.md' },
        { text: 'Resistors', link: '/guides/resistors.md' },
        { text: 'GNUplot', link: '/guides/gnuplot/0/0.md' },
        { text: 'Lab Report', link: '/guides/labreport.md' }
  ];
}


function otherLinks() {
  return [
        { text: 'Course Details', link: '/other/course-details.md' },
        { text: 'What\'s new?', link: '/other/whatsnew.md'},
  ];
}
