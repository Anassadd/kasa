import '../styles/card.css'

function Card({ title, cover }) {
  return (
    <article className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  )
}

export default Card
