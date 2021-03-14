@if ($errors->any())

    <ul class="notification is-danger">
        <button class="delete"></button>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>

@endif
