/**
 *  Create by LiuSiXiang on 2023/1/10
 *  jQuery.d.ts @describe: 全局变量的声明文件
 */

/** 全局变量测试 */
declare const USER_NAME:string;

/** declare var(let const) - 声明全局变量 */
declare let jQuerys: (selector: string) => any;

/** declare function 用来定义全局函数的类型 */
declare function jQuery(selector: string): any;

/** declare class 定义全局类 */
declare class Human {
    readonly name: string;
    age: number;
    height?: number;
    [isExperienced: string]: any;
}

/** declare enum 定义的枚举类型也称作外部枚举（全局） */
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

/** 字符串字面量类型 */
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(event: EventNames) { console.log(event) }
handleEvent("click");
handleEvent("scroll");
// handleEvent("dblclick");

/** 与 declare namespace 类似，export namespace 用来导出一个拥有子属性的对象 */
export namespace foo {
    const name: string;
    namespace bar {
        function baz(): string;
    }
}