function verify(){
    var n=document.forms["myForm"]["Mname"].value;
    var p=document.forms["myForm"]["Mpass"].value;
    var para=document.getElementById('para');
    if(n=="KaviArasan" && p=="iamkavi"){
        window.open("member-only.html");
        this.admin=1;
    }
    if(n=="Rajan" && p=="iamrajan"){
        window.open("member-only.html");
        this.admin=0;
    }
    else{
        const invalid="Member Name or Password Invalid !";
        para.innerHTML=invalid;
    }
}
var mn=document.getElementById("member-name");
mn.innerHTML="Member Name : "+mem_name;
function modifyDetails(para){
    var access_password=prompt("You need an access password to enter into this action.Enter the password right here : ");
    if(access_password=="myaccess"){
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
    else{
        alert("Hey, buddy! Go and meet the administrator.");
    }
}