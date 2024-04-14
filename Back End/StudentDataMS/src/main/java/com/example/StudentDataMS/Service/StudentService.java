package com.example.StudentDataMS.Service;

import com.example.StudentDataMS.DTO.StudentDto;
import com.example.StudentDataMS.Entity.Student;
import com.example.StudentDataMS.Repo.StudentRepo;
import com.example.StudentDataMS.Util.retern_state;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveStudet(StudentDto studentDto){
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

}
