
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class SpawnerSystem extends ut.ComponentSystem {
        private static inited: boolean = false;
        private static NUMBER_OF_SPAWN : number = 10000;

        OnUpdate():void {
            if (SpawnerSystem.inited) {
                return;
            }

            for (let i:number=0; i < SpawnerSystem.NUMBER_OF_SPAWN; i++) {
                const x = Math.random() * 8 - 4;
                const y = Math.random() * 8 - 4;

                const e = ut.EntityGroup.instantiate(this.world, "game.Image")[0];
                this.world.usingComponentData(e, [ut.Core2D.TransformLocalPosition,ut.Core2D.TransformLocalScale], (p,s) => 
                {
                    p.position.x = x;
                    p.position.y = y;
                });
            }

            SpawnerSystem.inited = true;
        }
    }
}

