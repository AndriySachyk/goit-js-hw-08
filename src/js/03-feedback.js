const refs = {
  switchIcon: document.getElementById('switch-icon'),
    body: document.querySelector('body'),
    iconDay: document.getElementById("icon-day"),
    iconNight: document.getElementById("icon-night")
 
};

refs.switchIcon.addEventListener('click', switchColor);

window.addEventListener('DOMContentLoaded', addClassColor)


const KEY_LOCAL_STOREG = 'background';
const value = 'value';




function switchColor() {
    switchIcon();
    refs.body.classList.toggle('bkg-dark');
    const audit = refs.body.classList.contains('bkg-dark');
    
    console.log(audit);
    save(KEY_LOCAL_STOREG, audit);
}


function addClassColor() {

    const localValue = load(KEY_LOCAL_STOREG);
    console.log(localValue);
    if (localValue) {
        refs.body.classList.add('bkg-dark');
        refs.switchIcon.classList.remove('icon-day');
        refs.switchIcon.classList.add('icon-night');
    }
}



function switchIcon() {
    refs.switchIcon.classList.toggle('icon-day')
    refs.switchIcon.classList.toggle('icon-night')

}






const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};




