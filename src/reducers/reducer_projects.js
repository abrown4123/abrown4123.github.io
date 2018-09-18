import Nacho from '../../images/nacho.png';
import Wiki from '../../images/Wiki.png';
import Weather from '../../images/Weather.png';
import Portfolio from '../../images/portfolio.png';


export default function() {
  return [
    {
      title: 'Nacho Critique',
      detail:"Nacho Critique is a full stack app that utilizes NodeJS, Express, MongoDB and Passport to allow users create Nacho Critique accounts to rate Nachos. Users have the ability to log in and share their opinions of Nachos from different restaurants and edit reviews they've previously made. Users can also add pictures and their own critiques of Nachos they've tried.",
      tech: 'Node, Express, MongoDB, EJS',
      image: Nacho,
      alt: 'Picture of a Nacho Rating App',
      livelink: 'https://intense-bayou-76639.herokuapp.com/',
      codelink: 'https://github.com/abrown4123/NachoCritique',
    },
    {
      title: 'Wikipedia Viewer',
      detail:'Wikipedia Viewer utilizes the MediaWiki API to return the top ten Wikipedia article\'s associated with the user\'s query. It also has a random article feature which retrieves a random article from the database and takes the user to that page.',
      image: Wiki,
      alt: 'Picture of a Wikipedia Search webpage',
      tech: 'HTML, CSS, Vanilla JS, MediaWiki API',
      livelink: 'http://anthonycodes.com/wikiViewer/',
      codelink: 'https://github.com/abrown4123/wikiViewer'
    },
    {
      title: 'Weather App',
      detail:'The Weather App uses the Open Weather Map API to display the user\'s local forecast. Users are able to toggle the temperature between Celsius and Fahrenheit and the App\'s background changes to reflect the user\'s forecast',
      image: Weather,
      alt: 'Picture of an App that displays weather conditions',
      tech: 'HTML, CSS, Vanilla JS, Open Weather API',
      livelink: 'http://anthonycodes.com/weatherApp/',
      codelink: 'https://github.com/abrown4123/weatherApp'
    },
    {
      title: 'This Website',
      detail:'This is my portfolio page. Feel free to use the code button below to see the code used behind the scenes.',
      image: Portfolio,
      alt: 'Picture of this website',
      tech: 'React, Redux, Webpack, ES6, Babel',
      livelink: '#',
      codelink: 'https://github.com/abrown4123/newPortfolio'
    }
  ]
}
