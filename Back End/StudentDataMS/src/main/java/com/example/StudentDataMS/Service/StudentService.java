package com.example.StudentDataMS.Service;

import com.example.StudentDataMS.DTO.StudentDto;
import com.example.StudentDataMS.Entity.Student;
import com.example.StudentDataMS.Repo.StudentRepo;
import com.example.StudentDataMS.Util.retern_state;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveStudent(StudentDto studentDto){
        if(studentRepo.existsByEmail(studentDto.getEmail())){
            return retern_state.responce_Duplicated;
        }else {
            studentRepo.save(modelMapper.map(studentDto , Student.class));
            return retern_state.responce_Success;
        }
    }

    public String updateStudent(StudentDto studentDto){
        if(studentRepo.existsById(studentDto.getId())){
            studentRepo.save(modelMapper.map(studentDto , Student.class));
            return retern_state.responce_Success;
        }else {
            return retern_state.responce_No_Data_Found;
        }
    }

    public List<StudentDto> allStudent(){
        List<Student>  studentList = studentRepo.findAll();
        return modelMapper.map(studentList , new TypeToken<ArrayList<StudentDto>>(){}.getType());
    }

    public String delete(int id ){
        if(studentRepo.existsById(id)){
            studentRepo.deleteById(id);
            return retern_state.responce_Success;
        }else {
            return retern_state.responce_No_Data_Found;
        }
    }

//    public StudentDto search(int id){
//        if(studentRepo.existsById(id)){
//            Student student = studentRepo.findById(id).orElse(null);
//            return modelMapper.map(student , StudentDto.class);
//        }else {
//            return null;
//        }
//    }

    public List<StudentDto> searchByName(String name) {
        List<Student> studentList = studentRepo.findByName(name);
        return modelMapper.map(studentList , new TypeToken<ArrayList<StudentDto>>(){}.getType());

    }
}
