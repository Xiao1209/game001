
import { _decorator, Component, Node, log, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BtnCtrl')
export class BtnCtrl extends Component {


    @property({displayName:"方向"})
    dic:number = 0

    start () {
        this.node.on(Node.EventType.TOUCH_START,this.clickEvent,this)
        this.node.on(Node.EventType.TOUCH_END,this.clickOver,this)
        this.node.on(Node.EventType.TOUCH_CANCEL,this.clickOver,this)
    }

    private clickEvent(e){
        log("点击开始")
        this.node.scale = v3(1.2,1.2)
    }

    private clickOver(e){
        log("点击结束")
        this.node.scale = v3(1,1)
    }

    update (deltaTime: number) {
        // [4]
    }
}
