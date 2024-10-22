import Link from 'next/link';
import '../styles/Article.scss'

const Article = () => {
  return (
    <div className="article">
      <div className="article__container">
        <div className="heading__container">
          <p>Elevated Learning Through</p>
          <p className="accented">Maestro</p>
        </div>
        <p className='subheading__text'>In-Home & Online Tutoring</p>
        <Link className='cta' href='/services'>Learn more</Link>
      </div>
    </div>
  )
}

export default Article
