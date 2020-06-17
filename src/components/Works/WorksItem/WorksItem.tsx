import React from 'react';

import CustomButton from '@components/CustomButton/CustomButton';

import './WorksItem.scss';

import { ProjectData } from '@interfaces/index';

interface Props {
  item: ProjectData;
}

const WorksItem = ({ item }: Props): JSX.Element => {
  const {
    title,
    summary,
    stacks,
    role,
    roleDesc,
    desc,
    github,
    url,
    videos,
    images,
  } = item;

  return (
    <article className="WorksItem">
      <header>
        <div className="project">
          <div className="title-wrapper">
            <h3>{title}</h3>
          </div>
          <small>{summary}</small>
        </div>
        <div className="stack">
          {stacks &&
            stacks.map((stack, index) => (
              <span className="item" key={index}>
                {stack}
              </span>
            ))}
        </div>
      </header>
      <div className="info">
        <div className="summary">
          <div>{role}</div>
          <small>{roleDesc}</small>
        </div>
        <ul className="desc">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        {github && (
          <div className="button-wrapper">
            <a href={github} target="blank">
              <CustomButton icon="github" large>
                GitHub
              </CustomButton>
            </a>
          </div>
        )}
        {url && (
          <div className="button-wrapper">
            <a href={url} target="blank">
              <CustomButton icon="link" large>
                배포 링크
              </CustomButton>
            </a>
          </div>
        )}
      </div>
      <div className="video-list">
        {videos &&
          videos.map((video, index) => (
            <video key={index} controls style={{ width: video.width }}>
              <source src={`/assets/videos/${video.name}`} type="video/mp4" />
              브라우저가 video 태그를 지원하지 않습니다.
            </video>
          ))}
      </div>
      <div className="image-list">
        {images &&
          images.map((image, index) => (
            <img
              key={index}
              src={`/assets/images/${image.name}`}
              alt={image.name}
              style={{ width: image.width }}
            />
          ))}
      </div>
    </article>
  );
};

export default WorksItem;
