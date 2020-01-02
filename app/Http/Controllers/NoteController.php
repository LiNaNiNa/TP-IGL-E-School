<?php

namespace App\Http\Controllers;

use App\Result;
use App\Authen;
use Illuminate\Http\Request;


/**
 *  Controller of the 'Student' concerning his marks
 * 
 * Contains the function to retrieve his marks.
 * 
 */

class NoteController extends Controller
{
    /**
     * Retrieve the marks of a specified Student.
     * 
     * It extract the id from the token, if the token is present in our data base, and It returns his marks.
     *
     * @param  int  $token the current token of the student that we want to show his marks.
     * @return \Illuminate\Http\Response The return code 202 if the token do not much. The return code 200 if it exists, the marks will be returned.
     */
    public function show($token)
    {
        $authen = new Authen();
        $data=$authen->where('Token',$token)->get();
        if ($data->count() == 0)
            {
                return response()->json($data,202); 
            }
        else
        {
            $ID = explode("@", $token);
            $UserId = $ID[1];
    
            return(response()->json([
                'notes'=>Result::Where('Etudiant_id',$UserId)->get()
            ])); 
        }         
    }
}
