let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]


//* 第一 及 第二 个任务*//

// var select=document.getElementById('region-select'),
//     selectTwo=document.getElementById('product'),

//     tab=document.getElementsByTagName('table')[0];


// //on change 事件

// select.onchange=function(){

// // var chose=this.value;
//     change();
// //     getDate(sourceData,chose);

// }

// selectTwo.onchange=function(){

//     change();
// }

//     function change(){
//         var ary;
//         ary=getDate(sourceData);

//         tab.innerHTML='<tr><th>商品</th><th>地区</th><th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th><th>七月</th><th>八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th></tr>';
        
//         for(let i=0;i<ary.length;i++){
//             var tr;
//                 tr=document.createElement('tr');
//             var td;
//                 td=document.createElement('td');
//                 td.textContent=ary[i].product;
//                 tr.appendChild(td);

//                 var tdt;
//                 tdt=document.createElement('td');
//                 tdt.textContent=ary[i].region;
//                 tr.appendChild(tdt);
                
//             for(let j=0;j<ary[i].sale.length;j++){
//                 let td;
                
//                 td=document.createElement('td')
//                 td.textContent=ary[i].sale[j];
//                 tr.appendChild(td);

//             }
//             tab.appendChild(tr);
//         }
//     }

//     function getDate(date){
//         var ary=[]
//         for(let i=0;i<date.length;i++){
        
//         if(select.value==='' && selectTwo.value==='') ary.push(date[i])

//         if(select.value==date[i].region && selectTwo.value==='') ary.push(date[i]);
        
//         if(selectTwo.value==date[i].product &&select.value==='') ary.push(date[i]);

//         else{
//             for(let j=0;j<date.length;j++){
//                 if(select.value==date[j].region && selectTwo.value==date[j].product) {
//                     ary=[];
//                     ary.push(date[j]);
//                 }

//             }
//         }
        
//     }
        
//     return ary;
//     }
    
    
  //获取数据
// function getDate(date,chose) {
//     tab.innerHTML='<tr><th>商品</th><th>地区</th><th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th><th>七月</th><th>一八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th></tr>'
// for(var i=0;i<date.length;i++){

//     if (date[i].region===chose) {
            
//         var tr=document.createElement('tr');
//         tr.innerHTML='<td>'+date[i].product+'</td>'+'<td>'+date[i].region+'</td>';

//         for(let j=0;j<date[i].sale.length;j++){
//             let td=document.createElement('td');

//              td.textContent=date[i].sale[j];
            
//             tr.appendChild(td);
//         }

//         tab.appendChild(tr);
//     }

    
//     // body...

// }
// }


//*第三 及 第四个任务* 注意代码的解耦！以及复用！//


var product=document.querySelector('div.chk'),
    region=document.querySelector('div.chks'),
    tab=document.getElementById('table-wrapper'),
    date=sourceData;

    var con=document.querySelector('div.con');

        con.addEventListener('change',function(e){
            var that=e.target;
            if(that.type=='checkbox'){
                tab.innerHTML='<tr><th>商品</th><th>地区</th><th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th><th>七月</th><th>八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th></tr>';
       
                if(that.value==='product-all'){
                    for(let i=0;i<date.length;i++){
                        if(date[i].product==='手机' || date[i].product==='笔记本' || date[i].product==='智能音箱'){
                            var addd='<td>'+date[i].product+'</td><td>'+date[i].region+'</td>';
                            var add='';
                            for(let j=0;j<date[i].sale.length;j++){
                                

                                add+='<td>'+date[i].sale[j]+'</td>';
                            }
                            tab.innerHTML+='<tr>'+addd+add+'</tr>';
                            add=null;
                        }
                        
                    }
                }
               else if(that.value==='region-all'){
                    tab.innerHTML='<tr><th>地区</th><th>商品</th><th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th><th>七月</th><th>八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th></tr>';
       
                    for(let i=0;i<date.length;i++){
                        if(date[i].region==='华东' || date[i].region==='华北' || date[i].region==='华南'){
                            var addd='<td>'+date[i].region+'</td><td>'+date[i].product+'</td>';
                            var add='';
                            for(let j=0;j<date[i].sale.length;j++){
                                

                                add+='<td>'+date[i].sale[j]+'</td>';
                            }
                            tab.innerHTML+='<tr>'+addd+add+'</tr>';
                            add=null;
                        }
                        
                    }
                }
                else{
                    var s=document.getElementsByTagName('input');
                    var ss=s[0].parentElement.parentElement;
                    var sss=s[s.length-1].parentElement.parentElement;
                    var d;
                    
                    for(let i=0;i<s.length;i++){

                        if(s[i].checked)    {}
                    }
                    }
                }
            
        })

function newDom(con,dom){

        // con.innerHTML='<lable><input type="checkbox" value="all">全选</lable>';

        for(let i=0;i<dom.length;i++){
            con.innerHTML+='<lable>'+'<input type="checkbox"'+'value='+dom[i].value+'>'+dom[i].text+'</lable>';
        }
}


function addListentAndChange(date){

        var con=document.querySelector('div.con');
        console.log(con);


            con.addEventListener('click',function(evt){
                
                var that=evt.target;


                if(that.type==='checkbox') {
                    if(that.value==='product-all'){
                        var pr=product.getElementsByTagName('input');
                        if(!that.checked){
                            for(let i=1;i<pr.length;i++){
                                if(pr[i].checked=true) that.checked=true;
                            }
                            
                        }
                        if(that.checked){   
                        for(let i=0;i<pr.length;i++){
                            pr[i].checked=true;
                        }
                    }
                    }
                    else if(that.value==='region-all'){
                        var re=region.getElementsByTagName('input');
                        if(!that.checked){
                            for(let i=0;i<re.length;i++){
                                if(re[i].checked=true) that.checked=true;
                            }
                        }
                        if(that.checked){   
                        for(let i=0;i<re.length;i++){
                            re[i].checked=true;
                        }
                    }
                }
                else{
                    var all=document.querySelector('div.con').querySelectorAll('input[type=checkbox]'),
                        pr=product.getElementsByTagName('input'),
                        re=region.getElementsByTagName('input'),
                        pr_flag=0,
                        re_flag=0;

                    for(let k=1;k<pr.length;k++){
                       if(pr[k].checked) continue;
                       pr_flag++;
                    }
                    for(let f=1;f<re.length;f++){
                       if(re[f].checked) continue;
                       re_flag++;
                    }
                    console.log(pr_flag);
                    
                    
                    if(pr_flag==0) pr[0].checked=true;
                    else{
                     if(pr_flag==1) pr[0].checked=false;
                    else if(pr_flag==3) that.checked=true;
                    }
                    
                    if(that.value=='e' || that.value=='n' ||that.value=='s'){

                    if(re_flag==0) re[0].checked=true;
                    else{
                    if(re_flag==1) re[0].checked=false;
                    else if(re_flag==3) that.checked=true;
                    }
                }
                else return;
            }
            }
            })
        
}
addListentAndChange(sourceData);




var doms=[
    {value:'product-all',text:'全部'},
    {value:'ph',text:'手机'},
    {value:'bk',text:'笔记本'},
    {value:'im',text:'智能音响'}
]

var domss=[
    {value:'region-all',text:'全部'},
    {value:'e',text:'华东'},
    {value:'n',text:'华北'},
    {value:'s',text:'华南'}
]
newDom(product,doms);
newDom(region,domss);

