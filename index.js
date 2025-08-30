function Findgrade(){
     let mark1 = parseInt(prompt("enter the mark1;"));
     let mark2 = parseInt(prompt("enter the mark2;"));
     let mark3 = parseInt(prompt("enter the mark3;"));
     let mark4 = parseInt(prompt("enter the mark4;"));
     let mark5 = parseInt(prompt("enter the mark5;"));

     let totalmark = mark1+mark2+mark3+mark4+mark5;

     let avrage = parseInt(totalmark/5);

    
    if(avrage >= 90.00){
        grade="A+";
     }
    else if(90.00>avrage>80.00){
        grade="A";
     }
    else if(80.00>avrage>70.00){
        grade="B";
     }
    else if(70.00>avrage>60.00){
        grade="C";
     }
    else if(60.00>avrage>50.00){
        grade="D";
     }
    else if(50.00>avrage>40.00){
        grade="E";
     }
    else {
        grade="F";
     }

    alert("total mark is;"+totalmark + 
        "/naverage mark is;"+avrage.toFixed(2) +
        "/n the grade is;"+grade 
     );

}
