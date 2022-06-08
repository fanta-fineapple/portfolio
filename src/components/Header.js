import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/header.scss';

const Header = () => {
  const navigate = useNavigate();
  const projectName = 'celery';

  return (
    <div className="headerWrap">
      <div className="profileImg"><img src="/assets/profileImg.png" alt="프로필이미지" /></div>
      <div className="profileName">김다슬</div>
      <ul>
        <li onClick={() => {navigate(`/about`);}}>소개</li>
        <li onClick={() => {navigate(`/project/${projectName}`);}}>프로젝트</li>
      </ul>
    </div>
  )
}

export default Header;