import Card from '../components/Card'

import bustime from '../assets/projects/bus-time.jpeg'

const Projects = () => {
    return (
        <section id='projects' className="text-center pt-28 pb-32 grid gap-6">
            <h1 className="text-secondcolor font-black text-7xl italic">PROJECTS</h1>
            <div className="grid grid-cols-3">
                <Card
                    title='Bus-Time'
                    image={bustime}
                    desciption=''
                    tech={['Django','Bootstrap']}
                    website='https://marce37.pythonanywhere.com/'
                    repository='https://github.com/marcelocasse/bus-time'>    
                </Card>
            </div>
        </section>
    );
}
 
export default Projects;