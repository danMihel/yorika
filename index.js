document.addEventListener('DOMContentLoaded', function () {
    function printText() {
        str1 = "Visualize ";
        str2 = "your data";
        srt0 = " ";
        str3 = "Rationalize ";
        str4 = "your portfolio of assets";
        str5 = 'You know what your business does.';
        str6 = 'You have a list of technologies used.';
        str7 = 'You need to answer questions like:';
        str8 = 'How to reduce technology debt?';
        str9 = 'Where is the record of truth for Customer profile?';
        str10 = 'How to mitigate risk of license/version expiration?';
        str11 = 'Which applications store sensitive data?';
        str12 = 'What dependencies need to be considered during migration?';
        str13 = 'Which applications are used for the same purpose during a merger?';
        str14 = 'Who owns this data?';
        str15 = 'Which interfaces move Customer data?';
        str16 = 'Which data elements contribute to your KPI?';

        Promise.delay = (ms) => new Promise(resolve => {
            setTimeout(resolve, ms);
        });

        async function printer(cssSelector, text, r2l) {
            let el = document.querySelector(cssSelector);
            if (r2l) 
                for (let i = text.length - 1; i >= 0; i--) {
                    let c = text[i];
                    await Promise.delay(70);
                    el.textContent = c + el.textContent;
                }
            else 
                for (let c of text) {
                    await Promise.delay(70);
                    el.textContent = el.textContent + c;
                }
            
        }

        async function remove(cssSelector, delay, after) {
            await Promise.delay(delay);
            items = document.querySelectorAll(cssSelector);
                for (item of items){
                    item.innerHTML = ' ';
                }
            await Promise.delay(after);
        }

        
        let triger = true;
        setInterval(() => {
            if (triger == true) {
                (async function main() {
                    function changer(selector, cla, method) {
                        group = document.querySelectorAll(selector);
                        if(method == "add"){
                            for (item of group){
                                item.classList.add(cla);
                            }
                        }if(method == "remove"){
                            for (item of group){
                                item.classList.remove(cla);
                            }
                        }
                        
                    };
                    triger = false;
                    await printer("#strA", str1);
                    await printer("#strB", str2);
                    await remove("#strA", 2000, 100);
                    await printer("#strA", str3);
                    await remove("#strB", 2000, 100);
                    document.querySelector(".animTitle").classList.add("active");
                    await printer("#strA", str4);
                    await printer("#strC", str5);
                    await printer("#strD", str6);
                    await Promise.delay(2000);
                    document.querySelector(".qestion").classList.add("active");
                    changer(".titleGroup","hidden", "add"); 
                    await Promise.delay(2000);
                    await printer("#strE", str7);
                    await printer("#strF", str8);
                    await printer("#strG", str9);
                    await remove("#strF");
                    await printer("#strH", str10);
                    await remove("#strG");
                    await printer("#strI", str11);
                    await remove("#strH");
                    await printer("#strJ", str12);
                    await remove("#strI");
                    await printer("#strK", str13);
                    await remove("#strJ");
                    await printer("#strL", str14);
                    await remove("#strK");
                    await printer("#strM", str15);
                    await remove("#strL");
                    await printer("#strN", str16);
                    await remove("#strM");
                    await remove(".anim", 5000);
                    changer(".titleGroup","hidden", "remove"); 
                    document.querySelector(".animTitle").classList.remove("active");
                    document.querySelector(".qestion").classList.remove("active");
                    document.querySelector(".animTitle").classList.remove("hidden");
                    triger = true;
                })();
            }
        }, 1000);
    }

    function slider(sliderText, sliderItem, delay) {
        let slideIndex = 1;
        let textIndex = 1;

        function nextSlide() {
            showSlides(slideIndex += 1);
        }
        function nextText() {
            activeText(textIndex += 1);
        }
        function activeText(n) {
            let points = document.getElementsByClassName(sliderText);
            if (n > points.length) {
                textIndex = 1;
            }
            if (n < 1) {
                textIndex = points.length;
            }
            for (let point of points) {
                point.classList.remove("active");
            }
            points[textIndex - 1].classList.add("active");
        }
        function showSlides(n) {
            let slides = document.getElementsByClassName(sliderItem);
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (let slide of slides) {
                slide.style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
            activeText(textIndex = n);
        }
        function slideClicker(sliderText) {
            let points = document.getElementsByClassName(sliderText);
            for (let point of points) {
                point.addEventListener('click', () => {
                    currentSlide(point.id);
                });
            }
        }
        slideClicker(sliderText);
        showSlides(slideIndex);
        activeText(textIndex);
        setInterval(() => {
            nextText();
            nextSlide();
        }, delay);
    }

    printText();

    slider("slider-top-text", "slider-top-item", 9700);
    slider("slider-mid-text", "slider-mid-item", 5330);

});
