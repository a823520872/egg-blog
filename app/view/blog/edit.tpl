{% extends '../layout/index.tpl' %} {% block title %}{{ title }}{% endblock %} {% block main %}
<div class="row">
	<div class="col-xl-3"></div>
	<div class="col-xl">
		<form action="/blog/{{ blog.id }}" method="post">
			<div>
				<label>
					分类：
					<select class="form-control" name="cid" value="{{ blog.cid }}">
						<option value="">全部</option>
						{% for item in categorys %}
						<option value="{{ item.id }}">{{ item.name }}</option>
						{% endfor %}
					</select>
				</label>
			</div>
			<div>
				<label>
					标题：
					<input type="text" class="form-control" name="title" value="{{ blog.title }}" />
				</label>
			</div>
			<div>
				<label>
					简介：
					<input type="text" class="form-control" name="description" value="{{ blog.description }}" />
				</label>
			</div>
			<div>
				<label>
					内容：
					<textarea type="text" class="form-control" name="content">{{ blog.content }}</textarea>
				</label>
			</div>
			<button type="submit" class="btn btn-primary">提交</button>
		</form>
	</div>
	<div class="col-xl-3"></div>
</div>
{% endblock %}
