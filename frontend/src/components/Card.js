import React from "react";

const Card = ({ fooditem }) => {
  return (
    <div>
      <div className="row p-2" id ="row1">
        <div className="card  shadow-lg" style={{ width: "13rem" }}>
          <img src="\images\deluxeveggie.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Delux Veggie</h5>
            <div>
              <span href="z" className="btn2 btn-success">
                Add
              </span>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="card  shadow-lg" style={{ width: "13rem" }}>
          <img src="\images\extravagenza.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Extra Vagenza</h5>
            <div>
              <span href="z" className="btn2 btn-success">
                Add
              </span>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card  shadow-lg" style={{ width: "13rem" }}>
          <img src="\images\peppypaneer.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Peppy Paneer</h5>
            <div>
              <span href="z" className="btn2 btn-success">
                Add
              </span>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="card  shadow-lg" style={{ width: "13rem" }}>
          <img src="\images\crispyveg.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Crispy Veg</h5>
            <div>
              <span href="z" className="btn2 btn-success">
                Add
              </span>
            </div>
          </div>
        </div>

        {/* card5 */}

        <div className="card  shadow-lg" style={{ width: "13rem" }}>
          <img src="\images\makhaniburst.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Veg Makhani Burst</h5>
            <div>
              <span href="z" className="btn2 btn-success">
                Add
              </span>
            </div>
          </div>
        </div>

        {/* card 6 */}
        <div className="card  shadow-lg" style={{ width: "13rem" }}>
          <img src="\images\vegwhopper.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Veg Whopper</h5>
            <div>
              <span href="z" className="btn2 btn-success">
                Add
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
