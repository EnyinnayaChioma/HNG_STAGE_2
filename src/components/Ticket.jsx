import "../styles/Ticket.css";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
import ticket from "../assets/image/ticketBg.png";
function Ticket() {
  return (
    <div>
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
                  <li>My Tickets</li>
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
                <h3>Ready</h3>
                <p>step3/3</p>
              </div>
              {/* div holding the progress bar */}
              <div className="progressBar">
                {/* progress bar */}
                <div></div>
              </div>
            </section>

            <section className="ticketHolder">
              <div>
                <div className="bookedtitle">
                  <h1>Your Ticket is Booked!</h1>
                  <p>Check your email for a copy or you can download</p>
                </div>

                {/* div holding ticket */}

                <div className="eachTiket">
                  <div>
                    {/* div holding background for ticket */}
                    <div className="bgImage">
                      <img src={ticket} alt="" />
                    </div>
                    {/* container  */}
                    <div className="ticketDetailContainer">
                      {/* user details */}
                      <div className="ticketDetails">
                        {/* ticket title */}
                        <div className="ticketTtle">
                          <div>
                          <h2>Techember Fest &quot; 25</h2>
                          </div>
                          <div className="LocationT">
                          <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                          <p>📅 March 15, 2025 | 7:00 PM</p>
                          </div>
                        </div>
                        {/* avater */}
                        <div className="avaterHolder">
                          <img src="" alt="" />
                        </div>
                        {/* details from form */}
                        <div className="detailsFromForm">
                          {/* div holding name and email deets from form */}
                          <div className="nameEmailHolder">
                            {/* name */}
                            <div className="userName">
                              <p>Enter your name</p>
                              <p>Cynosure </p>
                            </div>
                            {/* email */}
                            <div className="userEmail">
                              <p>Enter your email *</p>
                              <p>cynosure@gmail.com</p>
                            </div>
                          </div>
                            {/* div holding ticket type and quantity */}
                            <div className="ticketTypeHolder">
                            {/* type */}
                            <div className="type">
                              <p>Ticket Type:</p>
                              <p>VIP</p>
                            </div>
                            {/* quantity */}
                            <div className="quantity">
                              <p>Ticket for :</p>
                              <p>1</p>
                            </div>
                          </div>
                          {/* div holding special request */}
                          <div className="specialRequest">

                            
                              <p>Special request?</p>
                              <p>Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</p>
                            
                          </div>
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

            {/* div holding the two buttons */}
            <div className="buttonHolder">
              <button>Book Another Ticket</button>
              <button>Download Ticket</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
