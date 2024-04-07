<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Role::count() == 0) {
            DB::table('roles')->insert([
                    [
                        'name' => 'admin'
                    ],
                    [
                        'name' => 'customer'
                    ]
                ]
            );
        }
    }
}
