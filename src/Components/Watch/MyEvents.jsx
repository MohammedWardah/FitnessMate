import styles from "./MyEvents.module.css";

const MyEvents = () => {
  // Optional logic for calender days
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysInMonth = 31; // May has 31 days
  const firstDayOfMonth = new Date(2024, 4, 1).getDay(); // May 1, 2024, is a Wednesday

  // Adjust the first day to start from Monday
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const getCalendarDays = () => {
    const calendarDays = [];
    let dayCount = 1;

    // Create the days of the month
    for (let i = 0; i < daysInMonth; i++) {
      calendarDays.push(
        <div key={`day-${i}`} className={styles.day}>
          {dayCount}
        </div>
      );
      dayCount++;
    }

    // Create blank spaces for days after the last day of the month
    for (let i = 0; i < (7 - ((daysInMonth + adjustedFirstDay) % 7)) % 7; i++) {
      calendarDays.push(<div key={`blank-${i}`} className={styles.blank}></div>);
    }

    return calendarDays;
  };

  return (
    <section className={styles.events}>
      <div className={styles.event}>
        <span>Today 19:30</span>
        <span> - Meeting</span>
      </div>
      <div className={styles.event}>
        <span>Saturay</span>
        <span> - Go grocery shopping</span>
      </div>
      <div className={styles.event}>
        <span>Saturay</span>
        <span> - Clean the house</span>
      </div>
      <h1>May - 2024</h1>
      <div className={styles.calendar}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
        {Array(adjustedFirstDay)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-start-${index}`} className={styles.blank}></div>
          ))}
        {getCalendarDays()}
      </div>
    </section>
  );
};

export default MyEvents;
