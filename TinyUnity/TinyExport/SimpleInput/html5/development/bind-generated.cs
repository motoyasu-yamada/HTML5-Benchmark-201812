using Unity.Collections.LowLevel.Unsafe;
namespace entities.game.NewScene
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Movement : UTiny.IComponentData
    {


        public float speed;



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



