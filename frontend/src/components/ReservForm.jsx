import React from "react";

const ReservForm = () => {
  const generateTimsSlot = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";

      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";

      slots.push(
        `${startHour}:00 ${startPeriod} - ${endHour}: 00 ${endPeriod}`
      );
    }
    return slots;
  };
  return (
    <div>
      <form>
        <h2>Book a Reservaation</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone number" />
        <input type="date" required lang="en" />
        <select required>
          <option value="">Select Time</option>
          {generateTimsSlot().map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <select required>
          {[
            ...Array(10)
              .keys()
              .map((el) => (
                <option key={el + 1} value={el + 1}>
                  {el + 1} Guest(s)
                </option>
              )),
          ]}
        </select>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ReservForm;
