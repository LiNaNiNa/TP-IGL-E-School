<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use DB;
use App\Result as Result;

class ExampleTest extends TestCase
{
    //use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }

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

            $dataUnique = [ 'name' => 'M_Lina', 'pass' => 'Mezdour'];

            $this->post('/api/setlogin',$dataUnique)
                    -> assertStatus(200);
        }

        public function test_Results()
        {        
            $users = factory(Result::class, 5)->create();
    
            $dataUnique = [ 'name' => 'M_Lina', 'pass' => 'Mezdour'];

            $this->post('/api/setlogin',$dataUnique)
                    -> assertStatus(200);
                    
            $tokenMaker = [ 'token' => '25qd5hyz@2'];

            $response = $this->post('/api/insertToken',$tokenMaker);
            $response -> assertStatus(200);
            $response->assertSeeText($tokenMaker['token']);

            $str = '/api/Marks/'.$tokenMaker['token'];
            $response = $this->get($str)
            ->assertStatus(200);            
        }                                

}
