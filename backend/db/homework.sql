DROP DATABASE IF EXISTS shadowdb;
CREATE DATABASE shadowdb;

\c shadowdb;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    user_email VARCHAR,
    user_role VARCHAR,
    family_name VARCHAR,
    given_name VARCHAR,
    sms_user BOOLEAN
);

INSERT INTO users(username,user_email,user_role,family_name, given_name,sms_user)
VALUES  ('MELINIALKEN93','blank@gmail.com','user','Brown','Kenneth', true),
('PreMELINIALKEN88','blank1@gmail.com','Admin','Browne','Kenne', true),
('NIALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINI','blank1@gmail.com','user','Browne','Kenne', true),
('PreMEL8','blank1@gmail.com','Admin','Browne','Kenne', true),
('ALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('EN88','blank1@gmail.com','Admin','Browne','Kenne', true),
('PreME88','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN188','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELIN','blank1@gmail.com','user','Browne','Kenne', true),
('eMELINIALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('LINIALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN808','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN881','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN818','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN878','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN888','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN889','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN898','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN828','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN838','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN884','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELILKEN838','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN848','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN886','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN858','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN885','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN850','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKErrN88','blank1@gmail.com','user','Browne','Kenne', true),
('PreMELINIALKEN8w8','blank1@gmail.com','user','Browne','Kenne', true),
('Pr5INIALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('PrALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('PreMEL588','blank1@gmail.com','user','Browne','Kenne', true),
('tIALKEN88','blank1@gmail.com','user','Browne','Kenne', true),
('Elderken','blank2@gmail.com','user','Beverly','Kenneth', false);