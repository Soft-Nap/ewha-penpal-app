// import * as firebase from 'firebase';
import config from '../../firebase.json';
// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp(config);
//login
const Auth = app.auth();
export const login = async({ email, password}) => {
	const { user } = await Auth.signInWithEmailAndPassword(email, password);
	return user;
}
// sign up
export const signup = async({email, password}) => {
	const { user } = await Auth.createUserWithEmailAndPassword(email, password);
	return user;
};