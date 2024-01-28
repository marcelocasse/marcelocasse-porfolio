const SkillItem = ({component,title}) => {
    return (
        <div className="flex flex-col col-span-1 items-center p-5 rounded-r-md transition duration-300 hover:scale-125 hover:shadow-md gap-2">
                    {component}
                    <p className="text-base">{title}</p>
        </div>
    );
}
 
export default SkillItem;