const header = document.getElementById('header-container');
header.style.color = 'white';
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasks1 = document.getElementsByTagName('h3')[1];
emergencyTasks1.style.backgroundColor = 'rgb(165, 0, 243)';

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasks1 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasks1.length; index += 1) {
noEmergencyTasks1[1].style.backgroundColor = 'rgb(35, 37, 37)';
};

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';