/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project TinyUnityPerformance
 */

entities.game.Image.name = "Image";
entities.game.Image.load = function(world) {
    var arch0 = world.createArchetype(game.ImageTag, this.Component, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Image");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 0;
    s0.y = 0;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Sprite2DRenderer();
    c4.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/test');
    var s3 = new ut.Core2D.Color();
    s3.r = 1;
    s3.g = 1;
    s3.b = 1;
    s3.a = 1;
    c4.color = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    return [e0];
}

entities.game.Scene.name = "Scene";
entities.game.Scene.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 0;
    s0.y = 0;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Camera2D();
    c4.halfVerticalSize = 5;
    var s3 = new ut.Math.Rect();
    s3.x = 0;
    s3.y = 0;
    s3.width = 1;
    s3.height = 1;
    c4.rect = s3;
    var s4 = new ut.Core2D.Color();
    s4.r = 0;
    s4.g = 0;
    s4.b = 0;
    s4.a = 1;
    c4.backgroundColor = s4;
    c4.clearFlags = 0;
    c4.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid, ut.layers.Grid.cid, ut.layers.Cutscene.cid];
    c4.cullingMode = 2;
    world.setComponentData(e0, c4);
    var c5 = new ut.EditorExtensions.CameraCullingMask();
    c5.mask = -1;
    world.setComponentData(e0, c5);
    return [e0];
}

