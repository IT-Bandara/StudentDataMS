package com.example.StudentDataMS.Repo;

import com.example.StudentDataMS.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
    boolean existsByEmail(String email);

//    @Query("SELECT s FROM Student s WHERE s.fullName = :name")
    List<Student> findByName(@Param("name") String name);
}
