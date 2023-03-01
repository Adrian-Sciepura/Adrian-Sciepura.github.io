let currentlyScrolling = null

//SCROLL POSITIONS
const breakLength = 200

const welcomeStart = -100
const welcomeEnd = welcomeStart + 1600
const aboutStart = welcomeEnd + breakLength
const aboutEnd = aboutStart + 2600
const skillsStart = aboutEnd + breakLength
const skillsEnd = skillsStart + 3000
const projectsStart = skillsEnd + breakLength
const projectsEnd = projectsStart + 8000
const contactStart = projectsEnd + breakLength
const contactEnd = contactStart + 2600

const positions = 
[
    calculatePartOfTheWay(aboutStart, aboutEnd, 5, 2),
    calculatePartOfTheWay(skillsStart, skillsEnd, 5, 2),
    calculatePartOfTheWay(projectsStart, projectsEnd, 10, 1),
    calculatePartOfTheWay(projectsStart, projectsEnd, 10, 4),
    calculatePartOfTheWay(projectsStart, projectsEnd, 10, 7),
    calculatePartOfTheWay(contactStart, contactEnd, 5, 2)
]


function calculatePartOfTheWay(val1, val2, partSize, part)
{
    return val1 + ((val2 - val1) / partSize) * part
}


//LANGUAGES ELEMENT
const languages = new Section(document.querySelector('.languages'))
const languagesFadeIn = new Effect(0, calculatePartOfTheWay(welcomeStart, welcomeEnd, 5, 4))
const languagesExpand = new Effect(calculatePartOfTheWay(skillsStart, skillsEnd, 5, 1), calculatePartOfTheWay(skillsStart, skillsEnd, 5, 2))
const languagesCollapse = new Effect(calculatePartOfTheWay(skillsStart, skillsEnd, 5, 3), skillsEnd, true)
const languagesFirstProject = new Effect(projectsStart, calculatePartOfTheWay(projectsStart, projectsEnd, 10, 0.8))
const languagesSecondProject = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 3), calculatePartOfTheWay(projectsStart, projectsEnd, 10, 3.8))
const languagesThirdProject = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 6), calculatePartOfTheWay(projectsStart, projectsEnd, 10, 6.8))
const languagesBackToDefault = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 8.5), projectsEnd)

languagesFadeIn.func = function(element)
{
    var i = 0
    var op = this.calculateValueBetween(0, 0.8)
    var sc = this.calculateValueBetween(0, 1)
    for(const language of element.children)
    {
        const width = window.innerWidth
        var arr = null
        if(width > 1400) { arr = langData.desktop }
        else { arr = langData.mobile }
        language.style.transform = 'rotate(' + this.calculateValueBetween(0, arr.default[i].params[2]) + 'deg)'
        language.style.left = this.calculateValueBetween(50, arr.default[i].params[0]) + '%'
        language.style.top = this.calculateValueBetween(50, arr.default[i].params[1]) + '%'
        language.style.opacity = op
        language.style.scale = sc
        i += 1
    }
}

languagesExpand.func = function(element)
{
    var i = 0
    var op = this.calculateValueBetween(0.8, 1)
    var sc = this.calculateValueBetween(1, 1.2)
    var bg = this.calculateValueBetween(0, 1)

    for(const language of element.children)
    {
        const skill = language.children[1]
        language.style.backgroundColor = "rgba(25, 25, 26, " + bg + ")"
        language.style.opacity = op
        language.style.scale = sc
        skill.style.transform = 'scaleX(' + bg + ')'
        skill.style.opacity = bg
        i += 1
    }
}

languagesCollapse.func = languagesExpand.func
languagesFirstProject.func = changeLanguages("default", "firstProject")
languagesSecondProject.func = changeLanguages("firstProject", "secondProject")
languagesThirdProject.func = changeLanguages("secondProject", "thirdProject")
languagesBackToDefault.func = changeLanguages("thirdProject", "default")

