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
         // * this function means that upon click, for all my content that goes with the btn, disregard the class that shows any of them. (after this function then we will re-add the style that shows it with diff conditions)
        articles.forEach(function(article){
            article.classList.remove('active');  
    });
    // * this function is saying that since the topic has been declared as there then get this element that goes by the same name. declare that variable and add the style that shows it
    const topicArticle = document.getElementById(topic);
    topicArticle.classList.add('active');
    }
});