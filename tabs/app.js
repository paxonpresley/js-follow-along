// todo: when the window opens you want the default classList of .active on the history page

const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    // console.log(e.target.dataset.topic);
    const topic = e.target.dataset.topic;
    // * the logic you want to setup is if a topic is present, then remove the .active class. do this 
    if(topic){
        tabBtns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
    }
    
});