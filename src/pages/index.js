import React, { useState } from 'react'
import AttendeeList from '../components/AttendeeList'
import addClinic from '../components/actions'
import styled from 'styled-components'
import logo from '../images/logo.png'
import food from '../images/food.jpg'
import plus from '../images/plus.png'

const PageContainer = styled.div`
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
		height: 25rem;
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
		height: 40rem;
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
		height: 15.4rem;
		background-color: rgba(108,165,28, .8);
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
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		height: 15.4rem;
		width: 100vw;
		padding: 2rem;
		label { display: block; }
	}
	.attendees {
		padding: 0 2rem;
	}
	.plus_container {
		width: 100%;
		text-align: center;
		padding-top: 2rem;
		p { 
			position: relative;
			top: -8px;
			font-size: 1rem; 
			color: ${ ({theme: { colorHighlight }}) => colorHighlight };
		}
		@media( min-width: 770px ) {
			max-width: 770px;
		}  
	}
	.plus {
		width: 2rem;
	}
	.btn {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		font-weight: bold;
		color: ${ ({theme: { colorHighlight }}) => colorHighlight };
		border: 1px solid ${ ({theme: { colorHighlight }}) => colorHighlight };
		background-color: transparent;
		border-radius: 5px;
		margin-top: 2rem;
		padding: 5px 10px;
		&.large {
			font-size: 2rem;
			color: ${ ({theme: { colorBase }}) => colorBase };
			border: 2px solid ${ ({theme: { colorBase }}) => colorBase };
			margin-bottom: 2rem;
		}
	}
`

export default () => {
	const [ name, setName ] = useState(null)
	const [ dinner, setDinner ] = useState(null)
	const [ hospital, setHospital ] = useState(null)
	const [ attendees, setAttendees ] = useState([])

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
		const clinic = {
			hospital : hospital,
			attendees: attendees
		}
		addClinic(clinic)
		console.log('almost sent')
	}
	return (
		<PageContainer>
			<div className="header">
				<img src={logo} alt="logo" />
				<p>Presents</p>
				<h1>Managment of pain<br /> in cats and dogs</h1>
			</div>
			<div className="date">
				<div className="date_inner">
					<h2>Feb 28, 2020</h2>
					<p>5:30pm - 8:00pm <br />
					<span>Dinner at 6</span>
					</p>
				</div>
			</div>
			<div className="form">
				<div>
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
					<div className="plus_container">
						<img onClick={addAttendee} className="plus" src={plus} alt="plus button" />
						<p>Add</p>
					</div>
				</div>
			</div>
			<div className="attendees">
				<p>Attendees:</p>
				<AttendeeList list={attendees} />
				<button className="btn large" onClick={addToDatabase}>Submit</button>
			</div>
		</PageContainer>
		)
}
