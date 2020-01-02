<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 *  Migration Class of the table 'etudiants'  
 */

class CreateEtudiantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('etudiants', function (Blueprint $table) {
            $table->Integer('Etudiant_id')->primary();
            $table->String('Nom',120);
            $table->String('Prenom',120);
            $table->String('Date_Naissance',20);
            $table->String('Promo',4);
            $table->String('Section',2);
            $table->Integer('Groupe');
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
        Schema::dropIfExists('etudiants');
    }
}
