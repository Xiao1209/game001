
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('Player')
export class Player extends Component {

    @property({displayName:"移动速度"})
    speed:number = 200


    private playerPos:Vec3

    public dir = 0
    protected onLoad(){
        this.playerPos = new Vec3()
    }


    start () {
        
    }

    protected update(dt:number){
        this.node.getPosition(this.playerPos)
        this.playerPos.x += this.speed * (1/60) * this.dir
        this.node.setPosition(this.playerPos)
    }
}
