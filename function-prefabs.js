function changeDisplayMode(element, effect, appear)
{
    var temp = effect.calculateValueBetween(0, 1)

    if(temp == appear)
    {
        element.style.display = "none"
    }
    else
    {
        element.style.display = "flex"
    }
}

function sectionDisplay(element)
{
    var temp = this.calculateValueBetween(0, 1)
    if(temp == 0 || temp == 1)
    {
        element.parentElement.style.display = "none"
    }
    else
    {
        element.parentElement.style.display = "flex"
    }
}

function sectionTitleFadeIn (element)
{
    const e = element.children[0]
    e.style.opacity = this.calculateValueBetween(0, 1)
}

function sectionContentFadeIn (element)
{
    const e = element.children[1]
    e.style.opacity = this.calculateValueBetween(0, 1)
    e.style.filter = 'blur(' + this.calculateValueBetween(3, 0) + 'px)'
    e.style.transform = 'translate(' + this.calculateValueBetween(-500, 0) + 'px, 0)'
}

function sectionContentFadeOut (element)
{
    const e = element.children[1]
    e.style.opacity = this.calculateValueBetween(1, 0)
    e.style.filter = 'blur(' + this.calculateValueBetween(0, 3) + 'px)'
    e.style.scale = (this.calculateValueBetween(1, 0.8))
}

//site parameter: -1 - left, 1 - right
function specificSectionContentFadeIn(number, site)
{
    return function(element)
    {
        const e = element.children[1 + number]
        e.style.opacity = this.calculateValueBetween(0, 1)
        e.style.filter = 'blur(' + this.calculateValueBetween(3, 0) + 'px)'
        e.style.transform = 'translate(' + this.calculateValueBetween(500*site, 0) + 'px, 0)'
        changeDisplayMode(e, this, 0)
    }
}

function specificSectionContentFadeOut(number)
{
    return function(element)
    {
        const e = element.children[1 + number]
        e.style.opacity = this.calculateValueBetween(1, 0)
        e.style.filter = 'blur(' + this.calculateValueBetween(0, 3) + 'px)'
        e.style.scale = (this.calculateValueBetween(1, 0.8))
        changeDisplayMode(e, this, 1)
    }
}

function changeLanguageText(element, initialText, finalText, effect)
{
    var temp = effect.calculateValueBetween(0, 1)
    const e = element.children[0]

    if(temp <= 0.5)
    {
        e.style.filter = 'blur(' + effect.calculateValueBetween(0, 16) + 'px)'
        e.textContent = initialText
    }
    else
    {
        e.style.filter = 'blur(' + effect.calculateValueBetween(16, 0) + 'px)'
        e.textContent = finalText
    }

}

function changeLanguages(initialTextArray, finalTextArray)
{
    return function(element)
    {
        const width = window.innerWidth
        var arr = null
        if(width > 1400) { arr = langData.desktop }
        else { arr = langData.mobile }
        
        var i = 0
        for(const language of element.children)
        {
            language.style.transform = 'rotate(' + this.calculateValueBetween(arr[initialTextArray][i].params[2], arr[finalTextArray][i].params[2]) + 'deg)'
            language.style.left = this.calculateValueBetween(arr[initialTextArray][i].params[0], arr[finalTextArray][i].params[0]) + '%'
            language.style.top = this.calculateValueBetween(arr[initialTextArray][i].params[1], arr[finalTextArray][i].params[1]) + '%'
            changeLanguageText(language, arr[initialTextArray][i].lang, arr[finalTextArray][i].lang, this)
            i += 1
        }
    }
}