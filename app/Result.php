<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected static function boot() {
        parent::boot();
    
        static::saving(function($model){
            $model->Moy = ( $model->CC + $model->CF + $model->TP + $model->CI )/4;
        }); 
    }
}
