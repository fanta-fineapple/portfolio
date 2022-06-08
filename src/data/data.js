export const PRODUCTOPTION = [
  {
    id: 0, 
    title: 'celery', 
    name: 'celery', 
    img: '../assets/celery.png', 
    content:'Firebase와 VueJS를 사용해 샐러디 홈페이지를 모티브로 하여 제작한 개인프로젝트 입니다. 여러 API와 라이브러리를 사용하여 다양한 기능을 구현하였습니다.',
    info: {
      '제작기간': '2022.05.24 ~ 2022.05.31',
      '제작인원': '1명',
      '사용스킬': 'VueJS, SCSS, Firebase',
      '깃헙': 'https://github.com/cocacollllla/vue-celery',
      '시연영상': 'https://www.youtube.com/watch?v=EZrp49pL6RQ',
      '배포주소': 'https://majestic-lily-96f726.netlify.app/'
    },
    func: [
      'Firebase로 백엔드서비스를 대신하여 사용',
      '다음 우편번호  API를 사용하여 입력받은 주소를 카카오지도 API를 이용하여 뷰페이지에서 주소에 따른 지도 노출',
      '메뉴를 메인메뉴, 메인토핑, 서브토핑, 드레싱으로 구분하여 칼로리 계산',
      'vue3-datepicker 라이브러리로 날짜 입력받은 후 오늘 날짜와 입력한 이벤트 종료날짜를 비교해 이벤트 진행과 종료 상태를 구분하여 나타냄',
      '반응형 구현'
    ]
  },
  {
    id: 1, 
    title: 'shop', 
    name: 'shop', 
    img: '../assets/shop.png', 
    content:'Firebase와 React를 사용하여 기획과 디자인, 코딩을 진행한 개인프로젝트 입니다. 목걸이, 반지 등의 악세사리 쇼핑몰을 목표로 상품 뷰페이지와 장바구니넣기 기능에 초점을 맞추어 진행하였습니다.',
    info: {
      '제작기간': '2022.01.12 ~ 2022.04.14',
      '제작인원': '1명',
      '사용스킬': 'React.js, Firebase, Redux, Styled-components',
      '깃헙': 'https://github.com/cocacollllla/shop-project',
      '시연영상': 'https://www.youtube.com/watch?v=n8oG_LgtOIU',
      '배포주소': 'https://astonishing-phoenix-b3c0df.netlify.app/'
    },
    func: [
      'Firebase로 백엔드서비스를 대신하여 사용',
      'Firebase Authntication을 이용한 회원가입과 로그인',
      '상품 장바구니 넣기 기능과 장바구니 내 상품 삭제, 상품 수량 수정 기능',
      '상품 찜하기와 상품 후기(댓글) 달기 기능',
      '개인정보수정(닉네임, 프로필사진 변경, 주소 변경) 기능',
      '찜한상품보기, 주문내역 보기 페이지 생성',
      '공지사항, 자주묻는질문 게시판 생성하여 게시물 수정과 삭제가 가능하도록 함'
    ]
  },
  {
    id: 2, 
    title: 'all my tour', 
    name: 'allmytour', 
    img: '../assets/allmytour.png', 
    content:'인턴십으로 진행했던 프로젝트로, 로컬 투어 여행 서비스의 가이드 신청 사이트 프로젝트 중 회원가입과 로그인 기능을 구현했습니다.',
    info: {
      '제작기간': '2021.09.01 ~ 2021.09.30',
      '제작인원': '프론트엔드 1명 / 백엔드 1명',
      '사용스킬': 'React.js, SCSS',
      '깃헙': 'https://github.com/cocacollllla/allmytour_frontend',
      '시연영상': 'https://www.youtube.com/watch?v=7eTN7uqssBc'
    },
    func: [
      '개인정보취급방침과 마케팅 정보 수신을 위한 약관 동의 기능 구현',
      '정규식을 이용한 이메일, 비밀번호 유효성 검사 및 비밀번호 일치 여부 확인',
      'axios 라이브러리를 이용한 HTTP통신으로 핸드폰 번호 입력시 인증번호 전송 기능 구현 및 인증코드 입력상태에 따른 상태메시지 노출',
      '비밀번호를 잊었을 때 데이터베이스에 저장된 이메일로 비밀번호 재설정링크 발송되어 비밀번호 변경 가능하도록 함',
      'JWT와 로컬스토리지를 이용한 로그인 구현'
    ]
  },
  {
    id: 3, 
    title: 'humblbug', 
    name: 'humblebug', 
    img: '../assets/humblebug.png', 
    content:'다양한 옵션을 선택하고 후원하는 텀블벅을 모티브로 한 팀 프로젝트 입니다. 매일 아침 스탠드업 미팅과 회고 미팅을 통한 이슈 및 블로커 공유로 필수 구현사항과 추가구현사항까지 완료하였습니다.',
    info: {
      '제작기간': '2021.08.16 ~ 2021.08.27',
      '제작인원': '프론트엔드 3명 / 백엔드 3명',
      '사용스킬': 'React,js, styled-components',
      '깃헙': 'https://github.com/cocacollllla/23-2nd-humblebug-frontend',
      '시연영상': 'https://www.youtube.com/watch?v=qUSai5QtndI'
    },
    func: [
      'styled-components 라이브러리를 이용한 UI 구현',
      'axios 라이브러리로 HTTP통신을 통한 후원옵션과 후원금액 데이터 전송',
      '후원옵션에 따른 추가후원금액 계산하여 노출',
      'Query parameter 이용하여 카테고리별 필터 기능 구현',
      '댓글 등록 기능 구현'
    ]
  },
  {
    id: 4, 
    title: 'seocaso', 
    name: 'seocaso' ,
    img: '../assets/seocaso.png', 
    content:'영화추천서비스 왓챠피디아 홈페이지를 모티브로 하여 서울의 카페를 추천하는 사이트로 기획한 팀 프로젝트 입니다.',
    info: {
      '제작기간': '2021.08.02 ~ 2021.08.13',
      '제작인원': '프론트엔드 3명 / 백엔드 2명',
      '사용스킬': 'React.js, SCSS',
      '깃헙': 'https://github.com/cocacollllla/23-1st-Seocaso-frontend',
      '시연영상': 'https://www.youtube.com/watch?v=V38oqwMjnoI'
    },
    func: [
      'SCSS를 이용한 Carousel 기능 구현',
      'Fetch 함수를 이용하여 데이터를 받아와 리뷰, 별점순 리스트 구현',
      'Query parameter를 통한 검색기능 구현과 history를 이용한 페이지 이동',
      '댓글 작성을 위한 모달창 기능 구현'
    ]
  },

];