define([],()=>{


    let gridify_model = function(container){
        let grid = this;
        grid.container = container;

        /* Designed to be run once. 
            Performs initial drawing and definitions. 
        */
        grid.initialize = function(options){
            _clear(grid.container);
            let table = grid.container.appendChild(document.createElement('table'));
            table.id = container.id+'_table';
            let thead = table.createTHead();
            grid.body.initialize();
            if(options.columns) grid.columns.set(options.columns);
            if(options.data) grid.data.set(options.data);
            /*
                will accept initialization parameters and 
                draw grid onto the screen
                needs to accept data 
                grid and column definitions 
            */
        }

        grid.data = {
            get : function() {
                /* builds data table from existing grid rows */
            },
            set : function(input_data) {
                let data = [];
                if(Array.isArray(input_data)) data = input_data;
                else if(typeof(input_data)==='object')
                    for(let k in input_data) data.push(input_data[k]);

                data.forEach((row_data, ridx)=>{
                    grid.body.add_row(row_data, ridx);
                });
            }
            , get_fields : function() {
                return Array.from(_table().tHead.rows[0].cells)
                    .map(x => x.id.split('_').slice(-1));
            }
        }
        let _clear = (container)=> { if(!container) return; while(container.firstChild) container.removeChild(container.firstChild); }
        let _table = () => grid.container.firstChild;

        grid.columns = {
            set : function(column_definitions) {
                if(!Array.isArray(column_definitions)) 
                    throw`.columns.set requires array of column definitions`;

                _clear(_table().tHead);
                grid.body.initialize();
                _table().tHead.insertRow();
                _table().tHead.insertRow();
                column_definitions.forEach(col => {
                    grid.columns.add(col);
                });

                return grid; 
            }
            , add : function(column_definition){
                let hrow = _table().tHead.rows[0];
                let header_cell = hrow.insertCell();
                let frow = _table().tHead.rows[1];
                let filter_cell = frow.insertCell();
                header_cell.id = _table().id+'_header_'+column_definition.field;
                grid.columns._set_header_label(header_cell, column_definition);
                grid.columns._set_header_style(header_cell, column_definition);
                grid.columns._set_column_sort(header_cell, column_definition);
                grid.columns._set_column_filter(filter_cell, column_definition);
                
                grid.body.seed_row.add_column(column_definition);
                // add to seed row here 
                return grid;
            }
            , _set_header_label : function(header_cell, column_definition) {
                let label = header_cell.appendChild(document.createElement('span'));
                label.innerHTML = column_definition.header || column_definition.field;
            }
            , _set_header_style : function(header_cell, column_definition) {
                grid.styling.stylize_header_cell(header_cell, column_definition);
            }
            , _set_column_sort : function(header_cell, column_definition) {
                if(!column_definition.sort) return;
                let sort_icon = header_cell.appendChild(document.createElement('span'));
                sort_icon.className = 'sort'
                header_cell.style.paddingRight = '30px';
                header_cell.addEventListener('click', grid.sorting.sort_callback(column_definition.field, column_definition.sort));
            }
            , _set_column_filter : function(filter_cell, column_definition) {
                if(!column_definition.filter) return;
                filter_cell.id = _table().id+'_filter_columns_'+column_definition.field;
                grid.filtering.add_filter(column_definition)
            } 
        }

        grid.body = {
            initialize : function(table=_table()) {
                while(table.tBodies[0]) table.removeChild(table.tBodies[0])
                let tbody = table.createTBody();
                let seed = table.createTBody();
                let seed_row = seed.insertRow();
                seed_row.id = _table().id+'_seed'
            }
            , _set_body_cell : function(body_cell, value, column_definition) {
                let label = body_cell.appendChild(document.createElement('span'));
                label.innerHTML = value;
            }
            , add_row : function(row_data, rowid) {
                let row = grid.body.seed_row.clone();
                row.id = _table().id+'_'+rowid;
                _table().tBodies[0].appendChild(row);
                Array.from(row.cells).forEach((cell)=>{
                    let field = cell.id.split('_').slice(-1);
                    cell.id = row.id + '_' + field;
                    cell.innerHTML = row_data[field];
                });
            }
            , seed_row : {
                clone : function() {
                    let seed = Array.from(_table().tBodies[1].rows).slice(-1)[0];
                    let row = seed.cloneNode(true);
                    row.style. display = '';
                    Array.from(seed.cells).forEach((scell, cidx)=>{
                        let cell = row.cells[cidx];
                        cell.addEventListener('click', scell.onclick);
                    });
                    return row;       
                }
                , add_column(column_definition){
                    let tr = _table().tBodies[1].rows[0];
                    let td = tr.insertCell();
                    td.id = tr.id+'_'+column_definition.field;
                    td.innerHTML = 'test';
                    grid.styling.stylize_body_cell(td, column_definition);
                    if(column_definition.click)
                        td.onclick = column_definition.click;
                }
            }

        }

        grid.styling = {
            defaults : { 
                tbody : {
                    tr : ``
                    , td : `text-align:center; padding: .04rem .05rem; border-bottom:solid thin`
                }
                , thead : {
                    tr : ``
                    , td : `font-weight:bold; text-align:center; padding:4px 16px 4px 16px;` 
                }
            }

            , stylize : function(el, style) {
                (style||'').split(';')
                    .map(x => x.trim().split(':'))
                    .forEach(kv => el.style[kv[0]]=kv[1]);
            }
            , stylize_header_cell : function(td, col) {
                grid.styling.stylize(td, grid.styling.defaults.thead.td);
                // 'all columns' options
                grid.styling.stylize(td, col.header_style);
            }
            , stylize_body_cell: function(td, col) {
                grid.styling.stylize(td, grid.styling.defaults.tbody.td);
                // all cols 
                grid.styling.stylize(td, col.style);
            }
        }

        let get_cell_value = function(row, property){ 
            if(typeof(row)==='number') row = _table().tBodies[0].rows[row];
            let cells = Array.from(row.cells);
            let cell = cells.find(x=>x.id.split('_').slice(-1)==property);
            return cell.innerText;
        }

        // we might try and consider making the sorting stable at some point. 
        grid.sorting = {
            sort : function(property_name, rule) {
                // if property_name is present
                // if grid has a sort field 
                // if grid has an identity field 
                // else col 0
                let tbody = _table().tBodies[0];
                let rows = Array.from(tbody.rows);
                let v1 = get_cell_value(rows[0], property_name);
                let v2 = get_cell_value(rows[rows.length-1], property_name);
                let asc = v1<v2;
                rows.sort((x,y)=>{
                    let xv = get_cell_value(x, property_name);
                    let yv = get_cell_value(y, property_name);
                    return typeof(rule)==='function' ? 
                        rule(xv, yv)?asc:!asc : xv <= yv ? asc : !asc;
                });
                _clear(tbody);
                rows.forEach(x=>tbody.appendChild(x));
            }
            , sort_callback : function(property_name, rule){
                return ()=>{ grid.sorting.sort(property_name, rule); }
            }
            
        }

        grid.filtering = { 
            add_filter : function(column_definition) {
                console.log('a', column_definition)
                window.def = column_definition
                var rule = column_definition.filter == true ? grid.filtering._default_filter_rule : column_definition.filter;
                var control = column_definition.filter_control || grid.filtering._default_filter_control(column_definition.field);
                control.filter_rule = rule;
                control.filter_property = column_definition.field;
                control.addEventListener('change', grid.filtering.filter_callback)                
                console.log('b');
                // attach the control !
                Array.from(_table().tHead.rows[1].cells).forEach((cell)=>{
                    console.log(cell)
                    window.cell = cell
                    if(cell.id.split('_').slice(-1) == column_definition.field){
                        cell.appendChild(control);
                    }
                });
            }
            , _default_filter_rule : function(x, y){
                return (''+x).includes(y);
            }
            , _default_filter_control : function(property_name){
                var control = document.createElement('input');
                control.type = 'text';
                control.id = _table().id + '_filter_' + property_name;
                return control;
            }
            , filter_callback : function() {
                var rules = Array.from(_table().tHead.rows[1].cells)
                    .map((cell) => { return cell.firstChild; })
                    .filter(x => !!x);
                Array.from(_table().tBodies[0].rows).forEach((row)=>{
                    var hide = rules.some((filter_control)=>{
                        return !filter_control.filter_rule(filter_control.value, get_cell_value(row, filter_control.filter_property))
                    });
                    row.style.display = hide ? 'none' : ''
                });

                
            }

            
        }
        return grid;
    }


    let gridify = function(el) {
        if(typeof(el)==='string') el = document.getElementById(el);
        if(!el instanceof HTMLDivElement) 
            throw('Gridify target must be <div>');
        
        return new gridify_model(el);
    }
    return gridify;

});