var livingcss = require('../../index.js');

// livingcss('buttons.css', '../../styleguide');

livingcss('buttons.css', '../../styleguide.html', {
  preprocess: function(context, template, Handlebars) {
    context.title = 'My Awesome Style Guide';
    context.logo_img = 'http://placehold.it/150x50';

    context.menuText = 'Menu';

    // register a Handlebars partial
    Handlebars.registerPartial('myPartial', '{{name}}');
  },

  sortOrder: [{
    index: []
  }, {
    buttons: []
  }, {
    navigation: []
  }],
});
