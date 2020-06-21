import React from "react";

function Diagram() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div clasName="row">
          <div clasName="col-lg-12 text-center">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
              About
            </h2>
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-paw"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="text-left lead mb-0 ti-text-about">
              Like you, we love pets and care about their welfare. That’s why we
              created Toto Initiative - a free platform for foster parents to
              post pets available for adoption, and communicate with aspiring
              adoptive parents.
              <br />
              <br />
              You already devote a lot of your time and resources to make a
              difference - you shouldn’t have to pay for resources that can help
              you place your foster babies in their forever homes. Contact us
              today to get started with your own Toto Initiative site.
            </div>
            <br />
            <h3 class="text-left text-uppercase text-secondary mb-0">
              Let us help you help them!
            </h3>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="img/about/doggyselfie.jpeg"
              alt="doggyselfie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diagram;
