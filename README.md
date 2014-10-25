# Open Idol Web

## 팀 설명

REMOTTY = REMOTE + TECH + SERVICE + FUN

## [Person / 구성원]

김대권, 김슬, 김한기, 박준우, 진지혜, 손만근, 박준우

## [Role / 역할]

웹크롤링 : 김슬, 서준석
시각화 : 김대권, 손만근
서버 : 김한기, 박준우
디자인 : 진지혜

## [Motivation / 참여 동기]

김대권 : 코드포서울에 참여하지 못한 한을 풀기위해서

김슬 : 그러게요

김한기 : 시빅해킹에 관심이 있어서

진지혜 : 공공데이터에 관심이 있어서

손만근 : 경험을 쌓고 노하우를 전수받고 싶어서

박준우 : 동아리 선배님 추천, 학교 밖에서 개발자들을 만나보고 싶어서

서준석 : 대권, 한기님 따라서, 많은 분들과의 교류를 위해

## [Comment / 하고 싶은 말]

프로젝트 개요 
DC inside를 이용한 감정 분석 트렌드 시각화

## [objective / 목적]

•특정 키워드에 대한 감정 분석 및 트렌드 시각화
•두 개 이상의 키워드에 대한 분석 결과 비교


## [target audience / 주 타겟층]

누구나 (e.g. 자동차 매니아,  아이돌 팬 등 ..)


## [DATA / 사용 데이터]

DC inside 갤러리별 게시판 제목을 크롤링 한 뒤,

각각의 제목을 감정 분석하여 수치화한 시계열 데이터

##[output media / 최종 결과물]

키워드별 감정 분석 트렌드를 한 눈에 알아볼 수 있도록 시각화한 자료(e.g. 그래프)


## 프로젝트 상세내용


## [technical issues]

 a. technical approach

•웹 크롤러 (크롤링 -> 형태소 분석, 직접 만든 사전을 이용한 감정 분석)
•웹 서버 (Django RestFramework 사용)
•시각화 (d3.js 라이브러리 사용)


 b. DATA source approach 

웹 크롤링 -> 감정 분석


c. information architect & flowchart

감정 분석 데이터 -> msql db -> Client UI

DJango WebFramework가 위 흐름을 책임짐


d. others

한 줄 설명 : OPEN IDOL은 디시인사이드 갤러리 분석을 통한 키워드별 감정 트렌드 시각화 서비스 입니다. 누구든지 쉽게 클릭 한 번으로 내가 관심갖는 주제에 대해 다른 사람들은 어떤 생각, 감정을 가지고 있는지 한 눈에 알아볼 수 있습니다.

## [design / output media issues]

 a. design approach

디자인 철학 - 심플, 대비


b. user scenario

•사용자가 관심을 갖는 주제에 대해 다른 사람들은 어떻게 생각하는지 의문을 갖게됨
•OPEN IDOL 웹 페이지에 접속하여 미리 준비되어있는 메뉴(키워드) 선택
•메뉴 선택 즉시 선택한 키워드에 대한 감정 분석 정보를 쉽고 빠르게 보게됨

c. design & others

## [references]
https://github.com/segfault87/DCGlobber

## License
Open Idol is licensed under the MIT License.
