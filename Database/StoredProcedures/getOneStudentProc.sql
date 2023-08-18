CREATE OR ALTER PROCEDURE getOneStudentProc(@studentId VARCHAR(50))
AS 
BEGIN
SELECT studentName,studentClass,studentBalance
FROM studentTable WHERE studentId=@studentId 
END;