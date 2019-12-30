<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testBasicExample()
    {

        $this->browse(function (Browser $browser) {
            $browser->visit('/')   
                    /*->waitFor("@Login-Button")
                    ->scrollTo('@ContactNames')
                    ->waitFor("@ContactNames")
                    ->scrollTo("@Login-Button") 
                    ->waitFor("@Login-Button")*/                    
                    ->click("@Login-Button")
                    ->pause(2000)
                    ->type('username','Lina')
                    ->type('password','Lina')
                    ->pause(1000)
                    ->click('@LoginForm')  
                   // ->pause(5000)
                   ->waitFor("@WarningMsg") // max 5 seconds
                   // ->assertPresent("@WarningMsg") // equiv
                    ->assertSee("Warning")

                    ->type('username','Root')
                    ->type('password','Root')
                    ->pause(1000)
                    ->click('@LoginForm')   
                    ->waitUntilMissing('@LoginForm')    
                    
                    ->waitFor('@Option1Admin')
                    ->pause(2000)
                    ->click('@Option1Admin')
                    ->pause(3000)

                 //   ->waitFor('@AdminRetour')
                  //  ->pause(1000)
                    ->type('lastName','Mezdour')  
                    ->type('firstName','Lina')
                    ->type('dateDeNaissance','28/10/1999')   
                    ->type('promo','1CS')   
                    ->type('section','A')   
                    ->type('groupe','1')   

                    ->mouseover('@SubmitStudent')

                    ->pause(1000)

                    ->click('@SubmitStudent')

                    ->pause(3000)

//                    ->click('@AdminRetour')                                        

                    ->click('@LogoutButton')
                    ->waitFor("@Login-Button")

                    ->click("@Login-Button")
                    ->pause(2000)
                    ->type('username','L_Mezdour')
                    ->type('password','Lina')
                    ->pause(1000)
                    ->click('@LoginForm')  

                    ->pause(5000)
                    ->click('@LogoutButton')
                    ->waitFor("@Login-Button")
                    ->pause(1000);                   
        });
    }
}
