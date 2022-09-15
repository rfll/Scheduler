import { useState, useEffect } from "react";
import axios from "axios";


export default function () {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);

  const updateSpots = function (state, appointments, id) {

    let spots = 0;

    const index = state.days.findIndex(dayIterator => dayIterator.name === state.day);
    const dayObject = state.days[index];

    for (const id of dayObject.appointments) {

      const appointment = appointments[id];

      if (!appointment.interview) {
        spots++
      }
    }
    const day = { ...dayObject, spots }
    const days = state.days.map(dayIterator => dayIterator.name === state.day ? day : dayIterator)

    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = updateSpots(state, appointments);
        setState({ ...state, appointments, days })
      })
  }


  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const days = updateSpots(state, appointments);
        setState({ ...state, appointments, days })
      })
  }

  return { state, setDay, bookInterview, cancelInterview }
};