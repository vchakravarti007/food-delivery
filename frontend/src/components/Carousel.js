import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://source.unsplash.com/random/300×300?burger"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption ">
            <h1>Get Hungry? Order Now..</h1>
            <Link to="login" class="btn1 btn-success">
              Order Now
            </Link>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/random/300×300?pastry"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h1>Get Hungry? Order Now..</h1>
            <button href="z" class="btn1 btn-success">
              Order Now
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/random/300×300?pizza"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h1>Get Hungry? Order Now..</h1>
            <button href="z" class="btn1 btn-success">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
