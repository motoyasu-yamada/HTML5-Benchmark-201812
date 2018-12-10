/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project AudioForest
 */

entities.game.Scene.name = "Scene";
entities.game.Scene.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(this.Component, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Forest");
    var arch2 = world.createArchetype(this.Component, ut.Audio.AudioSource, ut.Audio.AudioSourceStart, ut.layers.Default)
    var e2 = world.createEntity(arch2);
    world.setEntityName(e2, "BackgroundMusic");
    var arch3 = world.createArchetype(this.Component, ut.Audio.AudioSource, ut.layers.Default)
    var e3 = world.createEntity(arch3);
    world.setEntityName(e3, "Breeze");
    var e4 = world.createEntity(arch3);
    world.setEntityName(e4, "TreeWind");
    var e5 = world.createEntity(arch3);
    world.setEntityName(e5, "Walk");
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
    c4.halfVerticalSize = 200;
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
    var c6 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c6);
    var c7 = new ut.Core2D.TransformLocalPosition();
    var s5 = new ut.Math.Vector3();
    s5.x = 0;
    s5.y = 0;
    s5.z = 0;
    c7.position = s5;
    world.setComponentData(e1, c7);
    var c8 = new ut.Core2D.TransformLocalRotation();
    var s6 = new ut.Math.Quaternion();
    s6.x = 0;
    s6.y = 0;
    s6.z = 0;
    s6.w = 1;
    c8.rotation = s6;
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.TransformLocalScale();
    var s7 = new ut.Math.Vector3();
    s7.x = 50;
    s7.y = 50;
    s7.z = 1;
    c9.scale = s7;
    world.setComponentData(e1, c9);
    var c10 = new ut.Core2D.Sprite2DRenderer();
    c10.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/Forest');
    var s8 = new ut.Core2D.Color();
    s8.r = 1;
    s8.g = 1;
    s8.b = 1;
    s8.a = 1;
    c10.color = s8;
    c10.blending = 0;
    world.setComponentData(e1, c10);
    var c11 = new ut.Audio.AudioSource();
    c11.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/Forest_music');
    c11.volume = 0.4;
    c11.loop = true;
    world.setComponentData(e2, c11);
    var c12 = new ut.Audio.AudioSource();
    c12.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/Forest_breeze');
    c12.volume = 0.2;
    c12.loop = true;
    world.setComponentData(e3, c12);
    var c13 = new ut.Audio.AudioSource();
    c13.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/Forest_treewind');
    c13.volume = 0.3;
    c13.loop = true;
    world.setComponentData(e4, c13);
    var c14 = new ut.Audio.AudioSource();
    c14.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/Forest_playersteps');
    c14.volume = 0.4;
    world.setComponentData(e5, c14);
    return [e0, e1, e2, e3, e4, e5];
}

