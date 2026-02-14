import React, { useState, useRef, useEffect } from "react";

import image1 from './assets/kowsishan8.jpeg';
import image2 from './assets/kowsishan20.jpeg';
import image3 from './assets/kowsishan16.jpeg';
import image4 from './assets/kowsishan11.jpeg';
import image5 from './assets/kowsishan6.jpeg';
import image6 from './assets/kowsishan25.jpeg';
import image7 from './assets/kowsishan4.jpeg';
import image8 from './assets/kowsishan2.jpeg';
import image9 from './assets/kowsishan15.jpeg';
import image10 from './assets/kowsishan1.jpeg';
import image11 from './assets/kowsishan7.jpeg';
import image12 from './assets/kowsishan13.jpeg';
import image13 from './assets/kowsishan17.jpeg';
import image14 from './assets/kowsishan24.jpeg';
import image15 from './assets/kowsishan3.jpeg';
import image16 from './assets/kowsishan5.jpeg';
import image17 from './assets/kowsishan22.jpeg';


import surpriseImage from './assets/kowsishan26.jpeg'; 
import romanticSong from './assets/romantic_song.mp3';   

const HERO_IMAGE = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajVnbHR6MXB1OTE1amFlY3BxMzE2NTlqd25ua2MwMW9ieTFmbHh3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Kc1m0sCezkxOsAYFEl/giphy.gif";

const MEMORIES = [
  { id: 1, img: image1, caption: "First Date ☕" },
  { id: 2, img: image2, caption: "Crazy Selfie 🤪" },
  { id: 3, img: image3, caption: "Best Trip ✈️" },
  { id: 4, img: image4, caption: "My Favorite ❤️" },
  { id: 5, img: image5, caption: "Eyes that speak volumes 👀" },
  { id: 6, img: image6, caption: "Holding hands forever 🤝" },
  { id: 7, img: image7, caption: "Love you to the moon 🌙" },
  { id: 8, img: image8, caption: "My favorite distraction ✨" },
  { id: 9, img: image9, caption: "My Permanent Happiness 💖" },
  { id: 10, img: image10, caption: "Candid Moments 📸" },
  { id: 11, img: image11, caption: "My World in one pic 🌎" },
  { id: 12, img: image12, caption: "That look you give me... 🙈" },
  { id: 13, img: image13, caption: "You are my Sunshine ☀️" },
  { id: 14, img: image14, caption: "Just you, me, and a lifetime to go ⏳" },
  { id: 15, img: image15, caption: "My heart beats only for you 💓" },
  { id: 16, img: image16, caption: "Holding your hand is my favorite feeling 🤝" },
  { id: 17, img: image17, caption: "Stuck with me forever now! 😜" },
];

const TRANSITION_TEXTS = [
  "My Love 💗",
  "My Everything ✨",
  "My Forever ♾️",
  "My Kowsi 💜",
  "I Love You! 💖"
];

