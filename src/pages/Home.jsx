import React, {useEffect, useContext} from 'react'
import { AuthContext } from "../reducers/authContext";
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { login, isAuthenticate, error, loading } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticate) {
			navigate("/login")
		}
	}, [isAuthenticate])
	
	return (
		<div>Home</div>
	)
}

export default Home