var name = prompt("Enter your name please ")


confirm("Hi "+ name +"This your name correct! " );
var type=prompt("whats the type of watches you are looking for ?")

while(type!="Analog watch" && type!="Digital watch" && type!= "Automatic watch" && type!= "Chronograph watch" && type!="Diving watch" && type!= "Quartz watch" && type!= "Mechanical watch" && type!= "Pilot watch" && type!="Field watch" && type!="Smart watch" && type!="Luxury watch"){
 type = prompt("please enter the type of the watch again ")
}
var count= prompt("rate the " + type +"from 1 to 10")
function watchType(type){

if(type == "Analog watch"){
  document.write("<p>"+"nice choice you can check out the analog watches we have."+"</p>") 
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/analogwatch-e1506577279242.png" alt="analog watch" width="250" height="300">')
  }
}
else if(type == "Digital watch"){
  document.write("<p>"+"nice choice you can check out the digital watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/digital-watch-e1506579537676.jpg" alt="digital-watch" width="250" height="300">')
  }
  }
else if(type == "Automatic watch"){
  document.write("<p>"+"nice choice you can check out the automatic watches we have."+"</p>")
  for(var x=0;x < count;x++){
  document.write('<img src="https://media.giphy.com/media/XsMEW4VAms4Uw/giphy.gif" alt="Automatic Watch" width="250" height="300">')
  }
  }
else if(type == "Chronograph watch" ){
  document.write("<p>"+"nice choice you can check out the chronograph watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/Chronograph-Watch-e1506581986597.jpg" alt="Chronograph-Watch" width="250" height="300">')
  }
  }
else if(type == "Diving watch"){
  document.write("<p>"+"nice choice you can check out the diving watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/Diving-Watch-e1506583491189.jpg" alt="Diving-Watch" width="250" height="300">')
  }
  }
else if(type == "Dress watch"){
  document.write("<p>"+"nice choice you can check out the dress watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/Dress-Watch.jpg" alt="Dress-Watch" width="250" height="300">')
  }
  }
else if(type == "Quartz watch"){
  document.write("<p>"+"nice choice you can check out the quartz watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/Quartz-Watch-e1506585864987.jpg" alt="Quartz-Watch" width="250" height="300">')
  }
  }
else if(type == "Mechanical watch"){
  document.write("<p>"+"nice choice you can check out the mechanical watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/Mechanicalwatch-e1506585453598.jpg" alt="Mechanicalwatch" width="250" height="300">')
  }
  }
else if(type == "Pilot watch"){
  document.write("<p>"+"nice choice you can check out the pilot watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/pilotwatch-e1506586619336.jpg" alt="pilotwatch" width="250" height="300">')
  }
  }
else if(type == "Field watch"){
  document.write("<p>"+"nice choice you can check out the field watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/Field-Watch-e1506587236363.jpg" alt="Field-Watch" width="250" height="300">')
  }
  }
else if(type == "Smart watch"){
  document.write("<p>"+"nice choice you can check out the smart watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/smartwatch-e1506590536137.jpg" alt="smartwatch" width="250" height="300">')
  }
  }
else if(type == "Luxury watch"){
  document.write("<p>"+"nice choice you can check out the Luxury watches we have."+"</p>")
  for(var x=0;x<count;x++){
  document.write('<img src="https://www.urby.in/blog/wp-content/uploads/2017/09/luxurywatch-e1506591045301.jpg" alt="luxurywatch" width="250" height="300">')
  }
  }
else {
  document.write("<p>"+"Sorry we don't have this type of watches ."+"</p>")}
}
watchType(type);