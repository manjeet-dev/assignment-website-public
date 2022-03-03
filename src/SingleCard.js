import React from "react";


const SingleCard = ({cardID = "portfolioModal1",imgName="cabin.png",modalTitle="Log Cabin"}) => (
  <div className="modalWrap">
    <div
      className="portfolio-item mx-auto"
      data-bs-toggle="modal"
      data-bs-target={"#" + cardID}
    >
      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <div className="portfolio-item-caption-content text-center text-white">
          <i className="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <img
        className="img-fluid"
        src={"assets/img/portfolio/" + imgName}
        alt="..."
      />
    </div>
    <div
      className="portfolio-modal modal fade"
      id={cardID}
      tabindex="-1"
      aria-labelledby={cardID}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {modalTitle} 
                  </h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img
                    className="img-fluid rounded mb-5"
                    src={"assets/img/portfolio/"+ imgName}
                    alt="..."
                  />
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    className="btn btn-primary"
                    href="#!"
                    data-bs-dismiss="modal"
                  >
                    <i className="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SingleCard;
