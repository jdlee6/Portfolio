import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A9A9A9', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid white' }}
          date="March 2020 - May 2021"
          iconStyle={{ background: '#D5FFE4', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">alwaysAI Inc.</h4>
          <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
          <br />
          <h4>Software Engineer</h4>
          <h5>March 2020 - May 2021</h5>
          {/* <br />
          <span>Developed the user interface for the company’s dashboard with <em>React.js & Redux.js.</em></span>
          <br />
          <br />
          <span>Contributed significant development efforts to build the desktop installer & model training desktop
            application with <em>Electron.js, React.js, Node.js, Koa.js & socket.io.</em>
          </span>
          <br /> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A9A9A9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          date="Present"
          iconStyle={{ background: '#D5FFE4', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">Scanifly</h4>
          <h4 className="vertical-timeline-element-subtitle">New York, New York</h4>
          <br />
          <h4>Full Stack Web Developer</h4>
          <h5>July 2021 - Present</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}