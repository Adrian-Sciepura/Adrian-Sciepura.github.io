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