using Unity.Collections.LowLevel.Unsafe;
namespace game
{
    public enum GameState
    {
        Initialize = 0,
        Menu = 1,
        Tutorial = 2,
        Play = 3,
        GameOver = 4,
    }
}
namespace game
{
    public enum SkinType
    {
        Day = 0,
        Night = 1,
    }
}
namespace game
{
    public enum TextAlignment
    {
        Center = 0,
        Right = 1,
    }
}
namespace entities.game.Bootstrap
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameOver
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameScene
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Pipes
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Score
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Tutorial
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AutoDestroy : UTiny.IComponentData
    {


        public float threshold;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameConfigTextValue : UTiny.IComponentData
    {


        public string key;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Gravity : UTiny.IComponentData
    {


        public Unity.Mathematics.float2 gravity;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Ground : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct NumberTextRenderer : UTiny.IComponentData
    {


        public int value;
        public float spacing;
        public game.TextAlignment alignment;
        public UTiny.Entity[] renderers;
        public UTiny.Entity[] characters;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PlayerInput : UTiny.IComponentData
    {


        public float force;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct RepeatingBackground : UTiny.IComponentData
    {


        public float threshold;
        public float distance;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Reskinnable : UTiny.IComponentData
    {


        public game.SkinType theme;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScorePoint : UTiny.IComponentData
    {


        public int value;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Scroller : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Spacing : UTiny.IComponentData
    {


        public UTiny.Entity top;
        public UTiny.Entity bottom;
        public float spacing;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Spawner : UTiny.IComponentData
    {


        public float time;
        public float delay;
        public bool paused;
        public float distance;
        public float minHeight;
        public float maxHeight;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Velocity : UTiny.IComponentData
    {


        public Unity.Mathematics.float2 velocity;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameConfig : UTiny.IComponentData
    {


        public game.GameState state;
        public float scrollSpeed;
        public float gravity;
        public int currentScore;
        public int highScore;
        public float currentScrollSpeed;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SkinConfig : UTiny.IComponentData
    {


        public game.SkinType theme;
        public bool forced;



    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Default : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TransparentFX : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct IgnoreRaycast : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Water : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct UI : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Grid : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Cutscene : UTiny.IComponentData
    {





    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAnimationClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAudioClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSprite : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSpriteAtlas : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTexture2D : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTile : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTMP_FontAsset : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CameraCullingMask : UTiny.IComponentData
    {


        public int mask;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EntityLayer : UTiny.IComponentData
    {


        public int layer;



    }
}



