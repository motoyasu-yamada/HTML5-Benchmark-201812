var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var AnimationSystem = /** @class */ (function (_super) {
        __extends(AnimationSystem, _super);
        function AnimationSystem() {
            var _this = _super.call(this) || this;
            AnimationSystem_1.rotationPerFrame.setFromAxisAngle(new Vector3(0, 0, 1), 0.1);
            return _this;
        }
        AnimationSystem_1 = AnimationSystem;
        AnimationSystem.prototype.OnUpdate = function () {
            AnimationSystem_1.timeForFpsCount += this.scheduler.deltaTime();
            AnimationSystem_1.framesForFpsCount++;
            if (AnimationSystem_1.framesForFpsCount % 100 === 0) {
                console.log(AnimationSystem_1.framesForFpsCount / AnimationSystem_1.timeForFpsCount, AnimationSystem_1.framesForFpsCount, AnimationSystem_1.timeForFpsCount);
            }
            this.world.forEach([ut.Core2D.TransformLocalRotation, game.ImageTag], function (rotation, tag) {
                rotation.rotation = rotation.rotation.multiply(AnimationSystem_1.rotationPerFrame);
            });
        };
        var AnimationSystem_1;
        AnimationSystem.framesForFpsCount = 0;
        AnimationSystem.timeForFpsCount = 0;
        AnimationSystem.rotationPerFrame = new Quaternion();
        AnimationSystem = AnimationSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], AnimationSystem);
        return AnimationSystem;
    }(ut.ComponentSystem));
    game.AnimationSystem = AnimationSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SpawnerSystem = /** @class */ (function (_super) {
        __extends(SpawnerSystem, _super);
        function SpawnerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnerSystem_1 = SpawnerSystem;
        SpawnerSystem.prototype.OnUpdate = function () {
            if (SpawnerSystem_1.inited) {
                return;
            }
            var _loop_1 = function (i) {
                var x = Math.random() * 8 - 4;
                var y = Math.random() * 8 - 4;
                var e = ut.EntityGroup.instantiate(this_1.world, "game.Image")[0];
                this_1.world.usingComponentData(e, [ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale], function (p, s) {
                    p.position.x = x;
                    p.position.y = y;
                });
            };
            var this_1 = this;
            for (var i = 0; i < SpawnerSystem_1.NUMBER_OF_SPAWN; i++) {
                _loop_1(i);
            }
            SpawnerSystem_1.inited = true;
        };
        var SpawnerSystem_1;
        SpawnerSystem.inited = false;
        SpawnerSystem.NUMBER_OF_SPAWN = 10000;
        SpawnerSystem = SpawnerSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], SpawnerSystem);
        return SpawnerSystem;
    }(ut.ComponentSystem));
    game.SpawnerSystem = SpawnerSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map