var livingcss = require('../../index.js');

livingcss('buttons.css', '../../styleguide.html', {
  preprocess: function(context, template, Handlebars) {
    context.globalStylesheets = ['../examples/basic/buttons.css'];

    context.title = 'My Awesome StyleGuide';
    context.logo_img = 'http://placehold.it/150x50';
    context.menuText = 'Menu';

    context.footerText = 'This is my awesome StyleGuide footer';

    // register a Handlebars partial
    Handlebars.registerPartial('myPartial', '{{name}}');
  },

  sortOrder: [{
    index: []
  }, {
    buttons: []
  }, {
    navigation: ['Navigation', 'Navigation Alt']
  }],
});
