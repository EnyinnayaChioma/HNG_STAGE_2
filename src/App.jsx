import TicketSelection from "./components/TicketSelection";
import AttendeeForm from "./components/ AttendeeForm";
import Ticket from "./components/Ticket";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path="attendanceform" element={<AttendeeForm />} />
        <Route path ="ticket" element={ <Ticket />}/>
      </Routes>
    </div>
  );
}
