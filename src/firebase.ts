import firebase from 'firebase';
import env from './env';

let _app: firebase.app.App;

export function app() {
  if (!_app) {
    _app = firebase.initializeApp(env.firebase);
  }
  return _app
}
