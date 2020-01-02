<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 *  Migration Class of the table 'results'  
 */

class CreateResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('results', function (Blueprint $table) {
            $table->Integer('Etudiant_id');
            $table->String('Code_Mat',10);
            $table->Double('CC');
            $table->Double('CI');
            $table->Double('TP');
            $table->Double('CF');
            $table->Double('Moy');
            $table->timestamps();
            $table->unique(['Etudiant_id', 'Code_Mat']); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('results');
    }
}
