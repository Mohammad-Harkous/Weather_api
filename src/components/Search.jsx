import { useState } from "react";

function Search({handleSubmit}){
  const [changeName, setchangeName] = useState('');

  /*onSubmit={(e) =>(e.preventDefault())}*/

    return(
        <nav>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(changeName)
        }}>
        <input type="text" name="wethear" placeholder="Type in a city name" required value={changeName}
          onChange={(e) => setchangeName(e.target.value)}
        />

        <button className="mar" > FIND WEATHER</button>
        </form>
      </nav>
      
    );
    
}

export default Search;