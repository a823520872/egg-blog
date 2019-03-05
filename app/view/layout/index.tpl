<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{% block title %}首页{% endblock %}</title>
        <link rel="stylesheet" href="/public/css/bootstrap.css" />
        {% block css %} {% endblock %}
    </head>
    <body>
        <div class="container">
            {% if msg %} {% if error %}
            <p class="text-danger">{{ msg }}</p>
            {% else %}
            <p class="text-success">{{ msg }}</p>
            {% endif %} {% endif %} {% block header %}
            <header>
                <div class="d-flex justify-content-between">
                    <nav>
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/blog">博客列表</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/category">分类列表</a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/user/signIn">登录</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/user/signUp">注册</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/user/signOut">退出登录</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {% endblock %}
            <main>
                {% block main %} {% endblock %}
            </main>
        </div>
        <script src="/public/js/common.js"></script>
        {% block js %} {% endblock %}
    </body>
</html>
