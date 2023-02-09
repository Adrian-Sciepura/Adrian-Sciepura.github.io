//LANGUAGES ELEMENT
const languages = new Section(document.querySelector('.languages'))
const languagesFadeIn = new Effect(0, 1000)
const languagesExpand = new Effect(4800, 5700)
const languagesCollapse = new Effect(6600, 7700, true)

const languagePos = [
    [15, 10, 20],
    [80, 80, 25],
    [10, 80, -10],
    [50, 5, -5],
    [85, 35, -10],
    [5, 50, 7],
    [50, 80, 2],
]

const languageMobilePos = [
    [5, 5, 20],
    [75, 75, 25],
    [10, 75, -10],
    [50, 3, -5],
    [70, 20, -10],
    [30, 20, 7],
    [45, 85, 2],
]

languagesFadeIn.func = function(element)
{
    var i = 0
    var op = this.calculateValueBetween(0, 0.8)
    var sc = this.calculateValueBetween(0, 1)
    for(const language of element.children)
    {
        const width = window.innerWidth
        var arr = null
        if(width > 1400) { arr = languagePos }
        else { arr = languageMobilePos }

        language.style.transform = 'rotate(' + this.calculateValueBetween(0, arr[i][2]) + 'deg)'
        language.style.left = this.calculateValueBetween(50, arr[i][0]) + '%'
        language.style.top = this.calculateValueBetween(50, arr[i][1]) + '%'
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

languages.onScrollEffects.push(languagesFadeIn)
languages.onScrollEffects.push(languagesExpand)
languages.onScrollEffects.push(languagesCollapse)
sections.push(languages)



//WELCOME ELEMENT
const welcome = new Section(document.querySelector('.welcome'))
const welcomeFadeOut = new Effect(600, 1500) 

welcomeFadeOut.func = function(element)
{
    element.style.opacity = (this.calculateValueBetween(1, 0))
    element.style.scale = (this.calculateValueBetween(1, 0.8))
}

welcome.onScrollEffects.push(welcomeFadeOut)
sections.push(welcome)



//ABOUT ELEMENT
const about = new Section(document.querySelector('.about__content'))
const aboutTitleFadeIn = new Effect(1700, 2500)
const aboutContentFadeIn = new Effect(1700, 2800)
const aboutTitleFadeOut = new Effect(3200, 4000, true)
const aboutContentFadeOut = new Effect(3200, 4300)

aboutTitleFadeIn.func = sectionTitleFadeIn
aboutContentFadeIn.func = sectionContentFadeIn
aboutTitleFadeOut.func = sectionTitleFadeIn
aboutContentFadeOut.func = sectionContentFadeOut

about.onScrollEffects.push(aboutTitleFadeIn)
about.onScrollEffects.push(aboutContentFadeIn)
about.onScrollEffects.push(aboutTitleFadeOut)
about.onScrollEffects.push(aboutContentFadeOut)
sections.push(about)



//SKILLS ELEMENT
const skills = new Section(document.querySelector('.skills__content'))
const skillsTitleFadeIn = new Effect(4500, 5300)
const skillsContentFadeIn = new Effect(4500, 5500)
const skillsTitleFadeOut = new Effect(6500, 7400, true)
const skillsContentFadeOut = new Effect(6500, 7300)

skillsTitleFadeIn.func = sectionTitleFadeIn
skillsContentFadeIn.func = sectionContentFadeIn
skillsTitleFadeOut.func = sectionTitleFadeIn
skillsContentFadeOut.func = sectionContentFadeOut

skills.onScrollEffects.push(skillsTitleFadeIn)
skills.onScrollEffects.push(skillsContentFadeIn)
skills.onScrollEffects.push(skillsTitleFadeOut)
skills.onScrollEffects.push(skillsContentFadeOut)
sections.push(skills)



//PROJECTS ELEMENT
const projects = new Section(document.querySelector('.projects__content'))
const projectsTitleFadeIn = new Effect(8000, 8800)
const projectsContentFadeIn = new Effect(8000, 9000)

projectsTitleFadeIn.func = sectionTitleFadeIn
projectsContentFadeIn.func = sectionContentFadeIn

projects.onScrollEffects.push(projectsTitleFadeIn)
projects.onScrollEffects.push(projectsContentFadeIn)
sections.push(projects)



window.addEventListener('scroll', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, false))
});

window.addEventListener('resize', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, true))
});