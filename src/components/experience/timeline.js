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
          date="March 2019 - May 2021"
          iconStyle={{ background: '#D5FFE4', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">alwaysAI Inc.</h4>
          <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
          <h4>Full Stack Web Developer</h4>
          <p>
            Typescript, Javascript, React.js, Redux.js, Node.js, Express.js, Koa.js, Electron.js, PostgreSQL, AWS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A9A9A9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          date="Present"
          iconStyle={{ background: '#D5FFE4', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h4>Currently looking for new opportunities</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}