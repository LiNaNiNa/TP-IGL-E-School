<?php

namespace App\Http\Controllers;

use App\Result;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($token)
    {
        /*
        return view('note',[
            'notes'=>Result::Where('Etudiant_id',$id)->get()
        ]);*/

        $ID = explode("@", $token);
        $UserId = $ID[1];

        return(response()->json([
            'notes'=>Result::Where('Etudiant_id',$UserId)->get()
        ]));  
        
    
    }

    //        return(response()->json(0));  

}
