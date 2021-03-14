<?php

namespace App\Http\Controllers\API;

use App\Comment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Comment::with('user', 'post')->latest('id')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required',
            'post_id' => 'required',
            'user_id' => 'required|integer|exists:users,id'
        ]);

        $comment = Comment::create($request->all());
        return response()->json([
            'message' => 'comment created',
            'comment' => $comment // posleme spat do vue cely comment
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        $comment->load('user', 'post');
        return $comment;
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'text' => 'required',
            'post_id' => 'required',
            'user_id' => 'required|integer|exists:users,id'
        ]);

        // find comment by id
        $comment = Comment::findOrFail($id);
        // update post
        $comment->update( $request->all() );
        // return response
        return response()->json([
            'message' => 'post update',
            'post' => $comment // posle spat do vue cely comment
        ], 201);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();

        return response()->json([
            'message' => 'successful'
        ], 200);
    }


}
