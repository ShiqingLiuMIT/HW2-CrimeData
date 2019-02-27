var exercise = {};

exercise.countRecords = function(data){
    
    var records = 0; // number or records
    function add(item,counter,array){
    records = records+1;
}
    data.forEach(add);
    console.log(records);
    

};




exercise.countDistrictCrimes = function(data,district){

    var crimes = 0; 
    function add(item,counter,array){
    if (item[19]==district){
    crimes = crimes+1;
    }
}
    data.forEach(add);
    console.log(crimes);

};



exercise.countPrimaryType = function(data,primaryType){

    var thefts = 0; 
    function add(item,counter,array){
    if (item[13]==primaryType){
        thefts = thefts+1;
    }
}
    data.forEach(add);
    console.log(thefts);


};

exercise.countLocation = function(data,location){
    var locations = 0; 
    function add(item,counter,array){
    if (item[15]==location){
        locations = locations+1;
    }
}
    data.forEach(add);
    console.log(locations);
};


exercise.buildLatLngPoint = function(crime){
 
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];

    return point;    
    
    var points = chicago.data.map(point);
};




