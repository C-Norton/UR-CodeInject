/* Inject Location: body_top */

document.addEventListener("DOMContentLoaded", function(e){
    const navBar = document.getElementById('navigation');
    const newNav = document.createElement('div');
    newNav.classList.add('row');
    newNav.innerHTML = ` 
      <div class="col-sm-12">
        <div id="secondNavLu">
        <div class="container">
            <a href="https://www.library.rochester.edu/rbscp">Rare Books and Special Collections</a>
            <a href="https://www.esm.rochester.edu/sibley/">Sibley Music Library</a>
            <a href="https://www.urmc.rochester.edu/libraries/miner.aspx">Edward G. Miner Library History of Medicine Section</a>
            <a href="https://www.library.rochester.edu/spaces/robbins">The Rossell Hope Robbins Library </a>
            <a href="https://mag.rochester.edu/">Memorial Art Gallery</a>
    
        </div>
        </div>
          
      </div>
    `
    navBar.appendChild(newNav);
      });
