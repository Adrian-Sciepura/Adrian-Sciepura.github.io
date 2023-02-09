class Effect
{
    constructor(startY, endY, reverse = false)
    {
        this.startY = startY
        this.endY = endY
        this.previousProgress = -1
        this.progress = 0
        this.func = null
        this.reverse = reverse
    }

    calculateProgress(scrollY)
    {
        this.previousProgress = this.progress
        if(scrollY >= this.endY)
        {
            this.progress = 1
        }
        else if(scrollY <= this.startY)
        {
            this.progress = 0
        }
        else
        {
            this.progress = (scrollY - this.startY)/(this.endY - this.startY)
        }
    }

    calculateValueBetween(from, to)
    {
        if(this.reverse)
        {
            return (to + (from - to) * this.progress)
        }

        return (from + (to - from) * this.progress)
    }
}

class Section
{
    constructor(parentElement)
    {
        this.parentElement = parentElement
        this.onScrollEffects = []
    }

    updateScrollEffects(scrollY, forceRefresh) {
        this.onScrollEffects.forEach((effect) => {
            effect.calculateProgress(scrollY)
            if(effect.previousProgress != effect.progress)
            {
                effect.func(this.parentElement)
            }

            if(forceRefresh && effect.progress > 0)
            {
                effect.func(this.parentElement)
            }
        })
    }
}

var sections = []