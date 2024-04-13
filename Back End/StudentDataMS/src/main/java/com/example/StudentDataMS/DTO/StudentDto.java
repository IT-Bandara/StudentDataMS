package com.example.StudentDataMS.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentDto {
    private int id;
    private String email;
    private String name;
    private String birthDay;
    private String address;
    private int contactNo;
    private double gpa;
}
