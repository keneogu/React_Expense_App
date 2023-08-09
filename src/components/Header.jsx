import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='w-full bg-slate-900 text-white flex justify-between py-3'>
			<Link to="/" className='pl-2'>
				<h1>Expense tracker</h1>
			</Link>
			<div className='flex justify-between'>
				<Link to="/login" className='pr-8'>login</Link>
				<Link to="/login" className='pr-5'>logout</Link>
			</div>
		</div>
	)
}

export default Header
