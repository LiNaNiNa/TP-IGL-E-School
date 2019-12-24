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
    public function show($id)
    {
        /*
        return view('note',[
            'notes'=>Result::Where('Etudiant_id',$id)->get()
        ]);*/
        return(response()->json([
            'notes'=>Result::Where('Etudiant_id',$id)->get()
        ]));  
    
    }

    //        return(response()->json(0));  

}
