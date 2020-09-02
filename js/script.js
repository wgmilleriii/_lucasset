
function getTexture() {
  return $("#tTexture").html();
}
function getMode() {
  return $("#tMode").html();
}

function setTexture(s) {
  $("#tTexture").html(s);
}
function setMode(s) {
  $("#tMode").html(s);
}
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
      
      var $coorX=$x;
      var $coorY=$y;

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
      var $seq= $fifths_0[$y] + "2|0.0000 " + 
      $fifths_0[$y] + "3|0.0000 " + 
      $fifths_0[$y] + "4|0.0000 " + 
      $fifths_0[$y] + "5|0.0000 " + 
      $fifths_1[$x] + "2|0.0000" + 
      $fifths_1[$x] + "3|0.0000" + 
      $fifths_1[$x] + "4|0.0000" + 
      $fifths_1[$x] + "5|0.0000" ;
      var $seq2= $fifths_0[$y] + "3|0.0000 " + 
      $fifths_1[$x] + "4|0.0000";
      //var $seq=$fifths_
      // x and y points
      var $px=($x/$numNotes) * $vb;
      var $py=($y/$numNotes) * $vb;  
      

      //$s2+=`<rect style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" x="` + $px + `" y="` + $py + `" width="` + $wid + `" height="` + $wid + `"/>`;



      var txt = document.createElementNS(svgNS, 'text');

      // sample
      // var seq="Bb5|0.0000 D6|0.0000 F6|0.0000";
      // restartSequence(seq);

      // offset to accommodate font size
      txt.setAttributeNS(null, 'x', $px + 10);
      txt.setAttributeNS(null, 'y', $py + 40);
      txt.setAttributeNS(null,'class','lucasSquareText');
      txt.innerHTML = $val;
      svg.appendChild(txt);



      var sq = document.createElementNS(svgNS, 'rect'); //Create a path in SVG's namespace
      sq.setAttribute("class","lucasSquare " + $interval); 
      sq.setAttribute("coor_x",$coorX);
      sq.setAttribute("coor_y",$coorY);

      sq.setAttribute("x",$px); 
      sq.setAttribute("y",$py); 
      sq.setAttribute("seq",$seq); 
      sq.setAttribute("seq2",$seq2);       
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

  setTexture("1");
  setMode("Explore");


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

