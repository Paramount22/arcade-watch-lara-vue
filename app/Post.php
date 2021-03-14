<?php

namespace App;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $fillable = ['title', 'text', 'user_id', 'slug'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

	/**
	 * Get the author of the blog post.
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}

	/**
	 * Get the comments of this post.
	 */
	public function comments()
	{
        return $this->hasMany('App\Comment')->orderBy('id', 'DESC');
	}

    /** MUTATOR
     * @param $value
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = ucfirst($value);
        $this->attributes['slug'] = str::slug($value); // vygeneruje sa v db aj slug
    }
}
