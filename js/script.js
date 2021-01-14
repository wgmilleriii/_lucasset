var arSeq=[];
var svgNS;
var svg;
var svgHeight=600;
var defs=$("#sdefs");
var arSel=[];
var arSquares=[];
var xs;
var xs1;
var xs2;



$( document ).ready(function() {
    svgNS="http://www.w3.org/2000/svg";
    svg=document.getElementById("svg1");


document.fonts.ready.then(function () {
  
$("#welcome").fadeIn();
});

 

    

  $('#selSkin').on('change', function() {
    

    $("#l1").attr("href","css/" + this.value + "?r=" + Math.random());
    return false;

  });


loadEm();
});

function coorsa(ar) {
  var s="";
  for (var i=0;i<ar.length;i++) {
    s+=coors(ar[i]) + " - ";
  }
  return s;
}

function coors(o) {
  var s="";
  if (o!="") {
    s=o.attr("coor_x") + "," + o.attr("coor_y");
  }  else {
    s="[ nada ]";
  }
  return s;
}

function updateSeq() {
  var a=arSeq;
  console.log("updateSeq!");
  console.log(a);
  var c=$('#chSeq').is(":checked");
  if (c) {
    a=arSeq.unique();
  }
  $("#dSeq").html(a.toString());
  var s;
  var arNotes=[];
  for (var i=0;i<a.length;i++) {
    var n=a[i];
    arNotes.push(n);
    s+=`<div class=seqNote>` + n + `</div>`;
  }
  $("dSeq").html(s);
  // $(".seqNote").draggable();
  makeSequence(arNotes);

}


