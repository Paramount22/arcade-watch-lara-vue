@include('errors')

<form action="{{route('comments.store')}}" method="POST" class=" m-3 add-comment-form ">
    @csrf
    <div class="field">
        <label class="label">Comments</label>
        <div class="control">
            <textarea name="text" rows="3" class="textarea" placeholder="Textarea"></textarea>
        </div>
    </div>

    <div class="control">
        <button class="button is-warning">add comment</button>
    </div>

    <input type="hidden" name="post_id" value="{{$post->id}}">
   <!-- <input type="hidden" name="user_id" value="{{auth()->user()->id}}">
    zabezpecenie cez vztah v controlleri Comment
-->
</form>
