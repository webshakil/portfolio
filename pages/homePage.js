import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import { Element } from "react-scroll";
import heroImage from "../public/images/large.png";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl  relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							width="500px"
							height="500px"
							
							
							className="rounded-circle cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">Shakil</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
						I am a full stack web application developer with more than 4 years experience of react js, node js, GraphQL, mongodb and TypeScript along with DSA. Please stay in touch and have a professional work.
						</p>
							
						<div className="flex justify-content-between">
								
								
								<Link href="https://www.facebook.com/ShakilWebshaper/">
									<a target="_blank"><FacebookOutlined style={{ fontSize: '26px', color: '#08c' }} /></a>
								</Link>
								<Link href="https://twitter.com/shakilkamran">
									<a target="_blank"><TwitterOutlined style={{ fontSize: '26px', color: '#08c' }} /></a>
								</Link>
								<Link href="https://github.com/webshakil">
									<a target="_blank"><GithubOutlined  style={{ fontSize: '26px', color: '#08c' }} /></a>
								</Link>
								<Link href="https://www.youtube.com/channel/UClFMaWxT-X3p1Op0VH0yY-A">
									<a target="_blank"><YoutubeOutlined  style={{ fontSize: '26px', color: '#08c' }} /></a>
								</Link>
								<Link href="https://www.youtube.com/channel/UClFMaWxT-X3p1Op0VH0yY-A">
									<a target="_blank"><LinkedinOutlined  style={{ fontSize: '26px', color: '#08c' }} /></a>
								</Link>
								<Link href="https://www.instagram.com/shakil_prodev/">
									<a target="_blank"><InstagramOutlined  style={{ fontSize: '26px', color: '#08c' }} /></a>
								</Link>
								
								
							
								
							</div>
							<br/>
							<div className="tex-center pt-10">
								<h1 className="font-bold text-3xl text-center">Hire me on Upwork</h1>
								<Link href="https://www.upwork.com/freelancers/~0120025f824d5325b4">
									<a target="_blank"><Image src="/images/Upwork.png" alt="upwork" width="106px" height="106px" /></a>
								</Link>
								
								
								
								
							</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
