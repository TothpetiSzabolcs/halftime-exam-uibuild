const rootElement = document.querySelector("#root").insertAdjacentHTML("beforeend", 
`
  <h1>Visszajelzés</h1>
  <input type="text" placeholder="Tárgy" name ="tárgy" />
  <textarea placeholder="Megjegyzés"></textarea>
  <div class="checkbox-container">
    <input type="checkbox" name="hírlevél"/>
    <input type="checkbox" name="askpdjasd"/>

    
    <span class="elfogad">Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót</u></span>
    <span class="hirlevel">Szeretnék hírlevelet kapni</span>
  </div>


  <button>Mentés</button>
  `)

