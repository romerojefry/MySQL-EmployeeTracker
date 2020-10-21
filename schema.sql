DROP DATABASE IF EXISTS Employee_TrackerDB;

CREATE DATABASE Employee_TrackerDB;

USE Employee_TrackerDB;
--! creating my grid view for MySQL Workbench--
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT,
    employee_name VARCHAR(30),
    role_id INTEGER (10),
    department_id INTEGER(10) NULL,
    PRIMARY KEY (id)
);
CREATE TABLE Roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    Pay DECIMAL (30),
    department_id INT(10),
    PRIMARY KEY (id)

);
CREATE TABLE Department (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30),
    department_id INT(10)
    PRIMARY (id)
);

--! connecting to seeds.sql where it has my values--
SELECT * FROM employees; 
SELECT * FROM Roles;
SELECT * FROM Department;