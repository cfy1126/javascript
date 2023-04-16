let req=new XMLHttpRequest()
req.open("get","data.txt")
req.onload=function(){
  // 连线完成后，【背景子程式】触发【主程式】load 事件处理函数 
  alert(this.responseText)
}

// 主程式送出连线后，交给【背景子程式】负责处理连线细节
req.send()

// 主程式送出连线，立刻往下执行
alert("立刻被呼叫")