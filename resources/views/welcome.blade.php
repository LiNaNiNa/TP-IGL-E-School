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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <script>
             $(document).ready(function(){
                    $(".login").addClass("animated");
                      @if ($errors->any())
                      $("#bodyHome").addClass("opacitybody");
                      $(".login").show();
                      @else
                      $(".login").hide();
                      @endif
                   
                    $("#btnlog").click(function(){
                        $(".login").removeClass("bounceOutLeft");
                        $("#bodyHome").addClass("opacitybody");
                        $(".login").addClass("bounceInRight");
                        $(".login").fadeIn("slow");
                     });        
                     $(".closemg").click(function(){
                        $("#bodyHome").removeClass("bounceInRight");
                         $(".login").addClass("bounceOutLeft");
                        $("#bodyHome").removeClass("opacitybody");
                       $(".login").fadeOut("slow");
                       
                       
                    });       
             });
        </script>
</head>
<body >
    <div id="bodyHome">
        <div id="menu"></div>
        <div id="jumbotron"></div>
        <div class="container mt-5">
            <h1 class="display-5 pt-4 pb-5" align="center">Who can use this web site and what can they do ?</h1>
            <div id="slide1"></div>
            <div id="slide2"></div>
            <div id="slide3"></div>
        </div>
        <div id="footer"></div>
    </div>
    
   <div class="login " id="displayelem" >

        <img src="img/delete.png" class="img-fluid closemg " style="width: 20px; height: 20px; float: right; "/>
        <div style="margin-top: 30px;">
        <center> <img  src="img/user.png" class="img-fluid " style="width: 80px; height: 80px;"/></center> 
        <h3 align="center" class="cww">Sign in</h3>
        @if ($errors->any())
        <ul>
         @foreach($errors->all() as $error)
         <li style="color:red"><h6 style="color: red;">{{$error}}</h6></li>
         @endforeach
        </ul>
         @endif

        <form  method="POST"  >
        @csrf
            <div class="form-group" >
             <label for="username">Username:</label>
             <input class="form-control inputstyle" name="username" placeholder=" Username" type="text" id="username" value="{{old('username')}}">
            </div>
            <div class="form-group" style="margin-top: 5%;">
             <label for="password">Password:</label>
             <input class="form-control inputstyle" name="password" placeholder=" Password" type="password" id="password"  >
            </div> 
            <div class="form-check form-check-inline" style="margin-top: 5%;">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">Remembre Me</label>
            </div>
            <button class="p-2 btn2 btn-block">Login</button>
        </form>   

    </div>

    <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>