const mediaQuery = window.matchMedia('(min-width: 880px)');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');
const shopItems = document.querySelectorAll('.shop-item');

window.addEventListener('resize', ()=>{
    if(!mediaQuery.matches && !navbar.classList.contains('visible')){
        navbar.style.display = "none";
    }
    else if(mediaQuery.matches && navbar.classList.contains('visible')){
        navbar.classList.remove('visible');
    }
    else{
        navbar.style.display = "flex";
    }
})

function toggleMobileNav(){
    navbar.style.display = "flex";
    setTimeout(()=>{
        navbar.classList.toggle('visible');
        dropdownToggles.forEach((dropdownToggle) => {
            let dropdown = dropdownToggle.querySelector('.dropdown');
            dropdown.classList.remove('visible');
        });
    }, 1);
}

function dropdownHover(dropdown){
    if(mediaQuery.matches){
        dropdown.classList.remove('overflowed');
        if(dropdown.getBoundingClientRect().right > (window.innerWidth || document.documentElement.clientWidth)){
            dropdown.classList.add('overflowed');
        }
        dropdown.classList.add('visible');
    }
}

function dropdownUnhover(dropdown){
    if(mediaQuery.matches){
        dropdown.classList.remove('visible');
    }
}

function dropdownClick(dropdown){
    if(!mediaQuery.matches){
        dropdown.classList.remove('overflowed');
        dropdown.classList.add('visible');
    }
}

function returnToggleAction(event, dropdown){
    event.stopPropagation();
    if(!mediaQuery.matches){
        dropdown.classList.remove('visible');
    }
}

function shopItemClick(shopItem){
    if(!mediaQuery.matches && shopItem.classList.contains('desc-visible')){
        shopItem.classList.remove('desc-visible');
    }
    else{
        shopItems.forEach((shopItem)=>{
            shopItem.classList.remove('desc-visible');
        });
        shopItem.classList.add('desc-visible');
    }
}

function shopItemHover(shopItem){
    if(mediaQuery.matches){
        shopItem.classList.add('desc-visible');
    }
}

function shopItemUnhover(shopItem){
    if(mediaQuery.matches){
        shopItem.classList.remove('desc-visible');
    }
}

navbarToggle.addEventListener('click', toggleMobileNav);

dropdownToggles.forEach((dropdownToggle)=>{
    let dropdown = dropdownToggle.querySelector('.dropdown');
    dropdownToggle.addEventListener('mouseenter', ()=>{
        dropdownHover(dropdown);
    });
    dropdownToggle.addEventListener('mouseleave', ()=>{
        dropdownUnhover(dropdown);
    });
    dropdownToggle.addEventListener('click', ()=>{
        dropdownClick(dropdown);
    });

    let returnToggle = dropdownToggle.querySelector('.return-toggle');
    returnToggle.addEventListener('click', (event)=>{
        returnToggleAction(event, dropdown)
    });
});

shopItems.forEach((shopItem)=>{
    shopItem.addEventListener('click',()=>{
        shopItemClick(shopItem);
    });
    shopItem.addEventListener('mouseenter',()=>{
        shopItemHover(shopItem);
    });
    shopItem.addEventListener('mouseleave',()=>{
        shopItemUnhover(shopItem);
    });
});

