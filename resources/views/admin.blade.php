<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="#" method="POST">
        @csrf
        <div><label for="NomEns">Nom : </label>
            <input name="NomEns" required id="NomEns" type="text">
        </div>
        <div><label for="PrenomEns">Prenom : </label>
            <input name="PrenomEns" required id="PrenomEns" type="text">
        </div>
        <button type="submit">Ajouter</button>
    </form>
    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>        
            @endforeach
        </ul>
    @endif
</body>
</html>