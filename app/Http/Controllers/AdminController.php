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
    public function index()
    {
        return view('admin');
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $auth = new Authen();
        $nom = $request->input('Nom');
        $prenom = $request->input('Prenom');
        $auth->username = $prenom[0]."_".$nom;
        $auth->password = $nom;
        if ($request->profil = 'Etudiant')
        {
            $auth->profil = 'Etudiant';
        }elseif($request->profil = 'Enseignant'){
            $auth->profil = 'Enseignant';
        }
        $auth->save();

        $data = Authen::where('username',$prenom[0]."_".$nom)->where('password',$nom)->get();
        $mat=$data[0]->Matricule;
        if ($request->profil = 'Etudiant')
        {
            $etud = new Etudiant();
            $etud->Etudiant_id = $mat;
            $etud->Nom = $nom;
            $etud->Prenom = $prenom;
            $etud->save();
        }elseif($request->profil = 'Enseignant'){
            $ens = new Enseignant();
            $ens->Enseignant_id = $mat;
            $ens->Nom = $nom;
            $ens->Prenom = $prenom;
            $ens->save();
        }
        return redirect('/home');
    }
}
