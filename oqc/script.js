	$(document).ready(function () {
    $(".randomposition").each(function () {
        var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height() - 20)),
            randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width() - 20)),
            randomzindex = Math.floor(Math.random() * 30);
        $(this).css({
            "top": randomtop,
            "left": randomleft,
            "z-index": randomzindex
			});
		});
	});
	
	function pickColor() { 
    // Array containing colors 
		var colors1 = [ 
			'#ffd270', '#6af462', '#78f0f0', '#e07bff'
        ]; 
		
		var colors2 = [
			'#FF101F', '#FFC4EB', '#519872', '#3DFAFF'
		];
		
		var colors3 = [
			'#6290C3', '#F6F740', '#FF773D', '#06D6A0'
		];
		
		var colors4 = [
			'#F6F740', '#519872', '#e07bff', '#e176e2'
		];
              
	// selecting random color 
        var random_color1 = colors1[Math.floor( 
            Math.random() * colors1.length)]; 
		var random_color2 = colors2[Math.floor( 
            Math.random() * colors2.length)]; 
		var random_color3 = colors3[Math.floor( 
            Math.random() * colors3.length)]; 
		var random_color4 = colors4[Math.floor(
			Math.random() * colors4.length)];
              
            var m = document.getElementById("pick1"); 
            m.style.color = random_color1; 
			var a = document.getElementById("pick2"); 
            a.style.color = random_color2; 
			var ab = document.getElementById("pick3"); 
			ab.style.color = random_color3; 
			var s = document.getElementById("pick4");
			s.style.color = random_color4;
			
			
        }  
		
	function display (selected)
	{

		if (selected == 'rushing')
		{
			texttoshow = `<pre>Aaah, a rushing river speaks
Carries Asia on its shoulder
Aaah, a red snake bites
Carries fantasies of the night

There's something in the water
It tells me something else
There's something in the water
It tells me something else

Aaah, a silly dot shouts
Trivial anger, he thinks its something real
Aaah, a lighthouse shows
It shows much more, but we will never see

Finding myself back to earth
I never wanna come back down
My silver minutes they have passed
I'm waiting for a sunny day
A rushing river only speaks (Finding myself back to earth)
A rushing river only speaks (I never wanna come back down)
A rushing river only speaks (My silver minutes they have passed)
A rushing river only speaks (I'm waiting for a sunny day)</pre>`;
		}
		if (selected == 'sunnyday')
		{
			texttoshow = `<pre>	
Maybe I need some rest
Wait for a sunny day
And it always gets you down

Wonder when you'll come back
Wonder when you'll come back
Wonder when you'll come back
Wonder when you'll come back</pre>`;
		}
  document.getElementById("thetext").innerHTML = texttoshow;
  }
