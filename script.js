const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', function(){
    const divParent = document.createElement('div');
    const divChild = document.createElement('div');
    const checkIcon = document.createElement('i');
    const trashIcon = document.createElement('i');
    divParent.innerText = input.value;
        if (input.value.length === 0) {
            return false;
    }
    input.value = '';
    divParent.classList.add('itemAdded');
    
    divChild.classList.add('check');
    

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener ('click', function(){
        checkIcon.style.color = 'limegreen';
    })
    
    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darktgray';
    trashIcon.addEventListener ('click', function(){
        divParent.remove();
    })
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoContainer.appendChild(divParent);
})

gsap.from(".image", {y: -100, delay: 0.6, opacity: 0.1, duration: 2, ease: "bounce.out"})
gsap.from("h2", {delay: 1.2, opacity: 0, duration: 2, ease: "power1.in"})
gsap.from(".input", {delay: 1.4, opacity: 0, duration: 2, ease: "power1.in"})
gsap.from(".btn", {delay: 1.4, opacity: 0, duration: 2, ease: "power1.in"})