function loadEm() {

// below here: audio
        NProgress.start();
        // load samples / choose 4 random instruments from the list //
        chooseFour = ['piano', 'bass-electric', 'bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'french-horn', 'guitar-acoustic', 'guitar-electric','guitar-nylon', 'harmonium', 'harp', 'organ', 'saxophone', 'trombone', 'trumpet', 'tuba', 'violin', 'xylophone']
        chooseFour = ['piano']        
        shuffle(chooseFour);
        chooseFour = chooseFour.slice(0, 1);

        var samples = SampleLibrary.load({
            instruments: chooseFour,
            baseUrl: "/shared/engine4/tonejs-instruments/samples/"
        })




        
        // show keyboard on load //

            // show error message on loading error //
        Tone.Buffer.on('error', function() {
            document.querySelector("#loading").innerHTML = "I'm sorry, there has been an error loading the samples. This demo works best on on the most up-to-date version of Chrome.";
        })


        Tone.Buffer.on('load', function() {
            NProgress.done();

            // $("#loading").hide();
            // $("#loading2").show();

            // loop through instruments and set release, connect to master output
            for (var property in samples) {
                if (samples.hasOwnProperty(property)) {
                    // console.log(samples[property])
                    samples[property].release = .5;
                    samples[property].toMaster();
                }
            }

            current = samples[chooseFour[0]];

            // button.on('change', function(v) {
            //     console.log(v);
            //     clearTimeout(myVar);   
            // })
        })
}

        var current="";
        var length=0;
        n="";
        var playingIndex=0;
        function playIt() {
                    
            // console.log("==playit==");
            var n=sequence.next();
            n=n.replace("n","");
            playingIndex++;
            
            var notename=n.split("|")[0];
            // console.log(notename);
            noteoctave=notename.substring(notename.length-1,notename.length)*1-1;
            // console.log(noteoctave);
            notename=notename.substring(0,notename.length-1) + noteoctave;
            // console.log("has been changed to ");
            // console.log(notename);


            var pause=(n.split("|")[1]-1)*125;
            // console.log(n); 
            // console.log(playingIndex + " of " + length);
            
            
            if (pause=="") {
                // console.log("Default to 500");
                pause=1500;
            }
            // console.log(pause);
            if (playingIndex>length) {
                pause=2500;
                playingIndex=0;
                stopPlaying() ;
            } else {

                // console.log("GO!");
                setTimeout(playIt, pause);           
                // console.log("c");
                // console.log(current);
                current.triggerAttack(notename);
                setTimeout(function releaseIt()  {
                    // returns 1
                    // console.log("sh");
                    // console.log(n);
                    current.triggerRelease(notename);
                
                }, 600);
            }



        }
        




        // create Nexus UI //
        Nexus.colors.accent = "#f00"

        // var button = new Nexus.Button('#Button',{
        //   'size': [80,80],
        //   'mode': 'aftertouch',
        //   'state': false
        // })        


        var sequence = new Nexus.Sequence(["F2","A2","C3","D3","E3","E2","F#4"])    ;
        
        var myVar=setTimeout(nothing,10);
        function nothing() {
            console.log("nothing");
        }



        function stopPlaying() {
            // console.log("stoppin");
            clearInterval(myVar);
            myVar=null;
        }
        function restartSequence(t) {
            
            stopPlaying() ;
            var a=t.trim().split(" ");
            length=a.length;
            console.log("Restarting sequence with length ");
            console.log(length);
            console.log(a);
            // sequence = new Nexus.Sequence(["F2","A2","C3","D3","E3","E2","F#4"])    ;
            sequence = new Nexus.Sequence(a) ;
            // sequence = new Nexus.Sequence(a);
            // console.log("starting");
            // console.log(a);
            setTimeout(playIt, 0);

        }
            var c = 0;
            var t;
            var timer_is_on = 0;

            function timedCount() {
              c = c + 1;
              t = setTimeout(timedCount, 1000);
              console.log("timedCount: " + c);
              
            }

            function startCount() {
              if (!timer_is_on) {
                timer_is_on = 1;
                timedCount();
              }
            }

            function stopCount() {
              clearTimeout(t);
              timer_is_on = 0;
              console.log("stopCount");
            }
        // Shuffle function //
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        }







urlBase="http://localhost:801/chipmiller.me/public_html/test.intypiano.org/";


function loadGame() {

    var p="classes/loadGame.php?pages=" + pages;
    console.log("Loading : " + p);
    $.post(p)
    .done(function(data) {
        console.log("-- received -- ");
        console.log(data);
        $("#gameContents").append(data);
        pages=4;
        $( "cm5" ).each( function( index, element ){
            loadNotes5($(this));
        });        
    });
}



