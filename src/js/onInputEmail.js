import { LOCAL_KEY } from './03-feedback';

export function onInputEmail(event) {
  const userEmail = event.target.value;
  localStorage.setItem(LOCAL_KEY, userEmail);
  console.log(userEmail);
}