const FallingRoses = () => {
    const roses = [];
    const count = 40; 
    for (let i = 0; i < count; i++) {
      const item = Math.random() > 0.5 ? '💜' : '🌹';
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 2 + 3}s`, 
        animationDelay: `${Math.random() * 5}s`, 
        fontSize: `${Math.random() * 1.5 + 1}rem`, 
        animationIterationCount: 'infinite' 
      };
      roses.push(<span key={i} className="falling-item" style={style}>{item}</span>);
    }
    return <div className="rose-shower-overlay">{roses}</div>;
};

const SurpriseConfetti = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
        setIsActive(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isActive) return null;

  const particles = [];
  const colors = ['#b84dff', '#ff4d6d', '#ffd700', '#ff0000', '#ffffff']; 

  for (let i = 0; i < 50; i++) {
    const style = {
      '--angle': `${Math.random() * 360}deg`, 
      '--distance': `${Math.random() * 200 + 150}px`, 
      '--color': colors[Math.floor(Math.random() * colors.length)],
      '--size': `${Math.random() * 12 + 6}px`,
      '--delay': `${Math.random() * 0.3}s`, 
      '--rotation': `${Math.random() * 720 - 360}deg` 
    };
    const className = Math.random() > 0.5 ? "confetti-piece circle" : "confetti-piece square";
    particles.push(<i key={i} className={className} style={style}></i>);
  }
  return <div className="confetti-container">{particles}</div>;
};


function App() {
  const [currentPage, setCurrentPage] = useState("proposal");
  const [noBtnPosition, setNoBtnPosition] = useState({});
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false); 
  const [noText, setNoText] = useState("No");
  const [showRoseShower, setShowRoseShower] = useState(false);
  const [transitionTextIndex, setTransitionTextIndex] = useState(-1);

  const audioRef = useRef(new Audio(romanticSong));

  const handleNoHover = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    setNoBtnPosition({ position: "absolute", left: `${x}px`, top: `${y}px` });

    const phrases = ["Are you sure?", "Think again!", "Last chance!", "Don't do this!", "Click Yes!"];
    setNoText(phrases[Math.floor(Math.random() * phrases.length)]);
  };

  const handleYesClick = () => {
    setShowRoseShower(true);
    audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    audioRef.current.loop = true; 

    setTransitionTextIndex(0); 
    setTimeout(() => setTransitionTextIndex(1), 2500); 
    setTimeout(() => setTransitionTextIndex(2), 5000); 
    setTimeout(() => setTransitionTextIndex(3), 7500); 
    setTimeout(() => setTransitionTextIndex(4), 10000); 

    setTimeout(() => {
        setShowRoseShower(false);
        setTransitionTextIndex(-1); 
        setCurrentPage("success");
    }, 13500); 
  };

  return (
    <div className="container">
      
      {showRoseShower && (
        <>
            <FallingRoses />
            {transitionTextIndex >= 0 && transitionTextIndex < TRANSITION_TEXTS.length && (
                <div className="transition-text-container">
                    <h2 key={transitionTextIndex} className="glowing-zoom-text">
                        {TRANSITION_TEXTS[transitionTextIndex]}
                    </h2>
                </div>
            )}
        </>
      )}


      {currentPage === "proposal" && !showRoseShower && (
        <div className="proposal-section fade-in">
          <img src={HERO_IMAGE} alt="Purple Heart" className="header-img" />
          <h1 className="main-title">Will you be my Valentine?</h1>

          <div className="btn-group">
            <button className="btn yes-btn" onClick={handleYesClick}>
              YES! 💜
            </button>
            <button
              className="btn no-btn"
              style={noBtnPosition}
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
            >
              {noText} 💔
            </button>
          </div>
        </div>
      )}

      {currentPage === "success" && (
        <div className="success-section fade-in">
          
          <div className="celebration-header">
            <img
              src="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"
              alt="Success"
              className="success-gif"
            />
            <h1>Yay! Best Date Ever! 💜</h1>
          </div>

          <hr className="divider" />

          <div className="memories-container">
            <h2>Our Sweetest Memories</h2>
            <div className="memory-grid">
              {MEMORIES.map((memory) => (
                <div key={memory.id} className="memory-card">
                  <div className="polaroid-frame">
                    <img src={memory.img} alt={memory.caption} />
                    <div className="caption">{memory.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          <div className="gift-section">
            <h2>I have a surprise for you...</h2>
            {!isGiftOpen ? (
              <div className="gift-box" onClick={() => setIsGiftOpen(true)}>
                🎁
                <p className="click-hint">(Click me)</p>
              </div>
            ) : (
              <div className="gift-reveal pop-animation">
                <h3>💜 My Gifts For You 💜</h3>
                <ul>
                  <li>🌹 A Red Rose</li>
                  <li>🍫 Lot of Chocolates</li>
                  <li>🎬 A Movie Date</li>
                  <li>🥺 Endless Love</li>
                </ul>
              </div>
            )}
          </div>

          <hr className="divider" />

          <div className="letter-section">
             <button className="letter-btn" onClick={() => setIsLetterOpen(true)}>
               💌 Open My Love Letter
             </button>
          </div>

          <div className="surprise-section">
             <button className="surprise-btn" onClick={() => setIsSurpriseOpen(true)}>
               🤫 One Last Surprise... (Click Me)
             </button>
          </div>

        </div>
      )}

      {isLetterOpen && (
        <div className="modal-overlay" onClick={() => setIsLetterOpen(false)}>
          <div className="paper" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setIsLetterOpen(false)}>&times;</span>
            <h3>My Dearest,</h3>
            <p>
              Finally, you clicked YES! I have been waiting for this moment.
              You are the most special person in my life.
            </p>
            <p>
              Every moment with you is a beautiful memory. I promise to annoy you, 
              love you, and support you forever.
            </p>
            <p>Happy Valentine's Day, my love! 💜</p>
            <p className="signature">
              <strong>Forever Yours,<br />Shanmuganathan</strong>
            </p>
          </div>
        </div>
      )}

      {isSurpriseOpen && (
        <div className="modal-overlay" onClick={() => setIsSurpriseOpen(false)}>
          <div className="surprise-content pop-animation" onClick={(e) => e.stopPropagation()}>
            
            <SurpriseConfetti /> 
            
            <span className="close-btn-white" onClick={() => setIsSurpriseOpen(false)}>&times;</span>
            <img src={surpriseImage} alt="Special Surprise" className="surprise-img" />
            <h3>You are my Everything! 💖</h3>
            <h3>We are Married 🫂💗💍</h3>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
