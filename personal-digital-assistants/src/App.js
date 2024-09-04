import 'bulma/css/bulma.css'; //we are not giving relative path and some variable .. inside node module //.css : as not js sp include extension
import ProfileCard from './profileCard';
import AlexaImage from './images/alexa.png' //treat images as noraml js object
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage); //these variables 

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard title="Alexa" handle="@alexa99" imageSrc={AlexaImage} />
            </div>
            <div className="column is-3">
              <ProfileCard title="Cortana" handle="@cortana32" imageSrc={CortanaImage} />
            </div>
            <div className="column is-3">
              <ProfileCard title="Siri" handle="@siri01" imageSrc={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;