languages.onScrollEffects.push(languagesFadeIn)
languages.onScrollEffects.push(languagesExpand)
languages.onScrollEffects.push(languagesCollapse)
languages.onScrollEffects.push(languagesFirstProject)
languages.onScrollEffects.push(languagesSecondProject)
languages.onScrollEffects.push(languagesThirdProject)
languages.onScrollEffects.push(languagesBackToDefault)
sections.push(languages)



//WELCOME ELEMENT
const welcome = new Section(document.querySelector('.welcome'))
const welcomeDisplay = new Effect(welcomeStart, welcomeEnd)
const welcomeFadeOut = new Effect(welcomeEnd / 2, welcomeEnd) 

welcomeDisplay.func = sectionDisplay("flex")
welcomeFadeOut.func = function(element)
{
    element.style.opacity = (this.calculateValueBetween(1, 0))
    element.style.scale = (this.calculateValueBetween(1, 0.8))
}

welcome.onScrollEffects.push(welcomeDisplay)
welcome.onScrollEffects.push(welcomeFadeOut)
sections.push(welcome)



//ABOUT ELEMENT
const about = new Section(document.querySelector('#about__section'))
const aboutDisplay = new Effect(aboutStart, aboutEnd)
const aboutTitleFadeIn = new Effect(aboutStart, calculatePartOfTheWay(aboutStart, aboutEnd, 5, 2))
const aboutContentFadeIn = new Effect(aboutStart, calculatePartOfTheWay(aboutStart, aboutEnd, 5, 2))
const aboutTitleFadeOut = new Effect(calculatePartOfTheWay(aboutStart, aboutEnd, 5, 3), aboutEnd, true)
const aboutContentFadeOut = new Effect(calculatePartOfTheWay(aboutStart, aboutEnd, 5, 3), aboutEnd)

aboutDisplay.func = sectionDisplay("grid")
aboutTitleFadeIn.func = sectionTitleFadeIn
aboutContentFadeIn.func = sectionContentFadeIn
aboutTitleFadeOut.func = sectionTitleFadeIn
aboutContentFadeOut.func = sectionContentFadeOut

about.onScrollEffects.push(aboutDisplay)
about.onScrollEffects.push(aboutTitleFadeIn)
about.onScrollEffects.push(aboutContentFadeIn)
about.onScrollEffects.push(aboutTitleFadeOut)
about.onScrollEffects.push(aboutContentFadeOut)
sections.push(about)



//SKILLS ELEMENT
const skills = new Section(document.querySelector('#skills__section'))
const skillsDisplay = new Effect(skillsStart, skillsEnd)
const skillsTitleFadeIn = new Effect(skillsStart, calculatePartOfTheWay(skillsStart, skillsEnd, 5, 2))
const skillsContentFadeIn = new Effect(skillsStart, calculatePartOfTheWay(skillsStart, skillsEnd, 5, 2))
const skillsTitleFadeOut = new Effect(calculatePartOfTheWay(skillsStart, skillsEnd, 5, 3), skillsEnd, true)
const skillsContentFadeOut = new Effect(calculatePartOfTheWay(skillsStart, skillsEnd, 5, 3), skillsEnd)

skillsDisplay.func = sectionDisplay("grid")
skillsTitleFadeIn.func = sectionTitleFadeIn
skillsContentFadeIn.func = sectionContentFadeIn
skillsTitleFadeOut.func = sectionTitleFadeIn
skillsContentFadeOut.func = sectionContentFadeOut

skills.onScrollEffects.push(skillsDisplay)
skills.onScrollEffects.push(skillsTitleFadeIn)
skills.onScrollEffects.push(skillsContentFadeIn)
skills.onScrollEffects.push(skillsTitleFadeOut)
skills.onScrollEffects.push(skillsContentFadeOut)
sections.push(skills)



