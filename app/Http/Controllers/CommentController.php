<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       /*$validator = Validator::make($request->all(), [
            'text' => 'required',
            'post_id' => 'required|integer|exists:posts,id'
        ]);

        if ($validator->fails()) {

            return redirect('/posts/' . $request->post_id . '#comments')
                ->withErrors($validator)
                ->withInput();
        }*/

        $request->validate([
            'text' => 'required',
            'post_id' => 'required|integer|exists:posts,id'
        ]);

       $comment = auth()->user()->comments()->create(
            $request->all() // request->all() vrati pole a to mozme hned ulozit do db
        );
        return redirect('/posts/' . $comment->post->slug . '#comments')
            ->with('flash', 'you totaly commented');
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        $this->authorize('update', $comment); // vdaka police vieme volat metodu authorize, iba uzivatel, ktory
                                                    // pridal komentar ho vie aj editovat / mazat
        $comment->text = $request->text;
        $comment->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $this->authorize('update', $comment);
        $comment->delete();
    }
}
