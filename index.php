<?php

$r=rand(1,1000000);
?>
<html>

<head>
  <title>_lucasset</title>
  <link rel="stylesheet" href="css/styles.css?r=<? echo $r ?>" />
<? if (isset($_GET["light"])) { ?>
  <link rel="stylesheet" href="css/styles.css?r=<? echo $r ?>" />
<? } else { ?>
  <link rel="stylesheet" href="css/styles_dark.css?r=<? echo $r ?>" />
<? } ?>
</head>

<body>
<div class="hero"></div>
  <div id="topofpage"></div>
<div id="TopLoading"></div>


  
  <div id="list_section">
    
    <div id="headerTop">
    <h1 id="header">_lucasset</h1>
  </div>
  <!-- see https://spin.atomicobject.com/2015/07/14/css-responsive-square/ -->



 <div id="canvas">

    <div id="welcome">

      The _lucasset welcomes you.

      Click to continue.
    </div>

    
    


    <div id="app">


<div id="divSeq">

<div id="dSeq"></div>
<div id="seqCheck"><input type="checkbox" id="chSeq"/> <label for="chSeq">Unique Values</label></div>

</div>

    <div id="tTexture"></div>
    <div id="tMode"></div>

    <div class="sideMenu">
    <div class="menu">
      <div class="label">Texture</div>
      <div class="submenu selected" group="B" mode="2">Two notes</div>

      <div class="submenu " group="B" mode="1">All the octaves</div>
    </div>

    <div class="menu">
      <div class="label">Interaction</div>
      <div class="submenu selected" group="A" mode="Explore">Explore (single)</div>
      <div class="submenu" group="A" mode="Combine">Combine (manual)</div>
      <div class="submenu" group="A" mode="Reflect">Reflect (auto)</div>
      <div class="submenu" group="A" mode="Invert">Invert (auto)</div>

    </div>

    <div class="menu">
      <div class="submenu2" group="Lock" mode="L">Lock</div>
    </div>


    <div style="clear:both; margin-top:5px"></div>
    <div class="menu">
      <div class="label">Time</div>
      <div class="submenu selected" group="Time" mode="C">Chord</div>
      <div class="submenu" group="Time" mode="S">Sequence</div>
    </div>

<!-- ['piano', 'bass-electric', 'bassoon', 'cello', 'clarinet', 'xylophone']  -->

    <div class="menu">
      <div class="label">Instrument</div>
      <div class="submenu selected" group="Ins" mode="0">Piano</div>
      <div class="submenu" group="Ins" mode="6">Electric Guitar</div>
      <div class="submenu" group="Ins" mode="1">Electric Bass</div>
      <div class="submenu" group="Ins" mode="3">Cello</div>
      <div class="submenu" group="Ins" mode="4">Clarinet</div>
      <div class="submenu" group="Ins" mode="5">Xylophone</div>
      <div class="submenu" group="Ins" mode="2">Bassoon</div>

    </div>      
    </div>

        <div style="clear:both; margin-top:5px"></div>


    <svg id="svg1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs id="sdefs"></defs>
       <filter id="blurMe">
         <feGaussianBlur stdDeviation="2"/>
       </filter>
  <filter id="grayscale">
    <feColorMatrix type="saturate" values="0.30"/>
  </filter>      <!--
      Example:
      <rect x="500" y="500" width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
      -->

      <!--
      with a large viewBox the circle looks small
      as it is using user units for the r attribute:
      4 resolved against 100 as set in the viewBox
      -->


      <!-- this is a great idea ! -->
      <!-- <circle cx="50%" cy="50%" r="400" fill="white"/> -->
    </svg>

    </div>
    


 </div>

 
<!-- 
    <ul>
      <li class="item">Buy movie tickets</li>
    </ul>
    <div id="newItemButton"><button href="#">new item</button></div>
    <form id="newItemForm">
      <input type="text" id="itemField" placeholder="Item" />
      <input type="submit" id="add" value="add" />
    </form>
          <script type="text/javascript" src="https://piano.interlochen.org/git/intypiano/engine4/tonejs-instruments/external-js/nprogress.js"></script>
    <script type="text/javascript" src="https://piano.interlochen.org/git/intypiano/engine4/tonejs-instruments/external-js/NexusUI.js"></script>
    <script type="text/javascript" src="https://piano.interlochen.org/git/intypiano/engine4/tonejs-instruments/external-js/Tone.js"></script>
    <script type="text/javascript" src="https://piano.interlochen.org/git/intypiano/engine4/tonejs-instruments/Tonejs-Instruments.js"></script>

    <script type="text/javascript" src="https://piano.interlochen.org/git/intypiano/engine4/game_header.js"></script>


  <script type="text/javascript" src="https://piano.interlochen.org/git/intypiano/js/game.js"></script>


-->
  </div>

  <script type="text/javascript" src="/shared/engine4/tonejs-instruments/external-js/Tone.js"></script>

  <script src="js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="/shared/engine4/tonejs-instruments/Tonejs-Instruments.js"></script>
  
  <script type="text/javascript" src="/shared/engine4/tonejs-instruments/external-js/nprogress.js"></script>
  <script type="text/javascript" src="/shared/engine4/tonejs-instruments/external-js/NexusUI.js"></script>


  <script src="js/script.js?r=<? echo $r ?>"></script>
</body>

</html>