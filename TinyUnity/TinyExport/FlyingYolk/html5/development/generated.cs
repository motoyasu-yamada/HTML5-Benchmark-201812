using UTiny;
using UTiny.Math;
using UTiny.Shared;
using UTiny.HTML;
using UTiny.Rendering;
using UTiny.Core2D;
using UTiny.Audio;
using ut;
using UTiny.HitBox2D;
using UTiny.Profiler;
using UTiny.Tweens;
using ut.EditorExtensions;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameOver
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameScene
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Pipes
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Score
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Tutorial
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct AutoDestroy : IComponentData
    {
        public float threshold;
    }
    public struct GameConfigTextValue : IComponentData
    {
        public string key;
    }
    public struct Gravity : IComponentData
    {
        public Vector2 gravity;
    }
    public struct Ground : IComponentData
    {
    }
    public struct NumberTextRenderer : IComponentData
    {
        public int value;
        public float spacing;
        public game.TextAlignment alignment;
        public DynamicArray<Entity> renderers;
        public DynamicArray<Entity> characters;
    }
    public struct PlayerInput : IComponentData
    {
        public float force;
    }
    public struct RepeatingBackground : IComponentData
    {
        public float threshold;
        public float distance;
    }
    public struct Reskinnable : IComponentData
    {
        public game.SkinType theme;
    }
    public struct ScorePoint : IComponentData
    {
        public int value;
    }
    public struct Scroller : IComponentData
    {
    }
    public struct Spacing : IComponentData
    {
        public Entity top;
        public Entity bottom;
        public float spacing;
    }
    public struct Spawner : IComponentData
    {
        public float time;
        public float delay;
        public bool paused;
        public float distance;
        public float minHeight;
        public float maxHeight;
    }
    public struct Velocity : IComponentData
    {
        public Vector2 velocity;
    }
    public enum GameState
    {
        Initialize = 0
        , Menu = 1
        , Tutorial = 2
        , Play = 3
        , GameOver = 4
    }
    public enum SkinType
    {
        Day = 0
        , Night = 1
    }
    public enum TextAlignment
    {
        Center = 0
        , Right = 1
    }
    [Configuration]
    public struct GameConfig : IComponentData
    {
        public game.GameState state;
        public float scrollSpeed;
        public float gravity;
        public int currentScore;
        public int highScore;
        public float currentScrollSpeed;
    }
    [Configuration]
    public struct SkinConfig : IComponentData
    {
        public game.SkinType theme;
        public bool forced;
    }
}

namespace ut
{
}

namespace ut.Math
{
}

namespace ut.Shared
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct Grid : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Core2D
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Audio
{
}

namespace ut
{
}

namespace ut.HitBox2D
{
}

namespace ut.Core2D
{
}

namespace ut.Profiler
{
}

namespace ut.Tweens
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTile : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class AutoDestroySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.HTML.RendererHTMLSwitchable))]
    public class NumberTextRenderingSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateBefore(typeof(game.NumberTextRenderingSystemJS))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GameNumberTextValueSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GameManagerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GameOverSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GravitySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GroundCollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PlayerInputSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class ScrollerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.ScrollerSystemJS))]
    public class RepeatingBackgroundSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class ScorePointSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.RepeatingBackgroundSystemJS))]
    public class SpawnerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.SpawnerSystemJS))]
    public class SkinSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PipeSpacingSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class VelocitySystemJS : IComponentSystem
    {
    }
}
