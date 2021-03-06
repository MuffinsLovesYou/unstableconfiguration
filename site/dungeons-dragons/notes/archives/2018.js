import { lite } from '../../../../scripts/homerolled/lite.js';
import { Tiles } from '../../../../scripts/homerolled/tiles.js';

export let view = lite.extend({
    content : `
    <div>
        <div>
            <p>2018 started with the group heading to Ging Onol and ended as they were about to retake the Bloodkith Halls.</p>
        </div>
        <div>
            <div id='tiles' class='tiles'></div>
        </div>
    </div>`,
    onContentBound : function() {
        new Tiles().fill(document.getElementById('tiles'), [
            { title: "12-2018", href: "#dungeons-dragons/notes/2018/12-2018?path=sessions/2018/12-2018", alt: "heading to bloodkith" },
            { title: "10-2018", href: "#dungeons-dragons/notes/2018/10-2018?path=sessions/2018/10-2018", alt: "fighting the filth" },
            { title: "08-2018", href: "#dungeons-dragons/notes/2018/08-2018?path=sessions/2018/08-2018", alt: "meeting eberk" },
            { title: "06-2018", href: "#dungeons-dragons/notes/2018/06-2018?path=sessions/2018/06-2018", alt: "breaking rayne's pact" },
            { title: "04-2018", href: "#dungeons-dragons/notes/2018/04-2018?path=sessions/2018/04-2018", alt: "putting on a play" },
            { title: "02-2018", href: "#dungeons-dragons/notes/2018/02-2018?path=sessions/2018/02-2018", alt: "departing to ging onol" },
            { title: 'improv', href: '#dungeons-dragons/notes/2018/improv?path=sessions/2018/improv', alt: 'one off in thousand needles' },
        ]);
    }
});
