{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<div class="clearfix">
	<a class="float-right" href="/category/add">添加分类</a>
</div>
<ul class="nav flex-column">
	{% for item in list %}
	<li class="nav-item row">
		<a class="col-xl-10" href="/category/{{ item.id }}">{{ item.name }}</a>
		<a class="col-xl-2" href="/category/{{ item.id }}/edit">编辑</a>
	</li>
	{% endfor %}
</ul>
{% endblock %}
