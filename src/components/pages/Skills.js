import React, { Component } from 'react';
import { ReactComponent as Linux } from '../../media/icons/linux.svg';
import { ReactComponent as Python } from '../../media/icons/python.svg';
import { ReactComponent as Javascript } from '../../media/icons/javascript.svg';
import { ReactComponent as Html } from '../../media/icons/html.svg';
import { ReactComponent as Css } from '../../media/icons/css.svg';
import { ReactComponent as Postgresql } from '../../media/icons/postgresql.svg';
import { ReactComponent as Docker } from '../../media/icons/docker.svg';
import { ReactComponent as Git } from '../../media/icons/git.svg';
import { ReactComponent as Django } from '../../media/icons/django.svg';
import { ReactComponent as Flask } from '../../media/icons/flask.svg';
import { ReactComponent as R } from '../../media/icons/react.svg';
import Fade from 'react-reveal/Fade';

const style = {
  width: '25%',
  maxWidth: '120px',
  viewBox: '0 0 100 100',
  padding: '3%',
  paddingBottom: '5%'
};

export class Skills extends Component {
  render() {
    return (
      <div className="skills-section" id="skills">
        <div className="container">
          <div className="section-title">Skills</div>
        </div>

        <Fade bottom>
          <div className="centerskills">
            <Python style={style} />
            <Javascript style={style} />
            <Html style={style} />
            <Css style={style} />
            <Postgresql style={style} />
            <Flask style={style} />
            <Django style={style} />
            <R style={style} />
            <Linux style={style} />
            <Docker style={style} />
            <Git style={style} />
          </div>
        </Fade>
      </div>
    );
  }
}

export default Skills;
