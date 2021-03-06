<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 *  Migration Class of the table 'authens'  
 */

class CreateAuthensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authens', function (Blueprint $table) {
            $table->bigIncrements('Matricule');
            $table->String('username',120);
            $table->String('password',120);
            $table->String('Profil',50);
            $table->String('Token');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authens');
    }
}
