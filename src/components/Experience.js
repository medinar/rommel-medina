import React from 'react';
import { VerticalTimeline as Timeline, VerticalTimelineElement as TimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from "../work.svg";
import { ReactComponent as SchoolIcon } from "../school.svg";
import timelineElements from "../timelineElements";

const Experience = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div className="page" id="experience">
            <div className="container">
                <div className="heading">
                    <h2><span className="page-title">Timeline</span></h2>
                    <p><span>My work experiences and academic qualifications</span></p>
                </div>
                <Timeline>
                    {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <TimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                            <a
                            className={`button ${
                                isWorkIcon ? "workButton" : "schoolButton"
                            }`}
                            href="/"
                            >
                            {element.buttonText}
                            </a>
                        )}
                        </TimelineElement>
                    );
                    })}
                </Timeline>
            </div>
        </div>
    )
}

export default Experience
