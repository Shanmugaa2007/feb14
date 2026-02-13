import { useEffect } from "react";
import confetti from "canvas-confetti";
import python from './assets/python.jpg'

const AcceptedPage = () => {
  useEffect(() => {
    const duration = 10 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);

      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.6 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{minHeight:'max-content'}}>
      <div className="cards">
        <h1 className="heading">Yay!!! 💖</h1>

        <img
          src={python}
          alt="Celebration"
          className="image"
        />

        <p style={{ fontSize: "1.5rem", color: "#881337" }}>
          See you on the 14th! <br />
          (I knew you'd say yes 😉)
        </p>
      </div>
      <div className="our-memories">
        <div className="image-class">
            <img src={python} alt="image" className="memory-image" />
            <h1>About Image</h1>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPage;
