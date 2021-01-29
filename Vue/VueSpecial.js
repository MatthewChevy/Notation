
created () {
    this.show();
},

// Function fire after page is created
// Cannot do any DOM manipulation

mouted () {
    this.init();
},
//  Called after the DOM has been mounted or rendered.

/*
-------------------------------------------------------------------------------------------------------
Vue inline-templates

We should consider this method, because Vue component should by separate, 
so this is little bit confusing. On the another side is good know, that we can do something like this

*/

<comments-handler inline-template>

    <article class="comment" @click="visible = false" v-show='visible'>
        
        <div class="content">
            {{ $comment->text }}
        </div>

        <time datetime="{{ $comment->created_at->toW3cString() }}" class="has-text-gray">
            {{ $comment->created_at->diffForHumans() }}
        </time>

    </article>

</comments-handler>

/*

This 
is a laravel code. When we use "inline-template" in <components-handler>
laravel and vue cooperate,  we can write laravel and vue code in to the same file

*/