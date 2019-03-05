{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<form action="/user/signIn" method="post">
	<div class="form-group row">
		<label for="staticEmail" class="col-sm-2 col-form-label">用户名</label>
		<div class="col-sm-10">
			<input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com" />
		</div>
	</div>
</form>
{% endblock %} {% block js %}
<script src="/public/js/user.signIn.js"></script>
{% endblock %}
