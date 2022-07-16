import "./index.css";

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <div id="home-title" className="d-flex align-self-center">
        SAMUEL LA
      </div>
      <div id="home-job" className="d-flex align-self-center">
        <span role="img" aria-label="Game controller">
          🎨
        </span>
        &ensp;GAME DESIGNER &#38; DEVELOPER&ensp;
        <span role="img" aria-label="Palette">
          🎮
        </span>
      </div>
      <div id="home-introduction" className="d-flex align-self-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna magna, blandit sit amet
        quam nec, dapibus posuere turpis. Sed eget metus nibh. In lectus dolor, faucibus quis ex in,
        efficitur iaculis nibh. Cras odio ligula, faucibus at justo nec, semper mattis sem. Sed
        ultricies nisi mi, in facilisis lacus posuere ac. Fusce hendrerit nulla eget lobortis
        dictum. Fusce sit amet odio in justo pulvinar tincidunt. Nam nec maximus nulla. Etiam
        bibendum lectus quis nibh maximus, sed cursus orci auctor.
      </div>
    </div>
  );
};

export default Home;
