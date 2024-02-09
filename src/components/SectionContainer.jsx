
const SectionContainer = (props) => {
    return (
        <section id={props.id} class={`section ${props.className} text-center items-center flex flex-col gap-6 pt-28 pb-32`}>
            {
                props.children
            }
        </section>
    );
}
 
export default SectionContainer;