import React from "react";

interface Props {
  day: string;
  runDays: string[];
}

const RunDayHighlighter: React.FC<Props> = ({ day, runDays }) => {
  const isRunDay = runDays.includes(day);

  return (
    <span style={{ color: isRunDay ? 'green' : 'red' }}>
      {day}
    </span>
  );
};

export default RunDayHighlighter;
