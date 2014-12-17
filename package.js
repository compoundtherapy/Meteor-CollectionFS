Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-worker.git',
  name: 'cfs:worker',
  version: '0.0.0',
  summary: 'CollectionFS, file worker - handles file copies/versions'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'cfs:base-package@0.0.26',
    'cfs:tempstore@0.0.2',
    'cfs:storage-adapter@0.0.0'
  ]);

  api.use([
    'livedata',
    'mongo-livedata',
    'cfs:power-queue@0.0.1'
  ]);

  api.addFiles([
    'fileWorker.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('cfs:standard-packages@0.0.0');

//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict', 'random']);

//   api.addFiles('tests/client-tests.js', 'client');
//   api.addFiles('tests/server-tests.js', 'server');
// });
