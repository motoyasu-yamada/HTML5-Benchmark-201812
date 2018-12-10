/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project FlyingYolk
 */

console.log('runtime version: internal');

ut.importModule(ut);
ut.importModule(ut.Math);
ut.importModule(ut.Shared);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Audio);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Core2D);
ut.importModule(ut.Profiler);
ut.importModule(ut.Tweens);
ut.main = function() {
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.AutoDestroySystemJS.update = new game.AutoDestroySystem()._MakeSystemFn();
    game.GameNumberTextValueSystemJS.update = new game.GameNumberTextValueSystem()._MakeSystemFn();
    game.NumberTextRenderingSystemJS.update = new game.NumberTextRenderingSystem()._MakeSystemFn();
    game.GameManagerSystemJS.update = new game.GameManagerSystem()._MakeSystemFn();
    game.GameOverSystemJS.update = new game.GameOverSystem()._MakeSystemFn();
    game.GravitySystemJS.update = new game.GravitySystem()._MakeSystemFn();
    game.GroundCollisionSystemJS.update = new game.GroundCollisionSystem()._MakeSystemFn();
    game.PlayerInputSystemJS.update = new game.PlayerInputSystem()._MakeSystemFn();
    game.ScrollerSystemJS.update = new game.ScrollerSystem()._MakeSystemFn();
    game.RepeatingBackgroundSystemJS.update = new game.RepeatingBackgroundSystem()._MakeSystemFn();
    game.ScorePointSystemJS.update = new game.ScorePointSystem()._MakeSystemFn();
    game.SpawnerSystemJS.update = new game.SpawnerSystem()._MakeSystemFn();
    game.SkinSystemJS.update = new game.SkinSystem()._MakeSystemFn();
    game.PipeSpacingSystemJS.update = new game.PipeSpacingSystem()._MakeSystemFn();
    game.VelocitySystemJS.update = new game.VelocitySystem()._MakeSystemFn();
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.AutoDestroySystemJS);
    scheduler.schedule(game.GameNumberTextValueSystemJS);
    scheduler.schedule(game.NumberTextRenderingSystemJS);
    scheduler.schedule(game.GameManagerSystemJS);
    scheduler.schedule(game.GameOverSystemJS);
    scheduler.schedule(game.GravitySystemJS);
    scheduler.schedule(game.GroundCollisionSystemJS);
    scheduler.schedule(game.PlayerInputSystemJS);
    scheduler.schedule(game.ScrollerSystemJS);
    scheduler.schedule(game.RepeatingBackgroundSystemJS);
    scheduler.schedule(game.ScorePointSystemJS);
    scheduler.schedule(game.SpawnerSystemJS);
    scheduler.schedule(game.SkinSystemJS);
    scheduler.schedule(game.PipeSpacingSystemJS);
    scheduler.schedule(game.VelocitySystemJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Tweens.TweenSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.HTML.RendererHTMLSwitchable);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Audio.AudioSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 600;
    c0.height = 1024;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(game.GameConfig);
    c1.state = 0;
    c1.scrollSpeed = 0.01;
    c1.gravity = -0.07;
    world.setConfigData(c1);
    var c2 = world.getConfigData(game.SkinConfig);
    c2.theme = 0;
    world.setConfigData(c2);
    var c3 = world.getConfigData(ut.Audio.AudioConfig);
    world.setConfigData(c3);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.Bootstrap");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }

    ut.Profiler.startProfiling(world);
}
