var livingcss = require('../../index.js');

// livingcss('buttons.css', '../../styleguide');

livingcss('buttons.css', '../../styleguide.html', {
  preprocess: function(context, template, Handlebars) {
    context.title = 'My Awesome Style Guide';

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
