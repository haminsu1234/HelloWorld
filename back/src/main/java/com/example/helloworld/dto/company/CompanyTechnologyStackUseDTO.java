package com.example.helloworld.dto.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyTechnologyStackUseDTO {
    private int TechnologyStackUseNo;
    private int TechnologyStackNo;
    private int companyNo;
}
