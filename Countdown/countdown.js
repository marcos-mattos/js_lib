function countingDays(a, format = "point"){
    let dataFinal = Date.parse(a); //le jour
    let data = new Date; // aujourd'hui

    let tempoRestante = dataFinal - data //le temps en restant en millisecondes

    let dias = tempoRestante/86400000; //les jours en restant comme nombre, float
    let _dias = parseInt(dias); //les jours en restant -> comme nombre entier

    let sobraDias = (dias - _dias) * 24; //nombre en résultant de la soustraction parmi les jours, multiplié le 24 heures du jour
    let _sobraDias = parseInt(sobraDias); //on prend les heures du jour et faire devenir dans un nombre entier    

    let minutos = (sobraDias - _sobraDias) * 60; //en prenant la soustraction des heures et multipliant par 60
    let _minutos = parseInt(minutos); // faire devenir un nombre entier

    let segundos = (minutos - _minutos) * 60; //on prend les minutes en restant e les multiplie par 60
    let _segundos = parseInt(segundos); // faire devenir un nombre entier

    //en ajoutant 0 si le nombre sera moins que 10
    if(_dias < 10){
        _dias = "0" + _dias;
    }    

    //en ajoutant 0 si le nombre sera moins que 10  
    if(_sobraDias < 10){
        _sobraDias = "0" + _sobraDias;
    }

    //en ajoutant 0 si le nombre sera moins que 10
    if(_minutos < 10){
        _minutos = "0" + _minutos;
    }    

    //en ajoutant 0 si le nombre sera moins que 10
    if(_segundos < 10){
        _segundos = "0" + _segundos;
    }

    //il n'y a plus de temps? on défine toutes les variables comme 00 -> ça va éviter de rétourner un valeur NaN    
    if(tempoRestante < 0){ 
        _dias = "00";
        _sobraDias = "00";
        _minutos = "00";
        _segundos = "00";
    }    

    //FORMAT -> POINT
    if(format === "point"){
        return `${_dias}:${_sobraDias}:${_minutos}:${_segundos}`;
    }

    //FORMAT -> FR
    else if(format === "fr"){
        return `${_dias} jours, ${_sobraDias} heures, ${_minutos} minutes, ${_segundos} secondes`;
    }

    //FORMAT -> EN    
    else if(format === "en"){
        return `${_dias} days, ${_sobraDias} hours, ${_minutos} minutes, ${_segundos} seconds`;
    }
    
    else{
        return `${_dias}:${_sobraDias}:${_minutos}:${_segundos}`;        
    }

}