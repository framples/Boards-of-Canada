USE task3000;

INSERT INTO employee (level, name, email)
VALUES (0, "Manager 1", "Manager1@yahoo.com"), (1, "Supervisor1", "Supervisor1@yahoo.com"),(2, "worker 1", "Worker1@yahoo.com"),
(2, "worker 2", "Worker2@yahoo.com"), (2, "worker 3", "Worker3@yahoo.com");

INSERT INTO tasktype (name)
VALUES ("Fix printer"), ("go to store"), ("Jump up, jump up"), ("get down");

INSERT INTO jobs (name, location, tasktype, employee_id, Job_desc, job_status)
VALUES ("Job 1", "Location 1", 1, 5, "work hard",0),("Job 2", "Location 2", 2, 3, "work harder",0),("Job 3", "Location 3", 2, 4, "work hardest",0);


SELECT * FROM employee;
select * from jobs;
select * from tasktype;
