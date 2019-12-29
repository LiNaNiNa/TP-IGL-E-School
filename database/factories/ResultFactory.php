<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Result;
use App\Etudiant;
use Faker\Generator as Faker;

$factory->define(Result::class, function (Faker $faker) {
    $max = Etudiant::max('Etudiant_id');
    $min = Etudiant::min('Etudiant_id');
    return [
        'Etudiant_id' => $faker->numberBetween($min,$max),
        'Code_Mat' => Str::random(3),
        'CC' => $faker->numberBetween(0,20),
        'CI' => $faker->numberBetween(0,20),
        'TP' => $faker->numberBetween(0,20),
        'CF' => $faker->numberBetween(0,20),
        'moy' => $faker->numberBetween(0,20),        
    ];
});
