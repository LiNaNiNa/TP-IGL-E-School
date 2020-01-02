<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Facebook\WebDriver\WebDriverBy;

/**
 *  Browser Test Class using Laravel Dusk and Selenium
 * 
 */

class BrowserTest extends DuskTestCase
{
    /**
     * A Selenium test of adding a student.
     * It englobes also, a testing for the sign in function in its two cases : success and failure.
     *
     * @return void
     */
    public function testAddStudentWithBrowser()
    {

        $this->browse(function (Browser $browser) {
            $browser->visit('/')   
                    ->maximize()
                   // ->driver->executeScript('window.scrollTo(0,500);')
                    /*->pause(2000) //wait a sec
                    ->driver->executeScript('window.scrollTo(0, 0);') //scroll back to top of the page
                    ->pause(2000)*/

                    ->scrollTo('#bodyHome > div.container.mt-5 > div:nth-child(2)')
                    ->pause(1000)
                    ->scrollTo('#bodyHome > div.container.mt-5 > div:nth-child(3)')
                    ->pause(1000)
                    ->scrollTo('#bodyHome > div.container.mt-5 > div:nth-child(4)')
                    ->pause(1000)
                    ->scrollTo('#Contact > div > div:nth-child(2) > button')
                    ->pause(2000)
                    ->scrollTo("#bodyHome > nav > a")
                    ->pause(2000)

                    ->click("@Login-Button")
                    ->pause(2000)
                    ->type('username','Lina')
                    ->type('password','Lina')
                    ->pause(1000)
                    ->click('@LoginForm')  
                    ->click('@LoginForm')                    
                    
                   // ->pause(5000)
                   ->waitFor("@WarningMsg",20) // max 5 seconds
                   ->screenshot('1st')
                   // ->assertPresent("@WarningMsg") // equiv
                    ->assertSee("Warning")

                    ->type('username','Root')
                    ->type('password','Root')
                    ->pause(1000)
                    ->click('@LoginForm')   
                    ->screenshot('2nd')
                    ->waitUntilMissing('@LoginForm')    
                    
                    ->waitFor('@Option1Admin')
                    ->pause(2000)
                    ->click('@Option1Admin')
                    ->pause(3000)
                   // ->click('')
                 //   ->waitFor('@AdminRetour')
                 //   ->pause(1000)
                    ->type('lastName','Mezdour')  
                    ->type('firstName','Lina')
                    ->type('dateDeNaissance','28/10/1999')   
                    ->type('promo','1CS')   
                    ->type('section','A')   
                    ->type('groupe','1')   
                    ->screenshot('3rd')

                    ->mouseover('@SubmitStudent')

                    ->pause(1000)

                    ->click('@SubmitStudent')

                //    ->pause(1000)
                    ->waitFor('> div.swal2-container.swal2-center.swal2-backdrop-show > div')
                    ->pause(1000)
                    ->screenshot('4th')
                    ->click('> div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
                    ->waitFor('@AdminRetour')
                    ->click('@AdminRetour')    
                    ->pause(2000)                                    

                    ->click('@LogoutButton')
                    ->waitFor("@Login-Button")

                    ->click("@Login-Button")
                    ->pause(2000)
                    ->type('username','L_Mezdour')
                    ->type('password','Lina')
                    ->pause(1000)
                    ->click('@LoginForm')  
                    ->screenshot('5th')

                    ->pause(5000)
                    ->click('@LogoutButton')
                    ->waitFor("@Login-Button")
                    ->pause(1000);                   
        });
    }
}
