const output=document.getElementById("input");
function display(num){
    output.value+=num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(error){
        alert("Invalid")
    }
}
function cancel (){
    output.value="";

}