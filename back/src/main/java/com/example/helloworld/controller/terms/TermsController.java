package com.example.helloworld.controller.terms;

import com.example.helloworld.dto.terms.TermsDTO;
import com.example.helloworld.service.terms.TermsService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@Log4j2
@RestController
public class TermsController {

    @Autowired
    private TermsService termsService;

    @GetMapping("/member/signup")
    public List<TermsDTO> getTerms() {
        log.info("terms start!");
        return termsService.getTerms();
    }

}
