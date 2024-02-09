import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Card = ({title,desciption,image,tech,website,repository}) => {
    return (
        <article className="max-w-5xl w-full items-center rounded-lg flex flex-col gap-4 lg:flex-row">
            <div className="w-full">
                <img className="relative flex object-cover object-top w-full h-56 rounded-lg" src={image} alt="" />
            </div>
            <div className="w-full lg:ps-5">
                <h3 className="text-2xl font-bold text-start">{title}</h3>
                <div className="flex flex-wrap mt-2 text-start gap-4">
                    <ul className="flex text-center w-full size-5 gap-2 mb-3">
                        {
                            tech.map((value) => (
                                <li className=" flex bg-secondcolor text-blackmatte font-bold text-s rounded-full p-3 items-center text-center justify-center">{value}</li>
                            ))
                        }
                    </ul>
                    <p class="mb-3 text-base">{desciption}</p>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                        <a href={website} target="_blank" rel="noopener noreferrer" class="inline-flex items-center border-2  gap-2 px-3 py-2 text-base font-bold text-center text-white rounded-lg lg:hover:text-firstcolor lg:hover:bg-white">
                            <FaLink className="size-5" /> Preview
                        </a>
                        <a href={repository} target="_blank" rel="noopener noreferrer" class="inline-flex items-center border-2 gap-2 px-3 py-2 text-base font-bold text-center text-white rounded-lg lg:hover:text-firstcolor lg:hover:bg-white">
                            <FaGithub className="size-5" /> Code
                        </a>
                    </footer>
                </div>
            </div>
        </article>
    );
}
 
export default Card;