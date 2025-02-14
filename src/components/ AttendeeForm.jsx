import "../styles/AttendeeForm.css";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
function AttendeeForm() {
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
                <h3>Attendee Details</h3>
                <p>step2/3</p>
              </div>
              {/* div holding the progress bar */}
              <div className="progressBar">
                {/* progress bar */}
                <div></div>
              </div>
              {/* section for picture upload */}
            </section>
            <section className="uploadHolder">
              <div>
                <p className="upload">Upload profile picture</p>

                <div className="innerboxholder">
                  {/* dark box */}
                  <div className="innerbox"></div>
                  {/* lighter box */}
                  <div className="lightbox">
                    <p>Drag & drop or click to upload</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="bar">
              <div></div>
            </div>

            <section>
              <form action="submit">
                {/* for name */}
                <div className="nameLabel">
                  <label htmlFor="name">Enter your name</label>
                </div>
                <div className="inputHolder">
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g Cynosure Enyinnaya"
                    required
                  />
                </div>

                {/* for email */}
                <div className="emailLabel">
                  <label htmlFor="name">Enter your email *</label>
                </div>
                <div className="inputHolder">
                  <input
                    type="email"
                    id="name"
                    placeholder="e.g: cynosureenyinnaya@gmail.com"
                    required
                  />
                </div>

                {/* for text area */}
                <div className="textLabel">
                  <label htmlFor="textarea">Special request?</label>
                </div>
                <div className="textHolder">
                  <textarea
                    name="textarea"
                    id="textarea"
                    placeholder="Ask anything"
                  ></textarea>
                </div>
              </form>
            </section>
            {/* div holding the two buttons */}
            <div className="buttonHolder">
              <button>Cancel</button>
              <button>Next</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AttendeeForm;
