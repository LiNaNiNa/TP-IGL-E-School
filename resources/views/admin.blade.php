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
        <div><label for="Nom">Nom : </label>
            <input name="Nom" id="Nom" type="text">
        </div>
        <div><label for="Prenom">Prenom : </label>
            <input name="Prenom" id="Prenom" type="text">
        </div>
        <div>
            Etudiant<input name="Profil" id="Etudiant" type="radio" value="Etudiant">
            Enseignant<input name="Profil" id="Enseignant" type="radio" value="Enseignant">
        </div>
        <button type="submit">Ajouter</button>
    </form>
</body>
</html>