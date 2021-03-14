@extends('layouts.master')


@section('content')


    <form action="{{route('posts.store')}}" method="POST" class="create-form">
        @csrf
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" name="title" type="text" placeholder="title">
            </div>
        </div>
        <textarea class="textarea mb-4" name="text" placeholder="add your text" rows="10"></textarea>

        <div class="control mt-2">
            <button class="button is-warning">add post</button>
            <a href="/" class="button is-light is-small">Back</a>
        </div>
    </form>

@endsection
