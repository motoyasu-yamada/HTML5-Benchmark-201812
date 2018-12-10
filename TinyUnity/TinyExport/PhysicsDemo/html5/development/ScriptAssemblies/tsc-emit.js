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
    var CollisionSystem = /** @class */ (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Physics2D.ColliderContacts, ut.Core2D.Sprite2DRenderer], function (collidercontacts, sprite2drenderer) {
                var contacts = collidercontacts.contacts;
                if (contacts.length > 0) {
                    if (_this.world.getEntityName(contacts[0]) == "LeftWall1") {
                        var color = new ut.Core2D.Color(1, 179 / 255, 179 / 255, 1);
                        sprite2drenderer.color = color;
                    }
                    else if (_this.world.getEntityName(contacts[0]) == "Ball2") {
                        var color = new ut.Core2D.Color(129 / 255, 228 / 255, 129 / 255, 1);
                        sprite2drenderer.color = color;
                    }
                }
            });
        };
        CollisionSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.Physics2D.ColliderContacts),
            ut.requiredComponents(ut.Core2D.Sprite2DRenderer)
        ], CollisionSystem);
        return CollisionSystem;
    }(ut.ComponentSystem));
    game.CollisionSystem = CollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MoveSystem = /** @class */ (function (_super) {
        __extends(MoveSystem, _super);
        function MoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MoveSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Move, ut.Physics2D.Velocity2D], function (entity, move, velocity2d) {
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(-move.speed, velocity2d.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(move.speed, velocity2d.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W) || ut.Runtime.Input.getMouseButton(0)) {
                    var impulse = new ut.Physics2D.AddImpulse2D;
                    impulse.impulse = new Vector2(0, move.upForce);
                    _this.world.addComponentData(entity, impulse);
                }
            });
        };
        MoveSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Move),
            ut.requiredComponents(ut.Physics2D.Velocity2D)
        ], MoveSystem);
        return MoveSystem;
    }(ut.ComponentSystem));
    game.MoveSystem = MoveSystem;
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