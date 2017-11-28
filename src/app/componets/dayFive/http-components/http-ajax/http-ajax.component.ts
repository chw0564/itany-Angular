import { Component, OnInit } from '@angular/core';
import { Http ,URLSearchParams ,Jsonp } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-http-ajax',
  templateUrl: './http-ajax.component.html',
  styleUrls: ['./http-ajax.component.css']
})
export class HttpAjaxComponent implements OnInit {

  // private city:string = "";
  // private bus:string = "";

  private userForm = new FormGroup({
    name:new FormControl("",[]),
    age:new FormControl("",[])
  })

  // private name:string = "";
  // private age:string = "";

  private user = {};

  private wk:string="";

  constructor(
    private http:Http,
    private jsonp:Jsonp
  ) { }

  ngOnInit() {
  }

  private getData(){
    // let response = this.http.get("http://127.0.0.1:80/angularData.php");
    let response = this.http.get("/api/angularData.php");    
    //  0 1 2 3 4

    // 订阅
    //    当前请求 完全结束 并且获取数据后 进行数据处理
    response.subscribe((data)=>{
      // 对数据进行解析
      //  data ==> Response
      //      存在一个方法  json() 获取AJAX请求的返回数据
      // console.log(data.json());
      this.user = data.json()
    });
  }

  private sendData(){
    let url = "/api/angularSendData.php";
    /*
      {
        url?: string|null
        method?: string|RequestMethod|null
        search?: string|URLSearchParams|{[key: string]: any | any[]}|null
        params?: string|URLSearchParams|{[key: string]: any | any[]}|null
        headers?: Headers|null
        body?: any
        withCredentials?: boolean|null
        responseType?: ResponseContentType|null
      } 
      
      {
        key:value,
        key:value
      }

     */
    // URLSearchParams  需要导包，但是 VSCode 不提示导包
    // let prams = new URLSearchParams();
    // prams.append("name",this.name);
    // prams.append("age",this.age);

    // this.http.get(url,{
    //   // params:prams
    //   search:prams
    // }).subscribe((data)=>{
    //   console.log(data);
    // })

    console.log(this.userForm.value);

    this.http.get(url,{
      // params:prams
      // search:{
      //   name:this.name,
      //   age:this.age
      // }
      search:this.userForm.value
    }).subscribe((data)=>{
      console.log(data);
    })
  }

  private sendDataPost(){
    let url = "/api/angularSendData.php";
    // this.http.post(url,body,optionArgs)
    // body 是请求需要传递的数据
    // URLSearchParams  用在POST 请求中  FromsData 类型的数据传递
    let params = new URLSearchParams();
    params.append("name",this.userForm.value.name);
    params.append("age",this.userForm.value.age);
    this.http.post(url,params)
        .subscribe((data)=>{
          console.log(data.json());
        });
  }

  private seachData(){
    // 跨域请求
    let url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
    // let params = new URLSearchParams();
    // params.append("wd",this.wk);
    // params.append("age",this.userForm.value.age);
    // JSONP 方法 只能使用 get请求
    // this.jsonp.post(url,params)
    //     .subscribe((data)=>{
    //       console.log(data.json);
    //     });

    this.jsonp.get(url,{
      params:{
        "wd":this.wk,
        // JSONP_CALLBACK 关键占位符，以字符的方式定位在请求中
        //   格式 大小写 都不能变
        "cb":"JSONP_CALLBACK"
        // key 是服务器所需要的回调名 
        // value "JSONP_CALLBACK"
      }
    }).subscribe((data)=>{
      console.log(data.json());
    });
    
  }

}
