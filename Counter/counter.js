var counter = (function(){

    var number = 0;
    var _add = function(){
        return ++number;
    }
    var _del = function(){
        return --number;
    }
    var _reset = function(){
        number = 0;
        return number;
    }
    var _show = function(){
        return number;
    }

    return{
        add: _add,
        del: _del,
        reset: _reset,
        show: _show
    }
    false
})()


//TIPS
/*
counter.add() //+1
counter.del() //-1
counter.reset() // reset -> 0
counter.show() // show the current
*/