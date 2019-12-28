<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/css.css">
    <link rel="stylesheet" href="/css/Animate.css">
    <script src="https://kit.fontawesome.com/e286e161bb.js" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    <script>
         $(".login").hide();
    
        $(document).ready(function () {   
            $(".login").hide();       
            $(".login").addClass("animated");
           
           
            
            $("#btnlog").click(function () {
                $(".login").removeClass("bounceOutLeft");
                $("#bodyHome").addClass("opacitybody");
                $(".login").addClass("bounceInRight");
                $(".login").fadeIn("slow");
            });
            $(".closemg").click(function () {
                $("#bodyHome").removeClass("bounceInRight");
                $(".login").addClass("bounceOutLeft");
                $("#bodyHome").removeClass("opacitybody");
                $(".login").fadeOut("slow");


            });
        });
    </script>
</head>

<body >
    <div id="pageprin" ></div>
    <script type="text/javascript" src="/js/app.js"></script>
    
</body>

</html>