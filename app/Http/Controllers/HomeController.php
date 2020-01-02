<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Authen;
use App\Http\Requests\LoginRequest;

/**
 *  Controller of the the first page ( home )
 * 
 * Contains the functions to be performed in this context.
 * 
 */

class HomeController extends Controller
{
    /**
     * Display the first page of the webSite.
     *
     * @return \Illuminate\Http\Response The view of the first page.
     */
    public function index()
    {
        return view('PagePrin');
    }

    /**
     * Perform the authentification process.
     * 
     * Check whether the UserName and the Password transmitted by the request, actually exist in our database. 
     * It return the profile ( Student, Admin or Teacher ) and the id of the User if it exists.
     *
     * @param \Illuminate\Http\Request $request COntains the data inserted by the user 
     * @return \Illuminate\Http\Response the return code ( 200 in success or 202 in failure) and the data extracted from the table 'authens' if there is a match. 
     */

    public function store(Request $request)
    {
    
       $authen = new Authen();
       $data=$authen->where('username',$request->get('name'))->where('password',$request->get('pass'))->get();
       if ($data->count() == 0)
            {
                return response()->json($data,202); // error !
            }
        else
            {
                return response()->json($data,200); // Success 
            }
     

    }

    /**
     * Update the Token of a User when s/he sign in.
     * 
     * This Token permits the protection of the API from exteral hacking, it will be required in each API that return sensitive data.
     *
     * @param \Illuminate\Http\Request $request The Token generated randomly
     * @return \Illuminate\Http\Response the return code ( 200 in success or 500 in failure) and the Token inserted.
     */

    public function storeToken(Request $request)
    {
    
        $ID = explode("@", $request->get("token"));
        $UserId = $ID[1];
        Authen::where('Matricule',$UserId)->update(array(
            'Token'=>$request->get("token"),
               ));   
       return response()->json($request->get("token"));
    }

}
