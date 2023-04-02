let points = [[0,0],[4,4],[6,4],[8,2],[8,1],[6,-1],[-1,-1],[0,0],[-2,2],[-2,4],[-1,4],[0,3],[2,5],[2,7],[5,10],[9,10],[12,7],[13,8],[15,8],[13,6],[15,6],[14,5],[13,5],[13,3],[12,2],[12,1],[8,-3],[10,-5],[12,-5],[12,-6],[10,-6],[7,-3],[5,-3],[5,-6],[7,-6],[7,-7],[4,-7],[4,-3],[3,-3],[1,-1] ]; //設定各個點的位置
let clr1,clr2; //設定顏色指令(兩個)
let scaleValue = 1; //設定初始大小（縮放比例），後面會根據滑鼠的位置來更新這個變數的值，以實現圖形的縮放。

function setup() {   //只會執行一次
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬高為整個視窗
  
  clr1 = color("#FAFAC6") //設定第一個顏色為#FAFAC6 (黃色)
  clr2 = color("#F48498") //設定第二個顏色為#F48498 (粉橘)
  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      //把整個座標的線間隔都放大33倍
      points[i][j] = points[i][j] * 33;
    }
  }
}

function draw() {    //一直執行
  background(255);  //白色背景
 
  textSize(50*(mouseX/1000))  //設定文字大小
  fill("#CF8BA3");  //設定顏色
  text("piyopiyo!", mouseX, mouseY);  //文字

  translate(mouseX, mouseY); //把(mouseX, mouseY)定義成視窗中心點
  scale(1, -1);  //上下翻轉

  let mouseXScale = map(mouseX, 0, width, 0.5, 1.5); //設定 mouseX 的範圍從 0~視窗寬度 對應到 0.5~1.5 的比例值
  scaleValue = mouseXScale; //將滑鼠控制的值存入變數

  for (l=0;l<5;l++){ //設定五個迴圈
    push(); //保存當前的繪圖狀態
    
    scale(1 + l * 0.1, 1 + l * 0.1); // 放大畫布比例
    scale(scaleValue, scaleValue); //套用滑鼠控制的比例值
    for (let i = 0; i < points.length-1; i++) {

      //將小雞的線條變成漸層色
      let gradientColor = lerpColor(clr1, clr2, i/(points.length-2));
     stroke(gradientColor);
      strokeWeight(7) //設定線條粗度
      //--------------------
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
      }
      line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //將第一點與最後連起來
    pop(); //恢復先前保存的繪圖狀態
  }
}