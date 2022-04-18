import { DiMongodb } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Element } from "react-scroll";


function services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<p className="text-sm uppercase text-gray-400">My Skills</p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					My Expertise
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							
							<FaReact className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>

							<h2 className="text-xl text-indigo-600 font-semibold">
								ReactJS
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Created several projects with popular library ReactJS and NextJS along with Redux and graphql.React JS is the most popular JS library in the present time.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<FaNode className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Node JS
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Lot of experience with NodeJS ExpressJS along with mongodb and sanity and contentful.One of the biggest reasons why Node. js is so popular is because it uses JavaScript as its main language to build web applications.
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<SiTypescript className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								TypeScript
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
						TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor, and I  have hand on experine on TypeScript
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<DiMongodb className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Mongodb
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default services;
