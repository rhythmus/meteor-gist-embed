Package.describe({
  summary: "Ultra powered gist embedding. http://blairvanderhoof.com/gist-embed/"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/gist-embed.js', 'client');
  api.export('EmbedGist');
});
