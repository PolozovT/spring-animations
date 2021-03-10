import mountains from './sample-1.jpg';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, useTrail, animated } from "react-spring";

const leftItemsList = ["pichka", "kurac", "ebeni"];
const rightItemsList = ["pichka", "kurac", "ebeni"];
const config = { mass: 5, tension: 2000, friction: 100, duration: 1 * 1000 };

const HomePage: FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {

  }, []);

  const { opacity, transform } = useSpring({
    opacity: isClicked ? 0.5 : 1,
    transform: isClicked ? "translateY(-100px)" : "translateY(0px)",
    config
  });

  const leftTrail = useTrail(leftItemsList.length, {
    config,
    opacity: isClicked ? 0.5 : 1,
    transform: isClicked ? "translateX(-1000px)" : "translateX(0px)",
    from: {
      transform: "translateX(-1000px)",
    }
  });

  const rightTrail = useTrail(rightItemsList.length, {
    config,
    opacity: isClicked ? 0.5 : 1,
    transform: isClicked ? "translateX(1000px)" : "translateX(0px)",
    from: {
      transform: "translateX(1000px)",
    }
  });

  const history = useHistory();
  const handleClick = () => {
    setIsClicked(!isClicked);
    // setTimeout(() => {
    //   history.push('/about');
    // }, 1 * 1000);
  }

  return (
    <>
      <animated.div
        className="row"
        style={{
          opacity,
          transform,
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto'
        }}
      >
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <div onClick={() => handleClick()}>
                <img src={mountains} />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="/">This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
          <div style={{ margin: '10px' }}>
            {leftTrail.map((props, index) => (
              <animated.div key={index} style={{ ...props }}>
                {leftItemsList[index]}
              </animated.div>
            ))}
          </div>
          <div style={{ margin: '10px' }}>
            {rightTrail.map((props, index) => (
              <animated.div key={index} style={{ ...props }}>
                {leftItemsList[index]}
              </animated.div>
            ))}
          </div>
        </div>
      </animated.div>

    </>
  )
}

export { HomePage }