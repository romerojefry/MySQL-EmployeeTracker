INSERT INTO employees (employee_name, role_id, department_id)
VALUES ("Songebob", 1, 3); ("Squidward", 2, 2); ("Mr. Krabs", 3, 1);

INSERT INTO Roles (title, salary, department_id)
VALUES ("Cook",400, 3); ("Cashier", 450, 2);

INSERT INTO Department (name, department_id)
VALUES ("Cheif",3); ("Account", 2); ("Owner", 1);

--!updating from server.js// 
UPDATE employee SET title_id = 4 where id = 4;
UPDATE employee SET ? Where ?;