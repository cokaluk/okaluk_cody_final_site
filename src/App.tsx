import "./App.css";
import { HeroImage } from './components';
import heroImg from './assets/heroimage.jpg';
import { Card } from './components';

function App() {


  return (
    <>
      <HeroImage
        backgroundImage={heroImg}
        heading="Cody Okaluk Portfolio"
        subheading="Full Stack Web Developer"
      />
      <h2>Projects</h2>
      <Card
        title="Pokemon Content Management System"
        description="A Pokemon Content Management System built with PHP and SQLite allowing users to manage a virtual Pokedex."
      />
      <Card
        title="E-commerce Website"
        description="
          An E-commerce website, built with Ruby on Rails and SQLite allowing users to create accounts, search for and purchase products, factoring in taxes from users selected province/territory and using stripe to handle payments."
      />
      <h2>skills</h2>
      <Card
        title="Programming"
        description="Experience with Python, Ruby, PHP, Java and Javascript creating fast and efficient Programs and Websites."
      />
      <Card
        title="SQL"
        description="experience working with SQLite and PostGreSQL, normalizing databases and optimizing tables for the most popular queries being run."
      />
      <Card
        title="Resources"
        description="w3schools, great website for refreshing any programming knowledge."
      />
      <Card
        title="Developer Setup"
        description="I use VsCode."
      />
    </>
  );
}

export default App;
