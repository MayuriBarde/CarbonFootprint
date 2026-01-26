import img1 from "../assets/img2.webp";
import img2 from "../assets/img7.webp";
import img3 from "../assets/img3.webp";
import './Home.css'

function Home() {
  return (
    <>
    <div className="home-container">
      <div
        id="homeCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{ objectFit: "cover" }}
              alt="Carbon Awareness"
            />
            <div className="carousel-caption d-md-block text-start">
              <h1>Track Today. <br /> Sustain Tomorrow.</h1>
              <p>Understand your carbon footprint, <br /> make smarter choices, <br /> and contribute to a greener future <br /> with data-driven insights.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              style={{ objectFit: "cover" }}
              alt="Sustainability"
            />
            <div className="carousel-caption d-md-block text-start">
              <h1>Analyze & Reduce <br /> Emissions</h1>
              <p>Make informed decisions for a  <br />sustainable future.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              style={{ objectFit: "cover" }}
              alt="Green Future"
            />
            <div className="carousel-caption d-md-block text-start">
              <h1>Build a Greener <br /> Tomorrow</h1>
              <p>Small steps today lead to a cleaner planet.</p>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>

    
    <section className="home-section why-section">
        <h2>Why SustainX?</h2>
        <p>
          Climate change is one of the biggest challenges of our time.
          SustainX helps you understand how your daily activities contribute
          to carbon emissions and guides you toward more sustainable choices.
        </p>
      </section>


      <section className="home-section features-section">
        <h2>Key Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Carbon Calculator</h3>
            <p>
              Calculate your carbon footprint based on transport, energy,
              and lifestyle habits.
            </p>
          </div>

          <div className="feature-card">
            <h3>Dashboard & Analytics</h3>
            <p>
              Visualize your emissions with charts and track your progress
              over time.
            </p>
          </div>

          <div className="feature-card">
            <h3>Reports & History</h3>
            <p>
              Maintain a history of your data and generate reports for
              awareness and improvement.
            </p>
          </div>

          <div className="feature-card">
            <h3>Learning Resources</h3>
            <p>
              Learn about sustainability, climate science, and best practices
              for reducing emissions.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>


      <section className="home-section steps-section ">
        <h2>How It Works</h2>

        <div className="steps-grid">
          <div className="step">
            <span>1</span>
            <p>Sign up and log in to your account</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Enter your daily activity data</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Analyze your carbon footprint</p>
          </div>

          <div className="step">
            <span>4</span>
            <p>Take informed steps toward sustainability</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>


      <section className="home-section impact-section">
        <h2>Your Actions Matter</h2>
        <p>
          Even small changes can create a significant environmental impact.
          By tracking and reducing your carbon footprint, you contribute
          to a healthier planet for future generations.
        </p>
      </section>


      <section className="home-section cta-section">
        <h2>Start Your Sustainability Journey Today</h2>
        <p>
          Measure your impact. Make better choices. Build a sustainable future.
        </p>
        <a href="/calculator" className="cta-button">
          Calculate Your Footprint
        </a>
      </section>
    </>
  );
}

export default Home;
