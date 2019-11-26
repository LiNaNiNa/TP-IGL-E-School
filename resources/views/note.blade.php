<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <tr>
             <td>Module</td>
             <td>CC</td>
             <td>CI</td>
             <td>TP</td>
             <td>CF</td>
            </tr>
       </thead>
       <tbody>
          @foreach ($notes as $note )
          <tr>
              <td>{{$note->Code_Mat}}</td>
              <td>{{$note->CC}}</td>
              <td>{{$note->CI}}</td>
              <td>{{$note->TP}}</td>
              <td>{{$note->CF}}</td>
          </tr>
          @endforeach
        </tbody>
    </table>
    
</body>
</html>