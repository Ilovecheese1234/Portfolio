const topBar = document.getElementById("topBar");
const detectArea = document.getElementById("detectArea");
const cheeseCursor = document.getElementById("cheeseCursor");
const cursorDesc = document.getElementById("cursorDesc");
const direct = document.querySelectorAll(".direct");
const projects = document.querySelectorAll(".projects");
const buttonFooter = document.querySelectorAll(".buttonFooter");
const footer = document.getElementById("footer");


window.addEventListener("mousemove",(e)=>{
        cheeseCursor.style.left = `${e.clientX}px`;
        cheeseCursor.style.top =`${e.clientY+window.scrollY}px`;
    })
detectArea.addEventListener("mouseover",(e)=>{
    topBar.style.top = "0%";
},100)    

topBar.addEventListener("mouseleave",(e)=>{
     topBar.style.top = "-20%";

})

window.addEventListener("mousemove",(e)=>{
        cheeseCursor.style.left = `${e.clientX}px`;
        cheeseCursor.style.top =`${e.clientY+window.scrollY}px`;
    })

    let isClick=0;
function showCursor(){
    isClick++
    if(isClick%2==1){
        cheeseCursor.style.opacity =1;
        cheeseCursor.style.zIndex = 100;

    }
    else{
         cheeseCursor.style.opacity =0;
        cheeseCursor.style.zIndex = -100;
         body.style.cursor = "default";
    }

}


direct.forEach((e)=>{
    e.addEventListener("mouseenter",(e)=>{
         let randNum = Math.floor(Math.random()*100);
         if(randNum>=90){
            cursorDesc.textContent = "Cheese chEese cheeSe 🧀🧀";
        }
        else{
            cursorDesc.textContent = "You'll be directed to my Github page";
        }
    })
    e.addEventListener("mousemove",(e)=>{
       
       
       
        cursorDesc.style.opacity = 1;
        cursorDesc.style.transition = "0.2s linear";
    })
    e.addEventListener("mouseleave",(e)=>{
        cursorDesc.style.backgroundColor = `rgb( ${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} )`;
       cursorDesc.style.opacity = 0;
       cursorDesc.style.transition = "0s";
    })
})

window.addEventListener("mousemove",(e)=>{
    cursorDesc.style.left = `${e.clientX+20}px`; 
    cursorDesc.style.top = `${e.clientY+window.scrollY+30}px`;
})



window.addEventListener("scroll",(e)=>{
    projects.forEach((element,index)=>{
        let scrollPercentage = window.scrollY / element.offsetTop * 100;
        if(scrollPercentage>40 && scrollPercentage<100){
            if(index%2==0){
                element.style.right = "0"
            }
            else{
                element.style.left = "0";
            }
            element.style.opacity = 1;
        }
    })
   let footerScrollPercentage = window.scrollY / footer.offsetTop * 100;
   if(footerScrollPercentage > 40 && footerScrollPercentage<100){
     buttonFooter.forEach((element,index)=>{
                element.style.left = "0%";
                element.style.opacity = "1";
                element.style.transition = `ease-in-out 0.9s ${index*0.5}s`;
     })
   }
})


function redirect(index,lang){
    if(index==0 && lang==2){
        window.location.href= "index.html"
    }
    if(index==1 && lang == 2){
        window.location.href = "projectsEng.html";
    }
    if(index==2 && lang==2){
        window.location.href= "contactEng.html";
    }
}


function openApp(index){
    if(index==0){
        window.location.href = "https://web.whatsapp.com/";
    }
    if(index==1){
        window.location.href = "https://www.instagram.com/ilovecheese_3131/";
    }
    if(index==2){
        window.location.href = "https://github.com/Ilovecheese1234/";
    }
    if(index==3){
        window.location.href = "https://www.linkedin.com/in/chan-david-042994344/";
    }
}

function toProject(index){
    if(index==2){
        window.location.href = "https://github.com/Ilovecheese1234/Portfolio";
    }
}