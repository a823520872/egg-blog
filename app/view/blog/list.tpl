{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<div class="clearfix">
	<a class="float-right" href="/blog/add">写文章</a>
</div>
<ul class="j-list">
	{% for item in list %}
	<li class="row">
		<div class="col-xl-10">
			<a href="/blog/{{ item.id }}">{{ item.title }}</a>
		</div>
		<div class="col-xl-2 d-flex justify-content-between">
			<a href="/blog/{{ item.id }}/edit">编辑</a>
			<a class="j-del" data-id="{{ item.id }}" href="javascript:void(0);">删除</a>
		</div>
	</li>
	{% endfor %}
</ul>
{% endblock %} {% block js %}
<script src="/public/js/blog.list.js"></script>
{% endblock %}
