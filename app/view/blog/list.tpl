<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>{{ title }}</title>
	</head>
	<body>
		<ul>
			{% for item in list %}
			<li>
				<a href="/blog/{{ item.id }}">{{ item.title }}</a>
				<a href="/blog/{{ item.id }}/edit">编辑</a>
			</li>
			{% endfor %}
		</ul>
		<a href="/blog/add">写文章</a>
	</body>
</html>
