CREATE OR ALTER PROCEDURE createStudentProc(@studentId VARCHAR(50),@studentName VARCHAR(50),@studentClass VARCHAR(50),@studentBalance INT)
AS
BEGIN
INSERT
INTO studentTable(studentId,studentName,studentClass,studentBalance)
VALUES (@studentId,@studentName,@studentClass,@studentBalance)
END 
