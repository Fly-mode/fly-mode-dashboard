{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
  config: {
    // Load the local CanvasKit bundle.
    canvasKitBaseUrl: "/canvaskit/",
  },
  onEntrypointLoaded: function(engineInitializer) {
    engineInitializer.initializeEngine({
      // Load local fallback fonts if needed.
      fontFallbackBaseUrl: ''
    }).then(function(appRunner) {
      appRunner.runApp();
    });
  }
});