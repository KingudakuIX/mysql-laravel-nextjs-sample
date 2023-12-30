<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            "name" => "Jhon Doe",
            "email" => "jhon@example.com",
            "password" => bcrypt("123456"),
        ]);

        $user->createToken("JhonDoe")->plainTextToken;

        User::factory()->count(5)->create();
    }
}
