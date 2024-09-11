"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDataContext } from "../../context/ContextProvider";
import moment from "moment";

const AppointmentPage = ({ params }) => {
  const router = useRouter();
  const { specialtiesData, userState } = useDataContext();

  const { id } = params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTimeSlot, setActiveTimeSlot] = useState(null);
  const [slots, setSlots] = useState("");

  useEffect(() => {
    const allDoctorsList = specialtiesData.flatMap(
      (specialty) => specialty.doctors
    );
    const selectedDoc = allDoctorsList.find((element) => element.id == id);
    if (selectedDoc && selectedDoc.slots) {
      setSlots(selectedDoc.slots);
    }
  }, [id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setActiveTimeSlot(null);
  };

  const handleTimeSlotClick = (time) => {
    setActiveTimeSlot(time);
  };

  const handleBookingClick = async () => {
    const dateStr = moment(selectedDate).format("YYYY-MM-DD");
    const payload = {
      doctor_id: id,
      date: dateStr,
      time: activeTimeSlot,
      patient_id: userState.id,
      phoneNumber: userState.phoneNumber,
      mrn: null,
    };
    console.log("payload", payload);
    try {
      const response = await bookAppointment(payload); // Send login request
      if (response.success) {
      } else {
        console.error("booking failed:", response.message);
      }
    } catch (error) {
      console.error("Error sending OTP:", error); // Handle errors
    }
  };

  return (
    <div className="container bg-base-200 h-auto  lg:h-[90vh] lg:px-20 mx-auto">
      <div className=" flex flex-col gap-4 rounded w-full p-5">
        <div className="text-center text-xl">Get an Appointment</div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Date</p>
          <div className="input md:w-1/3 input-bordered flex items-center gap-2">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="w-full p-2 border-none outline-none"
              placeholderText="Select a date"
              dateFormat="MMMM d, yyyy h:mm:ss aa"
              // dateFormat="MMMM d, yyyy"
              minDate={new Date()}
            />
          </div>
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-sm">Available Time Slots</p>
          <div className="card bg-base-100 rounded-xl w-full">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full py-3 px-3">
                <p className="mb-2 text-xs">Morning</p>
                <div className="grid grid-cols-3 gap-5">
                  {slots.morningSlots && slots.morningSlots.length > 0 ? (
                    slots.morningSlots.map((slot, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm md:btn-md btn-outline text-xs ${
                          slot.disabled
                            ? "btn-disabled"
                            : activeTimeSlot === slot.time
                            ? "btn-accent btn-active"
                            : ""
                        }`}
                        onClick={() =>
                          !slot.disabled && handleTimeSlotClick(slot.time)
                        }
                      >
                        {slot.time}
                      </button>
                    ))
                  ) : (
                    <p>No slots available</p>
                  )}
                </div>
              </div>

              <div className="w-full py-3 px-3">
                <p className="mb-2 text-xs">Afternoon</p>
                <div className="grid grid-cols-3 gap-3">
                  {slots.afternoonSlots && slots.afternoonSlots.length > 0 ? (
                    slots.afternoonSlots.map((slot, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm md:btn-md btn-outline text-xs ${
                          slot.disabled
                            ? "btn-disabled"
                            : activeTimeSlot === slot.time
                            ? "btn-accent btn-active"
                            : ""
                        }`}
                        onClick={() =>
                          !slot.disabled && handleTimeSlotClick(slot.time)
                        }
                      >
                        {slot.time}
                      </button>
                    ))
                  ) : (
                    <p>No slots available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-end">
          <button
            className={`btn w-full md:w-auto btn-warning ${
              selectedDate && activeTimeSlot ? "" : "btn-disabled"
            }`}
            onClick={() => handleBookingClick()}
            disabled={!selectedDate || !activeTimeSlot}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
