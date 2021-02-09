function preload() {
	 table = loadTable("opioids1.csv", "csv", "header");
}

function setup() {
	createCanvas(720, 400);
  noLoop();
}

function draw() {

  background(220);
  if (table){

  	//print title
  	textSize(20);
  	text("Synthetic Opioid Deaths in USA 1999 - 2017",20,25);

    //get number of rows
    numRows = table.getRowCount();
    

    //get years and synthetic OD column
    let years = table.getColumn("Year");
    let synOD = table.getColumn("Number.Opioid.Synthetic");
    
    
    //get min and max values for years and synOD
    let ymin = min(synOD);
    let ymax = max(synOD);
    
    let xmin = min(years);
    let xmax = max(years);
   
    //draw  y axis
    line(65,50,65,350);
    
    //draw x axis and label
    line(65,350,700,350);
    textSize(15);
    text("Year",720/2,390);
    
    //create array with values to be shown on y axis 
    let yAxesVals = [1000,5000,10000,15000,20000,25000,30000];
    
    //y axis tick marks and labels
    for (let i = 0; i < yAxesVals.length; i++){
      let tickY = map(yAxesVals[i], ymin,ymax,325,75);
      
      strokeWeight(0.5);
      line(60,tickY,700,tickY);
      fill('black');
      textSize(10);
      text(nfc(yAxesVals[i]),25,tickY+3);
      
      if (yAxesVals[i] == 15000){console.log(tickY)}
    }
  
    
    //plot points and fill in x axis 
    for (let i = 0; i < numRows; i++){
      
      let ypos = map(synOD[i], ymin, ymax,325,75);
      let xpos = map(years[i], xmin,xmax, 80, 660);
     
      //plot points
      stroke("red");
      strokeWeight(5);
      point(xpos,ypos);
      
      //make horizontal tick mark
      stroke('black');
      strokeWeight(0.5);
      line(xpos,345,xpos,355);
      
      //make year labels 
      textSize(10);
      strokeWeight(0.1);
      text(years[i],xpos-10,365);    
    }   
    
     //create y axis label 
    angleMode(DEGREES);
    textSize(15);
    translate(15,220);
    rotate(-90);
    text("Deaths", 0,0);
   
  }
  
  
  

}