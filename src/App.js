import people from './assets/people.png'
import logo from './assets/logo.png'
import './App.css';
import Button from './assets/Components/Button';

//eredetileg az app, egy 1920x1080px-es 24"colos monitorra lett optimalizálva, így a reszponzivitás más képernyőkön kérdéses.

function handleClick(e){
  e.preventDefault() //úgy feltételezem, hogy SPA az oldal, így erre szükségünk lehet, hogy ne töltse újra az oldalt
  console.log("Szia!")
}

function App() {
  return (
    <div className='container'>
      <div className='container-left'>
            <div className='logo-container'>
                <img className='logo-img' alt='logo' src={logo}></img>
            </div>
            <div className='content-container'>
                <div className='h1-container'>
                  <h1>Comnice Signature</h1>
                  <p className='slogan'>Digitális aláíró szolgáltatás a Comnicától</p>
                </div>
                <img className='h1-image' alt='people' src={people}></img>
            </div>
      </div>
      <div className='container-right'>
          <p className='greetings'>Üdvözlöm a Comnica Signature-ben!</p>
          <p className='alert-message'>Következőkben végigvezetjük dokumentumai elfogadásában és aláírásán. A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.</p>
          <div className='btn-container'>
              <Button onClick={(e)=>handleClick(e)} title={'Kezdhetjük'}></Button>
          </div>
      </div>
    </div>
  );
}

export default App;
