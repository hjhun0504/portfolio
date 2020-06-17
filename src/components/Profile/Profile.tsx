import React from 'react';

import { techSkills } from '@data/index';

import './Profile.scss';

const Profile = (): JSX.Element => {
  return (
    <section className="Profile">
      <div className="skills">
        <h2>Tech-skills</h2>
        <ul className="list">
          {techSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <a href="mailto:hjhun0504@gmail.com">hjhun0504@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td>
                <a href="https://bit.ly/2UQPFd2" target="blank">
                  github.com/hjhun0504
                </a>
              </td>
            </tr>
            <tr>
              <td>Blog</td>
              <td>
                <a href="https://bit.ly/3hE9yOq" target="blank">
                  velog.io/@huhu
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
