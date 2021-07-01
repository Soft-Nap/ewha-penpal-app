https://www.figma.com/file/KEtsdeYP2ntP7z0LvG4doI/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1

# 개발 규칙

Git commit 규칙 :

add: 새로운 기능을 추가할 경우
fix: 버그를 고친 경우
docs: 문서 수정한 경우
style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
refactor: 프로덕션 코드 리팩터링
test: 테스트 추가, 테스트 리팩터링 (프로덕션 코드 변경 없음)
chore: 빌드 테스크 업데이트, 패키지 매니저 설정할 경우 (프로덕션 코드 변경 없음)

제목의 처음은 동사 원형으로 시작하고 첫 글자는 대문자로 작성한다. "Fixed", "Added", "Changed" 등 과거 시제가 아닌 "Fix", "Add", "Change"로 명령어로 시작한다. 총 글자 수는 50자 이내며 마지막에 마침표(.)를 붙이지 않는다.

커밋 규칙
Commit 함수 단위로 진행하기

컴파일 안되는 코드 push 금지 🚫

아래의 헤더 양식에 맞추어 커밋!

헤더 예시: [n] Feat : 더하기 메서드 추가
헤더에 작성하지 못한 내용은 description에 작성

개인 브랜치 생성 -> 커밋 -> PR -> 브랜치 삭제 
