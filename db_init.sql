// не совсем понимаю зачем нужен sql для создания таблиц если мы создаем модели, которые автоматически инициализируют нужные таблицы.

create TABLE shop(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  date DATE,
  balance NUMERIC,
  workers INTEGER
);

create TABLE product(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  date DATE,
  price NUMERIC,
  amount INTEGER,
  shop_id INTEGER,
  FOREIGN KEY (shop_id) REFERENCES shop (id)
);

//заполнять можно либо отправляя запросы через Postman

// POST запрос localhost/api/shop 
// Тело запроса
{
    "name": "first shop",
    "date": "01.01.2023",
    "balance": 1000.0,
    "workers": 1
}