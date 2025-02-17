import { useEffect, useState } from "react";
import "../styles/Ticket.css";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
import ticket from "../assets/image/ticketBg.png";

function Ticket() {
    const [ticketData, setTicketData] = useState(null);
    const [attendeeData, setAttendeeData] = useState(null);

    useEffect(() => {
        // Get ticket and attendee data from localStorage
        const storedTicketData = localStorage.getItem('ticketData');
        const storedAttendeeData = localStorage.getItem('attendeeFormData');

        if (storedTicketData) {
            setTicketData(JSON.parse(storedTicketData));
        }
        if (storedAttendeeData) {
            setAttendeeData(JSON.parse(storedAttendeeData));
            console.log(attendeeData)
        }
    }, []);

    const handleBookAnother = () => {
        window.location.href = '/'; // or your booking page route
    };

    const handleDownload = () => {
        window.print(); // You can implement a more sophisticated download logic
    };

    if (!ticketData || !attendeeData) {
        return <div className="loading">Loading ticket...</div>;
    }
 
    return (
        <div>
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
                                <h3>Ready</h3>
                                <p>step3/3</p>
                            </div>
                            <div className="progressBar">
                                <div></div>
                            </div>
                        </section>

                        <section className="ticketHolder">
                            <div>
                                <div className="bookedtitle">
                                    <h1>Your Ticket is Booked!</h1>
                                    <p>Check your email for a copy or you can download</p>
                                </div>

                                <div className="eachTiket">
                                    <div className="bgImage">
                                        <img src={ticket} alt="ticket background"/>
                                    </div>
                                    <div className="ticketDetailContainer">
                                        <div className="ticketDetails">
                                            <div className="ticketTtle">
                                                <div className="ttle">
                                                    <h2>Techember Fest &quot; 25</h2>
                                                </div>
                                                <div className="LocationT">
                                                    <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                                                    <p>📅 March 15, 2025 | 7:00 PM</p>
                                                </div>
                                            </div>
                                            <div className="avaterHolder">
                                                {attendeeData?.profileImageData ? (
                                                    <img
                                                        src={attendeeData.profileImageData}
                                                        alt="profile"
                                                    />
                                                ) : null}
                                            </div>
                                            <div className="detailsFromForm">
                                                <div className="nameEmailHolder">
                                                    <div className="userName">
                                                        <p>Enter your name</p>
                                                        <p>{attendeeData?.name || 'N/A'}</p>
                                                    </div>
                                                    <div className="userEmail">
                                                        <p>Enter your email *</p>
                                                        <p>{attendeeData?.email || 'N/A'}</p>
                                                    </div>
                                                </div>
                                                <div className="ticketTypeHolder">
                                                    <div className="type">
                                                        <p>Ticket Type:</p>
                                                        <p>{ticketData?.ticketType || 'N/A'}</p>
                                                    </div>
                                                    <div className="quantity">
                                                        <p>Ticket for :</p>
                                                        <p>{ticketData?.quantity || '0'}</p>
                                                    </div>
                                                </div>
                                                <div className="specialRequest">
                                                    <p>Special request?</p>
                                                    <p>{attendeeData?.specialRequest || 'None'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="bar">
                            <div></div>
                        </div>

                        <div className="buttonHolder">
                            <button onClick={handleBookAnother}>Book Another Ticket</button>
                            <button onClick={handleDownload}>Download Ticket</button>
                        </div>
                    </main>
                </div>
            </div>
        </div>

        
    );
}

export default Ticket;