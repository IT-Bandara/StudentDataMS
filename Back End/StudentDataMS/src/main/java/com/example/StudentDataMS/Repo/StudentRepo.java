package com.example.StudentDataMS.Repo;

import com.example.StudentDataMS.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Integer> {
    boolean existsByEmail(String email);
}
