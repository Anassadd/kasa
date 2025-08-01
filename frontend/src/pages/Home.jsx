import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import bannerHome from '../assets/banner-home.jpg' // Ajoute l'image dans ton dossier /assets
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  )
}

export default Home
