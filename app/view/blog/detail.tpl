{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<div>{{ blog.title }}</div>
<div>{{ blog.description }}</div>
<div>{{ blog.content }}</div>
<div>{{ blog.t_create }}</div>
{% endblock %}
