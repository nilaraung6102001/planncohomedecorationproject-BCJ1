$(document).ready(function() {

    // start back to top

    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000)
        }
    })
    // end back to top


    // console.log("hiii");
    // Start Headers

    // Start nav 

    // for bugger
    $(".navbuttons").click(function() {
        $(".navbuttons").toggleClass("crossxs");
    });

    // for nav 

    $(window).scroll(function() {
        let getscrolltop = $(this).scrollTop();
        // conslole.log(getscrolltop);

        if (getscrolltop >= 200) {
            $(".navbar").addClass("navmenus");
        } else {
            $(".navbar").removeClass("navmenus");
        }
    });

    // End nav 

    // End Header 

    // Start Properties

    $(".propertylists").click(function() {

        // for activeitems
        $(this).addClass("activeitems");
        $(this).siblings().removeClass("activeitems");


        // for filter 
        let getattvalue = $(this).attr("data-filter");
        console.log(getattvalue);


        if (getattvalue === "all") {
            $(".filters").show("slide", 500);
        } else {

            $(".filters").hide();

            $(".filters").not("." + getattvalue).hide("slide", 500);
            $(".filters").filter("." + getattvalue).show("slide", 500);
        }


    });

    // For imaggge overlay (or) lightbox2
    lightbox.option({
        showImageNumberLabel: false
    })

    // End Properties

    // Start adv section

    $(window).scroll(function() {
            let getscrolltop = $(this).scrollTop();
            console.log(getscrolltop);

            if (getscrolltop >= 930) {
                $(".advimages").addClass("fromlefts");
                $(".advtxts").addClass("fromrights");
            } else {
                $(".advimages").removeClass("fromlefts");
                $(".advtxts").removeClass("fromrights");
            }
        })
        // End adv section

        // start footer section

        const getyear = $("#getyear");
        const getfullyear = new Date().getUTCFullYear();
        getyear.text(getfullyear);
        // end footer section

});