/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project BasicWorkshop
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Physics2D);
ut.importModule(ut.Particles);
ut.importModule(ut.Interpolation);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Core2D);
ut.main = function() {
    game.EnemyBehaviorFilter._Components = [ut.Entity, 
        ut.Core2D.TransformLocalPosition, game.EnemyTag, game.MoveSpeed, game.ChangeOverTime, game.Boundaries
    ];
    game.EnemyBehaviorFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.position = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
        this.tag = world.getComponentData(entity, game.EnemyTag);
        this.speed = world.getComponentData(entity, game.MoveSpeed);
        this.speedChange = world.getComponentData(entity, game.ChangeOverTime);
        this.bounds = world.getComponentData(entity, game.Boundaries);
    };
    game.EnemyBehaviorFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.position = undefined;
        this.tag = undefined;
        this.speed = undefined;
        this.speedChange = undefined;
        this.bounds = undefined;
    };
    game.EnemyBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.position);
        world.setComponentData(entity, this.tag);
        world.setComponentData(entity, this.speed);
        world.setComponentData(entity, this.speedChange);
        world.setComponentData(entity, this.bounds);
    };
    game.EnemyBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, position, tag, speed, speedChange, bounds) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.EnemyBehavior.Instance = new game.EnemyBehavior();
    game.EnemyBehavior._StateType = game.EnemyBehavior_State;
    game.EnemyBehavior.prototype._GetFilter = function() { if (!this.data) { this.data = new game.EnemyBehaviorFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.EnemyBehavior_OnEntityEnableJS.update = game.EnemyBehavior.Instance._MakeOnEntityEnable();
    game.InputMovementSystemJS.update = new game.InputMovementSystem()._MakeSystemFn();
    game.PlayerCollisionSystemJS.update = new game.PlayerCollisionSystem()._MakeSystemFn();
    game.ScrollingBackgroundSystemJS.update = new game.ScrollingBackgroundSystem()._MakeSystemFn();
    game.SpawnSystemJS.update = new game.SpawnSystem()._MakeSystemFn();
    ut.TimeJS.update = new ut.Time()._MakeSystemFn();
    game.EnemyBehavior_OnEntityUpdateJS.update = game.EnemyBehavior.Instance._MakeOnEntityUpdate();
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(game.EnemyBehavior_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(game.InputMovementSystemJS);
    scheduler.schedule(game.PlayerCollisionSystemJS);
    scheduler.schedule(game.ScrollingBackgroundSystemJS);
    scheduler.schedule(game.SpawnSystemJS);
    scheduler.schedule(ut.TimeJS);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.EnemyBehavior_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Particles.ParticleSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.HTML.RendererHTMLSwitchable);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 600;
    c0.height = 800;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.MainGroup");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