//PROJECTS ELEMENT
const projects = new Section(document.querySelector('#projects__section'))
const projectsDisplay = new Effect(projectsStart, projectsEnd)
const projectsTitleFadeIn = new Effect(projectsStart, calculatePartOfTheWay(projectsStart, projectsEnd, 10, 1))
const firstProjectsContentFadeIn = new Effect(projectsStart, calculatePartOfTheWay(projectsStart, projectsEnd, 10, 1))
const firstProjectsContentFadeOut = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 2.5), calculatePartOfTheWay(projectsStart, projectsEnd, 10, 3.5))
const secondProjectsContentFadeIn = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 2.8), calculatePartOfTheWay(projectsStart, projectsEnd, 10, 4))
const secondProjectsContentFadeOut = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 5.5), calculatePartOfTheWay(projectsStart, projectsEnd, 10, 6.5))
const thirdProjectsContentFadeIn = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 5.8), calculatePartOfTheWay(projectsStart, projectsEnd, 10, 7))
const thirdProjectsContentFadeOut = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 8.5), projectsEnd)
const projectsTitleFadeOut = new Effect(calculatePartOfTheWay(projectsStart, projectsEnd, 10, 9), projectsEnd, true)

projectsDisplay.func = sectionDisplay("grid")
projectsTitleFadeIn.func = sectionTitleFadeIn
firstProjectsContentFadeIn.func = projectFadeIn(0, -1)
firstProjectsContentFadeOut.func = projectFadeOut(0)
secondProjectsContentFadeIn.func = projectFadeIn(1, 1)
secondProjectsContentFadeOut.func = projectFadeOut(1)
thirdProjectsContentFadeIn.func = projectFadeIn(2, -1)
thirdProjectsContentFadeOut.func = projectFadeOut(2)
projectsTitleFadeOut.func = sectionTitleFadeIn

projects.onScrollEffects.push(projectsDisplay)
projects.onScrollEffects.push(projectsTitleFadeIn)
projects.onScrollEffects.push(firstProjectsContentFadeIn)
projects.onScrollEffects.push(firstProjectsContentFadeOut)
projects.onScrollEffects.push(secondProjectsContentFadeIn)
projects.onScrollEffects.push(secondProjectsContentFadeOut)
projects.onScrollEffects.push(thirdProjectsContentFadeIn)
projects.onScrollEffects.push(thirdProjectsContentFadeOut)
projects.onScrollEffects.push(projectsTitleFadeOut)
sections.push(projects)



//CONTACT SECTION
const contact = new Section(document.querySelector('#contact__section'))
const contactDisplay = new Effect(contactStart, contactEnd)
const contactTitleFadeIn = new Effect(contactStart, calculatePartOfTheWay(contactStart, contactEnd, 5, 2))
const contactContentFadeIn = new Effect(contactStart, calculatePartOfTheWay(contactStart, contactEnd, 5, 2))

contactDisplay.func = sectionDisplay("grid")
contactTitleFadeIn.func = sectionTitleFadeIn
contactContentFadeIn.func = sectionContentFadeIn

contact.onScrollEffects.push(contactDisplay)
contact.onScrollEffects.push(contactTitleFadeIn)
contact.onScrollEffects.push(contactContentFadeIn)
sections.push(contact)



//SCROLL BUTTONS

function scrollDown(element, position, speed)
{
    const step = (position - document.documentElement.scrollTop) / 200
    currentlyScrolling = element
    for(let i = 0; i < 200; i++)
    {
        setTimeout(() => { document.documentElement.scrollTop += step }, i*10*speed)
    }
    setTimeout(() => { currentlyScrolling = null }, 200*10*speed)
}



const mainArrow = document.querySelector(".main-arrow")
mainArrow.addEventListener("click", () =>
{
    if(currentlyScrolling == null)
        scrollDown(mainArrow, positions[0], 0.8)
})

const arrows = document.querySelectorAll(".arrow")
arrows.forEach((arrow) => {
    arrow.addEventListener("click", () =>
    {
        if(currentlyScrolling == null)
            scrollDown(arrow, positions[(arrow.id).substring(1)], 0.5)
    })
})



window.addEventListener('load', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, true))
});

window.addEventListener('scroll', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, false))
});

window.addEventListener('resize', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, true))
});