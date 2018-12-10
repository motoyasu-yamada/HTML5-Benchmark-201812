/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project TinyUnityPerformance
 */

/**
 * @type {object}
 * @desc Map containing URLs for all assets.  If assets are included as base64 blobs, these will be data URLs.
 * @example var assetUrl = UT_ASSETS["MyCustomAsset"]
 */
var UT_ASSETS = {
    "test": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTIvMDcvMTjP/3cdAAAEq0lEQVR4nOWaT2hcRRzHPzP7NtkkBCGyrbSVlC1NMV1IirZpWanEYmkh1CiUBWERAqF6EAJ715qbh4VAD5YEAhLQi5TgRQgi5iAUmktwKZgQrJQeSjUSykZSd3d6mNm62eya/TPz+rZ+4F2Sfd/fzJeZNzO/3wilFM0iMqIPeMs8cWAA6AN6zE9ywCawBmSBZWBZpdVm00EtIxo1QGRECBgHJoCLgNdgzDywBMwDiyqtCg2+b5W6DRAZIYAU8ClwzFL8DWAaWFDpFoZiC9RlgMiIODAHnHXUjtvApEqrrCP9msj9fiAy4iNgBXedx2ivmFi+UnMEiIyQwAzwia8tghvAlEqroh/BqhpgOr8AfOBHI6rwNZDyw4RaU2CG59d5TOwZPwLtGQFmHn7pR/A6+Fil1U2XAXYZYL72K0Cny6ANsAO84XJ1eDYFzDo/R3A6D7otc6ZtTij/BqRwu9Q1y1l025wglFKl7e2v2Nvh2WYDOOFi21waAeMEt/Og2zbuQrh0kJlwIW6TuBf/dnZ21rquNEfai9aVLXM3f5ecylnXleizfKNHWt8pUmStsGZdt2RAW7BeWLeuKdGZnLbgQeGBdU2JTmO1BQ+LD61rSnQOry3YZtu6puTfBGbg2VE71jX3zQi96Eh06rot6BT2z2kSnbdvC7rptq4p0UWLtuCgPGhdU6IrNm3B4dBh65oSXa5qC46HjlvXLBmQt65sGYlkIGR/zyZNoXLJurJlBr1BeoT9LUtpHzBvXdkyiXDCiW7JgEV02imQRGWUYW/YibYEMLm2aScRLDDWMYZ0tGktV11AV2kDRSwUYyQ84kz/mQGmPj+JLkYEAg+PVCSFwFlZYPe4MhWYKWfRGiQZSXJIHnIaY8/EMrW4G06j1sFoxyjnw+edx6n1ZZlCl6ifC2fCZ0h2Jn2JVdUAU5dP9f/FN760oozRjlEmIhNO5305te8ICfE28N3Nc/RMvQs7jhPnHh7JSNKXYV9OdQOEGAJ+xqTLsq/A5FW43e+mEbFQjFQk5fyDV429BgjRBawCu45eSsDC6zD9Dmy8bCd4VEYZ6xhjJDzi25CvpJoB14HPar1QkLAYh/nTsHQC8g1u0CSSQW+QRDjBsDfsbIdXL7sNEKIXuA+8VM/Lm92wHIPlY3qarEX133Id+v89T6BvGwYewWt/ePDmh8S6Tjo51TVL5aftfersPOjOvZfVz/7k+am3wNq54HQe9i6Dl10GezUbvOxbpQGnXQaL3rvnUr4pKg1wtNBpejeDl4GvNCDkMpgo+nL7tSEqDXB6d1/J4FXiKlv0u8tgj/uCV4iuNOCOy2CPjh51Kd8UlQZ87zLY/XjwLqNUGnAL2HIR6ElXF7+dOuVCuiV2G6DUYxxdU//lwgX+iURcSLdEtc/yF4DV61hbBw6weumSTUlr7DVAqb+Bq9i7OJH74do18uGwJTm7VF+YlVoFrtC6CTngyp9HjrQo447aOxOlfgQSND8d1oGE0Qks/7010yNhCPic+leHLfP7IfN+oNk/1am/CdcRIoPOF1xGnxr70WeHAnoHeQe9j7hlVpO2oP5cr+7UV+Z5YQje6cRn/vcGPAVlLDHrgOut5gAAAABJRU5ErkJggg=="
}

var UT_ASSETS_SETUP = function(world) {
    var arch0 = world.createArchetype(ut.Core2D.Image2D, ut.Core2D.Image2DLoadFromFile, ut.EditorExtensions.AssetReferenceTexture2D)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "assets/textures/test");
    var arch1 = world.createArchetype(ut.Core2D.Sprite2D, ut.EditorExtensions.AssetReferenceSprite)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "assets/sprites/test");
    var c0 = new ut.Core2D.Image2DLoadFromFile();
    c0.imageFile = "ut-asset:test";
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Image2D();
    c1.pixelsToWorldUnits = 0.01;
    world.setComponentData(e0, c1);
    var c2 = new ut.EditorExtensions.AssetReferenceTexture2D();
    c2.guid = "172325bdce47dcb41b2876616551e85d";
    c2.fileId = 2800000;
    c2.type = 3;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.Sprite2D();
    c3.image = e0;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 1;
    c3.imageRegion = s0;
    var s1 = new ut.Math.Vector2();
    s1.x = 0.5;
    s1.y = 0.5;
    c3.pivot = s1;
    world.setComponentData(e1, c3);
    var c4 = new ut.EditorExtensions.AssetReferenceSprite();
    c4.guid = "172325bdce47dcb41b2876616551e85d";
    c4.fileId = 21300000;
    c4.type = 3;
    world.setComponentData(e1, c4);
    return [e0, e1];
}


