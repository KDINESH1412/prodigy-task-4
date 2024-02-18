const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});

const text = document.querySelector('.animated');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++){
    text.innerHTML +="<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer == null;
}

