export const animationStyles = `

.slide_up {
  position: relative;
  top: 0px;
  opacity: 1;
  transition: 1s;
}

.slide_up_no_pos {
  opacity: 1;
  transition: 1s;
}
.slide_up_opacity {
  position: relative;
  top: 0px;
  opacity: 0.3;
  transition: 1s;
}

.slide_down {
  position: absolute;
  top: 200px;
  opacity: 0;
}
.slide_down_middle{
  position:absolute !important;
  top: 380vh !important; 
  opacity:0;
}
.slide_down_bottom {
  position:absolute !important;
  top: 450vh !important; 
  opacity:0;
}

.hide_up {
  position:relative;
  top:-200px;
  opacity:0;
}

@keyframes rotate_45 {
    from{

    }
    33%{
      transform : rotate3d(0,0,1,20deg);
    }
    66% {
      transform :rotate3d(0,0,1,-20deg);
    }
    to{

    }
  }
  @-webkit-keyframes rotate_45 {
  from{

  }
  33%{
    transform : rotate3d(0,0,1,20deg);
  }
  66% {
    transform :rotate3d(0,0,1,-20deg);
  }
  to{

  }
}

@keyframes waves {
  from {
    height: 900px;
  }
  50% {
    height: 800px;
    margin-top: -100px;
  }
  to {
    height: 900px;
    margin-top: 0px;
  }
}

@-webkit-keyframes waves {
  from {
    height: 900px;
  }
  50% {
    height: 800px;
    margin-top: -100px;
  }
  to {
    height: 900px;
    margin-top: 0px;
  }
}

@keyframes bottom_waves {
  from{
    
  }
  50%{
    width:150vw;
    margin-top: -20px;
  }
  to{
    
  }
}

@-webkit-keyframes bottom_waves {
  from{

  }
  50%{
    width:150vw;
    margin-top: -20px;
  }
  to{
    
  }
}

@keyframes air_top_move{
  from{
    position:absolute;
    left:100vw;
    top:35vw;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 45vw;
    top: 15vh;
    opacity:0;
  }
}


@-webkit-keyframes air_top_move {
  from{
    position:absolute;
    left:100vw;
    top:35vw;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    left: 45vw;
    top: 15vh;
    opacity:0;
  }
}

@-webkit-keyframes air_top_move_path {
  from{
    position:absolute;
    left:100vw;
    top:32vw;
    opacity:1;
  }
  40%{
    opacity:1;
  }
  60% {
    opacity:0;
  }
  to{
    left: 48vw;
    top: 10vh;
    opacity:0;
  }
}

@keyframes air_top_move_path{
  from{
    position:absolute;
    left:100vw;
    top:32vw;
    opacity:1;
  }
  40%{
    opacity:1;
  }
  60% {
    opacity:0;
  }
  to{
    left: 48vw;
    top: 10vh;
    opacity:0;
  }
}

@keyframes air_middle_move{
  from{
    position:absolute;
    left:100vw;
    top:200vh;
    opacity:1;
  }
  90% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 0px;
    top: 220vh;
    opacity:0;
  }
}


@-webkit-keyframes air_middle_move {
  from{
    position:absolute;
    left:100vw;
    top:200vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 0px;
    top: 220vh;
    opacity:0;
  }
}

@keyframes air_middle_move_path{
  from{
    position:absolute;
    left:110vw;
    top:195vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 215vh;
    opacity:0;
  }

}


@-webkit-keyframes air_middle_move_path {
  from{
    position:absolute;
    left:110vw;
    top:197vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 217vh;
    opacity:0;
  }
}

@keyframes air_bottom_move{
  from{
    position:absolute;
    left:100vw;
    top:400vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 0vw;
    top: 470vh;
    opacity:0;
  }
}


@-webkit-keyframes air_bottom_move {
  from{
    position:absolute;
    left:100vw;
    top:400vh;
    opacity:1;
  }
  60% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 0vw;
    top: 470vh;
    opacity:0;
  }
}

@keyframes air_bottom_move_path{
  from{
    position:absolute;
    left:110vw;
    top:390vh;
    opacity:1;
  }
  70% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 460vh;
    opacity:0;
  }
}


@-webkit-keyframes air_bottom_move_path {
  from{
    position:absolute;
    left:110vw;
    top:390vh;
    opacity:1;
  }
  70% {
    opacity:1;
  }
  to{
    position:absolute;
    left: 10vw;
    top: 460vh;
    opacity:0;
  }
}

@keyframes rotate_twice {
  from{
    
  }
  50%{
    transform: rotate3d(0,1,0,360deg)
  }
  to{

  }
}
@-webkit-keyframes rotate_twice {
  from{
    
  }
  50%{
    transform: rotate3d(0,1,0,360deg)
  }
  to{

  }
}

`;