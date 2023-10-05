let listContainer=document.getElementById('listcontainer');
let listItems=listContainer.getElementsByTagName('LI');
let container1=document.getElementById('content1');
let container2=document.getElementById('content2');
let button=document.getElementById('button');
let rate=document.getElementById('rate')

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        for(var i=0;i<listItems.length;i++){
            listItems[i].style.background='hsl(216,12%,8%)';
        }
        e.target.style.background='orange';
        rate.innerHTML=e.target.innerHTML

    }
})
button.addEventListener('click',function(){
    container1.style.display='none';
    container2.style.display='block';
})