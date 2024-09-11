import Link from "next/link";
import { usePathname } from "next/navigation";

const Doctors = ({ doctorsList }) => {
  const pathname = usePathname();
  console.log("doctorsList", doctorsList);

  return (
    <div className="  w-full container mx-auto">

    <div className="p-5 md:text-xl text-lg">
      <p>Department Name</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-48">
        {doctorsList?.map((doctor, index) => (
          <div
            key={index}
            className="bg-base-100 rounded-xl flex flex-col items-center justify-between p-5 gap-5"
          >
            <div className="w-full bg-accent glass bg-opacity-30 rounded-xl  flex items-center justify-center">
              <img
                className="object-contain max-w-full max-h-full"
                src={doctor.photo || "/img/med.png"}
                alt={`Photo of ${doctor.name}`}
              />
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-md font-semibold">{doctor.name}</p>
                <p className="text-[10px] font-light">
                  {doctor.specialization}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-md font-semibold">{doctor.availableDays}</p>
                <p className="text-[10px] font-light">{doctor.availableTime}</p>
              </div>
            </div>
            <div className="flex items-center w-full justify-between gap-1">
              <Link href={`/appointment-booking/${doctor.id}`}>
                <button className="btn btn-warning">Booking Appointment</button>
              </Link>
              <Link href={`${pathname}/ViewProfile`}>
                <button className="btn btn-base-200 btn-outline">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
