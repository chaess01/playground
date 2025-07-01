package com.playground.entity;


import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.util.HtmlUtils;

@Entity
@Table(name="review")
@Getter
@Setter
@ToString(exclude = {"item","member"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Review extends BaseEntity{
    @Id
    @Column(name="review_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int grade; // 평점, 1~5

    @Column(nullable = false)
    private String text; // 리뷰 내용

    @Column(nullable = false,  columnDefinition = "int default 0", name="r_cnt")
    private int rCnt; // 리뷰 추천수

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item; // FK from item

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member; // FK from member

    @ManyToMany
    @JoinTable(
        name = "recommend",
        joinColumns = @JoinColumn(name = "review_id"),
        inverseJoinColumns = @JoinColumn(name = "member_id")
    )
    @Builder.Default
    private Set<Member> recommendedMembers = new HashSet<>(); // 추천한 회원 목록

    public void changeGrade(int grade) {
        this.grade = grade;
    }

    public void changeText(String text) {
        this.text = text;
    }

    // 추천 수 증가 메서드
    public void incrementRCnt() {
        this.rCnt += 1;
    }

    // 추천 수 감소 메서드
    public void decrementRCnt() {
        if (this.rCnt > 0) {
            this.rCnt -= 1;
        }
    }

    public LocalDateTime getModDate() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getModDate'");
    }
}


