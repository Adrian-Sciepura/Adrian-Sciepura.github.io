//LANGUAGES ELEMENT
const languages = new Section(document.querySelector('.languages'))
const languagesFadeIn = new Effect(0, 1000)
const languagesExpand = new Effect(4800, 5700)
const languagesCollapse = new Effect(6600, 7700, true)
const languagesFirstProject = new Effect(8000, 8800)
const languagesSecondProject = new Effect(9500, 10300)
const languagesThirdProject = new Effect(11300, 12100)
const languagesBackToDefault = new Effect(12800, 13600)

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
const aboutTitleFadeOut = new Effect(3200, 4400, true)
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

const firstProjectsContentFadeIn = new Effect(8000, 9000)
const firstProjectsContentFadeOut = new Effect(9200, 10100)

const secondProjectsContentFadeIn = new Effect(9500, 10500)
const secondProjectsContentFadeOut = new Effect(11000, 11900)

const thirdProjectsContentFadeIn = new Effect(11300, 12300)
const thirdProjectsContentFadeOut = new Effect(12800, 13500)

const projectsTitleFadeOut = new Effect(12800, 13600, true)

projectsTitleFadeIn.func = sectionTitleFadeIn
firstProjectsContentFadeIn.func = specificSectionContentFadeIn(0, -1)
firstProjectsContentFadeOut.func = specificSectionContentFadeOut(0)

secondProjectsContentFadeIn.func = specificSectionContentFadeIn(1, 1)
secondProjectsContentFadeOut.func = specificSectionContentFadeOut(1)

thirdProjectsContentFadeIn.func = specificSectionContentFadeIn(2, -1)
thirdProjectsContentFadeOut.func = specificSectionContentFadeOut(2)

projectsTitleFadeOut.func = sectionTitleFadeIn

projects.onScrollEffects.push(projectsTitleFadeIn)
projects.onScrollEffects.push(firstProjectsContentFadeIn)
projects.onScrollEffects.push(firstProjectsContentFadeOut)
projects.onScrollEffects.push(secondProjectsContentFadeIn)
projects.onScrollEffects.push(secondProjectsContentFadeOut)
projects.onScrollEffects.push(thirdProjectsContentFadeIn)
projects.onScrollEffects.push(thirdProjectsContentFadeOut)
projects.onScrollEffects.push(projectsTitleFadeOut)
sections.push(projects)



window.addEventListener('scroll', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, false))
});

window.addEventListener('resize', () => {
    sections.forEach((sec) => sec.updateScrollEffects(window.pageYOffset, true))
});