$(document).on('click',"#chSeq",function() {
  updateSeq();
  playSeq(null);
});

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

  svgNS="http://www.w3.org/2000/svg";
  svg=document.getElementById("svg1");

  // viewBox width and height
  var $vbw=1500; 
  var $vbh=1000; 

  // let's add some circles 

  // $i = integer
  // for (var $i=1;$i<=12;$i++) {
  //     //   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  //     // var cir = document.createElementNS(svgNS, 'circle'); //Create a path in SVG's namespace
  //     // cir.setAttribute("class","lucasCircle"); 

  //     var $cx=$vb/4*3;
  //     var $cy=$vb/4*3;

  //     // the radius of the circle is a ratio to the viewBox
  //     var $radius=$vb-($i*60);
  //     // cir.setAttribute("x",$cx); 
  //     // cir.setAttribute("y",$cy); 
  //     // cir.setAttribute("r",$radius); 
  //     // svg.appendChild(cir);

  // }

  var $fifths_0=["C","G","D","A","E","B","F#","C#","G#","D#","A#","F"];
  // var $fifths_1=["C","F","Bb","Eb","Ab","Db","F#","B","E","A","D","G","C"];


  // optional : switch the order
  $fifths_1=$fifths_0.reverse();
  $fifths_0=$fifths_0.reverse();

  // lower left going right: C-C, C-G, C-D
  // lower left going up.  :

  var $grid=$("#grid");
  var $svg=$("#svg1");
  // sample: https://www.sodawebmedia.com/blog/create-responsive-square-css/
  // https://www.pagecrafter.com/responsive-centered-square-div-resizes-height/
  // 

  var $numNotes=12;
  var $numNotesPlus=14;

  // width and height percent is 12 divisions
  var $wh=100/$numNotes;

  // square widths/heights
  var $padding=.5;
  var $wid=Math.round($vbw/($numNotesPlus + $padding));
  var $hei=Math.round($vbh/($numNotesPlus + $padding));  

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

      var n1=$fifths_0[$x];
      var n2=$fifths_0[$y];

      var $val1=n2;
      var $val2=n1;

      console.log($val1, $val2);
      var $seq= n2 + "2|0.0000 " + 
      n2 + "3|0.0000 " + 
      n2 + "4|0.0000 " + 
      n2 + "5|0.0000 " + 
      n1 + "2|0.0000 " + 
      n1 + "3|0.0000 " + 
      n1 + "4|0.0000 " + 
      n1 + "5|0.0000 " ;
      
      var $seq2= n2 + "3|0.0000 " + 
      n1 + "4|0.0000 ";

      //var $seq=$fifths_
      // x and y points
      var $px=(($x+1)/$numNotesPlus) * $vbw;
      var $py=(($y+1)/$numNotesPlus) * $vbh;  
      

      // sample
      // var seq="Bb5|0.0000 D6|0.0000 F6|0.0000";
      // restartSequence(seq);

      // offset to accommodate font size
      var g=document.createElementNS(svgNS, 'g'); 
      g.setAttribute("coor_x",$coorX);
      g.setAttribute("coor_y",$coorY);

      var sq = document.createElementNS(svgNS, 'rect'); //Create a path in SVG's namespace
      sq.setAttribute("class","lucasSquare " + $interval); 
      sq.setAttribute("coor_x",$coorX);
      sq.setAttribute("coor_y",$coorY);
      sq.setAttribute("n1",n1);
      sq.setAttribute("n2",n2);

      sq.setAttribute("x",$px); 
      sq.setAttribute("y",$py); 
      sq.setAttribute("seq",$seq); 
      sq.setAttribute("seq2",$seq2);       
      sq.setAttribute("width",$wid); 
      sq.setAttribute("height",$hei);

      g.appendChild(sq);

      var txt = document.createElementNS(svgNS, 'text');
      txt.setAttributeNS(null, 'x', $px + 5);
      txt.setAttributeNS(null, 'y', $py + 26);
      txt.setAttributeNS(null,'class','lucasSquareTextSmaller');
      txt.innerHTML = $val1;
      g.appendChild(txt);
      
      var t=$(txt).clone().appendTo(g);
      t.attr('class','lucasSquareTextSmallerShadow');
      t.attr( 'x', $px + 6);
      t.attr( 'y', $py + 27);
      

      var txt = document.createElementNS(svgNS, 'text');
      txt.setAttributeNS(null, 'x', $px + 37);
      txt.setAttributeNS(null, 'y', $py + 47);
      txt.setAttributeNS(null,'class','lucasSquareTextBigger');
      txt.innerHTML = $val2;
      g.appendChild(txt);

      var t=$(txt).clone().appendTo(g);
      t.attr('class','lucasSquareTextBiggerShadow');
      t.attr( 'x', $px + 38);
      t.attr( 'y', $py + 48);
      
      
      svg.appendChild(g);
      arSquares.push(sq);



      // create an HTML div
      $s+=`<div class="square ` + $interval + `">
      <div class="content">
        ` + $val1 + `
      </div>
    </div>` ;

 
    }
    $s+="</div>";


    // add it to the grid
    $grid.append($s);

    

  }

var $m=((12)/$numNotesPlus) * $vbh;

 // $("g[coor_x=0]").each(function(index) {
 //      xs1=$(this);
 //      console.log(xs1)
 //      xs2=xs1.clone();
 //      xs2.insertAfter(xs1);
 //      xs2.attr("coor_x","-1");
 //      xs2.attr("transform","translate(" + $m + ",0)");
 //      xs2.attr("cloned","1");
 //      xs2.attr("class","cloned");
      
 // });
 $("g[coor_y=0]").each(function(index) {
      xs1=$(this);
      console.log(xs1)
      xs2=xs1.clone();
      xs2.insertAfter(xs1);
      xs2.attr("coor_y","-1");
      xs2.attr("transform","translate(0," + $m + ")");
      xs2.attr("cloned","1");
      xs2.attr("class","cloned");
      
 });    
// $("g[coor_x=11]").each(function(index) {
//       xs1=$(this);
//       console.log(xs1)
//       xs2=xs1.clone();
//       xs2.insertAfter(xs1);
//       xs2.attr("coor_x","-1");
//       xs2.attr("transform","translate(-" + $m + ",0)");
//       xs2.attr("cloned","1");
//       xs2.attr("class","cloned");
      
