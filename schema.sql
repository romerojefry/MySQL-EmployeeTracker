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

SELECT * FROM employees; 