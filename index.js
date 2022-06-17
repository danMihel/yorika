document.addEventListener('DOMContentLoaded', function()   {
    console.log('start');
    fildOne = document.getElementById('strOne');
    str1 = ["Visualize "];
    str2 = ["your data"];
    str3 = ["Rationalize "];
    str4 = ["your portfolio of assets",];
    str5 = ['You know what your business does.\n',
            'You have a list of technologies used.\n',
            'You need to answer questions like:\n'
            ];
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
            heroAnimation("strTwo",str2, 100);
            setTimeout(function(){
                document.getElementById("strOne").innerHTML = "";
                heroAnimation("strOne",str3, 150);
                setTimeout(function(){
                    document.getElementById("strTwo").innerHTML = "";
                    heroAnimation("strOne",str4, 150);
                    setTimeout(function(){                        
                        heroAnimation("strThree",str5, 100);
                        setTimeout(function(){                        
                            heroAnimation("strFore",str6, 100);
                        },12000);
                    },4000);
                },3000);
            },2000);
        },1000);
        }
    playAnimation();
    setInterval(function(){
        document.getElementById("strOne").innerHTML = "";
        document.getElementById("strThree").innerHTML = "";
        document.getElementById("strFore").innerHTML = "";
        playAnimation();
    },90000); 

    
});


