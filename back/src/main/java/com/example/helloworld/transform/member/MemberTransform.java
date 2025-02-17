package com.example.helloworld.transform.member;

import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.entity.member.MemberEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberTransform {
    MemberEntity toEntity(MemberEntity entity);
    MemberDTO toDTO(MemberEntity entity);
}
