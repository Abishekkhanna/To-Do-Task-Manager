var output = document.querySelector(".op");
function addtask(){
    var usertask = document.getElementById("user");
    var div = document.createElement("div");
    div.style.display="flex";
    div.style.flexDirection="row";
    div.style.justifyContent="space-between";
    div.style.alignItems="center";
    div.style.padding="13px";
    div.style.border="2px solid #ccc";
    div.style.borderRadius="25px"
    div.style.width="100%";
    div.style.fontSize="20px";
    div.innerHTML=usertask.value+"<button onclick='del(event)'></button>";
    output.append(div);
}
function del(event){
    event.target.parentElement.remove();
}
