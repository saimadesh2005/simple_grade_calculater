function Findgrade(){
     let mark1 = parseInt(prompt("enter the mark1;"));
     let mark2 = parseInt(prompt("enter the mark2;"));
     let mark3 = parseInt(prompt("enter the mark3;"));
     let mark4 = parseInt(prompt("enter the mark4;"));
     let mark5 = parseInt(prompt("enter the mark5;"));

     let totalmark = mark1+mark2+mark3+mark4+mark5;

     let avrage = Math.round(totalmark/5);

     let grade;
    if(avrage >= 90){
        grade="A+";
     }else if(avrage >= 80){
        grade="A";
     } else if(avrage>=70){
        grade="B";
     } else if(avrage>=60){
        grade="C";
     } else if(avrage>=50){
        grade="D";
     } else if(avrage>=40){
        grade="E";
     } else {
        grade="F";
     }

    alert("total mark is;"+totalmark + 
        "average mark is;"+avrage +
        "the grade is;"+grade 
     );

}
