# Тестовое задание "Звездные войны"

Для запуска:

1.  Устновите существующие зависимости: npm install
 ```
npm install
```
2.  Выполните команду:
```
npm run dev
```
Ссылка на используемое API
```
https://swapi.dev/
```

## Примечения по работе
Поскольку апи не предоставляет возможности фильтрации на своей стороне (только поиск), то для фильтрации был предложен кастомный вариант. Однако он применяется отдельно к каждой странице, а не ко всем персонажам сразу. Связано это с тем, что данные приходят пачкой по 10 персонажей. И единственный вариант - создать общий массив, куда собрать всех персонажей, для чего отправить запросы по всем страницам сразу (что выглядит не очень производительно и оптимизировано) и отдельно фильтровать. Более оптимизированное решение находится в процессе
