    const burger = document.querySelector('.icon');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('buka');
    });

    const bx = document.querySelector('.bx.bx-menu');
    const x = document.querySelector('.bx.bx-x');
    
    bx.addEventListener('click', () => {
        bx.classList.add('hide');
        x.classList.add('show');
    });
    
    x.addEventListener('click', () => {
        bx.classList.remove('hide');
        x.classList.remove('show');
    });
    

