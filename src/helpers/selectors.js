export function getAppointmentsForDay(state, day) {
  let appointmentArray = [];

  state.days.forEach(dayObject => {
    if (day === dayObject.name) {
      for (let dayObjectIterator of dayObject.appointments) {
        Object.values(state.appointments).forEach(findAppointments => {
          if (findAppointments.id === dayObjectIterator) {
            appointmentArray.push(findAppointments);
          }
        })
      }
    }
  })
  return appointmentArray;
}


export function getInterview(state, interview) {
  let storeInterviewData = {};

  if (!interview) {
    return null;
  }
  for (let key in state.interviewers) {
    if (state.interviewers[key].id === interview.interviewer) {
      storeInterviewData = { 'student': interview.student, 'interviewer': { ...state.interviewers[key] } }
    }
  }
  return storeInterviewData;
}