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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Book a Reservaation
        </h2>
        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-emerald-300"
          required
        />
        <input
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-emerald-300"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          type="tel"
          placeholder="Phone number"
          className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-emerald-300"
          required
        />
        <input
          name="date"
          value={formData.date}
          type="date"
          className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-emerald-300"
          required
          lang="en"
        />
        <select
          name="time"
          value={formData.time}
          className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-emerald-300"
          required
        >
          <option value="">Select Time</option>
          {generateTimsSlot().map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <select
          name="guests"
          value={formData.guests}
          className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-emerald-300"
          required
        >
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
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ReservForm;
