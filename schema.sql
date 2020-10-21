DROP DATABASE IF EXISTS Employee_TrackerDB;

CREATE DATABASE Employee_TrackerDB;

USE Employee_TrackerDB;

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT,
    employee_name VARCHAR(30),
    role_id INTEGER (10),
    manager_id INTEGER(10) NULL,
    PRIMARY KEY (id)
);
CREATE TABLE Department (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    Pay DECIMAL (30),

)

SELECT * FROM employees; 