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



class ProjectsManager
{
    constructor()
    {
        this.currentProject = 0;
        this.projectElements = document.querySelectorAll('.project');
    }

    changeProject(id)
    {
        if(id === this.currentProject) 
            return;

        this.hideProject(this.currentProject);
        this.displayProject(id);
        this.currentProject = id;
    }

    displayProject(id)
    {
        this.projectElements[id].style.display = 'grid';
    }

    hideProject(id) 
    {
        this.projectElements[id].style.display = 'none'; 
    }

    show()
    {
        this.currentProject = 0;
        this.displayProject(this.currentProject);
    }

    hide()
    {
        this.hideProject(this.currentProject);
    }
}


class SectionManager
{
    constructor() 
    {
        this.currentSection = 0;
        this.eventManager = new EventManager();
        this.projectsManager = new ProjectsManager();

        this.navElements = document.querySelectorAll('.nav_element');
        this.sections = 
        [
            document.querySelector('.section__welcome'),
            document.querySelector('.section__about'),
            document.querySelector('.section__experience'),
            document.querySelector('.section__projects'),
        ];

        this.displayType = [];

        for(let i = 0; i < this.sections.length; i++)
            this.displayType.push(getComputedStyle(this.sections[i]).getPropertyValue("--display-type"));

        for(let i = 0; i < this.navElements.length; i++)
            this.navElements[i].addEventListener('click', () => this.changeSection(i));

        // Show welcome section
        this.displaySection(0);
    }

    changeSection(id)
    {
        if(id === this.currentSection) 
            return;

        // Cleanup projects if currently oppened
        if(this.currentSection == 3)
            this.projectsManager.hide();

        // Display section
        this.eventManager.stopAll();
        this.sections[this.currentSection].style.display = 'none';
        this.displaySection(id);
    }

    displaySection(id)
    {
        this.sections[id].style.display = this.displayType[id];
        this.currentSection = id;

        // Show first project if projects section was opened
        if(id == 3)
            this.projectsManager.show();
    }
}



const sectionManager = new SectionManager();