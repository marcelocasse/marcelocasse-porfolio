
const SectionContainer = ({class: className, id}) => {
    return (
        <section
            id={id}
            class={`section ${className} grid grid-cols-10 gap-2 py-28 pb-32`}>
        </section>
    );
}
 
export default SectionContainer;