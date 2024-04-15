package com.example.StudentDataMS.Controller;

import com.example.StudentDataMS.DTO.ResponceDto;
import com.example.StudentDataMS.DTO.StudentDto;
import com.example.StudentDataMS.Service.StudentService;
import com.example.StudentDataMS.Util.retern_state;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/student")
public class StudentController {

   @Autowired
    private StudentService studentService;
   @Autowired
   private ResponceDto responceDto;

   @PostMapping(value = "/save")
    public ResponseEntity saveStudent(@RequestBody StudentDto studentDto){
       try{
           String result = studentService.saveStudet(studentDto);
           if(result.equals("00")){
                responceDto.setCode(retern_state.responce_Success);
                responceDto.setMassage("Success");
                responceDto.setContent(studentDto);
                return new ResponseEntity(responceDto , HttpStatus.ACCEPTED);
           } else if (result.equals("06")) {
               responceDto.setCode(retern_state.responce_Duplicated);
               responceDto.setMassage("Exist an account in this Email");
               responceDto.setContent(studentDto);
               return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
           } else {
               responceDto.setCode(retern_state.responce_Success);
               responceDto.setMassage("Error");
               responceDto.setContent(null);
               return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
           }
       }catch (Exception e){
           responceDto.setCode(retern_state.responce_Success);
           responceDto.setMassage(e.getMessage());
           responceDto.setContent(null);
           return new ResponseEntity(responceDto , HttpStatus.INTERNAL_SERVER_ERROR);

       }
   }

   @PostMapping(value = "/update")
    public ResponseEntity updateStudent(@RequestBody StudentDto studentDto){
       try{
           String result = studentService.updateStudent(studentDto);
           if(result.equals("00")){
               responceDto.setCode(retern_state.responce_Success);
               responceDto.setMassage("Updated");
               responceDto.setContent(studentDto);
               return new ResponseEntity(responceDto , HttpStatus.ACCEPTED);
           }else if(result.equals("01")) {
               responceDto.setCode(retern_state.responce_No_Data_Found);
               responceDto.setMassage("Student not found");
               responceDto.setContent(studentDto);
               return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
           }else {
               responceDto.setCode(retern_state.responce_Error);
               responceDto.setMassage("Error");
               responceDto.setContent(null);
               return new ResponseEntity(responceDto , HttpStatus.ACCEPTED);
           }
       }catch (Exception e){
           responceDto.setCode(retern_state.responce_Success);
           responceDto.setMassage(e.getMessage());
           responceDto.setContent(null);
           return new ResponseEntity(responceDto , HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping(value = "/allStudent")
    public ResponseEntity allStudent(){
       try{
           List<StudentDto> studentList = studentService.allStudent();
           responceDto.setCode(retern_state.responce_Success);
           responceDto.setMassage("Success");
           responceDto.setContent(studentList);
           return new ResponseEntity(responceDto , HttpStatus.ACCEPTED);
       }catch (Exception e){
           responceDto.setCode(retern_state.responce_Error);
           responceDto.setMassage(e.getMessage());
           responceDto.setContent(null);
           return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
       }
   }

   @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity delete(@PathVariable int id){
       try {
           String result = studentService.delete(id);

           if(result.equals("00")){
               responceDto.setCode(retern_state.responce_Success);
               responceDto.setMassage("Deleted");
               responceDto.setContent(null);
               return new ResponseEntity(responceDto , HttpStatus.ACCEPTED);
           } else if (result.equals("01")) {
               responceDto.setCode(retern_state.responce_No_Data_Found);
               responceDto.setMassage("Student not found");
               responceDto.setContent(null);
               return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
           }else {
               responceDto.setCode(retern_state.responce_Error);
               responceDto.setMassage("Error");
               responceDto.setContent(null);
               return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
           }
       }catch (Exception e){
           responceDto.setCode(retern_state.responce_Error);
           responceDto.setMassage(e.getMessage());
           responceDto.setContent(null);
           return new ResponseEntity(responceDto , HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

    @GetMapping(value = "/search/{id}")
     public ResponseEntity search(@PathVariable int id){
       try {
           StudentDto student = studentService.search(id);
           if(student != null){
               responceDto.setCode(retern_state.responce_Success);
               responceDto.setMassage("Student founf");
               responceDto.setContent(student);
               return new ResponseEntity(responceDto , HttpStatus.ACCEPTED);
           }else {
               responceDto.setCode(retern_state.responce_Error);
               responceDto.setMassage("Student not Exist");
               responceDto.setContent(null);
               return new ResponseEntity(responceDto , HttpStatus.BAD_REQUEST);
           }
       }catch (Exception e){
           responceDto.setCode(retern_state.responce_Error);
           responceDto.setMassage(e.getMessage());
           responceDto.setContent(null);
           return new ResponseEntity(responceDto , HttpStatus.INTERNAL_SERVER_ERROR);

       }
    }
}
