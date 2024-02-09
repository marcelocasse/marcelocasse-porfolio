import Card from '../components/Card'

import bustime from '../assets/projects/bus-time.jpeg'
import SectionContainer from '../components/SectionContainer';

const Projects = () => {
    return (
        <SectionContainer id='projects'>
            <h1 className="text-secondcolor font-black text-5xl lg:text-7xl italic mb-5">PROJECTS</h1>
            <Card
                title='MC BUS - Tu empresa de confianza'
                image={bustime}
                desciption='Proyecto desarrollado para la solución de horarios de colectivos en las zonas de Liebig, San José y Colón Entre Rios, Argentina.'
                tech={['Django', 'Bootstrap']}
                website='https://marce37.pythonanywhere.com/'
                repository='https://github.com/marcelocasse/bus-time'>
            </Card>
        </SectionContainer>
    );
}
 
export default Projects;