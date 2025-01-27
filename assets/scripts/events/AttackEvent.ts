/**
 * COPYRIGHT 2021 ALL RESERVED. (C) liaoyulei, https://github.com/dualface
 */

import { ecsclass, ECSEvent } from "../iam-ecs-typescript";
/**
 * 攻击事件
 */
@ecsclass("AttackEvent")
export class AttackEvent extends ECSEvent {
    /**
     * 构造函数
     *
     * @param targets 攻击目标的实体 ID
     */
    constructor(readonly targets: string[]) {
        super();
    }
}
