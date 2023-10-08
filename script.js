let list = document.getElementsByTagName("li");
let i;
for(i=0;i<list.length;i++){
    let span = document.createElement("span");
    let closeTag = document.createTextNode("\u00D7")
    span.className = "Remove";
    span.appendChild(closeTag);
    list[i].appendChild(span);
}
let Remove = document.getElementsByClassName("Remove");
let j;
for(j=0;j<Remove.length;j++){
    Remove[j].addEventListener("click", clear)
    function clear(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let ulList = document.querySelector('ul');
ulList.addEventListener('click',function(e){
    if(e.target.tagName === 'li'){
    e.target.classList.toggle('checked');
    }
},false);

let but = document.getElementById("btn");
but.addEventListener('click',AddMore);
function AddMore(){
    let li = document.createElement("li");
    let inputVal = document.getElementById('txt').value;
    let t = document.createTextNode(inputVal);
    li.appendChild(t)
    if(inputVal === ""){
        alert("please write something..");
    }
    else{
    document.getElementById("List").appendChild(li);
    }
    document.getElementById("txt").value="";
    let span = document.createElement("span");
    let closeTag = document.createTextNode("\u00D7")
    span.className = "Remove";
    span.appendChild(closeTag);
    li.appendChild(span);
    for (i = 0; i < Remove.length; i++) {
        Remove[i].addEventListener("click",function() {
          let div = this.parentElement;
          div.style.display = "none";
        })
      }
}
