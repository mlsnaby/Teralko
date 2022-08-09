import "./email.css"

const Email = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Gagnez du temps et de l'argent !</h1>
      <span className="mailDesc">Inscrivez-vous et nous vous enverrons les meilleures offres</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Incrivez-vous</button>
      </div>
    </div>
  )
}

export default Email