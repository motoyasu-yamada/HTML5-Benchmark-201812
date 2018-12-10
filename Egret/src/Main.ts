class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private tnum:number = 10000;
    private bunnys:egret.Bitmap[] = [];

    private async onAddToStage(event:egret.Event) 
    {
        await this.loadResource()
        this.createGameScene();
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private createGameScene()
    {
        var img:egret.Texture = RES.getRes("test_png");

        for(var i:number=0;i<this.tnum;i++)
        {
            var bunny = new egret.Bitmap(img);
            bunny.x = Math.random()*800;
            bunny.y = Math.random()*600;
            this.addChild(bunny);
            this.bunnys.push(bunny);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.animate,this);
    }



    private animate(evt:egret.Event)
    {
        for(var i:number=0;i<this.tnum;i++)
        {
            this.bunnys[i].rotation += 1;
        }
    }

}
