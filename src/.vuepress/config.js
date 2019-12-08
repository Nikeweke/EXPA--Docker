module.exports = {
  title: 'Docker',
  description: 'Dockerize your app',
  base: '/EXPA--Docker/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'To repository', link: 'https://github.com/Nikeweke/EXPA--Docker.git'},
    ],
    sidebar: [

      '../manipulate-containers.md',

      '../build-images.md',

      '../docker-compose.md',

      // require('../docker-compose/__index'),

      '../commands.md',
    ]
  }
}