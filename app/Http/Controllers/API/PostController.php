<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Post;
use http\Message;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::with('user')->latest('id')->get();
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:posts',
            'text' => 'required',
            'user_id' => 'required|integer|exists:users,id'
        ]);

        $post = Post::create($request->all());
        return response()->json([
            'message' => 'post created',
            'post' => $post // posle spat do vue cely post
        ], 201);
    }


    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        return Post::findOrFail($id);
    }


    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:posts,slug,{$id}',
            'text' => 'required',
            'user_id' => 'required|integer|exists:users,id'
        ]);
        // find post
        $post = Post::findOrFail($id);
        // update post
        $post->update( $request->all() );
        // return response
        return response()->json([
            'message' => 'post update',
            'post' => $post // posle spat do vue cely post
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        $post->delete();

        return response()->json([
            'message' => 'successful'
        ], 200);
    }
}