$(document).on('click', '.quizlet .mnuToggleButton', function () {
    activeButton=$(this);
    mv=$(this).attr("value").trim();
    var cr=$(this).closest(".makeMusic");
    var ma=cr.find(".marker").first();
    console.log("Marker:");
    console.log(ma);
    quizid=ma.attr("quizid");
    console.log(quizid);
    var fi=cr.find(".cm_render").attr("fileid");
    console.log(fi);

    // get 2 computer values
    // cv2 e.g., [0,3,6,8]
    cv2=cr.find(".strPrimeForm").text();

    // cv eg (nothing)
    cv=cr.find(".strPrimeFormAbbr").text();


    console.log("===");
    console.log("Quiz: " + quizid);
    console.log(mv);
    console.log(cv);
    console.log(" ok ");
    console.log(cv2);
    

    if (cv=="") cv=cv2;

    if (mv=="TT") {
        if (cv=="d5" || cv=="A4") {
            mv=cv;
        }
    }


    if (cv2==mv) {
        cv=mv;
    }
    
    if (cv.indexOf(mv)>1) {
        mv=cv;
    } 
        else {
            if (mv==cv || mv==cv2) {
                activeButton.addClass("correct");
                mv=cv;
            } else {
                activeButton.addClass("incorrect");
            }
        
    }
    if (mv==cv || mv==cv2) {
        activeButton.addClass("correct");
        mv=cv;
    } else {
        activeButton.addClass("incorrect");
    }
    cr.find(".mnuToggleButton[value='" + cv + "']").addClass("correct");

    
    playGame(fi,mv,cv, 0);

});
$(document).on('click', '.quizlet .mnuReportProblm', function () {
    activeButton=$(this);
    mv=$(this).text().trim();
    var cr=$(this).closest(".di_container");
    var ma=cr.prevAll(".marker").first();
    quizid=ma.attr("quizid");
    var fi=cr.attr("fileid");
    cv=cr.find(".strPrimeFormAbbr").text();

    console.log("===");
    console.log("Quiz: " + quizid);
    console.log(mv);
    console.log(cv);
    

    if (mv==cv) {
        activeButton.addClass("correct");
    } else {
        activeButton.addClass("incorrect");
    }
    cr.find(".mnuToggleButton[value='" + cv + "']").addClass("correct");

    
    playGame(fi,mv,cv, 1);

});
// wait until we have 8
arFile=[];
arQuiz=[];
arMv=[];
arCv=[];
arPr=[];
url4="/shared/engine4/key.php";
submitlength=4;


function playGame(fi,mv,cv, reportAProblem) {
    console.log("***PlayGame***");
    console.log(fi);
    console.log(mv);
    console.log(cv);
    console.log(reportAProblem);
    arFile.push(fi);
    arQuiz.push(quizid);
    arMv.push(mv);
    arCv.push(cv);
    arPr.push(reportAProblem);

    if (reportAProblem==1) {
        activeButton.hide();

        $.post("classes/playGame.php", {
            quizid: quizid,
            fileid: fi,
            mv: mv,
            cv: cv,
            problem: reportAProblem
        })
        .done(function(data) {
            console.log(data);
        });
    } 

    setTimeout( goNextQuestion, 500);
    
    if (arCv.length==submitlength) {

        console.log("-- playgame ");
        console.log(arFile.join("|"));
        console.log(arQuiz.join("|"));
        console.log(arMv.join("|"));
        console.log(arCv.join("|"));
        console.log(arPr.join("|"));

        submitlength=8;
        fi=arFile.join("|");
        quizid=arQuiz.join("|");
        mv=arMv.join("|");
        cv=arCv.join("|");
        pr=arPr.join("|");


        $.post("classes/playGame.php", {
             
             quizid: quizid,
             fileid: fi,
             mv: mv,
             cv: cv, 
             problem: pr
        })
        .done(function(data) {
            console.log(data);
            loadGame();
        });

        arFile=[];
        arQuiz=[];
        arMv=[];
        arCv=[];
        arPr=[];

    }

    

}
function fadeErIn() {
    $("#svg1").fadeIn();
    $(".menu").css("display","inline-block");
}
$(document).on('click', '#welcome', function () {
    

    loadEm();
    $(this).fadeOut(500, fadeErIn);
    


});



$(document).on('click', '.lucasSquare', function () {
    playSeq($(this));
});



$(document).on('click', '.submenu', function () {

  var p=$(this).parent();
  p.find(".submenu").removeClass("selected");

  $(this).addClass("selected");
  var mode=$(this).attr("mode");
  console.log("mode" , mode);
  switch ( mode ) {
    case "1":
      allOctaves();
      break;
    case "2":
      twoNotes();
      break;
    case "Explore":
      explore();
      break;
    case "Combine":
      combine();
      break;
    case "Reflect":
      reflect();
      break;
    case "Invert":
      invert();
      break;  
    }

    console.log("Texture is now " , getTexture());
});


$(document).on('click', '.submenu.selected', function () {
  let v=$(this).attr("mode");
});

function allOctaves() {
  setTexture("1");
}

function twoNotes() {
  setTexture("2");
  console.log("setting texture to 2");
  
}
function clearCombined() {
  if ($(".combined").length>0) {
    $( ".combined" ).each(function( index ) {
      $(this).attr("class",$(this).attr("class").replace(" combined",""));
    });
  }
  
}
function explore() {
  setMode("Explore");
  clearCombined();
}

