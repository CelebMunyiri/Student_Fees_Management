CREATE OR ALTER PROCEDURE deleteStudentProc(@studentId VARCHAR(50))
AS
BEGIN
DELETE
 FROM studentTable
WHERE studentId=@studentId 
END