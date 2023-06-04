import React from 'react'
import './Button.css'


const Button = (props) => {
	

	const {titleBtn,sai } = props
	return (
		<div className="block">
			
			<div className='hehehehe'>
			
			<button onClick={sai} class='full-rounded' >
			<span>{titleBtn}</span>
			<div className='border full-rounded'></div>
		</button>
		</div>
		</div>
		
	)
}

export default Button
