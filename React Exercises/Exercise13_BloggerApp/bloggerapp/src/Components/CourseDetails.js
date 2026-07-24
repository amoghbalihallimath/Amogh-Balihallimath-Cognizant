import React from 'react';

function CourseDetails(props) {
  const coursedet = props.courses.map((course) =>
    <div key={course.id}>
      <h2>{course.cname}</h2>
      <p>{course.date}</p>
    </div>
  );

  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {coursedet}
    </div>
  );
}

export default CourseDetails;
