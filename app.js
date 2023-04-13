const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar")
      toggle = body.querySelector(".toggle")
      searchBtn = body.querySelector(".search-box")
      modeSwicth = body.querySelector(".toggle-swicth")
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle('close');
      });
      
      modeSwicth.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = " Dark Mode "
        }else{
            modeText.innerText = " Light Mode "
        }
      });