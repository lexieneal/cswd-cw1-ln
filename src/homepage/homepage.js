import 'bootstrap/dist/css/bootstrap.css';
import './homepage.css';
import HomeHeader from './homeHeader';
import Slideshow from './carousel';

function Homepage() {
  return (
    <div>  
      <HomeHeader></HomeHeader>
      <div className="container">

      <h1 className="custom">Welcome to Backpacking Scotland</h1>
      <p>This website aims to assist those travelling to Scotland on a backpacker adventure to 
        find hostels that meet their needs. Whether it's somewhere quiet with a private room 
        to put your feet up and relax while tacking the West Highland Way or somewhere with a 
        cafe/bar to meet other travellers and swap stories all tastes are catered for. </p>
      <p>To get started use our <i>View Hostels</i> page to view a list of hostels complete with amentities, 
      locations, contact information and reviews from other travellers.</p>

      <Slideshow></Slideshow>

      <p>Backpacking Scotland offers up the opportunity to explore a vast array of landscapes. 
        From wandering the streets of the big cities and trekking in the Highlands to island 
        hopping around the Hebrides, Scotland has plenty to keep backpackers busy. Scotland has 
        landscapes so green that the hills seem to ooze chlorophyll. It has 
        islands dotted with whiskey distilleries, lochs, and waterfalls. The hiking trails and 
        huts in the Highlands offer up an endless supply of adventure opportunities in an otherworldly 
        environment. Throw in the abundant cultural richness of the big cities and tiny far flung 
        villages and you have yourself one sweet place to go backpacking 
        (<a href="https://www.thebrokebackpacker.com/backpacking-scotland-budget-travel-guide/#:~:text=With%20so%20many%20awesome%20trails,day%20trip%20in%20the%20Highlands!">The Broke Backpacker</a>).</p>
      </div>
    </div>
  );
}

export default Homepage;