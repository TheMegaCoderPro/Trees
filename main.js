var reasons = ["Trees Provide Medicine",
                 "Trees Provide Food"
  
];

var images = ["https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "https://i.guim.co.uk/img/media/a8657d8719755bcddbbed5b8d118e3220702416a/0_335_5155_3093/master/5155.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=24a722ff8578456ef2d3be9efda180be"
 
 ];

var i = 0;

function nextslide() 
{  
	document.getElementById("reasontext").inneHTML = reasons[i];
  document.getElementById("album").src = images[i];
    i++;
  document.getElementById("audio").play();
  
}
