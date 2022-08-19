export function news() {

    const row = document.querySelector(".news__row");




    let funIndex = 0;
    let format = '';

    const request = new XMLHttpRequest();
    request.open('GET', 'files/news.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    function web() {
        if(document.querySelector('html').classList.contains("webp")){
            if(format){
                format = 'webp';
            }

        } else {
            return format;
        }
    } 


    function dataGet(n){
        n.forEach(item => {
            format = item.img_format;
            web(format);

            row.innerHTML += 
            `
                <div class="news__content">

                    <div class="news__bg">
                        <div class="news__bg__overflow"></div>
                        <img class="news__bg__img" src="img/news/${item.img}.${format}" cover alt="${item.img_name}">
                    </div>
                    <div class="news__block">
                        <div class="news__title">${item.title}</div>
                        <div class="news__text">${item.text}</div>
                        <form action="${item.link}" target="_blank">
                            <button class="button button__news">${item.link_name}</button>
                        </form>
                    </div>
                </div>
                

            `

            funIndex += 1;

        });

    }
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            dataGet(data.news);
            slides();
        } else {
            console.log('data cli error');
    
        }
    });










    function slides() {

        const slide = document.querySelectorAll(".news__content"),
        row = document.querySelector(".news__row"),
        prev = document.querySelector(".news__arrow"),
        next = document.querySelector(".news__arrow_right"),
        dots = document.querySelector(".news__dots");

        let total = slide.length;
        for(let i = 1; i <= slide.length; i++){
            dots.innerHTML += `<button id=${i} class='news__dot'></button>`;
            console.log('dot creat');
        }
        let slideIndex = 1;
        showSlide(slideIndex);
        function showSlide(n) {
            if(n > slide.length){
                slideIndex = 1;
            }
            if(n < 1){
                slideIndex = slide.length;
            }
            slide.forEach(item => item.style.opacity = ".7");


            setTimeout(function () {
                slide.forEach(item => item.style.display = "none");
                slide[slideIndex - 1].style.display = "block";

            }, 500);
            setTimeout(function () {
                slide[slideIndex - 1].style.opacity = "1";

            }, 700);

            // slide.forEach(item => item.style.display = "none");

 
            // slide.forEach(item => item.classList.add('hide'));
            // slide[slideIndex - 1].style.classList.remove('hide');

            showDots();
    
        }
    
        function showDots(){
    
            const dot = document.querySelectorAll(".news__dot");
            dot[0].classList.add('dot_active');
            dot.forEach(item => {
                if (item.classList.contains('dot_active')){
                    item.classList.remove('dot_active')
                }
                if(item.id == slideIndex){
                    item.classList.add('dot_active');
    
                }
            })

    
    
    
        }
        document.querySelectorAll(".news__dot").forEach(item => {
            item.addEventListener('click', () => {
                slideIndex = +item.id;
                showSlide(slideIndex);

    
            })
        })

    
        function plusSlide(n){
            showSlide(slideIndex += n);
            
        }
        

    
        prev.addEventListener('click', () => {
            plusSlide(-1);
        })
        // setInterval(() => {
        //     plusSlide(1);
        // }, 5000);
    
    
        next.addEventListener('click', () => {
            plusSlide(1);
        })
    

    }



}