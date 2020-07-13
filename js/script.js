$(function() {

  var svgNS="http://www.w3.org/2000/svg";
  var svg=document.getElementById("svg1");

  // viewBox width and height
  var $vb=1000; 

  // let's add some circles 

  // $i = integer
  for (var $i=1;$i<=12;$i++) {
      //   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      var cir = document.createElementNS(svgNS, 'circle'); //Create a path in SVG's namespace
      cir.setAttribute("class","lucasCircle"); 

      var $cx=$vb/4*3;
      var $cy=$vb/4*3;


      // the radius of the circle is a ratio to the viewBox
      var $radius=$vb-($i*60);
      cir.setAttribute("x",$cx); 
      cir.setAttribute("y",$cy); 
      cir.setAttribute("r",$radius); 
      svg.appendChild(cir);

  }

  var $fifths_0=["C","G","D","A","E","B","F#","C#","G#","D#","A#","F"];
  var $fifths_1=["C","F","Bb","Eb","Ab","Db","F#","B","E","A","D","G","C"];


  // optional : switch the order
  $fifths_0=$fifths_0.reverse();
  $fifths_1=$fifths_1.reverse();

  var $grid=$("#grid");
  var $svg=$("#svg1");
  // sample: https://www.sodawebmedia.com/blog/create-responsive-square-css/
  // https://www.pagecrafter.com/responsive-centered-square-div-resizes-height/
  // 

  var $numNotes=12;

  // width and height percent is 12 divisions
  var $wh=100/$numNotes;

  // square widths/heights
  var $padding=.5;
  var $wid=Math.round($vb/($numNotes + $padding));

  for (var $x=0;$x<$numNotes;$x++) {
    var $s="<div class='gridline'>";

    for (var $y=0;$y<$numNotes;$y++) {
      
      // $s is the sum of x and y . 
      var $s=$x+$y;
      if ($s>12) $s-=12;

      var $interval="";
      switch ($s) {
        case 11:
          $interval="UN";
          break;
        case 10:
          $interval="P5";
          break;
        case 9:
          $interval="M2";
          break;
        case 8:
          $interval="n3";
          break;
        case 7:
          $interval="M3";
          break;
        case 6:
          $interval="n2";
          break;
        case 5:
          $interval="TT";
          break;
        case 4:
          $interval="n2";
          break;
        case 3:
          $interval="M3";
          break;
        case 2:
          $interval="n3";
          break;
        case 1:
          $interval="M2";
          break;
        case 0:
          $interval="P5";
          break;

      }

      var $val=$fifths_0[$y] + "-" + $fifths_1[$x];
      // x and y points
      var $px=($x/$numNotes) * $vb;
      var $py=($y/$numNotes) * $vb;  
      

      //$s2+=`<rect style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" x="` + $px + `" y="` + $py + `" width="` + $wid + `" height="` + $wid + `"/>`;



      var txt = document.createElementNS(svgNS, 'text');

      // offset to accommodate font size
      txt.setAttributeNS(null, 'x', $px + 10);
      txt.setAttributeNS(null, 'y', $py + 40);
      txt.setAttributeNS(null,'class','lucasSquareText');
      txt.innerHTML = $val;
      svg.appendChild(txt);

      var sq = document.createElementNS(svgNS, 'rect'); //Create a path in SVG's namespace
      sq.setAttribute("class","lucasSquare " + $interval); 
      sq.setAttribute("x",$px); 
      sq.setAttribute("y",$py); 
      sq.setAttribute("width",$wid); 
      sq.setAttribute("height",$wid); 
      svg.appendChild(sq);



 

      // create an HTML div
      $s+=`<div class="square ` + $interval + `">
      <div class="content">
        ` + $val + `
      </div>
    </div>` ;

 
    }
    $s+="</div>";


    // add it to the grid
    $grid.append($s);

  }


  // remove the below when done.

  // variables - for readability
  var $list, $newItemForm;

  // the "list" variable references the <UL> tag (index.html)
  $list = $('ul');
  
  // this variable references the <FORM> tag
  $newItemForm = $('#newItemForm');

  // what happens when the form is submitted
  $newItemForm.on('submit', function(e) {
    // first, don't take the default action.
    e.preventDefault(); 

    // then, grab the text value, and add a new list item
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');

    // reset the text prompt to blank
    $('input:text').val('');
  });


  // when you click on a list item, delete it! (it's done).
  $list.on('click', 'li', function() {
    var $this = $(this);
    $this.remove();
  });

});