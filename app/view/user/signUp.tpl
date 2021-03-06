{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<form action="/user/signUp" method="post">
    <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="name" value="{{ user.name }}" />
        </div>
    </div>
    <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="pass" value="{{ user.pass }}" />
        </div>
    </div>
    <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">重复密码</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="repass" value="{{ user.repass }}" />
        </div>
    </div>
    <div class="row">
        <div class="col-sm-10 offset-md-2">
            <button type="submit" class="btn btn-primary">提交</button>
        </div>
    </div>
</form>
{% endblock %} {% block js %}
<script src="/public/js/user.signUp.js"></script>
{% endblock %}
