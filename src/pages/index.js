import React, { useState } from 'react'
import AttendeeList from '../components/AttendeeList'
import addClinic from '../components/actions'
import styled, {keyframes} from 'styled-components'
import logo from '../images/logo.png'
import food from '../images/food.jpg'
import golf from '../images/Golf_Logo.png'

const animateAttendee = keyframes`
0% 		{height: 0;}
100%	{height: 100%;}
`

const PageContainer = styled.div`
	position: relative;
	width: 100vw;
	height: auto;
	margin: auto;
	background-color: #FFF;
	@media( min-width: 770px ) {
		max-width: 770px;
	}  
	.header {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content:center;
		text-align: center;
		h1, p {
			color: ${ ({theme: { colorDarkGrey }}) => colorDarkGrey };
		}
		h1 {
			font-size: 2rem;
		}
		p { 
			font-size: 1.6rem;
			padding: 1rem; 
			}
		img {
			width: 67%;
			max-width: 300px;
		}
	}
	.date {
		background-image: url(${food});
		background-size: cover;
		background-position: bottom center;
		height: 44.5rem;
		img {
			float: right;
			width: 15rem;
			position: relative;
			right: 1rem;
			top: 1rem;
		}
		@media( min-width: 445px ) {
			height: 65.5rem;
		}
	}
	.date_inner {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: ${ ({theme: { colorWhite }}) => colorWhite };
		width: 100vw;
		height: 18.5rem;
		background-color: rgba(44,136,52, .7);
		span { 
			font-weight: bold;
			font-size: 2rem;
		}
		.food {
			width: 100vw;
			position: absolute;
			top: 0;
			z-index: -1;
		}
		@media( min-width: 770px ) {
			max-width: 770px;
		}  
	}
	.form {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		height: 30rem;
		width: 100vw;
		padding: 2rem;
		label { 
			display: block; 
			font-size: 2rem;
			}
		input {
			outline: none;
			border: none;
			font-size: 2rem;
			margin-left: 1rem;
		}
		select {
			margin-left: 1rem;
		}
		@media( min-width: 770px ) {
			max-width: 770px;
		} 
		
	}
	.attendees {
		animation: ${animateAttendee} 1s ease-in-out forwards;
		padding: 2rem 2rem 0;
	}
	.btn {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		font-weight: bold;
		
		background-color: transparent;
		border-radius: 5px;
		margin-top: 2rem;
		padding: 5px 10px;
		
		&.large {
			font-size: 2rem;
			color: ${ ({theme: { colorWhite }}) => colorWhite };
			background-color: ${ ({theme: { colorBase }}) => colorBase };
			border: none;
			margin-bottom: 2rem;
			&:hover {
			transform: translateX(-50%) scale(1.1);
		}
			&.add {
				background-color: ${ ({theme: { colorHighlight }}) => colorHighlight };
			}
		}
	}
	.thanks {
		width: 100%;
		height: 30rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	a {
		position: absolute;
		width: auto;
		left: 50%;
		bottom: 0;
		font-size: 1rem;
		text-align: center;
		transform: translateX(-50%);
		color: ${ ({theme: { colorBlack }}) => colorBlack };
	}
`

export default () => {
	const [ name, setName ] = useState(null)
	const [ dinner, setDinner ] = useState(null)
	const [ hospital, setHospital ] = useState(null)
	const [ attendees, setAttendees ] = useState([])
	const [ formSubmitted, setFormSubmitted ] = useState(false)


	const addAttendee = () => {
		let store = attendees
		if ( !name || !dinner  ) {
			alert('Please fill out all fields')
			return 
		}
		const attendee = {
			name: name,
			dinner: dinner
		}
		store.push(attendee)
		setAttendees(store)
		setName(null)
		setDinner(null)
		clear()
	}
	const clear = () => {
		document.querySelector('select').value = 'default'
		document.querySelector('#name').value = ''
	}
	const addToDatabase = () => {
		if ( attendees.length < 1 ) {
			alert('Please fill out all fields')
			return 
		}
		if (confirm("Submit your list?")) {
			setFormSubmitted(true)
			if (name) {
				addAttendee()
			}
			const clinic = {
				hospital : hospital,
				attendees: attendees
			}
			addClinic(clinic)
		} else {
			console.log('rejected')
		}
	}
	const attendeeContainer = (
		<div className="attendees">
			<h2>Attendees:</h2>
			<AttendeeList list={attendees} />
			{formSubmitted ? "" : <button className="btn large" onClick={addToDatabase}>Submit</button>}
		</div>
	)

	const form = (
		<div className="form">
			<div>
				<h2>RSVP:</h2><br />
				<label>
					Hospital Name: 
					<input onChange={ event => setHospital(event.target.value)} type="text" name="name" placeholder="Hospital Name"/>
				</label>
				<label>
					Your Name: 
					<input id="name" onChange={ event => setName(event.target.value)} type="text" name="name" placeholder="Full Name"/>
				</label>
				<label style={{ display: 'inline-block' }} htmlFor="meals">Choose your dinner: </label>
				<select onChange={ event => setDinner(event.target.value)} defaultValue={'default'} id="meals">
					<option value="default" disabled>Select your option</option>
					<option value="Chicken">Chicken</option>
					<option value="Beef">Beef</option>
					<option value="Vegetarian">Vegetarian</option>
				</select>
				<div>
					<button className="btn large add" onClick={addAttendee}>Add</button>
				</div>
			</div>
		</div>
	)

	const thankYou = (
		<div className="thanks">
			<h1>Thank You<br />< br />See you there!</h1>
		</div>
	)

	return (
		<PageContainer>
			<div className="header">
				<img src={logo} alt="logo" />
				<p>Is pleased to present</p>
				<h1>Dr. Janice Huntingford DVM, DACVSMR, CVA, CVPP, CCRT CAVCA</h1>
				<p>Managment of Pain<br /> in geriatric cats and dogs</p>
			</div>
			<div className="date">
				<div className="date_inner">
					<h2>Victoria Park East Golf Club</h2>
					<p>Feb 28, 2020</p>
					<p>5:30pm - 8:00pm <br />
					1096 Victoria Rd. South, Guelph<br />
					<span>Dinner at 6</span>
					</p>
				</div>
				<img src={golf} alt="Victoria East Logo " />
			</div>
			{attendees.length > 0 ? attendeeContainer : null}
			{formSubmitted ? thankYou : form}
			<a href="tel: 5196354394">Questions contact Marcy Heffren<br /> (519) 635-4394</a>
		</PageContainer>
		)
}
