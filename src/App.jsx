import TicketSelection from "./components/TicketSelection";
import AttendeeForm from "./components/ AttendeeForm";
import Ticket from "./components/Ticket";


export default function App() {
  return (
    <div className="App">
     
       <TicketSelection />
        {<AttendeeForm />}
        <Ticket />
      
    </div>
  );
}
