create TABLE shops(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  date DATE,
  balance NUMERIC,
  workers INTEGER
);

create TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  date DATE,
  price NUMERIC,
  amount INTEGER,
  shopId INTEGER,
  FOREIGN KEY (shopId) REFERENCES shop (id)
);

INSERT INTO shops (name, date, balance, workers) values ('first shop', '01.01.2023', '1000.00', '1');
INSERT INTO shops (name, date, balance, workers) values ('second shop', '01.02.2023', '2000.00', '2');
INSERT INTO shops (name, date, balance, workers) values ('third shop', '01.03.2023', '3000.00', '3');
INSERT INTO shops (name, date, balance, workers) values ('fourth shop', '01.04.2023', '4000.00', '4');
INSERT INTO shops (name, date, balance, workers) values ('fifth shop', '01.05.2023', '5000.00', '5');

INSERT INTO products (name, date, price, amount, shopId ) values ('first product', '01.01.2023', '1000.00', '1', '1');
INSERT INTO products (name, date, price, amount, shopId ) values ('second product', '01.02.2023', '2000.00', '2', '2');
INSERT INTO products (name, date, price, amount, shopId ) values ('third product', '01.03.2023', '3000.00', '3', '1');
INSERT INTO products (name, date, price, amount, shopId ) values ('fourth product', '01.04.2023', '4000.00', '4', '2');
INSERT INTO products (name, date, price, amount, shopId ) values ('fifth product', '01.05.2023', '5000.00', '5', '3');