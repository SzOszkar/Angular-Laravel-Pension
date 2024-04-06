<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoomsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Room::count() == 0) {
            DB::table('rooms')->insert([
                    [
                        'number' => 101,
                        'is_ready' => true,
                    ],
                    [
                        'number' => 102,
                        'is_ready' => false,
                    ],
                    [
                        'number' => 103,
                        'is_ready' => true,
                    ],
                ]
            );
        }
    }
}
