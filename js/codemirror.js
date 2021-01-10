var codes = document.body.getElementsByTagName("code"); //obtention de toutes les balises code

for (var index_code = 0; index_code < codes.length ; index_code++) { //pour chaque balise code
    
    var code = codes[index_code];
    var content = code.textContent.trim(); //obtention du contenue de la balise
    code.textContent = ""; //purge du contenue originel pour le remplacer
    code.style.fontSize = "15px"; //taille de la police

    number = code.className.split(" ").find(c=>/^firstLineNumber\d+$/.test(c)) //debut de numérotation
    var editor = CodeMirror(code, {
        value: content, //contenue
        mode: code.classList.contains("console") ? null : "python", //choix du language
        theme: "monokai", //theme monokai
        tabSize: 4, //largeur des tabulation
        lineNumbers: !code.classList.contains("console"), //affichage du nombre de ligne si il n'y a la class console
        firstLineNumber: number? Number(number.replace("firstLineNumber", "")) : 1,
        readOnly: true //editor.on('beforeChange',  function(cm, change) { change.cancel(); }); // bloque l'écriture
    });
    editor.setSize(null, 18*editor.lineCount()+10); //mise de l'éditeur à la bonne taille
}