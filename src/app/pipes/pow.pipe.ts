import { Pipe , PipeTransform } from '@angular/core'
// import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';


@Pipe({
    // 定义管道 调用表示符
    name:'pow'
})
export class PowPipe implements PipeTransform{
    // 用户用于书写 自定义管道的逻辑代码


    // { data | pow :x : y …… }
    // 方法一定得有返回值
    //      value   要过滤的数据  ==>  data   | 左边的值
    //      ...args 可变长数组   ==>  后续可以接收多个参数 参数的个数取决  | 右边可定义的参数数量
    //      参数后的？ 表示该参数可有可无
    transform(value: number, n?:number):number{
        // console.log(n);
        // console.log(value);
        if(n===undefined){
            return value;
        }
        return Math.pow(value,n);
    }

    // show(){
    //     this.transform(1)
    // }

}