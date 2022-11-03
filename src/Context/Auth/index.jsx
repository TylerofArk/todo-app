import { COLOR_PICKER_SIZES } from "@mantine/core";
import { SageMakerFeatureStoreRuntime } from "aws-sdk";





function _validateToken(token){
	try{
		let validUser = jwt_decode(token){
			if(validUser);
			setUser(validUser);
			setIsLoggedIn(true);
			console.log('I am logged in')
			cookie.save('auth', token);
		}
	} catch(e){
		setIsLoggedIn(false);
		setError(e);
		console.error(e);
	}
}

const logout = () => {
	setUser({});
	setIsLoggedIn(false);
	setError(null);
	cookie.remove('auth');
}

let values = 