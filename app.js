const projects = 
[
    document.getElementById("project_1"),
    document.getElementById("project_2"),
    document.getElementById("project_3")
];

const projectsStyle = [];

projects.forEach((p) => {
    var computedElement = getComputedStyle(p);
    projectsStyle.push([computedElement.getPropertyValue('--bg'), computedElement.getPropertyValue('--sh')]);

    p.addEventListener('mouseenter', () => {
        OnMouseEnter(p.id.charAt(p.id.length - 1) - 1);
    });

    p.addEventListener('mouseleave', () => {
        OnMouseLeave();
    });
});

function OnMouseEnter(id)
{   
    document.body.style.backgroundColor = '#141414';

    var bgColor = projectsStyle[id][0];
    var shColor = projectsStyle[id][1];
    var project = null;
    var projectContent = null;

    for(var i = 0; i < 3; i++)
    {
        project = projects[i];
        projectContent = project.children[0];
        projectContent.style.opacity = '0';
        DelayAppear(projectContent, response[id*3 + i], '2s');
        project.style.backgroundColor = bgColor
        project.style.boxShadow = '0px 4px 100px ' + shColor;
    }
}

function DelayAppear(element, content, opacityTime)
{
    setTimeout(() => {
        element.style.transition = 'opacity ' + opacityTime;
        element.innerHTML = content;    
        element.style.opacity = '1';
    }, 400);
}

function OnMouseLeave()
{
    document.body.style.backgroundColor = '#202021';
    var i = 0;
    var projectContent = null;

    projects.forEach((p) => {
        projectContent = p.children[0];
        DelayAppear(projectContent, '<span class="project__unknown">?</span>', '0.2s');
        p.style.backgroundColor = '#343434';
        p.style.boxShadow = '0px 4px 50px #000000';
        i++;
    });
}