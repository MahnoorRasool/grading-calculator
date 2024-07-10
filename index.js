function grades() 
{
    let std_name=prompt("enter your name")
    let percentage=document.getElementById("percentage1").value;
   
    if (percentage >= 90 ) {
        grade = 'A';
    } else if (percentage >= 80 ) {
        grade = 'B';
    } else if (percentage >= 70 ) {
        grade = 'C';
    } else if (percentage >= 60 ) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    alert(` Dear ${std_name} you have got this grade  :${grade} `);
    document.getElementById("result").innerHTML=(`<h1> Dear ${std_name} you have got this grade :${grade}</h1>   `) ;
    console.log(`<h1> Dear ${std_name} you have got this grade: ${grade} </h1> `) ;  
}