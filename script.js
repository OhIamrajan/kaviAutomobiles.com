function verify(){
    var n=document.forms["myForm"]["Mname"].value;
    var p=document.forms["myForm"]["Mpass"].value;
    if(n=="KaviArasan" && p=="iamkavi"){
        window.open("member-only.html");
        var mem_name=n;
        localStorage.setItem("memberN",mem_name);
    }
    else if(n=="Rajan" && p=="iamrajan"){
        window.open("member-only.html");
        var mem_name=n;
        localStorage.setItem("memberN",mem_name);
    }
    else{
        alert("Invalid Member name or password !");
    }
}
var mn=document.getElementById("member-name");
mn.innerHTML="Member Name : " + localStorage.getItem("memberN");
function modifyDetails(para){
    switch (para) {
        case 1:
            window.open("add.html");
            break;
        case 2:
            window.open("remove.html");
            break;
        case 3:
            window.open("update.html");
            break;
        default:
            alert("Sorry, Something went Wrong !");
            break;
        }
}
function getDate(){
    var today = new Date();
    document.getElementById("date").value = today.getFullYear()+'-'+('0'+(today.getMonth()+1)).slice(-2)+'-'('0'+today.getDate()).slice(-2);
}
