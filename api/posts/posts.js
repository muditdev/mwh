---
---
jekyllPostsCallback([
	{% for post in site.posts %}
		{
            "id"         : "{{ post.id }}",
            "title"      : "{{ post.title | escape }}",
            "categories"   : "{{ post.categories }}",
            "tags"       : "{{ post.tags | join: ', ' }}",
            "url"        : "{{ post.url }}",
            "path"       : "{{ post.path }}",
            "next"       : "{{ post.next.url }}",
            "previous"   : "{{ post.previous.url }}",
            "date"       : "{{ post.date }}",
            "shortdate"  : "{{ post.date | date : '%B %d, %Y' }}",
            "content"    : "{{ post.content | escape | strip_newlines }}",
            "excerpt"    : "{{ post.excerpt | escape | strip_newlines }}"
		} {% if forloop.last %}{% else %},{% endif %}
	{% endfor %}
]);
