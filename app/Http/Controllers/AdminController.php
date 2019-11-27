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
    {
        $auth = new Authen();
        $nom = $request->input('NomEtu');
        $prenom = $request->input('PrenomEtu');
        $dn = $request->input('Date');
        $promo = $request->input('Promo');
        $section = $request->input('Sect');
        $groupe = $request->input('Gr');
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
        return redirect('/home/inscritEtud');
    }
    
    public function storeEns (Request $request)
    {
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
