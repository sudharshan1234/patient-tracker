import React from 'react';
import { useNavigate } from 'react-router-dom';




const AppointmentsList = ({ appointments }) => {
 const navigate = useNavigate();


 const handleRowClick = (id) => {
   navigate(`/medical-history/${id}`);
 };


 return (
   <section className="container mx-auto p-6 font-mono">
     <h2 className="text-2xl font-bold mb-4">Patients</h2>
     <div className="overflow-x-auto">
       <table className="min-w-full border border-gray-300">
         <thead>
           <tr>
             <th className="p-2 border">ID</th>
             <th className="p-2 border">Patient Name</th>
             <th className="p-2 border">Date of Birth</th>
             <th className="p-2 border">Patient Contact</th>
             <th className="p-2 border">Date of visit</th>
             <th className="p-2 border">Purpose of visit</th>
           </tr>
         </thead>
         <tbody>
           {appointments.map((appointment, index) => (
             <tr
               key={appointment._id}
               className="cursor-pointer hover:bg-gray-100"
               onClick={() => handleRowClick(appointment.patient._id)}
             >
               <td className="p-2 border">{index+1}</td>
               <td className="p-2 border">{appointment.patient.name}</td>
               <td className="p-2 border">{appointment.patient.dateOfBirth}</td>
               <td className="p-2 border">{appointment.patient.contact}</td>
               <td className="p-2 border">{appointment.date}</td>
               <td className="p-2 border">{appointment.purpose}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </section>
 );
};


export default AppointmentsList;