import './About.css';
import Heart from '../../images/amor.svg'

function About() {
  return (
     <main>
      <section className='about'>
        <h1 className='about__title'>Sobre o Projeto</h1>
        <p className='about__paragraph'>
          Nosso site foi criado para ajudar a conectar pessoas dispostas com ONGs e protetores independentes. Aqui você encontra cães e gatos prontos para ganharem lares acolhedores.
        </p>
        <p className='about__paragraph'>
          Nosso objetivo é promover o bem-estar animal e incentivar a adoção responsável, porque todo bichinho merece um lar cheio de amor e carinho!
        </p>
        <img src={Heart} alt='imagem de coração' className='about__logo-heart'/>
      </section>
    </main>
  );
 }

 export default About;
