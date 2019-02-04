function jSearch(element,value) {

    const nodeList = document.querySelectorAll(element);
    value = value.toUpperCase();

    for (let i = 0; i < nodeList.length; i++){
        if (nodeList[i].innerHTML.toUpperCase().indexOf(value) === -1) {
            if( !nodeList[i].dataset.display ){
                nodeList[i].dataset.display = nodeList[i].style.display;
            }
            nodeList[i].style.display = 'none';
        }else{
            nodeList[i].style.display = null;
        }
    }

}