import React from 'react';

import { contact, techSkills } from '@data/index';

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
            {contact.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <a href={item.uri} target="blank">
                    {item.desc}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
