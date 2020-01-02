<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use DB;
use App\Result as Result;

/**
 *  Unit Tests' Class using PHPUnit
 * 
 * contains the function to be done by an 'admin' profile
 * 
 */

class UnitTest extends TestCase
{
    //use RefreshDatabase;

    /**
     * Test Method of the authentification
     * 
     * The data base should be empty!
     * it tested the cases where the account exists - no.
     *
     * @return void
     */

    public function test_SignInTest()
    {        
        DB::table('authens')->insert(
            ['Matricule' => 1,'username' => 'Root', 'password' => 'Root', 'Profil' => 'Admin', 'Token' => '0',]
        );
        //$users = factory(App\Result::class, 3)->create();

        $dataUnique = [ 'name' => 'Root', 'pass' => 'Root'];

        $this->post('/api/setlogin',$dataUnique)
                -> assertStatus(200); // success
                
        $dataFalse = [ 'name' => 'M_Lina', 'pass' => 'Lina'];
        $this->post('/api/setlogin',$dataFalse)
                -> assertStatus(202); // false !
        }

    /**
     * Test Method of the Adding a student feature.
     * 
     * It tries to add a student that does not exist, that allready exists. and then try to sign in with their accounts.
     * 
     * @return void
     */

        public function test_AddStudent()
        {        
            $data = 
                [
                'NomEtu'=> 'Mezdour',
                'PrenomEtu'=> 'Lina',
                'Date'=> '10/10/1999',
                'Promo'=> '1CS',
                'Sect'=> 'A',
                'Gr'=> 1,
                ]
            ;

            $this->post('/api/AddEtud',$data)
            -> assertStatus(200);

            $this->post('/api/AddEtud',$data)
            -> assertStatus(202); // existe deja

            $dataUnique = [ 'name' => 'L_Mezdour', 'pass' => 'Lina'];

            $this->post('/api/setlogin',$dataUnique)
                    -> assertStatus(200);
        }

    /**
     * Test Method of the showing the marks of a student feature.
     * 
     * it populates the table of results.
     * it signs in with the account of the student created in the previous test, validate its token, and try to retrieve his marks with the right and the wrong token.
     *
     * @return void
     */

        public function test_Results()
        {        
            $users = factory(Result::class, 5)->create();
    
            $dataUnique = ['name' => 'L_Mezdour', 'pass' => 'Lina'];

            $this->post('/api/setlogin',$dataUnique)
                    -> assertStatus(200);
                    
            $tokenMaker = [ 'token' => '25qd5hyz@2'];

            $response = $this->post('/api/insertToken',$tokenMaker);
            $response -> assertStatus(200);
            $response->assertSeeText($tokenMaker['token']);

            $str = '/api/Marks/'.$tokenMaker['token'];
            $response = $this->get($str)
            ->assertStatus(200);      
            
            $strWrong = '/api/Marks/'.'21s4n55e4@2'; // random token, does not exist in the data base, try to retrieve the marks of student id=2
            $response = $this->get($strWrong)
            ->assertStatus(202); // access denied.                 

        }                                

}
