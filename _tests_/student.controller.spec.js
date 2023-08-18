import request from 'supertest'
import app from '../server'


describe("Student Fee Management",()=>{
    
    it("Should create a Student",async()=>{
        const newStudent = {
            studentId:'98tgbyg7gi6567',
            studentName: 'David Munyiri',
            studentClass: '4north',
            studentBalance: 1000,
          };
      
          const response = await request(app)
            .post('/student')
            .send(newStudent);
      
          expect(response.status).toBe(200);
          expect(response.body.message).toBe('Student created successfully');
      
    })
    //updating student Fee Balance starts here
    it('should update tghe fee balance for a student with given studentId', async () => {
        const studentId = 'ju782637236723';
        const studentBalance = 500;
    
        const response = await request(app)
          .put(`/students/${studentId}/fee`)
          .send({ studentBalance });
    
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Student Balance updated successfully');
      });
      ///Deleting a student

      it('should soft delete a student', async () => {
        const studentId = '786bgt78685';
    
        const response = await request(app)
          .delete(`/student/${studentId}`);
    
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('You have  successfully deleted the student');
      });

      //Getting One student using his stuentId
      it('should display details of one student with given id', async () => {
        const studentId = 'juyg79888yuinuh';
    
        const response = await request(app)
          .get(`/student/${studentIdToFetch}`);
    
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(studentId); 
      });

      ////Displaying all Student details 
      it('Should Display details of all students registered and blank if there is no student', async () => {
        const response = await request(app)
          .get('/student');
    
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
      });
    
})