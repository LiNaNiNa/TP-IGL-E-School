<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 *  Model of the authens table.
 * 
 * Permits the fluid communication between the code and the data bases. 
 * 
 */

class Result extends Model
{

/**
 *  Method to calculate the automatic column
 * 
 * Permits generating the column 'moy' containing the average of the student's marks in the subject.
 * 
 */

    protected static function boot() {
        parent::boot();
    
        static::saving(function($model){
            $model->Moy = ( $model->CC + $model->CF + $model->TP + $model->CI )/4;
        }); 
    }
}
