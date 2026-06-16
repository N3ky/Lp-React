import './App.css'
import { useState} from 'react'


function App() {
    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")
    const navTo = (id) =>{
        const element = document.getElementById(id)
        if (element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
    const enviar = () => {
        const mensagem = `Gostaria de entrar \n\nNome: ${nome} \nAssunto: ${assunto}`
            const msg = encodeURIComponent(mensagem)
            window.open(`https://wa.me/*************?text=${msg}`)
    }
  return (
    <>
      <nav>
        
        <span className="navItems" onClick={() => navTo('s1')}>
            <img src="./homepng.png" alt="Home" />
            <p className="navWords">Home</p>
        </span>
        <span className="navItems" onClick={() => navTo('s3')}>
            <img src="./cardspng.png" alt="Cards" />
            <p className="navWords">Cards</p>
        </span>
        <span className="navItems" onClick={() => navTo('s4')}>
            <img src="./videopng.png" alt="Video" />
            <p className="navWords">Video</p>
        </span>
        <span className="navItems" onClick={() => navTo('s5')}>
            <img src="./contactpng.png" alt="Contatos" />
            <p className="navWords">Contatos</p>
        </span>
    </nav>
    <main>
        <section id="s1" className="s1" > 
                <h1>Titulo do Banner</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </section>
        <section id="s3" className="s3"> 
            <div className="card">
                <img src="./capi.jpg" alt="" />
            
                <div className="textCard">
                    <h4>Capibara</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite</p>
                </div>
            </div>
            <div className="card">
                <img src="./lean.jpg" alt="" />
                <div className="textCard">
                <h4>Leão</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elite</p>
                </div>
            </div>
            <div className="card">
                <img src="./lagarta.jpg" alt="" />
            <div className="textCard">
                <h4>Lagartija</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elite</p>
            </div>
            </div>
        </section>
        <section id="s4" className="s4"> 
            <iframe className="video" src="https://www.youtube.com/embed/1tjuhCdWPB4?si=wQ4DOuTKsBmZYG1U"></iframe>
        </section>
        <section id="s5" className="s5"> 
            <div className="formulario">
                <label htmlFor="text">Nome:</label>
                <input type="text" id="nome" placeholder="Insira seu nome" value={nome} onChange={(event) => setNome(event.target.value)}  />
                <label htmlFor="assunto">Assunto:</label>
                <textarea id="assunto" placeholder="Insira sua mensagem" value={assunto} onChange={(event) => setAssunto(event.target.value)}></textarea>
                <button onClick={enviar}>ENVIAR</button>
            </div>
        </section>

    </main>
    <footer>
        <a href="https://instagram.com" target="_blank">
            <img width="40px" src="./instagram.png" alt="instagram"/>
        </a>
        <a href="https://x.com" target="_blank">
            <img width="40px" src="./twiter.png" alt="twiter"/>
        </a>
        <a href="https://github.com" target="_blank">
            <img width="40px" src="./git.png" alt="git"/>
        </a>
        <a href="https://www.youtube.com" target="_blank">
            <img width="40px" src="./youtube.png" alt="youtube"/>
        </a>
    </footer>
    </>
  )
}

export default App
