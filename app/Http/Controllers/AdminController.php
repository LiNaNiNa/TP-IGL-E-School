<?php

namespace App\Http\Controllers;

use App\Authen;
use App\Enseignant;
use App\Etudiant;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($choix)
    {
        return view($choix);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeEtud(Request $request)
    {/*
        $validatedDate = $request->validate([
            'NomEtudiant' => 'required|min:3|max:120',
            'PrenomEtudiant' => 'required|min:4|max:120',
            'Date' => 'required',
            'Promo' => 'required|min:3|max:10',
            'Section' => 'required|min:1|max:2',
            'Groupe' => 'required'
        ]);*/

        $auth = new Authen();
        $nom = $request->get('NomEtu');
        $prenom = $request->get('PrenomEtu');
        $dn = $request->get('Date');
        $promo = $request->get('Promo');
        $section = $request->get('Sect');
        $groupe = $request->get('Gr');
        $auth->username = $prenom[0]."_".$nom;
        $auth->password = $nom;
        $auth->profil = 'Etudiant';
        $auth->save();

        $data = Authen::where('username',$prenom[0]."_".$nom)->where('password',$nom)->get();
        $mat=$data[0]->Matricule;

        $etud = new Etudiant();
        $etud->Etudiant_id = $mat;
        $etud->Nom = $nom;
        $etud->Prenom = $prenom;
        $etud->Date_Naissance = $dn;
        $etud->Promo = $promo;
        $etud->Section = $section;
        $etud->Groupe = $groupe;
        $etud->save();

        echo($etud);
        //return redirect('/home/inscritEtud');
        return(response()->json(0));  
    }
    
    public function storeEns (Request $request)
    {
        $ValidatedData = $request->validate([
            'NomEnseignant' => 'required|min:4|max:120',
            'PrenomEnseignant' => 'required|min:4|max:120'
        ]);

        $auth = new Authen();
        $nom = $request->input('NomEns');
        $prenom = $request->input('PrenomEns');
        $auth->username = $prenom[0]."_".$nom;
        $auth->password = $nom;
        $auth->profil = 'Enseignant';
        $auth->save();

        $data = Authen::where('username',$prenom[0]."_".$nom)->where('password',$nom)->get();
        $mat=$data[0]->Matricule;

        $ens = new Enseignant();
        $ens->Enseignant_id = $mat;
        $ens->Nom = $nom;
        $ens->Prenom = $prenom;
        $ens->save();
        return redirect('/home/admin');
    }
}
