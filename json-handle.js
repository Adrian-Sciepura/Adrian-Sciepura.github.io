var langData = null

var http = new XMLHttpRequest()
http.open('get', 'languages_info.json', true)
http.send()
http.onload = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        langData = JSON.parse(this.responseText)
    }
}
