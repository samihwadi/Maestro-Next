import '../styles/HomePage.scss'; 
import Article from './Article'

const Homepage: React.FC = () => {
  return (
    <div className='homepage'>
        <div className="homepage__container">
            <Article />
        </div>
    </div>
  )
}

export default Homepage