//  });
//  $("g[coor_y=11]").each(function(index) {
//       xs1=$(this);
//       console.log(xs1)
//       xs2=xs1.clone();
//       xs2.insertAfter(xs1);
//       xs2.attr("coor_y","-1");
//       xs2.attr("transform","translate(0,-" + $m + ")");
//       xs2.attr("cloned","1");
//       xs2.attr("class","cloned");
//  });    

 $("g[cloned=1] text").each(function() { 
  $(this)[0].setAttribute("filter","url(#blurMe)");
});
 $("g[cloned=1] rect").each(function() { 
  $(this)[0].setAttribute("filter","url(#grayscale)");
});
  setTexture("2");
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
var samples;
function loadEm() {

// below here: audio
        NProgress.start();
        // load samples / choose 4 random instruments from the list //
        // chooseFour = ['piano', 'bass-electric', 'bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'french-horn', 'guitar-acoustic', 'guitar-electric','guitar-nylon', 'harmonium', 'harp', 'organ', 'saxophone', 'trombone', 'trumpet', 'tuba', 'violin', 'xylophone']
        chooseFour = ['piano', 'bass-electric', 'bassoon', 'cello', 'clarinet', 'xylophone', 'flute'] 
        // shuffle(chooseFour);
        // chooseFour = chooseFour.slice(0, 1);

        samples = SampleLibrary.load({
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
            var n=sequence.next().replace("n","");
            playingIndex++;
            
            var notename=n.split("|")[0];
            // console.log(notename);
            noteoctave=notename.substring(notename.length-1,notename.length)*1-1;
            // console.log(noteoctave);
            notename=notename.substring(0,notename.length-1) + noteoctave;
            // console.log("has been changed to ");
            // console.log(notename);

            var pause=0;
            if (!groupSelected("Time","C")) {
            
              pause=n.split("|")[1];
                          // console.log(n); 
              // console.log(playingIndex + " of " + length);
              if (parseFloat(pause)*1==0) {
                  // console.log("Default to 500");
                  pause=0;
              } else {
                  pause=200;
              }

            }



            // console.log(pause);
            if (playingIndex>length) {
                pause=300;
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
                
                }, 1000);
            }



        }
        




        // create Nexus UI //
        Nexus.colors.accent = "#f00"

        // var button = new Nexus.Button('#Button',{
        //   'size': [80,80],
        //   'mode': 'aftertouch',
        //   'state': false
        // })        


        var sequence;// = new Nexus.Sequence(["F2","A2","C3","D3","E3","E2","F#4"])    ;
        
        var myVar=setTimeout(nothing,2);
        function nothing() {
            console.log("nothing");
        }



        function stopPlaying() {
            // console.log("stoppin");
            clearInterval(myVar);
            myVar=null;
        }
        function restartSequence(t="") {
            if (t=="") t=lastSeq;
            if (t=="") return;
            lastSeq=t;
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
    $("#app").fadeIn();
    $("#svg1").fadeIn();
    // $("body").css("background-image","none");
}
$(document).on('click', '#welcome', function () {
    loadEm();
    $(this).fadeOut(500, fadeErIn);
});



$(document).on('click', '.lucasSquare', function () {
    
    playSeq($(this));
});

var seqMode="C";
function hideDivSeq() {
  $("#divSeq").css("visibility","visible");  
}
function showDivSeq() {
  $("#divSeq").css("visibility","hidden");  
}
$(document).on('click', '.submenu2', function () {
  $(this).toggleClass("selected");
});

