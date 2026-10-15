import Q1 from "./Q1";
import UserGreeting from "./Q2";
import UserGreetingClass from "./Q3";
import MiniProfile from "./Q4";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      {/* q1 */}
      <div>
        <h1>
          1. Create a new React app using Create React App, open App.js, and
          replace its content to display a JSX heading that says 'Welcome to
          React JSX!'.
        </h1>
        <hr />
        <Q1 />

        <br />
        <br />
        <br />
      </div>

      {/* q2 */}
      <div>
        <h1>
          2. Write a functional component called UserGreeting that takes a
          username prop and displays 'Hello, &#123;username&#125;!' using JSX.
          Render it in App.js with your own name as the username.
        </h1>
        <hr />
        <UserGreeting username="abc" />

        <br />
        <br />
        <br />
      </div>

      {/* q3 */}
      <div>
        <h1>
          3. Convert the UserGreeting functional component into a class
          component named UserGreetingClass that also takes a username prop and
          displays the same greeting. Render both versions (functional and
          class) in App.js to compare.
        </h1>
        <hr />
        <UserGreetingClass username="abc" />

        <br />
        <br />
        <br />
      </div>

      {/* q4 */}
      <div>
        <h1>
          4. Build a MiniProfile functional component that shows a user's
          display picture (use any image URL), name, and a short status message
          using JSX. Use this component to display your own mini profile like
          Instagram.
        </h1>
        <hr />
        <div className="row justify-content-center ">
          <MiniProfile
            displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Humpback_whale_%28Megaptera_novaeangliae%29_with_calf_Moorea_2.jpg/500px-Humpback_whale_%28Megaptera_novaeangliae%29_with_calf_Moorea_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            name="abc"
            statusMessage="lorem ipsum"
          />
          <MiniProfile
            displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/White-booted_racket-tail_%28Ocreatus_underwoodii_melanantherus%29_male_in_flight_Paz_de_las_Aves.jpg/500px-White-booted_racket-tail_%28Ocreatus_underwoodii_melanantherus%29_male_in_flight_Paz_de_las_Aves.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            name="def"
            statusMessage="lorem ipsum"
          />
          <MiniProfile
            displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Rocky_Mountain_golden-mantled_ground_squirrel_%28Callospermophilus_lateralis_tescorum%29_Hwy_93_2.jpg/250px-Rocky_Mountain_golden-mantled_ground_squirrel_%28Callospermophilus_lateralis_tescorum%29_Hwy_93_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            name="ghi"
            statusMessage="lorem ipsum"
          />
        </div>

        <br />
        <br />
        <br />
      </div>

      {/* q5 */}
      <div>
        <h1>
          4. Build a MiniProfile functional component that shows a user's
          display picture (use any image URL), name, and a short status message
          using JSX. Use this component to display your own mini profile like
          Instagram.
        </h1>
        <hr />
        <div className="row justify-content-center ">
          <MiniProfile
            displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Humpback_whale_%28Megaptera_novaeangliae%29_with_calf_Moorea_2.jpg/500px-Humpback_whale_%28Megaptera_novaeangliae%29_with_calf_Moorea_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            name="abc"
            statusMessage="lorem ipsum"
          />
          <MiniProfile
            displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/White-booted_racket-tail_%28Ocreatus_underwoodii_melanantherus%29_male_in_flight_Paz_de_las_Aves.jpg/500px-White-booted_racket-tail_%28Ocreatus_underwoodii_melanantherus%29_male_in_flight_Paz_de_las_Aves.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            name="def"
            statusMessage="lorem ipsum"
          />
          <MiniProfile
            displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Rocky_Mountain_golden-mantled_ground_squirrel_%28Callospermophilus_lateralis_tescorum%29_Hwy_93_2.jpg/250px-Rocky_Mountain_golden-mantled_ground_squirrel_%28Callospermophilus_lateralis_tescorum%29_Hwy_93_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            name="ghi"
            statusMessage="lorem ipsum"
          />
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
