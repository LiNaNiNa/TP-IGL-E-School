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
                <div>
                    <label for="NomEtudiant">Nom : </label>
                    <input name="NomEtudiant" required id="NomEtudiant" type="text">
                </div>
                <div>
                    <label for="PrenomEtudiant">Prenom : </label>
                    <input name="PrenomEtudiant" required id="PrenomEtudiant" type="text">
                </div>
                <div>
                    <label for="Date">Date Naissance : </label>
                    <input name="Date" required id="Date" type="Date">
                </div>
                <div>
                        <label for="Promo">Promo : </label>
                        <input name="Promo" required id="Promo" type="text">
                    </div>
                <div>
                    <label for="Section">Section : </label>
                    <input name="Section" required id="Section" type="text">
                </div>
                <div>
                    <label for="Groupe">Groupe : </label>
                    <input name="Groupe" required id="Groupe" type="text">
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