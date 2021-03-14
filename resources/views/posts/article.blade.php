
<article class="post {{ $type }}">
	<header>
		<h2 class="title">
			<a href="{{route('posts.show', $post->slug)}}">
				{{ $post->title }}
			</a>
		</h2>
	</header>

	<div class="content">
		<p>{!! nl2br($post->text) !!}</p>
	</div>

	<footer class="meta">
		<a href="/users/{{ $post->user->id }}" class="author">
			@<strong>{{ $post->user->name }}</strong>
		</a>

		<a href="{{route('posts.show', $post->slug)}}#scroll-to-comments" class="comments">
			{{ $post->comments->count() }}
			<strong>{{ str_plural( 'comment', $post->comments->count()) }}</strong>
		</a>
	</footer>
</article>