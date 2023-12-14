import { useState } from "react";

const ToggleChallenge = () => {
  const [isVisible, setIsVisible] = useState(true);

  const MagicalComponent = () => {
    return <h4>So magical</h4>;
  };

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <MagicalComponent />}
    </>
  );
};

export default ToggleChallenge;
