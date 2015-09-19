
CKEDITOR.plugins.add( 'BewInsertUnsubscribeLink',
{
    init: function( editor )
    {
        editor.addCommand( 'insertUnsubscribeLink',
        {
            exec : function( editor )
            {
                var selectedNode = editor.getSelection().getNative().anchorNode;
                var existingLink = null;
                var fullSelectedText = null;
                var type = editor.getSelection().getNative().type // Carret ou Range
                /*
                 *  Si on a sélectionné du texte, on cherche si il y a un lien associé à ce texte.
                 *  Si on en trouve, on va remplacer ce texte par la balise Bob, sinon on in sere la balise Bob
                 */

                if (type == "Range") {
                    fullSelectedText = selectedNode.nodeValue;
                    // var fullSelectedTextLength = fullSelectedText.length;
                    var fullSelectedTextLength = selectedNode.length;

                    var offset = editor.getSelection().getNative().anchorOffset;
                    var selectedText = fullSelectedText.substring(offset, fullSelectedTextLength);

                    var selectedText = editor.getSelection().getSelectedText();

                    if (selectedText.length < 3) {
                        alert('Le lien doit faire plus de 3 caractères.');
                        return;
                    }

                    existingLink = selectedNode.parentNode.href;

                    if (existingLink){ // En fait on se fout de savoir si il y avait un lien, on met le notre
                        // selectedText.URL(Bob);
                    }
                    editor.insertHtml('<a href="Bob" rel="unsubscribe">' + selectedText + '</a>');
                } else {
                  var lien = prompt('Entrez le lien de désinscription');

                  if (lien && lien.length < 3) {
                      alert('Le lien doit faire plus de 3 caractères.');
                      return;
                  }
                  editor.insertHtml('<a href="Bob" rel="unsubscribe">' + lien + '</a>');
                }
            }
        });

        editor.ui.addButton( 'insertUnsubscribeLink',
        {
            label:'Lien de désinscription',
            command: 'insertUnsubscribeLink',
            icon: this.path + 'images/stop.png'
        } );
    }
} );
