import { COLOR_PICKER_SIZES } from "@mantine/core";
import { SageMakerFeatureStoreRuntime } from "aws-sdk";
import { useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';

const Auth = ({capability, children}) => {
  const {isLoggedIn, can} = useContext(AuthContext);

  return (
    <When condition={isLoggedIn && can(capability)}>
      { children }
    </When>
  )
}

export default Auth;




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