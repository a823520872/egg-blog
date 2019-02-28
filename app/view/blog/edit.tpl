<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>{{ title }}</title>
	</head>

	<body>
		<form action="/blog/{{ blog.id }}" method="post">
			<div>
				<label>
					分类：
					<select name="cid" value="{{ blog.cid }}">
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
					<input type="text" name="title" value="{{ blog.title }}" />
				</label>
			</div>
			<div>
				<label>
					简介：
					<input type="text" name="description" value="{{ blog.description }}" />
				</label>
			</div>
			<div>
				<label>
					内容：
					<textarea type="text" name="content">{{ blog.content }}</textarea>
				</label>
			</div>
			<button type="submit">提交</button>
		</form>
	</body>
</html>
