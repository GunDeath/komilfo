import React from 'react'
import {Container} from "react-bootstrap";
import Header from "./components/Hedaer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Header/>
        <main className='py-3'>
            <Container>
                <h1>Komilfo Profession Shop</h1>
            </Container>
        </main>
        <Footer/>
    </>
  );
}

export default App;
