using UTiny;
using UTiny.HTML;
using UTiny.Math;
using UTiny.Shared;
using UTiny.Rendering;
using UTiny.Core2D;
using UTiny.Text;
using UTiny.UILayout;
using ut.EditorExtensions;
using ut;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace NewScene
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Movement : IComponentData
    {
        public float speed;
    }
}

namespace ut.HTML
{
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

namespace ut.Core2D
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UILayout
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

namespace ut
{
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.RenderingFence))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    public class MovementSystemJS : IComponentSystem
    {
    }
}
