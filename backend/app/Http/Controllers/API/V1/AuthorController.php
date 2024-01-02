<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AuthorResource;
use App\Models\User;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function show(User $user)
    {
        return new AuthorResource($user);
    }
}
