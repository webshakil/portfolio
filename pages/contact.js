import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Element } from "react-scroll";
import { toast } from 'react-toastify';

function Contact() {
	const form = useRef();
	const [user_name, setUser_name]=useState();
	const [user_email, setUser_email]=useState();
	const [message, setMessage]=useState();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_obje94m', 'template_k3h1smf', form.current, 'Q24ps9UNUpdXCEn41')
		.then((result) => {
			toast.success("Thansk for your email, Contact with you soon!!");
			setUser_name("");
			setUser_email("");
			setMessage("");

		}, (error) => {
			toast.error(error.text);
		});
	};
	return (
		<Element id="contact" name="contact">
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
					<p className="text-sm uppercase text-gray-400">Contact</p>
					<p className="text-sm uppercase text-gray-400">Contact with me, reply you soon!!</p>
					<h1 className="text-indigo-900 text-6xl font-bold text-center">
						Contact
					</h1>
			

					<div className=" justify-center text-center md:w-1/2 w-full my-5">
					<form ref={form} onSubmit={sendEmail}>
								<div className="mb-3 mt-3">
								
									<input type="text" className="form-control" value={user_name} onChange={(e)=>setUser_name(e.target.value)} placeholder="Enter Name" name="user_name"/>
								</div>
								<div className="mb-3">
								
									<input type="email" className="form-control" value={user_email} id="pwd" onChange={(e)=>setUser_email(e.target.value)} placeholder="Enter email" name="user_email"/>
								</div>
								<div className="mb-3">
										<textarea className="form-control" value={message} name="message" onChange={(e)=>setMessage(e.target.value)} placeholder="Enter Your message" id="exampleFormControlTextarea1" rows="3"></textarea>
								</div>

								<button type="submit" className="mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-bt-lg hover:bg-black">Submit</button>
					</form>
					{/* <input
							type="text"
							name="name"
							id="email-address"
							autoComplete="name"
							placeholder="name"
							className="mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-900 h-10"
						/>
						<input
							type="text"
							name="email-address"
							id="email-address"
							autoComplete="email"
							placeholder="xyz@gmail.com"
							className="mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-900 h-10"
						/>
						<button className="mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg hover:bg-black">
							Submit
						</button>  */}
					</div>
			



					
				</div>
			</div>
		</Element>
	);
}

export default Contact;
