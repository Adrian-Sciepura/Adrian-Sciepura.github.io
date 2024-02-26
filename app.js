class EventManager
{
    constructor() 
    {
        this.currentlyPlaying = [];
    }

    playSomething(callback, delay)
    {
        this.currentlyPlaying.push(setTimeout(callback, delay));
    }

    stopAll()
    {
        this.currentlyPlaying.forEach((timeout) => clearTimeout(timeout));
        this.currentlyPlaying = [];
    }
}


class DisplayManager
{
    constructor() 
    {
        this.currentSection = 0;
        this.eventManager = new EventManager();

        this.navElements = document.querySelectorAll('.nav_element');
        this.sections = 
        [
            document.querySelector('.section__welcome'),
            document.querySelector('.section__about')
        ];

        for(let i = 0; i < this.navElements.length; i++)
            this.navElements[i].addEventListener('click', () => this.changeSection(i));

        this.displaySection(0);
    }

    changeSection(id)
    {
        if(id === this.currentSection) 
            return;

        this.eventManager.stopAll();
        this.sections[this.currentSection].style.display = 'none';
        this.displaySection(id);
    }

    displaySection(id)
    {
        this.sections[id].style.display = 'flex';
        this.currentSection = id;
    }
}



const displayManager = new DisplayManager();