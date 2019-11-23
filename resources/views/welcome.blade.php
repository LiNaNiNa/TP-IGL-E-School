<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/css.css">
    <script src="https://kit.fontawesome.com/e286e161bb.js" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>Home</title>
    <script>
    
    $(document).ready(function(){
          @if ($errors->any())
          $(".login").show();
          @else
          $(".login").hide();
          @endif
       
        $("#btnlog").click(function(){
            $(".login").fadeIn("slow");
         });        
         $(".closemg").click(function(){
           $(".login").fadeOut("slow");
        });       
      });</script>
   
</head>


<body>
<nav class="navbar navbar-expand-lg navbargs " >
  <a class="navbar-brand" href="#">ISchool</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active" style="padding-right: 12px;">
        <a class="nav-link" href="#"><i class="fas fa-home" style="color:white; margin-right: 5px;"></i> Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" style="padding-right: 12px;">
        <a class="nav-link" href="#Contact"><i class="fas fa-id-badge" style="color:white; margin-right: 5px;"></i>Contact Us</a>
      </li>
      
      
    </ul>
  </div>
</nav>

    
    <div class="row up">
        <div class="col-sm-6 ">
            <h1 class="display-5 tw">Gestion Scolarite</h1>
            <p class="decription">
                gestion de scolarite est une application web
                qui permetre aux etudiant ,enseignent et adminstrateur
                des ecloes de gerer leur ecole.
            </p>
            <button id="btnlog" class="btn btnl">Login</button>

        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-5 ">
            <img class="img-fluid " src="img/Cover.png" />
        </div>


    </div>



    <div class="container-fluide" style="margin-top: 5%;">
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <h1 class="display-5 tx " align="center">Who can use this web site and what can they do ?</h1>
                <div class="row hu">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <img src="img/student.png" class="img-fluid " />
                        <h2 class="display-6 " align="center">The student can check his notes. </h2>
                        <div style="margin-top: 20%;"></div>
                        <img src="img/admin.png" class="img-fluid " />
                        <h2 class="display-6 " align="center">The admintrator can manage the notes of students. </h2>
                        <div style="margin-top: 20%;"></div>
                        <img src="img/teacher.png" class="img-fluid " />
                        <h2 class="display-6 " align="center">The teacher can put the notes of students. </h2>
                    </div>
                    <div class="col-sm-3">
                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </div>


    


    </div>
    <footer style="margin-top: 10%; padding-top: 3%; padding-bottom: 3%; height: auto; width: 100%;" id="Contact">
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-3">
                <h3 class="cw "><b>Contact us</b></h3>
                <h5 class="cw" style="padding-left: 2%;">Question ? We’ve got
                    answers<br /> try us.</h5>
                <br />

                <button class="btn btn-block btnf">Email us</button>
                </br>
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-3">
                <h3 class="cw">Who are we ?
                </h3>
                <h5 class="cw" style="padding-left: 2%;">Haddad Zineddine<br />
                    Mazdour Lina<br />
                    Zatout Badreddine<br /></h5>
                </br>

            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-2">
                <h3 class="cw">Stay tuned

                </h3>
                <h5 class="cw" style="padding-left: 2%;">Connect with us an stay
                    in the loop</h5>
                </br>

            </div>
            <div class="col-sm-1"></div>
        </div>
    </footer>
   
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
            
            <form action="{{route('store')}}" method="POST">
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
            
               <button class="btn btn2 btn-block">Login</button>
         
         
            </form>
         
    </div>

           
           </div>
    
</body>

</html>