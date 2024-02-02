import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Card = ({title,desciption,image,tech,website,repository}) => {
    return (
        <div class="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg" src={image} alt="" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desciption}</p>
                <ul className=" flex text-center justify-center w-full gap-2 mb-3">
                {
                    tech.map((value) => (
                        <li>{value}</li>
                    ))
                }
                </ul>
                <a href={website} target="_blank" class="inline-flex items-center border-2  gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FaLink className="size-5"/> Preview
                </a>
                <a href={repository} target="_blank" class="inline-flex items-center border-2 gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <FaGithub className="size-5"/> Code
                </a>
            </div>
        </div>
    );
}
 
export default Card;