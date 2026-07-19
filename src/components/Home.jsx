import './home.css'
export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="info">
          <h1 className='name'>Hi I'm Ashish</h1>
          <h2 className='role'>Software Engineer</h2>
          <p className='body-text'>I care more about how a system is built than how it looks. Working on an ML pipeline taught me that every stage depends on the one before it, and you learn to respect the order, not skip to the fun part I'd rather spend an extra hour solving a problem properly than patch it and move on. </p>
          <a className="exp-button" href="#experience">Experience</a>
    </div> 
      </div>
    </section>
    
  );
}