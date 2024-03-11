const btnMenu = document.querySelector('.btn-round-menu')
const nav = document.querySelector('.nav-left');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const line = document.querySelector('.cont-line');

btnMenu.addEventListener('click', () => {

    line.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if (window.matchMedia('(max-width: 1300px)')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            line.classList.toggle('active');
        })
    })

}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
    .pauseFor(1800)
    .changeDelay(20)
    .typeString('Moi c\'est Julya')
    .pauseFor(300)
    .typeString('<strong>, Développeuse Web</strong> !')
    .pauseFor(1000)
    .deleteChars(18)
    .typeString('je travaille avec ')
    .pauseFor(1000)
    .typeString('<span style="color: #E54C26;"> HTML</span> !')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('<span style="color: #107FBD;"> CSS</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: #F0DB4E;"> JavaScript</span> !')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('<span style="color: #777BB3;"> Php</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: #088BC0;"> WordPress</span> !')
    .start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for (let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == '') {
            e.target.parentNode.classList.remove('animation')
        }
    })

}

// Anim GSAP + ScrollMagic

const navbar = document.querySelector('.nav-left');
const title = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-home')
const btnMedias = document.querySelectorAll('.media')
const btnroundhome = document.querySelector('.btn-round')


const TL1 = gsap.timeline({
    paused: true
});

TL1
    .to(navbar, {
        left: '0px',
        ease: Power3.easeOut,
        duration: 0.6
    })
    .from(title, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 0.4
    })
    .staggerFrom(btn, 1, {
        opacity: 0
    }, 0.2, '-=0.30')
    .staggerFrom(btnMedias, 1, {
        opacity: 0
    }, 0.2, '-=0.75')
    .from(btnroundhome, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 0.4
    }, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector('.presentation')
const titlePres = document.querySelector('.title-pres');
const presleft = document.querySelector('.pres-left')
const listPres = document.querySelectorAll('.item-list')

const tlpres = new TimelineMax();

tlpres
    .from(titlePres, {
        y: -200,
        opacity: 0,
        duration: 0.6
    })
    .from(presleft, {
        y: -20,
        opacity: 0,
        duration: 0.6
    }, '-=0.5')
    .staggerFrom(listPres, 1, {
        opacity: 0
    }, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: presentationContainer,
        triggerHook: 0.5,
        reverse: false
    })
    .setTween(tlpres)
    // .addIndicators()
    .addTo(controller)

// Anim portfolio

const portfolioContainer = document.querySelector('.portfolio')
const titlePortfolio = document.querySelector('.title-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
    .from(titlePortfolio, {
        y: -50,
        opacity: 0,
        duration: 0.5
    })
    .staggerFrom(itemPortfolio, 1, {
        opacity: 0
    }, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
        triggerElement: portfolioContainer,
        triggerHook: 0.5,
        reverse: false
    })
    .setTween(tlPortfolio)
    // .addIndicators()
    .addTo(controller)


// Vague 2 

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
    .staggerFrom(itemPortfolio2, 1, {
        opacity: 0
    }, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
        triggerElement: itemPortfolio,
        triggerHook: 0.2,
        reverse: false
    })
    .setTween(tlPortfolio2)
    // .addIndicators()
    .addTo(controller)


// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
    .staggerFrom(itemPortfolio3, 1, {
        opacity: 0
    }, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
        triggerElement: itemPortfolio2,
        triggerHook: 0.2,
        reverse: false
    })
    .setTween(tlPortfolio3)
    // .addIndicators()
    .addTo(controller)


// Animation range

const sectionComp = document.querySelector('.section-range');
const titleComp = document.querySelector('.title-xp');
const allLabel = document.querySelectorAll('.label-skill')
const allPourcent = document.querySelectorAll('.number-skill')
const allBarres = document.querySelectorAll('.barre-skill')
const allShadowBarres = document.querySelectorAll('.barre-grises')

const tlCompetences = new TimelineMax();

tlCompetences
    .from(titleComp, {
        opacity: 0,
        duration: 0.6
    })
    .staggerFrom(allLabel, 0.5, {
        y: -50,
        opacity: 0
    }, 0.1, '-=0.5')
    .staggerFrom(allPourcent, 0.5, {
        y: -10,
        opacity: 0
    }, 0.1, '-=1')
    .staggerFrom(allShadowBarres, 0.5, {
        y: -10,
        opacity: 0
    }, 0.1, '-=1')
    .staggerFrom(allBarres, 0.5, {
        y: -10,
        opacity: 0
    }, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
        triggerElement: sectionComp,
        reverse: false
    })
    .setTween(tlCompetences)
    .addTo(controller);

//time exp
function formatPluriel(valeur, texte) {
    return valeur > 1 ? texte + 's' : texte;
}

function calculerTempsEcoule() {
    const dateDebut = new Date('2020-12-07T00:00:00');
    const maintenant = new Date();
    const tempsEcoule = maintenant - dateDebut;

    const secondesEcoulees = Math.floor(tempsEcoule / 1000);
    const minutesEcoulees = Math.floor(secondesEcoulees / 60);
    const heuresEcoulees = Math.floor(minutesEcoulees / 60);
    const joursEcoules = Math.floor(heuresEcoulees / 24);
    const semainesEcoulees = Math.floor(joursEcoules / 7);
    const moisEcoules = Math.floor(joursEcoules / 30.4375); // Moyenne de jours par mois
    const anneesEcoulees = Math.floor(joursEcoules / 365.25); // Moyenne de jours par an

    const tempsAffiche = `
        ${anneesEcoulees} ans ${moisEcoules % 12} mois ${semainesEcoulees % 4} ${formatPluriel(semainesEcoulees % 4, 'semaine')} ${joursEcoules % 7} ${formatPluriel(joursEcoules % 7, 'jour')} ${heuresEcoulees % 24}h ${minutesEcoulees % 60}m ${secondesEcoulees % 60}s`;
    $('#tempsEcoule').text(tempsAffiche);
}

$(document).ready(function () {
    calculerTempsEcoule();
    setInterval(calculerTempsEcoule, 1000); // Actualise toutes les secondes
});