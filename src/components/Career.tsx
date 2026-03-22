import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Product Support Consultant</h4>
                <h5>Zenoti</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Lead point of contact bridging frontline support and product engineering. Lead P1 incident command and war room efforts. Analyze system logs, traces, and performance metrics, and collaborate with DevOps/DB teams for fast resolutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Support Consultant</h4>
                <h5>Morae</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Provided advanced technical support for enterprise clients using ServiceNow. Debugged complex application issues by analyzing HAR files, network traces, and REST APIs. Managed Cloud administration tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Support Engineer</h4>
                <h5>Dell Technologies</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Resolved over 12,000 technical issues across IaaS, Web Applications, and Office 365 environments. Led training sessions, mentored junior team members, and leveraged data analysis to optimize IT support operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Branch Manager</h4>
                <h5>Sigma Slotting Corporation</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Led and mentored a cross functional team of 11 employees across technical operations and sales. Applied analytical problem solving to streamline operations and ensure timely service delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
