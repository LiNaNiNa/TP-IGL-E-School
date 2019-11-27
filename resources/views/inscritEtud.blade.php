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
                    <label for="NomEtu">Nom : </label>
                    <input name="NomEtu" id="NomEtu" type="text">
                </div>
                <div>
                    <label for="PrenomEtu">Prenom : </label>
                    <input name="PrenomEtu" id="PrenomEtu" type="text">
                </div>
                <div>
                    <label for="Date">Date Naissance : </label>
                    <input name="Date" id="Date" type="text">
                </div>
                <div>
                        <label for="Promo">Promo : </label>
                        <input name="Promo" id="Promo" type="text">
                    </div>
                <div>
                    <label for="Sect">Section : </label>
                    <input name="Sect" id="Sect" type="text">
                </div>
                <div>
                    <label for="Gr">Groupe : </label>
                    <input name="Gr" id="Gr" type="text">
                </div>
                <button type="submit">Ajouter</button>
            </form>
</body>
</html>