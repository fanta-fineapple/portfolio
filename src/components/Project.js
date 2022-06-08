import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/project.scss';
import {PRODUCTOPTION} from '../data/data';

const Project = ({ testFun }) => {
  const [project, setProject] = useState([]);

  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    testFun(params.id);
    const projectFilter = PRODUCTOPTION.filter(el => {
      return el.name === params.id
    });
    setProject(projectFilter);

  }, [params.id, testFun]);


  return (
    <>
    {project.map((el, idx) => (
      <div key={idx}>
        <div className="titleBox">
          <div className="title">{el.title}</div>
          {el.info['배포주소'] !== undefined && 
            <div className="goToSite" onClick={() => window.open(el.info['배포주소'], '_blank')}>사이트 바로가기</div>
          }
        </div>
        

        <div className="project">
        {el.info['배포주소'] !== undefined ? 
          <div className="projectimage link"  onClick={() => window.open(el.info['배포주소'], '_blank')}>
            <img src={el.img} alt="프로젝트 이미지" />
          </div>
       : 
          <div className="projectimage">
            <img src={el.img} alt="프로젝트 이미지" />
          </div>
        }
          
          
          <div className="projectContent">
            <div className="content">{el.content}</div>
            <ul className="projectInfo">
              {Object.entries(el.info).map(([key, info]) => (
                <li key={key}>
                  <div>{key}</div>
                  {key === '깃헙' || key === '시연영상' || key === '배포주소' ? <div className="link" onClick={() => window.open(info, '_blank')}>{info}</div> : <div>{info}</div>}
                </li>
              ))}
            </ul>

            <ul className="projectFunc">
              {el.func.map((func,idx) => (
                <li key={idx}>{func}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
      <div className="projectList">
        {PRODUCTOPTION.map(el => (
          <div key={el.id} className={params.id} onClick={() => navigate(`/project/${el.name}`)}><span>{el.title}</span></div>
        ))}
      </div>
    </>
  )
}

export default Project;