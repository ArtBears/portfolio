$(document).ready(function() {
    var $wrapper = $("#wrapper");
    var $table = $("#table");
    var $box = $(".blue");

    //function takes an amount of boxes (counter) and a table element (table) and creates the etch board.
    var createTable = function(counter, table) {
        
        resizeClass();
        removeTable();
        
        var html_string = "";
        var grid_height = ($wrapper.height()/counter)-2;
        var grid_width = ($wrapper.width()/counter)-2;
        
        for(var i = counter; i > 0; i--){
            html_string += "<tr>";
            for(var j = counter; j > 0; j--){
               html_string += "<td><div class=blue style='height:" 
                        + grid_height 
                        + "px; width:" 
                        + grid_width 
                        + "px;'></div></td>";
            }
            html_string += "</tr>"
        }
        table.append(html_string);
    };
    
    var removeTable = function(){
        $("tr").remove();
    };
    
    var resizeClass = function() {
        $(document).on('load', "button[name=box_ok]", function() {
            $(".blue").css("height", "200px");
        });
    };
    
    //When mouse hovers over a box the box will change color
    $(document).on("mouseover",".blue", function(){
        $(this).css('background-color', 'blue');
    });
    
    //React to button click and run createTable()
    $(document).on("click", "button[name=box_ok]", function(){
        var input_box = parseInt($("input[name=num_boxes]").val());
        createTable(input_box, $table);
    });
    
});


/*
    I CAN MAKE THIS EVEN BETTER!
        -SET THE OVERALL GRID WIDTH RELATIVE TO WINDOW SIZE
        -CREATE THE PROMPT THE WAY THE PROJECT ASKS EXACTLY
        -ADD THE "OPTIONAL" PORTION CHANGING THE GRID COLORS BY 10%             ON EACH PASS.
        -CLEAN.UP.THE.CODE.
*/


