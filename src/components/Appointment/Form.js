import React, { useState } from 'react';

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function() {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }

  const save = function() {
    props.onSave(student, interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.student}
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
              your code goes here
            */
            onChange={(event) => setStudent(event.target.value)}
            value={student}
          />
        </form>
        <InterviewerList
          /* your code goes here */
          interviewers={props.interviewers}
          onChange={(e) => setInterviewer(e)}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save}>Save</Button>
        </section>
      </section>
    </main>
  )
}