var timestamp = document.getElementById("timestamp");
var updateTimestamp = document.getElementById("updateTimestamp");
var tabledata = document.getElementById("table");
var readings = '';
var tableinner = '<tr>' + 
'<th>Metrics</th>' + 
'<th>West</th>' + 
'<th>National</th>' + 
'<th>East</th>' + 
'<th>Central</th>' + 
'<th>North</th>' + 
'<th>South</th>' + 
'</tr>';
fetch("https://api.data.gov.sg/v1/environment/psi")
    .then(function(Response){
        if(Response.status == 200){
            return (Response.json());
        }
    })
    .then(function(data){
        //console.log(data.items);
        timestamp.innerHTML = data.items[0]['timestamp'];
        updateTimestamp.innerHTML = data.items[0]['update_timestamp'];

        readings = data.items[0].readings;
       
        console.log(readings);
        
        for(var o in readings){
            /*
            console.log(o);
            console.log(readings[o]);
            */
            tableinner += '<tr><td>' + o + '</td>' +
            '<td>' + readings[o].west + '</td>' +
            '<td>' + readings[o].national + '</td>' +
            '<td>' + readings[o].east + '</td>' +
            '<td>' + readings[o].central + '</td>' +
            '<td>' + readings[o].north + '</td>' +
            '<td>' + readings[o].south + '</td></tr>';
             
        }
        
        tabledata.innerHTML = tableinner;
        
    });