import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const daysArrayIterator = props.days.map(day => {
    return (
      <ul key={day.id}>
        <DayListItem
          name={day.name}
          spots={day.spots}
          selected={day.name === props.value}
          setDay={props.onChange} />
      </ul>
    )
  })
  return daysArrayIterator;
}