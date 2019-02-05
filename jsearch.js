class jSearch {
    static filter(element,term)
    {
        const nodeList = document.querySelectorAll(element);
        term = this.removeSpecialChar(term);

        for (let i = 0; i < nodeList.length; i++){
            const elem = nodeList[i];
            const origin = this.removeSpecialChar(elem.textContent || elem.innerText || '');
            if (origin.indexOf(term) === -1) {
                if( !elem.dataset.display ){
                    elem.dataset.display = elem.style.display;
                }
                elem.style.display = 'none';
            }else{
                elem.style.display = null;
            }
        }
    }

    static removeSpecialChar(term)
    {
        term = term.toUpperCase();
        term = term.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
        term = term.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
        term = term.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
        term = term.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
        term = term.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
        term = term.replace(new RegExp('[Ç]','gi'), 'C');
        term = term.replace(/[^\w\s]/gi, '');
        return term;
    }
}