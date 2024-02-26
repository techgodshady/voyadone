CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE DATABASE VoyaWealthManagement;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    age TEXT NOT NULL,
    us_investor TEXT NOT NULL,
    investor_type TEXT NOT NULL,
    account_type TEXT NOT NULL,
    investor_status TEXT NOT NULL,
    hear_about TEXT NOT NULL,
    capital TEXT NOT NULL,
    funds_type TEXT NOT NULL,
    love_to_know VARCHAR(1000),
    bitcoin_address VARCHAR(200) NOT NULL
);

insert all fiels on creation 

CREATE TABLE user_dashboard (
    id INT PRIMARY KEY REFERENCES users(id) NOT NULL,
    user_name VARCHAR(200) NOT NULL,
    active_investment TEXT,
    available_balance TEXT,
    total_withdrawal TEXT,
    total_bonuses TEXT
    );


CREATE TABLE invoice (
    id INT PRIMARY KEY REFERENCES users(id) NOT NULL,
    user_name VARCHAR(230) NOT NULL,
    invoice TEXT,
    wallet TEXT,
    amount TEXT,
    status TEXT,
    date VARCHAR(300),
    FOREIGN KEY (user_name) REFERENCES user_dashboard(user_name)
);

CREATE TABLE transaction_history (
    id INT PRIMARY KEY REFERENCES users(id) NOT NULL,
    user_name VARCHAR(230) REFERENCES user_dashboard(user_name) NOT NULL,
    transaction TEXT,
    invoice VARCHAR(50),
    wallet VARCHAR(200),
    amount TEXT,
    date VARCHAR(100)
);



CREATE TABLE bank_transfer (
    id INT PRIMARY KEY REFERENCES users(id) NOT NULL,
    user_name VARCHAR(230) REFERENCES user_dashboard(user_name) NOT NULL,
    account_type TEXT ,
    acount_name TEXT,
    account_number VARCHAR(50),
    bank_name TEXT,
    swift_code VARCHAR(30),
    routing_number VARCHAR(50),
    amount TEXT,
    country TEXT,
    bank_address VARCHAR(700)
);

CREATE TABLE withdrawal_request (
    id INT PRIMARY KEY REFERENCES users(id) NOT NULL,
    user_name VARCHAR(230) REFERENCES user_dashboard(user_name) NOT NULL,
    account_type TEXT ,
    withdrawal_method TEXT,
    address TEXT,
    amount TEXT
);






















CREATE TABLE transaction history (
    id
    user_name
    deposit wallet
    deposit status
    amount to deposit
    plan
    payment_method
    action
    status
    date 

)

CREATE TABLE transaction(
        id TEXT NOT NULL,
        investment_plan TEXT NOT NULL, 
        investment_type TEXT NOT NULL, 
        payment_option TEXT NOT NULL
);

CREATE TABLE bank_transfer(
    id, 
    account_type ,
    acount_name ,
    account_number ,
    bank_name ,
    swift_code ,
    routing_number ,
    amount ,
    country ,
    bank_address
);

CREATE TABLE user_dashboard (
    id ,
    first_name,
    last_name,
    active_investment ,
    available_balance ,
    total_withdrawal,
    total_bonuses,
    phone_number,
    country,
    invoice,
    kind,
    wallet,
    amount,
    action,
    status,
    date,




    investor_status TEXT NOT NULL,
    hear_about TEXT NOT NULL,
    capital TEXT NOT NULL,
    funds_type TEXT NOT NULL,
    love_to_know VARCHAR(1000),
    bitcoin_address VARCHAR(200) NOT NULL
);


SELECT * FROM users;

INSERT INTO users (user_name,user_email,user_password) VALUES ('bob','bob@gmail.com','bob');


--Psql -U postgres
--\c VoyaWealthManagement
--\dt
--heroku pg:psql