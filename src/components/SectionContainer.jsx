
const SectionContainer = (props) => {
    return (
        <section id={props.id} class={`section ${props.class} text-center items-center grid grid-cols-10 gap-2 py-28 pb-32`}>
            {
                props.children
            }
        </section>
    );
}
 
export default SectionContainer;