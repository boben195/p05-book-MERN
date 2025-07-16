import React from "react";

const ReservForm = () => {
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
