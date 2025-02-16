import "../styles/TicketSelection.css";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router";

// Simple Toast Component
const Toast = ({ message, onClose }) => (
    <div
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease-out'
        }}
    >
        {message}
    </div>
);

function TicketSelection() {
    const [ticketType, setTicketType] = useState("");
    const navigate = useNavigate();
    const [ticketType2, setTicketType2] = useState("");
    const [ticketType3, setTicketType3] = useState("");
    const [quantity, setQuantity] = useState("one");
    const [showToast, setShowToast] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleTicketType1 = (e) => {
        setTicketType(e);
        setSelectedTicket("FREE");
    };

    const handleTicketType2 = (e) => {
        setTicketType2(e);
        setSelectedTicket("VIP");
    };

    const handleTicketType3 = (e) => {
        setTicketType3(e);
        setSelectedTicket("VVIP");
    };

    const handleNextClick = () => {
        // Save to localStorage
        const ticketData = {
            ticketType: selectedTicket,
            quantity: quantity,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('ticketData', JSON.stringify(ticketData));
        setShowToast(true);

        // Navigate after delay
        setTimeout(() => {
            navigate("/attendanceform");
        }, 500);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <>
            <div className="container">
                <div className="holder">
                    <header className="header">
                        <nav>
                            <div>
                                <img src={logo} alt="ticketlogo"/>
                                <img src={logoText} alt="ticketlogotext" className="logotext"/>
                            </div>
                            <div className="list">
                                <ul>
                                    <li>Events</li>
                                    
                                        <li>My Tickets</li>
                                
                                    <li>About</li>
                                    <li>Project</li>
                                </ul>
                            </div>
                            <div>
                                <button className="navButton">My Tickets</button>
                            </div>
                        </nav>
                    </header>

                    <main>
                        <section>
                            <div className="ticketTitle">
                                <h3>Ticket Selection</h3>
                                <p>step1/3</p>
                            </div>
                            <div className="progressBar">
                                <div></div>
                            </div>
                        </section>
                        <section className="eventDeetHolder">
                            <div className="eventDetails">
                                <div className="techember">
                                    <p>Techember Fest &quot;25</p>
                                </div>

                                <div className="secureSpot">
                                    <p>
                                        Join us for an unforgettable experience at <br />📍[Event Name]!
                                        Secure your spot now.
                                    </p>
                                </div>
                                <div className="timeDetails">
                                    <span className="locatonIcon"></span>
                                    <p>
                                        [Event Location] <span>|| </span>March 15, 2025|7:00pm
                                    </p>
                                </div>
                            </div>
                        </section>
                        <div className="bar">
                            <div></div>
                        </div>

                        <section className="ticketType">
                            <div>
                                <p>Select Ticket Type:</p>
                            </div>
                            <div className="eachTicket">
                                <div className={`free box ${selectedTicket === 'FREE' ? 'selected' : ''}`}
                                     onClick={() => handleTicketType1("one")}>
                                    <div>
                                        <h4>FREE</h4>
                                        <p className="type">FREE</p>
                                        <p className="numberz">20/52</p>
                                    </div>
                                </div>
                                <div className={`vip box ${selectedTicket === 'VIP' ? 'selected' : ''}`}
                                     onClick={() => handleTicketType2("two")}>
                                    <div>
                                        <h4>$150</h4>
                                        <p className="type">VIP ACCESS</p>
                                        <p className="numberz">20/52</p>
                                    </div>
                                </div>
                                <div className={`vvip box ${selectedTicket === 'VVIP' ? 'selected' : ''}`}
                                     onClick={() => handleTicketType3("three")}>
                                    <div>
                                        <h4>$100</h4>
                                        <p className="type">VVIP ACCESS</p>
                                        <p className="numberz">20/52</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="labelHolder">
                                <label htmlFor="ticket"> Number of Tickets</label>
                            </div>
                            <div className="selectHolder">
                                <select name="ticket" id="ticket" onChange={handleQuantity}>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                    <option value="four">4</option>
                                </select>
                            </div>
                        </section>

                        <div className="buttonHolder">
                            <button>Cancel</button>
                            <button
                                onClick={handleNextClick}
                                disabled={!selectedTicket}
                                style={{
                                    opacity: selectedTicket ? 1 : 0.5,
                                    cursor: selectedTicket ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </main>
                </div>
            </div>
            {showToast && <Toast message="Ticket selection saved successfully!" />}
        </>
    );
}

export default TicketSelection;