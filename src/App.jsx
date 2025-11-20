import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

// ini adalah component
function App() {
  // setter dan getter
  const [angka, setAngka]= useState(0)
  const [nama, setNama]= useState('Joko Susanto')
  
  const ubahNama = (e) => {
    setNama(e.target.value) //value : nama
  }

  return (
    // <div style={{ display: "flex", gap: "20px", padding: "30px" }}>
    //   <ProfileCard
    //     photo="https://i.pravatar.cc/150?img=66"
    //     name="Joko"
    //     job="Fullstack Programmer"
    //     bio="Junior"
    //   />
    //   <ProfileCard
    //     photo="https://i.pravatar.cc/150?img=70"
    //     name="Jono"
    //     job="Front-End Programmer"
    //     bio="Senior"
    //   />
    //   <ProfileCard
    //     photo="https://i.pravatar.cc/150?u=fake@pravatar.com"
    //     name="Jontor"
    //     job="Front-End Programmer"
    //     bio="Senior"
    //   />
    // </div>
    <>
      <h2>Tambah Angka</h2>
      <p>Angka {angka}</p>

      <button onClick={() => setAngka(angka - 1)}>Kurangin Angka</button>
      <button onClick={() => setAngka(angka + 1)}>
        Tambahin Angka
      </button>

      <h1>Selamat Datang, {nama}</h1>
      <input type="text" placeholder="ketik nama anda" onChange={ubahNama} />
    </>
  );
}

export default App;