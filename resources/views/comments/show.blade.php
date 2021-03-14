<comment-component :comment-data="{{$comment}}" :count-comments="{{$post->comments->count()}}" inline-template>
    <!-- ref="input"  @input="textChanged" -> video c. 95 -->


    <article class="comment" >
        <div class="content"
             ref="input"
             @input="textChanged"
             :contenteditable="editing"
             @keydown.enter="updateComment"
             @keydown.esc="resetText"
             @blur="resetText"
        >
            {{$comment->text}}
        </div>

        <footer class="meta">
            <a href="/users/{{ $comment->user->id }}" class="author">
                @<strong>{{ $comment->user->name }}</strong>
            </a>
            <time datetime="{{$comment->created_at->toW3cString()}}" class="has-text-grey">
                {{ $comment->created_at->diffForHumans() }}
            </time>

            @can('update', $comment)
                <span class="controls has-text-grey">
                <a class="edit" @click="startEditing">edit</a>
                <a class="delete" @click="deleteComment">X</a>
                </span>
            @endcan

        </footer>


    </article>
</comment-component>
