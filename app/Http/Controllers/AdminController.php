<?php

namespace App\Http\Controllers;

use App\Authen;
use App\Enseignant;
use App\Etudiant;
use Illuminate\Http\Request;

/**
 *  Controller of the 'Admin' 
 * 
 * Contains the functions to be done by an 'admin' profile
 * 
 */

class AdminController extends Controller
{
    /**
     * Store a newly created student in the dataBase.
     * 
     * This function analyses the $request, transmitted by the API, and recover the data of the student that is meant to be added.
     * If the student is not in the database, he will be added successfully ( code return 200, OK )
     * If the student is already stored, the function will return without doing further treatment.
     * Special case: If another student have a similar username ( has the same Family Name, and the same first letter of the first name.), the student will not be added.
     * This case is to be treated manually.
     *
     * @param \Illuminate\Http\Request $request It contains the personal data of the student to be added.
     * @return \Illuminate\Http\Response 'OK' ( 200 ) if the addition is done, 'NO' ( 202 ) if a probleme was found.
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
        $prenom = $request->get('PrenomEtu');
        $nom = $request->get('NomEtu');
        $dn = $request->get('Date');
        $promo = $request->get('Promo');
        $section = $request->get('Sect');
        $groupe = $request->get('Gr');
        $etud = new Etudiant();
        $count = $etud->where('Nom',$nom)->where('Prenom',$prenom)->count();
         if ($count == 0){

            $auth->username = $prenom[0]."_".$nom;
            $auth->password = $prenom;
          
            $auth->token = "";
            $auth->profil = 'Etudiant';
            $auth->save();
    
            $data = $auth->where('username',$prenom[0]."_".$nom)->where('password',$prenom)->get();
            $mat=$data[0]->Matricule;
    
           
            $etud->Etudiant_id = $mat;
            $etud->Nom = $nom;
            $etud->Prenom = $prenom;
            $etud->Date_Naissance = $dn;
            $etud->Promo = $promo;
            $etud->Section = $section;
            $etud->Groupe = $groupe;
            $etud->save();
    
           // echo($etud);
            //return redirect('/home/inscritEtud');
            return(response()->json("OK"));  
         }else{
            return(response()->json("NO",202));  
         }

       
    }
        
    /**
     * Store a newly created Teacher in the dataBase.
     * 
     * This function analyses the $request, transmitted by the API, and recover the data of the teacher that is meant to be added.
     * If the teacher is not in the database, he will be added successfully ( code return 200 )
     * If the student is already stored, the function will return without doing further treatment. ( code return 500 )
     * Special case: If another teacher have a similar username ( has the same Family Name, and the same first letter of the first name.), S/He will not be added.
     * This case is not treated.
     * This function is still under developpement.
     *
     * @param \Illuminate\Http\Request $request It contains the personal data of the teacher to be added.
     * @return \Illuminate\Http\Response ( 200 ) if the addition is done, ( 500 ) if a probleme was found.
     */    
    public function storeTeacher (Request $request)
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
