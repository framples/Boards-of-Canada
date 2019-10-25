USE task3000;

INSERT INTO employee (level, name, email, createdAt, updatedAt)
VALUES (0, "Manager 1", "Manager1@yahoo.com", "2014-01-01", "2014-01-01"), (1, "Supervisor1", "Supervisor1@yahoo.com", "2014-01-01", "2014-01-01"),(2, "worker 1", "Worker1@yahoo.com", "2014-01-01", "2014-01-01"),
(2, "worker 2", "Worker2@yahoo.com", "2014-01-01", "2014-01-01"), (2, "worker 3", "Worker3@yahoo.com", "2014-01-01", "2014-01-01");

INSERT INTO tasktype (name, createdAt, updatedAt)
VALUES ("Fix printer", "2014-01-01", "2014-01-01"), ("go to store", "2014-01-01", "2014-01-01"), ("Jump up, jump up", "2014-01-01", "2014-01-01"), ("get down", "2014-01-01", "2014-01-01");

INSERT INTO jobs (name, location, tasktype, employee_id, Job_desc, job_status, createdAt, updatedAt)
VALUES ("Job 1", "Location 1", 1, 5, "work hard", 0, "2014-01-01", "2014-01-01"),("Job 2", "Location 2", 2, 3, "work harder",0, "2014-01-01", "2014-01-01"),("Job 3", "Location 3", 2, 4, "work hardest",0, "2014-01-01", "2014-01-01");


SELECT * FROM employee;
select * from jobs;
select * from tasktype;
