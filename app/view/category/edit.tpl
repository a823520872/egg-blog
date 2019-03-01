{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<div class="row">
	<div class="col-xl-3"></div>
	<div class="col-xl">
		<form action="/category/:id" method="post">
			<div class="form-group">
				<input type="text" class="form-control" value="{{ category.name }}" />
			</div>
			<button type="submit" class="btn btn-primary">提交</button>
		</form>
	</div>
	<div class="col-xl-3"></div>
</div>
{% endblock %}
