import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Works from './components/Works';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './App.module.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";



function App() {

  return (
    <main className={styles.background}>
      <NavBar/>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <About/>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Works/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
      {/* <Education/>
      <Skills/>
      <Projects/>
      <Contact/> */}
    </main>
  );
}

export default App;
