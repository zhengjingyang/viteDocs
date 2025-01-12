# 文字hover效果
![img](./images/文字hover.gif)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./animation-line.css" />
  </head>
  <body>
    <h2 class="title">
      <span> Migrating From MySQL to YugabyteDB Using YugabyteDB Voyager</span>
    </h2>
  </body>
</html>
```
```css
.title {
  color: #333;
  width: 300px;
}

.title span {
  background: linear-gradient(to right, #ec695c,#61c454) no-repeat right bottom;
  background-size: 0 2px;
  transition: background-size 1300ms;
}
.title span:hover {
  background-position-x: left;
  background-size: 100% 2px;
}
```
