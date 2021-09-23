
//Les fonctions

function f_changementimage(){
  
      document.getElementById('story').style.display = "none";
      document.getElementById('storyB').style.display = "block";
}

function croix(){
  document.getElementById('story').style.display = "block";
  document.getElementById('storyB').style.display = "none";
}

function croix2(){
  document.getElementById('theme_look').style.display = "block";
  document.getElementById('theme_hidden').style.display = "none";
}

function croix3(){
  document.getElementById('influences_look').style.display = "block";
  document.getElementById('influences_hidden').style.display = "none";
}

function passthem(){
  document.getElementById('storyB').style.display = "none";
  document.getElementById('theme_look').style.display = "block";
}

function theme(){
  document.getElementById('theme_look').style.display = "none";
  document.getElementById('theme_hidden').style.display = "block";
}

function theme_acteurs(){
  document.getElementById('theme_hidden').style.display = "none";
  document.getElementById('acteurs_look').style.display = "block";
}

function acteurs(){
  document.getElementById('acteurs_look').style.display = "none";
  document.getElementById('acteurs_hidden').style.display = "block";
}

function acteurs_moments(){
  document.getElementById('acteurs_hidden').style.display = "none";
  document.getElementById('moments_look').style.display = "block";
}

function moments(){
  document.getElementById('moments_look').style.display = "none";
  document.getElementById('moment_hidden').style.display = "block";
}

function influence(){

  document.getElementById('influences_look').style.display = "none";
  document.getElementById('influences_hidden').style.display = "block";
}
 

const bar = document.querySelector(".bar");
addEventListener("scroll",function(){

    const max = document.body.scrollHeight-innerHeight;
    const pourcentage = pageYOffset / max * 100;

    bar.style.width = pourcentage + "5%";
});



//const story = document.querySelector('#story');
//const storyB = document.querySelector('storyB');

/*Ecoute d'événement sur la section story */

//story.addEventListener('click', function(){
 // story.classList.remove('story');
 // story.classList.add('storyB');
//})


/*Ecoute d' événement sur la section theme */
