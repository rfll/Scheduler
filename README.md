# Interview Scheduler

Interview Scheduler is a single page application(SPA) built using React, Webpack, and Babel.

Users can book interviews between Monday to Friday. Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers. Interviews can be edited, deleted and cancelled.

Data is persisted by the API server using a PostgreSQL database. Testing was completed using Storybook, Jest, and Cypress.


## Screenshots

Monday's Appointments
!["Monday Appointments"](https://github.com/rfll/Scheduler/blob/master/docs/Monday%20Appointments.png)

Hover Effect - Display Booked Appointment Options
!["Friday Appointments"](https://github.com/rfll/Scheduler/blob/master/docs/Hover%20options.png)

Book an Appointment
!["Book an Appointment"](https://github.com/rfll/Scheduler/blob/master/docs/Book%20an%20appointment.png)

Enter Appointment Information and Edit Appointment
!["Enter and Edit"](https://github.com/rfll/Scheduler/blob/master/docs/Enter%20info:Edit.png)

Booked Appointment
!["Booked Appointment"](https://github.com/rfll/Scheduler/blob/master/docs/Booked%20appointment:spots%20update.png)

Delete an Appointment
!["Delete Appointment"](https://github.com/rfll/Scheduler/blob/master/docs/Delete%20confirmation.png)


## Setup

#### Scheduler API Setup
Setup the scheduler server https://github.com/lighthouse-labs/scheduler-api

#### Interview Scheduler Setup
Install dependencies with `npm install`.


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Cypress Test Framework

```sh
npm run cypress
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
