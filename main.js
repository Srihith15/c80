var students=[];
function sub() {
    var name=document.getElementById("student").value;
    students.push(name);
    document.getElementById("dis").innerHTML=students.toString();
}
function show(){
    var j=students.join("<br>");
document.getElementById("displaying").innerHTML=j.toString();

}
function finding(){
    var found=0;
    var s=document.getElementById("find").value;
    for (var i=0; i<students.length; i++){
        if (s==students[i]){
            found=found+1;
        }
    }
    document.getElementById("srch").innerHTML="name found " + found + " time(s)";
}