function combine() {
  setMode("Combine");
}
function reflect() {
  setMode("Reflect");
  clearCombined();
}
function invert() {
  setMode("Invert");
  clearCombined();
}
$(document).on('keypress', '', function (event) {
  console.log(event.keyCode);
//  var t =
  switch (event.keyCode) {
    case 49: //1
      // all the octaves
      break;
    case 50: //2
      // all the octaves
      break;
    case 113: //q
      // Single
      _all();
      break;
    case 119: //w
      // Combine
      _combine();
      break;
    case 101: //e
      // Reflect
      _reflect();
      break;
    case 114: //r
      // Invert
      _invert();
      break;

    case 105:
      moveCursor(0,-1);
    case 107:
      moveCursor(0,1);
    case 106:
      moveCursor(1,0); 
    case 108:
      moveCursor(-1,0);

  }
});
function addSVGClass(o,cl1) {
      var cl = o.attr('class');
      if( cl.indexOf(cl1)!==-1 ){
      } else {
        cl+=" " + cl1;
        o.attr("class",cl);
      }

}
function moveCursor(x,y) {

}
// u   d   l   r 
// 105 107 106 108
// defaults 


var seq="";
function playSeq(o) {

  var s;
  var texture=getTexture();
  var mode=getMode();

  var x=o.attr("coor_x");
  var y=o.attr("coor_y");
  console.log("COOrs ",x);

  switch(texture) {
    case "1":
      s=o.attr("seq");
      break;
    case "2":
      s=o.attr("seq2");
      break;    
  }
  console.log(mode);
  console.log("S ",s);

  switch (mode) {
    case "Combine":
      addSVGClass(o,"combined");
      seq+=" " + s;
      break;
    case "Explore":
      seq=s;
      break;
    case "Reflect":
      var x2=11-x;
      var y2=11-y;
      var ref=$(".lucasSquare[coor_x='" + x2 + "'][coor_y='" + y2 + "']");
      addSVGClass(ref,"combined");
      setTimeout(clearCombined, 500);
      console.log(ref);
      switch(texture) {
        case "1":
          s+=" " + ref.attr("seq");
          break;
        case "2":
          s+=" " +ref.attr("seq2");
          break;    
      }
      seq=s;
      break;
    case "Invert":
      var x2=11-x;
      var y2=11-y;
      var ref=$(".lucasSquare[coor_x='" + x + "'][coor_y='" + y2 + "']");
      addSVGClass(ref,"combined");
      switch(texture) {
        case "1":
          s+=" " + ref.attr("seq");
          break;
        case "2":
          s+=" " +ref.attr("seq2");
          break;    
      }
      var ref=$(".lucasSquare[coor_x='" + x2 + "'][coor_y='" + y + "']");
      addSVGClass(ref,"combined");
      switch(texture) {
        case "1":
          s+=" " + ref.attr("seq");
          break;
        case "2":
          s+=" " +ref.attr("seq2");
          break;    
      }

      setTimeout(clearCombined, 500);
      seq=s;
      break;
  }


    console.log("play seq");
    console.log(seq);
    stopPlaying();
    // var cr=$(this).closest(".cm_render");
    // t=cr.find('.sequence');
    // console.log(t);
    // t.toggle();
    // console.log(t.text().trim());

    //var seq="Bb5|0.0000 D6|0.0000 F6|0.0000";
    restartSequence(seq);

}

function goNextQuestion() {

    // var cr=activeButton.closest(".makeMusic").nextAll(".makeMusic").first();
    // t=cr.find('.sequence');
    // console.log(t);
    // t.toggle();
    
    
    // console.log(t.text());

    stopPlaying();
    restartSequence(t.text());

    // var s=cr.find(".di_container").attr("id");
    // console.log("goto next");
    // console.log(s);
    // if (!cr) {
    //     console.log("NOP");
    // } else {

    // // var url = location.href;               //Save down the URL without hash.
    // // location.href = "#"+s;                 //Go to the target element.
    // // history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
    //      document.getElementById(s).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });  
    //     //console.log(url);

    // }
    

}

