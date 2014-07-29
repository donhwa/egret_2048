/**
 * Created by xiao on 2014/7/28.
 */

class Game extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
    }

    private  addStage():void
    {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,)
    }
}