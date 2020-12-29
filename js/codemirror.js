var codes = document.body.getElementsByTagName("code");
for (var index_code = 0; index_code < codes.length ; index_code++) {
    
    var code = codes[index_code];
    var content = code.innerHTML.trim();
    code.innerHTML = "";
    code.style.fontSize = "13px";

    var editor = CodeMirror(code, {
        value: content,
        mode: "python",
        theme: "monokai",
        tabSize: 4, 
        lineNumbers: true
    });

    for(var count=-1, index=-2; index != -1; count++, index=content.indexOf("\n", index+1) );
    editor.setSize(null, 16.5*count);
    editor.on('beforeChange',  function(cm, change) { change.cancel(); });
}