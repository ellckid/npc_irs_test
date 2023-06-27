# Тестовое задание для НПЦ ИРС
## Установка и запуск

Копируем репозиторий
```
git clone https://github.com/ellckid/npc_irs_test.git .
```
## Инициализируем базу данных
В терминале создаем базу данных

(postgres стоит заменить на нужного пользователя)

```
createdb -U postgres testdb
```

Далее подключаемся к базе данных, после создания сервера в этом терминале можно будет выполнять sql запросы (например для заполнения можно взять insertы из db_init.sql + смотри пункт база данных )

(postgres стоит заменить на нужного пользователя)
```
psql -U postgres
```
```
\connect testdb
```

## Запуск сервера
(Перед запуском сервера стоит открыть новую вкладку в терминале)

Переходим в папку с сервером
```
cd ./server
```
Устанавливаем зависимости

```
npm i
```
запускаем сервер в dev режиме 

```
npm run dev
```

Для обращения использовался sequelize, были созданы модели, поэтому при запуске сервера таблицы автоматически создаются.

## Запуск клиента
(Перед запуском клиента стоит открыть новую вкладку в терминале)

Переходим в папку с клиентом
```
cd ./client
```
Устанавливаем зависимости

У скачанного шаблона дашборда имеются ошибки, их можно проигнорировать, на работу никак не влияют

```
npm i --force
```

запускаем клиент

```
npm start
```

## база данных

В случае если нужно заполнять через sql: 

```
create TABLE shops(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  date DATE,
  balance NUMERIC,
  workers INTEGER
);
```

пример insertа
```
INSERT INTO shops (name, date, balance, workers) values ('first shop', '01.01.2023', '1000.00', '1');
```

```
create TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  date DATE,
  price NUMERIC,
  amount INTEGER,
  shopId INTEGER,
  FOREIGN KEY (shopId) REFERENCES shop (id)
);
```

пример insertа
```
INSERT INTO products (name, date, price, amount, shopId ) values ('first product', '01.01.2023', '1000.00', '1', '1');
```




Запросы для заполнения таблиц:

Заполнять базу данных можно через postman отправляя

POST запрос localhost:5100/api/shop 
Тело запроса:
```
{
	"name": "first shop",
	"date": "01.01.2023",
	"balance": 1000.0,
	"workers": 1
}
```

POST запрос localhost:5100/api/product
Тело запроса:
```
{
	"name": "first shop",
	"date": "01.01.2023",
	"price": 1000.0,
	"amount": 1,
	"shopId": 1
}
```
