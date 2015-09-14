Package.describe({
  name: 'dispatch:server-status-endpoint',
  version: '0.0.3',
  summary: 'Show mongo status at /server-status',
  git: 'https://github.com/DispatchMe/meteor-server-status-endpoint.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    // core
    'check',
    'underscore',
    'mongo',

    // community
    'dispatch:cloudwatch-metrics@0.0.5',
    'simple:json-routes@1.0.3',
    'simple:rest@0.2.3'
  ], 'server');

  api.addFiles([
    'ping.js',
    'status.js'
  ], 'server');
});
