var skillData = {
  html5: {
    image: '',
    title: 'HTML5',
    dsc: 'HTML5 is the latest evolution of the standard that defines HTML.',
    link: ''
  },
  css3: {
    image: '',
    title: 'CSS3',
    dsc: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1.',
    link: ''
  },
  es6: {
    image: '',
    title: 'ES6',
    dsc: 'ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard.',
    link: ''
  },
  git: {
    image: '',
    title: 'Git',
    dsc: 'Git is a free and open source distributed version control system.',
    link: ''
  },
  knockout: {
    image: '',
    title: 'Knockout',
    dsc: 'Knockout is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model.',
    link: ''
  },
  jquery: {
    image: '',
    title: 'jQuery',
    dsc: 'jQuery is a fast, small, and feature-rich JavaScript library.',
    link: ''
  },
  bootstrap: {
    image: '',
    title: 'Bootstrap',
    dsc: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.',
    link: ''
  },
  react: {
    image: '',
    title: 'React',
    dsc: 'React makes it painless to create interactive UIs.',
    link: ''
  },
  gulp: {
    image: '',
    title: 'gulp',
    dsc: 'gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.',
    link: ''
  },
  grunt: {
    image: '',
    title: 'Grunt',
    dsc: 'Grunt is a JavaScript task runner, a tool used to automatically perform frequently used tasks.',
    link: ''
  },
  sass: {
    image: '',
    title: 'Sass',
    dsc: "Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.",
    link: ''
  },
  jasmine: {
    image: '',
    title: 'Jasmine',
    dsc: "Jasmine is a behavior-driven development framework for testing JavaScript code.",
    link: ''
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
