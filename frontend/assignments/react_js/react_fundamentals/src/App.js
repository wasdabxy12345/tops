import S1Q1 from "./S1/S1Q1";
import S1Q2 from "./S1/S1Q2";
import S1Q3 from "./S1/S1Q3";
import S1Q4 from "./S1/S1Q4";

import S2Q1 from "./S2/S2Q1";
import S2Q2 from "./S2/S2Q2";
import S2Q3 from "./S2/S2Q3";
import S2Q4 from "./S2/S2Q4";
import S2Q5 from "./S2/S2Q5";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid App">
      <h1>React - Fundamentals</h1>
      <hr />
      <br />
      <br />
      <br />

      {/* s1 */}
      <div>
        <h2>
          Session 1 — Introduction to ReactTopics to Cover:What is React?Why
          React (virtual DOM, Components).create-react-app setup.Demo:Run first
          React app and modify default component.
        </h2>
        <hr />
        <br />
        <br />
        <br />

        {/* s1q1 */}
        <div>
          <h3>
            Q1. Install Node.js and use npx create-react-app to set up a new
            React project called InstaCloneStarter on your computer.
          </h3>
          <hr />
          <S1Q1 />
          <br />
          <br />
          <br />
        </div>

        {/* s1q2 */}
        <div>
          <h3>
            Q2. Open App.js in your InstaCloneStarter project and change the
            default text to display 'Welcome to My React Zomato App' inside an
            &lt;h1&gt; tag.
          </h3>
          <hr />
          <S1Q2 />
          <br />
          <br />
          <br />
        </div>

        {/* s1q3 */}
        <div>
          <h3>
            Q3. Create a new functional component called TrendingSong.js that
            returns an &lt;h2&gt; element with the text 'Trending on Spotify:
            Calm Down'. Import and use this component inside App.js so it shows
            below your main heading.
          </h3>
          <hr />
          <S1Q3 />
          <br />
          <br />
          <br />
        </div>

        {/* s1q4 */}
        <div>
          <h3>
            Q4. Explain in your own words (3-4 lines) how React's Virtual DOM
            makes updating the UI faster compared to traditional DOM
            manipulation.
          </h3>
          <hr />
          <S1Q4 />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* s2 */}
      <div>
        <h2>
          Session 2 — JSX & ComponentsTopics to Cover:JSX syntax and
          rules.Function vs Class components.Demo:Render "Hello
          &#123;usemame&#125;" component.
        </h2>
        <hr />
        <br />
        <br />
        <br />

        {/* s2q1 */}
        <div>
          <h3>
            Q1. Create a new React app using Create React App, open App.js, and
            replace its content to display a JSX heading that says 'Welcome to
            React JSX!'.
          </h3>
          <hr />
          <S2Q1 />
          <br />
          <br />
          <br />
        </div>

        {/* s2q2 */}
        <div>
          <h3>
            Q2. Write a functional component called UserGreeting that takes a
            username prop and displays 'Hello, &123;username&125;!' using JSX.
            Render it in App.js with your own name as the username.
          </h3>
          <hr />
          <S2Q2 username="abc" />
          <br />
          <br />
          <br />
        </div>

        {/* s2q3 */}
        <div>
          <h3>
            Q3. Convert the UserGreeting functional component into a class
            component named UserGreetingClass that also takes a username prop
            and displays the same greeting. Render both versions (functional and
            class) in App.js to compare.
          </h3>
          <hr />
          <S2Q3 username="def" />
          <br />
          <br />
          <br />
        </div>

        {/* s2q4 */}
        <div>
          <h3>
            Q4. Build a MiniProfile functional component that shows a user's
            display picture (use any image URL), name, and a short status
            message using JSX. Use this component to display your own mini
            profile like Instagram.
          </h3>
          <hr />
          <div className="row justify-content-center ">
            <S2Q4
              displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Humpback_whale_%28Megaptera_novaeangliae%29_with_calf_Moorea_2.jpg/500px-Humpback_whale_%28Megaptera_novaeangliae%29_with_calf_Moorea_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
              name="abc"
              statusMessage="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, optio! Omnis earum molestiae, rem qui unde
            saepe veniam velit laboriosam, facere vitae praesentium veritatis
            maxime, similique optio corrupti consectetur officia!"
            />
            <S2Q4
              displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/White-booted_racket-tail_%28Ocreatus_underwoodii_melanantherus%29_male_in_flight_Paz_de_las_Aves.jpg/500px-White-booted_racket-tail_%28Ocreatus_underwoodii_melanantherus%29_male_in_flight_Paz_de_las_Aves.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
              name="def"
              statusMessage="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, optio! Omnis earum molestiae, rem qui unde
            saepe veniam velit laboriosam, facere vitae praesentium veritatis
            maxime, similique optio corrupti consectetur officia!"
            />
            <S2Q4
              displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Rocky_Mountain_golden-mantled_ground_squirrel_%28Callospermophilus_lateralis_tescorum%29_Hwy_93_2.jpg/250px-Rocky_Mountain_golden-mantled_ground_squirrel_%28Callospermophilus_lateralis_tescorum%29_Hwy_93_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
              name="ghi"
              statusMessage="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, optio! Omnis earum molestiae, rem qui unde
            saepe veniam velit laboriosam, facere vitae praesentium veritatis
            maxime, similique optio corrupti consectetur officia!"
            />
          </div>
          <br />
          <br />
          <br />
        </div>

        {/* s2q5 */}
        <div>
          <h3>
            Q5. Refactor your MiniProfile component to ensure all JSX tags are
            properly closed and wrapped, and that no invalid HTML is used. Hint:
            If you get any errors, check for missing tag closures or incorrect
            nesting in your JSX.
          </h3>
          <hr />
          <div className="row justify-content-center ">
            <S2Q5
              displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Ligated_furrow_bee_%28Halictus_ligatus%29_on_blanket_flower_%28Gaillardia_aristata%29_Calgary.jpg/500px-Ligated_furrow_bee_%28Halictus_ligatus%29_on_blanket_flower_%28Gaillardia_aristata%29_Calgary.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
              name="jkl"
              statusMessage="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, optio! Omnis earum molestiae, rem qui unde
            saepe veniam velit laboriosam, facere vitae praesentium veritatis
            maxime, similique optio corrupti consectetur officia!"
            />
            <S2Q5
              displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Trillium_erectum_-_Stephen%27s_Gulch_CA.jpg/330px-Trillium_erectum_-_Stephen%27s_Gulch_CA.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
              name="mno"
              statusMessage="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, optio! Omnis earum molestiae, rem qui unde
            saepe veniam velit laboriosam, facere vitae praesentium veritatis
            maxime, similique optio corrupti consectetur officia!"
            />
            <S2Q5
              displayPicture="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Balkan_Windr%C3%B6schen_%28Anemone_blanda%29-20230407-RM-124525.jpg/500px-Balkan_Windr%C3%B6schen_%28Anemone_blanda%29-20230407-RM-124525.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
              name="pqr"
              statusMessage="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, optio! Omnis earum molestiae, rem qui unde
            saepe veniam velit laboriosam, facere vitae praesentium veritatis
            maxime, similique optio corrupti consectetur officia!"
            />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* S3 */}
      <div>
        <h2>
          Session 3 - PropsTopics to Cover:Passing data between
          components.Default props and prop types.Demo:Reusable "Card" component
          with props.
        </h2>
        <hr />
        <br />
        <br />
        <br />

        {/* S3Q1 */}
        <div>{/* <h3></h3> */}</div>
      </div>
    </div>
  );
}

export default App;
