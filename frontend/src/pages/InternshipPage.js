import React from 'react'
import { loremIpsum } from 'lorem-ipsum'
import '../resources/css/InternshipPage.css'
import Me from '../resources/images/me.png'
import You from '../resources/images/internship.png'
import Team from '../resources/images/team.jpg'
import Vector from '../resources/images/vector.png'
import Choose from '../resources/images/winner-shadow.png'
import Vaga from '../resources/images/vaga.png'
import Offer from '../resources/images/bag.png'
import Solution from '../resources/images/solution.png'
import Scrn1 from '../resources/images/scrnsht1.jpg'
import Scrn2 from '../resources/images/scrnsht2.jpg'
import Scrn3 from '../resources/images/scrnsht3.jpg'

function InternshipPage() {

	const loremText=loremIpsum({
		count:8
	})


  	return (
		<div className='row d-flex flex-column justify-content-center align-items-center w-100 m-1 p-1'>
			<p>Since this is an application where I am selling programming knowledge, I believe it's appropriate to add this page to my e-commerce site.</p>
			<h1 className='w-100 d-flex justify-content-center text-primary'>Tacta Internship App</h1>
			<h4>About me:</h4>
			<p className='col-5 text-align-center'>{loremText}</p>
			<p><span className='hobbies-text'>Hobbies: </span>taking risks and being creative <img src={Solution} alt='little imagination icon'/></p>
			<div className='animation-container'>
				<img src={Me} alt='slikice-animacije' className='me-slika'/>
				<img src={Choose} alt='slikice-animacije' className='choose-slika'/>
				<img src={Vector} alt='slikice-animacije' className='gain-slika'/>
				<img src={Team} alt='slikice-animacije' className='team-slika'/>
				<img src={Vaga} alt='slikice-animacije' className='vaga-slika'/>
				<img src={You} alt='slikice-animacije' className='you-slika'/>
				<img src={Offer} alt='slikice-animacije' className='offer-slika'/>
				<p className='me-text'>This is Me!<br/>Abdullah Sinanović</p>
				<p className='offer-text'>I offer...</p>
				<p className='you-text'>You have!</p>
				<p className='gain-text'>Me with U!</p>
				<p className='choose-text'>You Choose Me.</p>
				<p className='team-text'>Together we become...<br/>A Great Team!!!</p>
			</div>
			<p className='text-danger'>Since all you see is picture I need you to trust me on this, animations are super cool.</p>
			<div className='screenshots-container col-7 m-0 d-flex flex-column justify-content-center align-items-center'>
				<h3 className='p-0 m-0'>Unfinished App flexing:</h3>
				<div className='screenshots col-12 d-flex justify-content-center align-items-center m-0 p-1'>
					<img src={Scrn1} alt='screenshots' className='col-4'/>
					<img src={Scrn3} alt='screenshots' className='col-4'/>
					<img src={Scrn2} alt='screenshots' className='col-4'/>
				</div>
			</div>
		</div>
  )
}

export default InternshipPage