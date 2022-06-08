import React, { useEffect } from 'react';
import '../styles/pages/about.scss';

const About = ({testFun}) => {

  useEffect(() => {
    testFun();
  }, [testFun])

  return(
    <div className="aboutWrap">
      <div className="title">About</div>
      <ul>
        <li><i className="fa-solid fa-envelope"></i><span>cocacollllla@gmail.com</span></li>
        <li><i className="fa-solid fa-phone"></i><span>010-6527-6665</span></li>
        <li><i className="fa-brands fa-github"></i><span>https://github.com/cocacollllla</span></li>
        <li><i className="fa-brands fa-blogger-b"></i><span>https://zzerocoke.tistory.com/</span></li>
      </ul>
      <div className="introduce">
        <p>
        웹퍼블리셔로 일을 하면서 개발자와 같이 협업을 하며 개발에 마음을 뺏겼습니다. <br />
        한 번은 개발자의 업무량이 많아 해결하지 못한 수정사항을 맡게 되었는데 
        상품의 선택된 수량에 따라 가격을 더해 노출시켜야 하는 기능을 구현해야 했습니다. <br />
        구글링을 하며 한줄 한줄 코드를 작성해가는 과정에서 새로운 지식과 도전에 즐거움과 희열을 느꼈고 
        동적이게 한다는 것에 가슴이 뛰어 개발에 뛰어들게 되었습니다.
        </p>
        <p>
        계획 세우는 것을 좋아하여 해야 할 일을 정리하고 우선순위를 정해 하나씩 해결해나가는 것을 잘합니다. <br />
        효율적으로 일을 처리할 방법을 고민하고 실천합니다. <br />
        세워둔 계획에 변수가 생겨도 다시 새로운 일을 파악하고 계획을 변경해 해결하기 때문에 
        업무적 효율성이 좋다는 칭찬을 많이 들었으며 이 습관으로 인해 업무마감기한을 넘겨본 적이 없습니다.
        </p>
        <p>
        좋은 코드를 작성한다는 것은 곧 사용자에게 편한 UI를 구현한다는 것과 같다고 생각하기 때문에
        사용자와 시각적 소통을 통해 편안함을 줄 수 있는 개발자로 성장하고자 합니다.
        </p>

      </div>
      <div className="experience">
        <div className="expTitle">WORK EXPERIENCE</div>
        <div className="expName">에덴 EDEN <span>2017.08 ~ 2020.12</span></div>
        <p>웹퍼블리셔 사원으로 근무하며 다양한 웹사이트를 제작하였습니다. </p>
        <p>웹표준과 웹접근성, 미디어쿼리를 고려하며 웹사이트 전반에 걸친 레이아웃 코드를 작성하였습니다.</p>
        <p>디자이너, 개발자와 협업을 하였으며 팀프로젝트에 익숙해질 수 있었습니다.</p>
      </div>

    </div>
  )
}

export default About;