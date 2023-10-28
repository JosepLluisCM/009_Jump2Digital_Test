# Test Project for the Hackathon in JUMP2DIGITAL EVENT in Barcelona (3rd edition).  

My name is Josep Lluis Cid Martí, I'm a former vfx Artist entering the web dev world and this is my first Hackathon.  
Until now I've been working and learning the basics, HTML, CSS, JS, GIT, etc and for this project I want to apply the knowledge I've learnt In React.js, different styling packages, npm and node.js, and external libraries like TanStack Query.  

For Reviewing My Aplication, I hosted the Test on Githib Pages:  
:white_check_mark:__https://joseplluiscm.github.io/009_Jump2Digital_Test/__ :white_check_mark:

_____________________________________________________________________________________

## INFO AND INSTRUCTIONS:   

__DOCUMENT WITH INFORMATION ABOUT THE TEST:__    
https://jump2digital.site/wp-content/uploads/2023/10/J2D23_Hackathon_Frontend_CAST.pdf?utm_campaign=Jump2Digital_2023&utm_medium=email&_hsmi=76954611&utm_content=76954611&utm_source=hs_automation  

__DOCUMENTATION ABOUT THE API TO USE:__    
https://rickandmortyapi.com/documentation/  


__FOT BUIDING THIS I'M USING:__  
  -VSCode as Editor.  
  -React.js (project created with "Create-React-App").  
  -HTML, CSS, JS.  
  -Styled Components for styling components and Css.  
  -Git for version control.  
  -Github for uploading the source code.    
  -Github Pages for hosting the page online.    
  -TanStack Query for managing the fetching and state management os the API calls.  


__DEPENDENCIES INSTALLED IN FOLDER:__  
  "@tanstack/react-query": "^5.0.5",  
  "@tanstack/react-query-devtools": "^5.4.2",  
  "@testing-library/jest-dom": "^5.17.0",  
  "@testing-library/react": "^13.4.0",  
  "@testing-library/user-event": "^13.5.0",  
  "gh-pages": "^6.0.0",  
  "react": "^18.2.0",  
  "react-dom": "^18.2.0",  
  "react-scripts": "5.0.1",  
  "styled-components": "^6.1.0",  
  "web-vitals": "^2.1.4",  


If for some reason the link to the live site isn't working, to set up the demo:  
-Download the repository locally.  
-Make sure all dependencies are installed in the same folder.  
-Run on terminal: "npm start" command.  

_____________________________________________________________________________________

## Development of the Test

__1-__  For this test I intent to "test" all my skills learned through this months. Made lots of practice projects but this is the first one that can open jop opportunities for me.
I start setting the create-React-App and cleaning all unnecessary files.  

__2-__  Then I create and separate the Page in Components, Header, SearchBar(for later filtering), CardList(to dinamically show the Characters) and some buttons (to change pages of characters) and assing very simple styles.   

__3-__  Accomplished this task, I start to make a system to fetch the character data from the Api, process it and inject it in every Card Component. I have to learn all this systems because I've never worked whit API's.  

__4-__  My Next step is working on an infinite Scroll, and with this done I have the core functionality of the page working, only need to implement the filtering.  

__5-__  The filtering is done, and working, BUT, there is a bit of a mess in terms of State managing the data, I start to investigate of the matter and learn that exist libraries that help with the fetching systems and managing the data and caches.  

__6-__  Since I have the time, I decide to redo all the data fetching with  TanStack React Query, learning all the necessary to implement it. The result is a much more cleaner code, and as a bonus i learnt the basics of a tool that is used in real world application. (Probably using this tool in this context is a little overkill, but I've done it for the learning and practice).  

__7-__  The only think I have left is do a reStyle of all components and make the lasts adjustements to the page, also make sure it's responsive on desktop and mobile.  

__8-__   Aditional Features....


