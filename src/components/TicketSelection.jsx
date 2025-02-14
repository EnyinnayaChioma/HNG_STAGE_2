// page for the ticket selection
import "../styles/TicketSelection.css";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
import { Link } from "react-router";

function TicketSelection() {
  return (
    <>
      <div className="container">
        <div className="holder">
          <header className="header">
            {/* navbar */}
            <nav>
              {/* div holding svg */}
              <div>
                <img src={logo} alt="ticketlogo" />
                <img src={logoText} alt="ticketlogotext" className="logotext" />
              </div>
              {/* div holding the list */}
              <div className="list">
                <ul>
                  <li>Events</li>
                 <Link to ='tickets'> <li>My Tickets</li></Link>
                  <li>About </li>
                  <li>Project</li>
                </ul>
              </div>
              {/* div holding nav button */}
              <div>
                {/* nav button */}
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
                    Join us for an unforgettable experience at   📍[Event Name]!
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
                <div className="free box">
                  <div>
                    <h4>$100</h4>
                    <p className="type">FREE</p>
                    <p className="numberz">20/52</p>
                  </div>
                </div>
                <div className="vip box">
                  <div>
                    <h4>$150</h4>
                    <p className="type">VIP ACCESS</p>
                    <p  className="numberz">20/52</p>
                  </div>
                </div>
                <div className="vvip box">
                  <div>
                    <h4>$100</h4>
                    <p  className="type">VVIP ACCESS</p>
                    <p  className="numberz">20/52</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="labelHolder">
              <label htmlFor="ticket"> Number of Tickets</label>
              </div>
              <div className="selectHolder">
              <select name="ticket" id="ticket">
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
              </select>
              </div>
            </section>

            <div className="buttonHolder">
              <button>Cancel</button>
              <button>Next</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default TicketSelection;