$(document).on('click', '.submenu', function () {

  arSel=[];
  arSel2=[];
  clearCombined();
  clearSeq();
  var p=$(this).parent();
  p.find(".submenu").removeClass("selected");

  $(this).addClass("selected");
  var mode=$(this).attr("mode");
  console.log("mode" , mode);

  var group=$(this).attr("group");

  switch (group) {
      case "Time":
        clearSeq();
        console.log("seqMode changed " , seqMode);
        switch (mode) {
        case "C": //chord
          showDivSeq();
          seqMode = mode;
          break;
        case "S": // sequence
          seqMode = mode;
          hideDivSeq();
          break;
        }
        playSeq(null);
        break;
    case "Ins": 
      //chooseFour = ['piano', 'bass-electric', 'bassoon', 'cello', 'clarinet', 'xylophone'] 

      current = samples[chooseFour[mode]];
      break;
    case "A":
    case "B":
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

function cleardarkblue() {
  $(".darkblue").remove();
  $(".darkblue2").remove();
  $(".darkblueshadow").remove();
}
function clearwhite() {
  $(".white").remove();
  $(".white2").remove();
  $(".whiteshadow").remove();
  $(".whiteCircle").remove();
}

function clearCombined() {
  if ($(".combined").length>0) {
    $( ".combined" ).each(function( index ) {
      $(this).attr("class",$(this).attr("class").replace(" combined",""));
    });
  }
  
}
function clearSeq() {
  sq0="";
  sq1="";
  seq="";
  seq2="";
  lastSeq=[];
  arSeq=[];    
  $(".lines").remove();
  updateSeq();
}
function explore() {
  clearSeq();
  setMode("Explore");
  clearCombined();
}

function combine() {
  clearSeq();
  setMode("Combine");
}
function reflect() {
  clearSeq();
  setMode("Reflect");
  clearCombined();
}
function invert() {
  clearSeq();
  setMode("Invert");
  clearCombined();
}
function showhelp() {
  $("#welcome").fadeIn();
}
$(document).on('keypress', '', function (event) {
  console.log(event.keyCode);
  

//  var t =
  switch (event.keyCode) {
    case 63:
      showhelp();
      break;
    case 49: //1
    $("#alltheo").click();
    allOctaves();
      // all the octaves
      break;
    case 50: //2
    $("#twonotes").click();
    twoNotes();
      // all the octaves
      break;
    case 113: //q
      // Single
      $("#ex1").click();
      explore();
      break;
    case 119: //w
      // Combine
      $("#exm").click();
      combine();
      break;
    case 101: //e
      // Reflect
      $("#exa").click();
      reflect();
      break;
    case 114: //r
      // Invert
      $("#exi").click();
      invert();
      break;

    case 32: // space
      moveCursor(0,0);
      break;

    case 105:
      moveCursor(0,-1);
      break;
    case 107:
      moveCursor(0,1);
      break;
    case 106:
      moveCursor(-1,0); 
      break;
    case 108:
      moveCursor(1,0);
      break;

  }
   event.preventDefault();
  
});
function addSVGClass(o,cl1) {
      var cl = o.attr('class');
      if( cl.indexOf(cl1)!==-1 ){
      } else {
        cl+=" " + cl1;
        o.attr("class",cl);
      }

}
var tcc, tcdb;
function moveCursor(x,y) {
  console.log(coorsa(arSel));
  var arSel2=[];
  var mode=getMode();
  cleardarkblue();
  clearCombined();
  for (var i=0;i<arSel.length;i++) {
    var o1=arSel[i];
    var x1=arSel[i].attr("coor_x")*1+x;
    var y1=arSel[i].attr("coor_y")*1+y;
    if (x1<0) x1+=12;
    if (y1<0) y1+=12;
    if (x1>11) x1-=12;
    if (y1>11) y1-=12;



    // console.log(arSquares);
    // var result = arSquares.find(obj => {
    //   var r1=obj.attr("coor_x") === x1;
    //   var r2=obj.attr("coor_y") === y1;

    //   return r1 && r2;
    // });
    var result=$(".lucasSquare[coor_x=" + x1 + "][coor_y=" + y1 + "]");

    addSVGClass(result,"combined");
    arSel2.push(result);
    if (i>0) {
      lineTo(arSel2[i-1],arSel2[i],"darkblue");
    }
  }
  if (mode=="Invert" && seqMode!="S") {
    lineTo(arSel2[i-1],arSel2[0],"darkblue");
  }
  clearTimeout(tcc);
  clearTimeout(tcdb);
  tcdb=setTimeout(cleardarkblue, 500);
  console.log("Next");
  console.log(coorsa(arSel2));
  playSeq2(arSel2);
  tcc=setTimeout(clearCombined, 500);
  
  arSel=arSel2;

}
// u   d   l   r 
// 105 107 106 108
// defaults 


var seq="";
var seq2="";

function makeSequence(ar) {
  console.log("makeSequence");
  
  var s="";
  for (var i=0;i<ar.length;i++) {
    var o=i*1;
    s+=ar[i] + "3|0.0000 " +
      ar[i] + "4|1.0000 ";
  }
  seq2=s;
  console.log(seq2);
}
function groupSelected(gr,mo) {
  return $( "div.submenu.selected[group='" + gr + "']").attr("mode")==mo;
}
function group2Selected(gr,mo) {
  return $( "div.submenu2.selected[group='" + gr + "']").attr("mode")==mo;
}

function circle(cx, cy, radius, addToDefs,css) {
    
    var cir = document.createElementNS(svgNS, 'circle'); //Create a path in SVG's namespace
    cir.setAttribute("class", css + " lines"); 
    cir.setAttribute("cx",cx); 
    cir.setAttribute("cy",cy); 
    cir.setAttribute("r",radius); 

    if (addToDefs!=0) {
      $("#" + addToDefs).append(cir);
    } else {
      svg.appendChild(cir);      
    }
    


}

const generateRandomString = function(){
return "N" + Math.random().toString(20).substr(2, 8)
}

function lineTo(o1,o2,css="") {
  console.log("--------- ");
  console.log(o1);
  console.log(o2);
  console.log("=========");
  
  if (o2!="") {
    var x1=o1.attr("x")*1+o1.attr("width")/2;
    var y1=o1.attr("y")*1+o1.attr("height")/2;
    var x2=o2.attr("x")*1+o1.attr("width")/2;
    var y2=o2.attr("y")*1+o1.attr("height")/2;
    
    var id=generateRandomString();
    var m=document.createElementNS(svgNS, 'mask');
    m.setAttribute("id",id); 
    m.setAttribute("maskUnits","userSpaceOnUse");
    svg.append(m);

    
    var l=line(x1,y1,x2,y2,id,css);
    circle(x1,y1,10,id,"blackCircle");
    circle(x2,y2,10,id,"blackCircle");
    
    if (css=="") css="whiteCircle";
    circle(x1,y1,10,0,css);
    circle(x2,y2,10,0,css);
  }
}

function createLine(x1,y1,x2,y2) {
    var line = document.createElementNS(svgNS, 'line'); //Create a line in SVG's namespace
    line.setAttribute("x1",x1); 
    line.setAttribute("y1",y1); 
    line.setAttribute("x2",x2); 
    line.setAttribute("y2",y2); 
    return line;  
}
function line(x1,y1,x2,y2, clipid, css="white") {
    // console.log("Mask " + clipid);
    var opacity=1;
    if (css=="") css="white";

    var line3 = createLine(x1+3,y1+3,x2+3,y2+3);
    line3.setAttribute("class",css + "shadow lines"); 
    line3.setAttribute("mask","url(#" + clipid + ")"); 
    svg.appendChild(line3);

    var line = createLine(x1,y1,x2,y2);
    line.setAttribute("class",css + " lines"); 
    line.setAttribute("style","opacity:" + opacity); 
    line.setAttribute("mask","url(#" + clipid + ")"); 
    svg.appendChild(line);


    var line2 = createLine(x1,y1,x2,y2);
    line2.setAttribute("class",css + "2 lines"); 
    line2.setAttribute("style","opacity:1"); 
    $("#" + clipid).append(line2);      

}

var sq0="";
var sq1="";
var lastSeq="";
function playSeq2(arSel2) {
  console.log("&&& PLAYSE2");
  seq="";
  arSeq=[];
  var texture=getTexture();  
  var s;
  for (var i=0;i<arSel2.length;i++) {
    var o=arSel2[i];
    var n1=o.attr("n1");
    var n2=o.attr("n2");

    switch(texture) {
      case "1":
        s=o.attr("seq");
        break;
      case "2":
        s=o.attr("seq2");
        break;    
    }
    seq=seq.replace(s,"") + " " + s;

    arSeq.push(n2);
    arSeq.push(n1);

  }

 
  updateSeq();

  console.log("play seq2");
  console.log(seq2);  

  stopPlaying();
  restartSequence(seq2);

}
function playSeq(o) {

  if (group2Selected("Lock","L")) { 
    if (arSel.length<2) return;
      var x1=arSel[0].attr("coor_x")*1;
      var y1=arSel[0].attr("coor_y")*1;
      var x2=o.attr("coor_x")*1;
      var y2=o.attr("coor_y")*1;
      moveCursor(x2-x1,y2-y1);
    console.log("Lock");
    return;
  } 
  var s;
  var texture=getTexture();
  var mode=getMode();

  var myseq;

  if (o === null) {
  } else {

    sq1=sq0;
    sq0=o;
    var x=o.attr("coor_x");
    var y=o.attr("coor_y");
    var n1=o.attr("n1");
    var n2=o.attr("n2");
    var n3="";
    var n4="";
    var n5="";
    var n6="";

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
      arSel.push(o);
      addSVGClass(o,"combined");
      seq=seq.replace(s,"") + " " + s;
      lineTo(sq0,sq1);
      break;
    case "Explore":
      arSeq=[];
      arSel=[];    
      updateSeq();
      seq=s;
      arSel.push(o);
      break;
    case "Reflect":
      arSel=[];
      console.log("*** Reflect");
      console.log("seqMode ",seqMode);
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
       n3=ref.attr("n1");
       n4=ref.attr("n2");
       arSel.push(o);
       arSel.push(ref);

      seq=s;
      if (seqMode=="S") {
        console.log("(((((");
        console.log(coors(o));
        console.log(coors(sq1));

        sq0=o;
        if (sq1!="") {
          lineTo(sq0,sq1);
        }
        
        sq1=ref;
        lineTo(sq0,sq1);
        sq0=ref;
      } else {
        lineTo(o,ref);
        setTimeout(clearwhite, 500);
      }
      break;
    case "Invert":
    arSel=[];
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
       n3=ref.attr("n1");
       n4=ref.attr("n2");
       arSel.push(o);
       arSel.push(ref);
      var ref2=$(".lucasSquare[coor_x='" + x2 + "'][coor_y='" + y + "']");
      addSVGClass(ref2,"combined");
      switch(texture) {
        case "1":
          s+=" " + ref2.attr("seq");
          break;
        case "2":
          s+=" " +ref2.attr("seq2");
          break;    
      }
      arSel.push(ref2);
       n5=ref2.attr("n1");
       n6=ref2.attr("n2");

      setTimeout(clearCombined, 500);
      seq=s;
      if (seqMode=="S") {
        console.log("(((((");
        console.log(coors(o));
        console.log(coors(sq1));

        sq0=o;
        // ?
        if (sq1!="") {
          lineTo(sq0,sq1);
        }
        
        sq1=ref;
        lineTo(sq0,sq1);
        lineTo(sq1,ref2);
        sq0=ref2;
      } else {
        lineTo(o,ref);
        lineTo(ref,ref2);
        lineTo(ref2,o);
        setTimeout(clearwhite, 500);        
      }
      break;
  }

  arSeq.push(n2);
  arSeq.push(n1);
  if (n4!="") arSeq.push(n4);
  if (n3!="") arSeq.push(n3);
  if (n6!="") arSeq.push(n6);
  if (n5!="") arSeq.push(n5);

  updateSeq();

  console.log("play seq " , seqMode);
  console.log(seq);

  }


  stopPlaying();
  // var cr=$(this).closest(".cm_render");
  // t=cr.find('.sequence');
  // console.log(t);
  // t.toggle();
  // console.log(t.text().trim());

  //var seq="Bb5|0.0000 D6|0.0000 F6|0.0000";
  
   if (groupSelected("Time","C")) {
      // chord
      console.log("chord!");
      myseq=seq;
    } else {
      // sequence
      console.log("sequence!");
      myseq=seq2;
      
    }
  restartSequence(myseq);

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

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}