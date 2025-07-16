import React, { useState } from "react";

const ReservForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
  });
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
        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email"
        />
        <input
          name="phone"
          value={formData.phone}
          type="tel"
          placeholder="Phone number"
        />
        <input
          name="date"
          value={formData.date}
          type="date"
          required
          lang="en"
        />
        <select name="time" value={formData.time} required>
          <option value="">Select Time</option>
          {generateTimsSlot().map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <select name="guests" value={formData.guests} required>
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
