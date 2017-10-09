var skillData = {
  html5: {
    image: 'img/card-caps/html5.jpg',
    title: 'HTML5',
    dsc: 'HTML5 is the latest evolution of the standard that defines HTML.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  css3: {
    image: 'img/card-caps/css.jpg',
    title: 'CSS3',
    dsc: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
  },
  es6: {
    image: 'img/card-caps/es6.jpg',
    title: 'ES6',
    dsc: 'ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard.',
    link: 'https://github.com/lukehoban/es6features'
  },
  git: {
    image: 'img/card-caps/git.jpg',
    title: 'Git',
    dsc: 'Git is a free and open source distributed version control system.',
    link: 'https://git-scm.com/'
  },
  knockout: {
    image: 'img/card-caps/knockout.jpg',
    title: 'Knockout',
    dsc: 'Knockout is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model.',
    link: 'http://knockoutjs.com/'
  },
  jquery: {
    image: 'img/card-caps/jquery.jpg',
    title: 'jQuery',
    dsc: 'jQuery is a fast, small, and feature-rich JavaScript library.',
    link: 'https://jquery.com/'
  },
  bootstrap: {
    image: 'img/card-caps/bootstrap.jpg',
    title: 'Bootstrap',
    dsc: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.',
    link: 'http://getbootstrap.com/'
  },
  react: {
    image: 'img/card-caps/react.jpeg',
    title: 'React',
    dsc: 'React makes it painless to create interactive UIs.',
    link: 'https://reactjs.org/'
  },
  gulp: {
    image: 'img/card-caps/gulp.jpg',
    title: 'gulp',
    dsc: 'gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.',
    link: 'https://gulpjs.com/'
  },
  grunt: {
    image: 'img/card-caps/grunt.jpg',
    title: 'Grunt',
    dsc: 'Grunt is a JavaScript task runner, a tool used to automatically perform frequently used tasks.',
    link: 'https://gruntjs.com/'
  },
  sass: {
    image: 'img/card-caps/sass.jpg',
    title: 'Sass',
    dsc: "Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.",
    link: 'http://sass-lang.com/'
  },
  jasmine: {
    image: 'img/card-caps/jasmine.jpg',
    title: 'Jasmine',
    dsc: "Jasmine is a behavior-driven development framework for testing JavaScript code.",
    link: 'https://jasmine.github.io/'
  }
}

var updateSkillCard = function(skill) {
  $('#skill-card-img').attr('src', skillData[skill].image);
  $('#skill-card-title').text(skillData[skill].title);
  $('#skill-card-dsc').text(skillData[skill].dsc);
  $('#skill-card-link').attr('href', skillData[skill].link);
}

$(".btn-skill").click(function(event) {
  updateSkillCard(event.currentTarget.id.substring(4));
});
