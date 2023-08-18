const {v4}=require('uuid')
const mssql=require('mssql');


const createStudent=async(req,res)=>{
    try {
        const studentId=v4()

        const {studentName,studentClass,studentBalance}=req.body
const pool=await mssql.connect(sqlConfig)
const result=(await pool.request()
    .input('studentId',studentId)
    .input('studentName',studentName)
    .input('studentClass',studentClass)
    .input('studentBalance',studentBalance)
    .execute('createStudentProc'))
   
    if(result.rowsAffected == 1){
     res.json({
            message: "Student created successfully" })  
        }else{
            return res.json({message: "Student Creating Failed"})
        }   
        
  }  catch (error) {
  return res.json({error:`${error.message}`})      
    }
}

const updateBalance=async(req,res)=>{
    try {
        const {studentId}=req.params

        const {studentBalance}=req.body
     const pool=await   mssql.connect(sqlConfig)
    
       const result=(await  pool.request()
            .input('studentId',studentId)
            
            .input('studentBalance',studentBalance)
            .execute('updateBalanceProc')) 
            if(result.rowsAffected == 1){
                res.status(200).json({
                    message: 'Student Balance updated successfully'
                })
            }else{
                res.status(400).json({
                    message: 'Student Balance Update Failure'
                })
            }
            
    } catch (error) {
        res.json({Error:error.message})
    }
}

const getOneStudent=async(req,res)=>{
    try {
        const {studentId}=req.params
        
      const pool=await mssql.connect(sqlConfig)
        
         const note=(await pool.request()
            .input('studentId',studentId)
            .execute('getOneStudentProc')).recordset 

            return res.status(200).json({student})
            
    } catch (error) {
        res.json({Error:error})
    }
}

const getAllstudents=async(req,res)=>{
    try {
    const pool=await mssql.connect(sqlConfig)
    const notes=(await pool.request()
        .execute('getAllStudentProc')).recordset 
        return res.status(200).json({students})
     
    } catch (error) {
        return res.json({Error:error})
    }
}

const deleteStudent=async(req,res)=>{
    try {
        const {studentId}=req.params
        
    const pool=await mssql.connect(sqlConfig)
        const result=(await pool.request()
            .input('studentId',studentId)
            .execute('deleteStudentProc'))
            if(result.rowsAffected==1){
                return res.status(200).json({message:"You have  successfully deleted the student"})
            }else{
                return res.status(401).json({message:"Error Deleting Student"})
            }
           
       
    } catch (error) {
        res.json({Error:error})
    }
}

module.exports={
    createStudent,
    updateBalance,
    getOneStudent,
    getAllstudents,
    deleteStudent
}