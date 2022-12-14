import "./Card.css";
import code from "../../../Images/card/code_128.png";
import design from "../../../Images/card/design_128.png";
import launch from "../../../Images/card/launch_128.png";


const Card = () => {
  return (
    <div className="py-6">
      <div class="containercard">
        <div class="card">
          <div class="face face1">
            <div class="contents">
              <img src={design} />
              <h3 className="text-white">Design</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="contents text-left text-lg">
              <p>
                Get work done quicker by building out entire projects or
                isolating code to test features and animations. Solve your
                problem and use your favourit theme.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="contents">
              <img src={code} />
              <h3 className="text-white">Code</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="contents text-left text-lg">
              <p>
                Write your frontend web code in our WebEditor and 40+ language will help you to write code in your specific language.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="contents">
              <img src={launch} />
              <h3 className="text-white">Execute</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="contents text-left text-lg">
              <p>
                Execute your web code and see the output of your masterpiece and even output for your problem in particular language.
              </p>
              {/* <a href="#">Read More</a> className="text-white" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
