function openTab(evt, section) {
    var i, tabz, tablinks //why do list variables here again?
    tabz = document.getElementsByClassName('tabz');
    for (i = 0; i < tabz.length; i++) {
        tabz[i].style.display = "none";
        console.log('Success')
    }
    tablinks = document.getElementsByClassName('tablinks')
    for (i = 0; i < tabz.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "" );
        console.log('Running thru fine')
    }
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active";
    console.log('Ran thru but did it make changes?')
}
document.getElementById("defaultOpen").click();