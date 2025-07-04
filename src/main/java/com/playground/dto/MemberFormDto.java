package com.playground.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter @Setter
public class MemberFormDto {

    @NotBlank(message = "이름은 필수 입력 값입니다.")
    private String name;

    @NotBlank(message = "이메일은 필수 입력 값입니다.")
    //@Email(message = "이메일 형식으로 입력해주세요.")
    private String email;

    @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
    @Length(min=8, max=16, message = "비밀번호는 8자 이상, 16자 이하로 입력해주세요")
    private String password;

    @NotBlank(message = "전화번호는 필수 입력 값입니다")
    private String phone;

    @NotBlank(message = "우편번호는 필수 입력 값입니다.")
    private String addressCode;

    @NotBlank(message = "주소검색을 이용해 주소를 입력해주세요.")
    private String address;

    private String addressDetail;

    private boolean fromSocial;

    private int totalPoint;

    private String profileImg;

}