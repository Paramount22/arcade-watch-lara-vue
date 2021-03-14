<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return view('posts.index', [
		                // eager loading -> vdaka vztahom budeme volat menej queries
			'posts' => Post::with('comments', 'user')->latest()->get() //Post::latest()->get()
		]);
	}


	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return view('posts.create');
	}


	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
        $request->validate([
            'title' => 'required|max:100',
            'text' => 'required'

        ]);

        $post = auth()->user()->posts()->create(
            $request->all() // request->all() vrati pole a to mozme hned ulozit do db
        );

        $post->save();

        return redirect('/posts/' . $post->slug )
            ->with('flash', 'post added');


	}


	/**
	 * Display the specified resource.
	 */
	public function show(Post $post)
	{
		// return view('posts.show', compact('post'));

        $post->load('comments', 'comments.user'); // eager loading

		return view('posts.show', compact('post') );
	}


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Post $post)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Post $post)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Post $post)
	{
		//
	}
}
