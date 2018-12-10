
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class AnimationSystem extends ut.ComponentSystem  {     
        static framesForFpsCount : number = 0;
        static timeForFpsCount : number = 0;
        static rotationPerFrame : Quaternion = new Quaternion();

        constructor() {
            super();
            AnimationSystem.rotationPerFrame.setFromAxisAngle(new Vector3(0,0,1),0.1);
        }

        OnUpdate():void {
            AnimationSystem.timeForFpsCount += this.scheduler.deltaTime();
            AnimationSystem.framesForFpsCount++;
            if (AnimationSystem.framesForFpsCount % 100 === 0) {
                console.log(AnimationSystem.framesForFpsCount / AnimationSystem.timeForFpsCount, AnimationSystem.framesForFpsCount,AnimationSystem.timeForFpsCount);
            }

            this.world.forEach([ut.Core2D.TransformLocalRotation, game.ImageTag],(rotation,tag) => {
                rotation.rotation = rotation.rotation.multiply(AnimationSystem.rotationPerFrame);
            });
        }
    }
}