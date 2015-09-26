Package.describe({
  name: 'cloudle:wings',
  version: '2.0.1',
  summary: 'A productivity library for building Meteor app.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['coffeescript', 'underscore', 'meteorflux:dispatcher']);

  api.addFiles([
    'injections.coffee',
    'system/core.coffee',
    'flux/action.coffee', 'flux/store.coffee', 'flux/app.coffee'
  ], ['client', 'server']);

  api.addFiles([
    'system/design.coffee'
  ], 'client');
});