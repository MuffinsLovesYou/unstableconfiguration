import { lite } from '../../../scripts/homerolled/lite.js';
import { Tiles } from '../../../scripts/homerolled/tiles.js';

/* ID and path variables 
    /character-sheets/{Name} is the name of the module export value. 
        If no path is given, it looks for a file with that name in lowercase in 5e/char-sheets
    ?path=directory/file-path : If the file is in a subfolder or has a different name than {Name}
*/
export let view = lite.extend({
    contentUrl : `site/dungeons-dragons/character-sheets/character-sheets.html`,
    onContentBound : function() {
        new Tiles().fill(document.getElementById('character-sheet-tiles'), [
            { title : "Pepper", href:"#dungeons-dragons/character-sheets/Pepper", alt: "dwarven cleric"}
            , { title : "Rez", href:"#dungeons-dragons/character-sheets/Rez", alt: "Slayer 2"}
            , { title : 'Kene', href : '#dungeons-dragons/character-sheets/Kene', alt : 'Slayer 1' }
            , { title : 'Law', href : '#dungeons-dragons/character-sheets/Law?path=builds/law', alt : 'big hits'}
            , { title : 'Big Shot', href: '#dungeons-dragons/character-sheets/BigShot?path=builds/big-shot', alt : 'big hit' }
            , { title : 'One Trick', href: '#dungeons-dragons/character-sheets/OneTrick?path=one-trick', alt : 'eldritch blaster' }
            , { title : 'The Bantam', href : '#dungeons-dragons/character-sheets/TheBantam?path=quiver/the-bantam', alt : 'master of justice' }
            , { title : 'Maximillien', href : '#dungeons-dragons/character-sheets/Maximillien?path=quiver/maximillien', alt : 'tank' }
            , { title : 'DOOM', href : '#dungeons-dragons/character-sheets/Doom?path=quiver/doom', alt : 'remember all caps' }
        ]);  
    }
});
