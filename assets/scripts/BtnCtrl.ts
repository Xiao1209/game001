
import { _decorator, Component, Node, log, v3, find, Enum, Sprite, Animation } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;


enum DicEnum{
    LEFT,
    STAND,
    RIGHT
}

@ccclass('BtnCtrl')
export class BtnCtrl extends Component {


    @property({type:Enum(DicEnum),displayName:"方向"})
    dic:DicEnum = 0

    start () {
        this.node.on(Node.EventType.TOUCH_START,this.clickEvent,this)
        this.node.on(Node.EventType.TOUCH_END,this.clickOver,this)
        this.node.on(Node.EventType.TOUCH_CANCEL,this.clickOver,this)
    }

    private player:Node
    private playerScript:Player
    private playerSprite:Node
    private playerAnim:Animation
    protected onLoad(){
        this.player = find("Canvas/player")
        this.playerScript = this.player.getComponent(Player)
        this.playerSprite = find("Canvas/player/sprite")
        this.playerAnim = this.playerSprite.getComponent(Animation)

    }

    private clickEvent(e){
        this.node.scale = v3(1.2,1.2,1)
        this.playerAnim.play("run")
        if(this.dic == DicEnum.LEFT){
            this.playerSprite.scale = v3(-1,1,1)
            this.playerScript.dir = -1
        }else if(this.dic == DicEnum.RIGHT){
            this.playerSprite.scale = v3(1,1,1)
            this.playerScript.dir = 1
        }
        
    }

    private clickOver(e){
        this.playerAnim.play("stand")
        this.node.scale = v3(1,1,1)
        this.playerScript.dir = 0
    }

    update (deltaTime: number) {
        // [4]
    }
}
