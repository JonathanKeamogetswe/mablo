<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request){

        $request->validate([
         'name' =>['required'],
         'email' => ['required','email','unique:user'],
         'password' => ['required']
        ]);

        User::create([
            'name' =>$request->name,
            'email' => $request->email,
            'password' =>Hash::make($request->password)
        ]);
    }
}
