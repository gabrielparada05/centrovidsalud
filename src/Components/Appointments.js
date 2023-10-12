import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

function Appointments() {
  
  const urlDentist = "https://tidycal.com/centromedicovidsalud/odontologia-marcos";
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  const handleAppDentist = () => {
    setShowRedirectMessage(true);
    setTimeout(() => {
    window.location.href=urlDentist;
    }, 1000); 
  };

  return (
    <div>
      {showRedirectMessage && (
        <div className="notification-message">
          Seras redireccionado a nuestro sistema de agendamiento de horas
        </div>
      )}
      <button
        className="text-appointment-btn"
        type="button"
        onClick={handleAppDentist}
      >
        <FontAwesomeIcon icon={faCalendarCheck} /> Agendar Odontología
      </button>
    </div>
  );
}

export default Appointments;
