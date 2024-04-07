<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (User::count() == 0) {
            DB::table('users')->insert([
                    [
                        'username' => 'Admin',
                        'first_name' => 'Admin',
                        'last_name' => 'Testing',
                        'email' => 'admin_testing@yahoo.com',
                        'password' => Hash::make('1q2w3e4r'),
                        'role_id' => 1,
                    ],
                    [
                        'username' => 'Customer',
                        'first_name' => 'Customer',
                        'last_name' => 'Testing',
                        'email' => 'customer_testing@yahoo.com',
                        'password' => Hash::make('1q2w3e4r'),
                        'role_id' => 2,
                    ]
                ]
            );
        }
    }
}
