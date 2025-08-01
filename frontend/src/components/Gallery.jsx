import '../Styles/Gallery.css'
import Card from './Card'


const logements = [
  {
    id: '1',
    title: 'Appartement cosy à Paris',
    cover: '/images/paris.jpg'
  },
  {
    id: '2',
    title: 'Villa en bord de mer',
    cover: '/images/villa.jpg'
  },
  {
    id: '3',
    title: 'Chalet à la montagne',
    cover: '/images/chalet.jpg'
  },
  {
    id: '4',
    title: 'test',
    cover: '/images/madrid.jpg'
  },
  {
    id: '5',
    title: 'test1',
    cover: '/images/moscou.jpg'
  },
  {
    id: '6',
    title: 'test3',
    cover: '/images/rome.jpg'
  }
]

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </section>
  )
}

export default Gallery


