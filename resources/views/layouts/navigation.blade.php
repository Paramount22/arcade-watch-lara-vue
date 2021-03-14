<nav class="auth-zone">
    <!--  Register, Login links -->
    @guest
        <a class="tag is-warning" href="{{ route('login') }}">{{ __('Login') }}</a>
        @if (Route::has('register'))
            <a class="tag is-warning" href="{{ route('register') }}">{{ __('Register') }}</a>
        @endif
    @endguest

<!--  Logged in -->
    @auth
        <a href="{{route('posts.create')}}" class="tag is-light">
            New post
        </a>

        <a class="tag is-warning">
            @<span>{{ Auth::user()->name }}</span>
        </a>
        @if( Auth::user()->id === 6 )
            <a href="{{url('/admin')}}" class="tag is-primary">
                Admin panel
            </a>

        @endif


        <a class="tag is-danger" href="{{ route('logout') }}"
           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    @endauth
</nav>
