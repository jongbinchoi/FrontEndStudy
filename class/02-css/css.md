# CSS 정리

## Flex 컨테이너 속성 정리

### `flex-direction` 

행, 수직에 따라 justift-content, align-items이 달라짐



- **`row`**: 아이템들이 가로로 배열됨 
- **`column`**: 아이템들이 세로로 배열됨



**정렬이 Center일경우**

| row ➡️    | justify-content ➡️ | aligin-items ⬇️ |
| -------- | :---------------: | :------------: |
| column ⬇️ | justify-content ⬇️ | aligin-items ➡️ |



### `justify-content`: 주 축에서의 아이템 정렬

- **`center`**: 아이템들을 중앙에 배치
- **`flex-start`**: 아이템들을 컨테이너의 상단에 배치
- **`flex-end`**: 아이템들을 컨테이너의 하단에 배치
- **`space-between`**: 아이템 사이에 균일한 간격 배치
- **`space-around`**: 아이템 주위에 균일한 간격 배치
- **`space-evenly`**: 아이템과 경계 포함하여 균일한 간격 배치



<img src="https://user-images.githubusercontent.com/87301268/158812743-423be047-4a0d-4eae-81cf-e97bf0d73b35.png" width="300">





### `align-items`: 교차 축에서의 아이템 정렬

- **`stretch`**: 아이템들을 컨테이너의 가로 폭에 맞게 늘림
- **`center`**: 아이템들을 가로 방향 중앙에 배치
- **`flex-start`**: 아이템들을 컨테이너의 왼쪽에 배치
- **`flex-end`**: 아이템들을 컨테이너의 오른쪽에 배치
- **`baseline`**: 아이템들의 텍스트 기준선을 일치시켜 배치



<img src="https://dev-to-uploads.s3.amazonaws.com/i/kt25wxicd7vm8ddtmq0l.png" width="500">



## 위치 설정 속성 정리

### `position`

- **`absolute`**: 설정된 상위 요소를 기준으로 절대 위치 지정
- **`relative`**: 요소의 원래 위치를 기준으로 상대 위치 지정
- **`fixed`**: 화면을 기준으로 위치 고정 (예: 하단 네비게이션 바)