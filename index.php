<?php
$r=rand(1,1000000);
?>
<html>
  <head>
    <title>_lucasset</title>
    
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">


    <link rel="preload" as="image" href="fonts/212Keyboard-lmRZ.otf">
    <link rel="stylesheet" href="css/nprogress.css?r=<? echo $r ?>" />
    
    <link rel="stylesheet" href="css/main.css?r=<? echo $r ?>" />
    <link id="l1" rel="stylesheet" href="css/purple.css?r=<? echo $r ?>" />
  </head>
  <body style="display:block">
    <script type="text/javascript" src="js/nprogress.js"></script>
    <div id="topofpage"></div>
    <div id="TopLoading"></div>
    
    <div id="list_section">
      
      <div id="headerTop">
        <h1 id="header">_lucasset</h1>
      </div>
      <!-- see https://spin.atomicobject.com/2015/07/14/css-responsive-square/ -->
      <div id="canvas">
        
        
        <div id="app">
          <div id="tTexture"></div>
          <div id="tMode"></div>
          <div class="sideMenu">
            <div class="menu">
              <div class="label">Texture</div>
              <div id="twonotes" class="submenu selected" group="B" mode="2">Two notes</div>
              <div id="alltheo" class="submenu " group="B" mode="1">All the octaves</div>
            </div>
            <div class="menu">
              <div class="label">Interaction</div>
              <div id="ex1" class="submenu selected" group="A" mode="Explore">Explore (single)</div>
              <div id="exm" class="submenu" group="A" mode="Combine">Combine (manual)</div>
              <div id="exa" class="submenu" group="A" mode="Reflect">Reflect (auto)</div>
              <div id="exi" class="submenu" group="A" mode="Invert">Invert (auto)</div>
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
          <div style="position: absolute; left: 120px; top:10px">
            <div >
              <svg id="svg1" viewBox="0 0 1500 1000" xmlns="http://www.w3.org/2000/svg">
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
    <div id="welcome">
      <span>
        <BR><BR>
        The _lucasset welcomes you.<BR><BR>
        <span style="font-size:9px">
          Click to continue.
        </span>
        <BR><BR>
        <table>
          <tr>
            <td>
              <span class="helper">
                1
              </span>
            </td>
            <td>
              All the voices
            </td>
            <td>
              <span class="helper">
                Q
              </span>
            </td>
            <td>Explore</td>
            <td rowspan="4">
              <div style="margin-left:30px">
                <span class="helper" style="margin-left:15px">
                  I
                </span><BR>
                <span class="helper">
                  JKL
                </span>
                <BR>Cursor movement
                <BR><BR>
                <span class="helper">
                  ?
                </span>
                This screen
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span class="helper">
                2
              </span>
            </td>
            <td>
              Two voices
            </td>
            <td>
              <span class="helper">
                W
              </span>
            </td>
            <td>Combine</td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
            </td>
            <td>      <span class="helper">
              E
            </span>
          </td>
          <td>Reflect</td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
          </td>
          <td>
            <span class="helper">
              R
            </span>
          </td>
          <td>Invert</td>
        </tr>
        <tr>
          <td colspan="5">
            <div style="text-align:center">
              <span class="helper">
                w
              </span>
              Play
            </div>
          </td>
        </tr>
      </table>
    </span>
    <BR><BR><BR>
    <div style="text-align:center;zoom:.8; font-size:12px; padding:20px; color:black">
      <div style="width:70%; margin:0px auto">
        <span class="locky">Explore</span> invervals.<BR/>
        Use <span class="locky">Combine</span>, <span class="locky">Reflect</span>, and <span class="locky">Invert</span> to build more complex chords quickly. Once you have built a new lucasset, use the cursor movement keys to hear its neighbors, or use <span class="locky">Lock</span> and to click and hear anywhere on the set.<BR/>
      </div>
    </div>

  </div>
  
</div>
<div id="divSeq">
  <div id="dSeq"></div>
  <div id="seqCheck"><input type="checkbox" id="chSeq"/> <label for="chSeq">Unique Values</label></div>
</div>
<div id="skin">
  <select id="selSkin">
    <option value="purple.css">plumz</option>
    <option value="starry.css">starry</option>
    <option value="orangy.css">orangy</option>
    <option value="bleu.css">bleu</option>
    <option value="vintage.css">vintage</option>
    <option value="pinkie.css">pinkie</option>
  </select>
</div>
<script type="text/javascript" src="/shared/engine4/tonejs-instruments/external-js/Tone.js"></script>
<script src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="/shared/engine4/tonejs-instruments/Tonejs-Instruments.js"></script>

<script type="text/javascript" src="/shared/engine4/tonejs-instruments/external-js/NexusUI.js"></script>
<script src="js/script.js?r=<? echo $r ?>"></script>
</body>
</html>