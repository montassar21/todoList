let tasks= document.querySelector(".tasks");
var task=document.querySelector("input");
let myText=document.createTextNode(task.value);
function createTask(){
    let task=document.querySelector("input");
    let myTask=document.createElement("li");
    let myP = document.createElement("p");
    let myB= document.createElement("button");
    let myText=document.createTextNode(task.value);
    let myBT= document.createTextNode('delete'); 
    myP.appendChild(myText);
    myP.setAttribute("val",task.value);
    myB.appendChild(myBT);
    myTask.appendChild(myP);
    myTask.appendChild(myB);
    myTask.style.listStyle="none";
    myTask.style.display="flex";
    myTask.style.maxWidth="132vh";    
    myTask.style.height="7vh";    
    myTask.style.margin="20px";
    myTask.style.backgroundColor="gray";
    myTask.style.borderRadius="5px";
    myP.style.fontSize="22px";
    myP.style.flex="8";
    myP.style.height="4vh";   
    myP.style.width="auto";  
    myP.style.textAlign="left";  
    myP.style.margin="10px";  
    myP.classList.add('para'); 
    myB.style.height="4vh";   
    myB.style.fontSize="17px";
    myB.style.margin="10px"; 
    myB.style.backgroundColor="orangered";
    myB.style.border="none";
    myB.style.cursor="pointer";
    myB.style.borderRadius="10px";
    myB.classList.add('delete');
if(task.value !=""){
    tasks.style.padding="20px";
    tasks.appendChild(myTask);
    if(localStorage.getItem("tasks")==null){
        localStorage.setItem("tasks",'[]');
        tasks.style.padding="0px";
    }
    var olddata=JSON.parse(localStorage.getItem("tasks"));
    olddata.push(task.value);
    localStorage.setItem("tasks",JSON.stringify(olddata));
}
 
}
 document.addEventListener("click",function(e){
    if(e.target.className=='delete'){
        e.target.parentElement.remove();
        let fa=e.target.previousElementSibling.getAttribute('val');
     const allo = JSON.parse(localStorage.getItem("tasks"));
     const filtered = allo.filter(item => item !== fa);
     localStorage.setItem("tasks", JSON.stringify(filtered));

    }
})
window.addEventListener("load", function(event) {
    let eles= window.localStorage.getItem("tasks");
    let elems=eles.substring(1,eles.length-1);   
    let arrData=elems.split(",");
    arrData.forEach(ele => {
    let el=ele.substring(1,ele.length-1);
        let myTask=document.createElement("li");
    let myP = document.createElement("p");
    let myB= document.createElement("button");
    let myText=document.createTextNode(el);
    let myBT= document.createTextNode('delete'); 
    myP.appendChild(myText);
    myP.setAttribute("val",el);
    myB.appendChild(myBT);
    myTask.appendChild(myP);
    myTask.appendChild(myB);
    myTask.style.listStyle="none";
    myTask.style.display="flex";
    myTask.style.maxWidth="132vh";    
    myTask.style.height="7vh";    
    myTask.style.margin="20px";
    myTask.style.backgroundColor="gray";
    myTask.style.borderRadius="5px";
    myP.style.fontSize="22px";
    myP.style.flex="8";
    myP.style.textAlign="left";  

    myP.style.height="4vh";   
    myP.style.width="auto";  
    myP.style.margin="10px";  
    myP.classList.add('para'); 
    myB.style.height="4vh";   
    myB.style.fontSize="17px";
    myB.style.margin="10px";
    myB.style.backgroundColor="orangered";
    myB.style.border="none";
    myB.style.cursor="pointer";
    myB.style.borderRadius="10px";
    myB.classList.add('delete');
    tasks.style.padding="20px";
    if(localStorage.getItem("tasks")=='[]'){
        localStorage.setItem("tasks",'[]');
        tasks.style.padding="0px";
    }
    else{
        tasks.appendChild(myTask);

    }
    document.addEventListener("click",function(e){
        if(e.target.className=='delete'){
            e.target.parentElement.remove();
            let fa=e.target.previousElementSibling.getAttribute('val');
         const allo = JSON.parse(localStorage.getItem("tasks"));
         const filtered = allo.filter(item => item !== fa);
         localStorage.setItem("tasks", JSON.stringify(filtered));
    
        }
    })
// console.log(typeof (ele));
    });
  });