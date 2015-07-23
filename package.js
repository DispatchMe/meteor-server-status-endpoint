Package.describe({
  name: 'dispatch:server-status-endpoint',
  version: '0.0.1',
  summary: 'Show mongo status at /server-status'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    // core
    'check',
    'underscore',
    'mongo',

    // community
    'simple:json-routes@1.0.3',
    'simple:rest@0.2.3'
  ], 'server');

  api.addFiles([
    'status.js'
  ], 'server');
});
