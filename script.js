$(document).ready(function(){
   
    var btn = document.querySelector('button');
    var forwardBtn = document.querySelector('#Forward');
    var BackwardBtn = document.querySelector('#Backward');
    var imgWrapper = document.querySelector('.img-wrapper');
    var backImgs = ['url(img/img1.jpg)','url(img/img2.jpg)','url(img/img3.jpg)','url(img/img4.jpg)','url(img/img5.jpg)','url(img/img6.png)'];
    var dotsClicked = document.querySelectorAll('.dot-wrapper [id^=dot]');
    var countClick = 0;
    var hasClicked = true;
    var reversedCount = 7;
    
    $(btn).hide();
    $(btn).click(function(){
        // $(".img-wrapper").slideToggle("slow", "linear", function(){
        //     alert("Completed");
        // })
        $(".img-wrapper").animate({
            width: ["toggle", "linear"],
            opacity: "toggle"
        }, 1000, "linear");
    })
    
    //What happens when clicked on next button
    $(forwardBtn).click(function(){
        if (hasClicked) {
            countClick += 1;
            //console.log(countClick);
            if (countClick === 1) {
                $(imgWrapper).css({'background':'url(img/img1.jpg)',
                            'background-size':'cover',
                            'transition':'background .2s linear'                    
                    })
                    $("#dot_1").css('background','white');
                    $(".dot-wrapper div:gt(1)").css('background','#ffffff54');  
                }
            else if (countClick === 2) {
                $(imgWrapper).css({'background':'url(img/img2.jpg)',
                        'background-size':'cover',
                        'transition':'background .2s linear'                    
                    }) 
                    $("#dot_2").css('background','white');
                    $(".dot-wrapper div:not(#dot_2)").css('background','#ffffff54'); 
                }
            else if (countClick === 3) {
                $(imgWrapper).css({'background':'url(img/img3.jpg)',
                        'background-size':'cover',
                        'transition':'background .2s .2s ease-in'                    
                    }) 
                    $("#dot_3").css('background','white');
                    $(".dot-wrapper div:not(#dot_3)").css('background','#ffffff54'); 
                }
            else if (countClick === 4) {
                $(imgWrapper).css({'background':'url(img/img4.jpg)',
                        'background-size':'cover',
                        'transition':'background .2s .2s ease-in'                    
                    }) 
                    $("#dot_4").css('background','white');
                    $(".dot-wrapper div:not(#dot_4)").css('background','#ffffff54'); 
                }
            else if (countClick === 5) {
                $(imgWrapper).css({'background':'url(img/img5.jpg)',
                            'background-size':'cover',
                            'transition':'background .2s .2s ease-in'                    
                    }) 
                    $("#dot_5").css('background','white');
                    $(".dot-wrapper div:not(#dot_5)").css('background','#ffffff54'); 
                }
            else if (countClick === 6) {
                $(imgWrapper).css({'background':'url(img/img6.png)',
                            'background-size':'cover',
                            'transition':'background .2s .2s ease-in'                    
                    }) 
                    $("#dot_6").css('background','white');
                    $(".dot-wrapper div:not(#dot_6)").css('background','#ffffff54'); 
                }
            else if (countClick === 7) {
                countClick = 0;
                countClick += 1;
                $(imgWrapper).css({'background':'url(img/img1.jpg)',
                'background-size':'cover',
                'transition':'background .2s linear'                    
                })
                    $("#dot_1").css('background','white');
                    $(".dot-wrapper div:gt(1)").css('background','#ffffff54');
                }
            }  
        })

    //What happens when you click on the backward icon
    $(BackwardBtn).click(function(){
        if (hasClicked) {
            reversedCount -= 1;
            //console.log(reversedCount);
            
            if (reversedCount === 1) {
                $(imgWrapper).css({'background':'url(img/img1.jpg)',
                            'background-size':'cover',
                            'transition':'background .2s linear'                    
                    })
                    $("#dot_1").css('background','white');
                    $(".dot-wrapper div:not(#dot_1)").css('background','#ffffff54');  
                }
            else if (reversedCount === 2) {
                $(imgWrapper).css({'background':'url(img/img5.jpg)',
                        'background-size':'cover',
                        'transition':'background .2s linear'                    
                    }) 
                    $("#dot_2").css('background','white');
                    $(".dot-wrapper div:not(#dot_2)").css('background','#ffffff54'); 
                }
            else if (reversedCount === 3) {
                $(imgWrapper).css({'background':'url(img/img4.jpg)',
                        'background-size':'cover',
                        'transition':'background .2s .2s ease-in'                    
                    }) 
                    $("#dot_3").css('background','white');
                    $(".dot-wrapper div:not(#dot_3)").css('background','#ffffff54'); 
                }
            else if (reversedCount === 4) {
                $(imgWrapper).css({'background':'url(img/img3.jpg)',
                        'background-size':'cover',
                        'transition':'background .2s linear'                    
                    }) 
                    $("#dot_4").css('background','white');
                    $(".dot-wrapper div:not(#dot_4)").css('background','#ffffff54'); 
                }
            else if (reversedCount === 5) {
                $(imgWrapper).css({'background':'url(img/img2.jpg)',
                            'background-size':'cover',
                            'transition':'background .2s linear'                    
                    }) 
                    $("#dot_5").css('background','white');
                    $(".dot-wrapper div:not(#dot_5)").css('background','#ffffff54'); 
                }
            else if (reversedCount === 6) {
                $(imgWrapper).css({'background':'url(img/img1.jpg)',
                            'background-size':'cover',
                            'transition':'background .2s linear'                    
                    }) 
                    $("#dot_6").css('background','white');
                    $(".dot-wrapper div:not(#dot_6)").css('background','#ffffff54'); 
                }
            else if (reversedCount === 0) {
                    reversedCount = 7;
                    reversedCount -= 1;
                    $(imgWrapper).css({'background':'url(img/img6.png)',
                            'background-size':'cover',
                            'transition':'background .2s linear'                    
                    }) 
                    $("#dot_6").css('background','white');
                    $(".dot-wrapper div:not(#dot_6)").css('background','#ffffff54');  
                }
            }  
    })

    //Once you click on any circle it changes to its respective image
    for (var i = 0; i < backImgs.length; i++) {
        $(dotsClicked).each(function(idx){
            $(this).click(function(){
                $(imgWrapper).css({'background': backImgs[idx] + 'no-repeat',
                            'background-size':'cover',
                            'transition':'background .2s linear'                    
                }) 
            })
        })
    } //-----------------------------ForEnd--------------------

    //These turns the clicked circle to white color at time!
    for (var i = 0; i < dotsClicked.length; i++) {
        $(dotsClicked[0]).click(function(){
            $(this).css('background','#ffffff');            
            $('.dot-wrapper div:not(#dot_1)').css('background','#ffffff54');
            //****************START***************************
            
            
            //**************END***************************/   
        });
        $(dotsClicked[1]).click(function(){
            $(this).css('background','#ffffff');
            $('.dot-wrapper div:not(#dot_2)').css('background','#ffffff54');
        });
        $(dotsClicked[2]).click(function(){
            $(this).css('background','#ffffff');
            $('.dot-wrapper div:not(#dot_3)').css('background','#ffffff54');
        });$(dotsClicked[3]).click(function(){
            $(this).css('background','#ffffff');
            $('.dot-wrapper div:not(#dot_4)').css('background','#ffffff54');
        });
        $(dotsClicked[4]).click(function(){
            $(this).css('background','#ffffff');
            $('.dot-wrapper div:not(#dot_5)').css('background','#ffffff54');
        });
        $(dotsClicked[5]).click(function(){
            $(this).css('background','#ffffff');
            $('.dot-wrapper div:not(#dot_6)').css('background','#ffffff54');
        });

    }//***********************FOREND**************************
})