package com.example.StudentDataMS.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Primary;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "Student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String birthDay;
    private String address;
    private int contactNo;
    private double gpa;
}
