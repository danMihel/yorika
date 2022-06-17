document.addEventListener('DOMContentLoaded', () => {

    fildOne = document.getElementById('strOne');
    str1 = ["Visualize your data"];
    str2 = ["Rationalize your portfolio of assets",];
    str3 = ['You know what your business does.'];
    str4 = ['You have a list of technologies used.'];
    str5 = ['You need to answer questions like: '];
    str6 = ['How to reduce technology debt?\n',
            'Where is the record of truth for Customer profile?\n',
            'How to mitigate risk of license/version expiration?\n',
            'Which applications store sensitive data?\n',
            'What dependencies need to be considered during migration?\n',
            'Which applications are used for the same purpose during a merger?\n',
            'Who owns this data?\n',
            'Which interfaces move Customer data?\n',
            'Which data elements contribute to your KPI?\n']; 

    function heroAnimation(id, text, speed){
        let ele = document.getElementById(id);
        let txt = text.join("").split("");
        let interval = setInterval(function(){
            if(!txt[0]){
            return clearInterval(interval);
            }
            ele.innerHTML+= txt.shift();
        }, speed != undefined ? speed : 200);
        return false;
    }
    function playAnimation(){
        heroAnimation("strOne",str1, 100);
        setTimeout(function(){
            document.getElementById("strOne").innerHTML = "";
            heroAnimation("strOne",str2, 100);
            setTimeout(function(){
                heroAnimation("strTwo", str3, 100);
                setTimeout(function(){
                    heroAnimation("strThree",str4, 100);
                    setTimeout(function(){
                        heroAnimation("strFore",str5, 100);
                        setTimeout(function(){
                            heroAnimation("strFive",str6, 100);  
                            setTimeout(function(){
                                document.getElementById("strOne").innerHTML = "";
                                document.getElementById("strTwo").innerHTML = "";
                                document.getElementById("strThree").innerHTML = "";
                                document.getElementById("strFore").innerHTML = "";
                            },15000);                                            
                        },4000);               
                    },4000);
                },4000);
            },6000);           
        },4000);              
        }
    playAnimation();
    setTimeout(function(){
        playAnimation();
    },15000);                

});
/* ; */
