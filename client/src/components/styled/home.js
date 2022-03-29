import styled from "styled-components";

const VideoBackground = styled.video`

position: fixed;
right: 0;
bottom: 1;
min-width: 100%;
min-height: 100%;
background-size: cover;
height: auto;
width: auto;
`;


const Start = styled.button`
background-color: transparent;
font-size: 20px;
font-family: 'Press Start 2P';
position: absolute;
right: 43%;
bottom: 150px;
border: none;
cursor: pointer;
transition: .2s ease all;
animation-name: parpadeo;
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: infinite;

-webkit-animation-name:parpadeo;
-webkit-animation-duration: 2s;
-webkit-animation-timing-function: linear;
-webkit-animation-iteration-count: infinite;

@-moz-keyframes parpadeo{  
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

@-webkit-keyframes parpadeo {  
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
   100% { opacity: 1.0; }
}

@keyframes parpadeo {  
  0% { opacity: 1.0; }
   50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}
&:hover{
   color: white;
   animation: none;
   -webkit-text-stroke: 1px black;
}
`;

export { VideoBackground, Start }