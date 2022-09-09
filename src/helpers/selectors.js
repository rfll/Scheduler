export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
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