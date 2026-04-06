import api from "../../api";

export default function SearchBar(){

    return(
        <div>
            <form> 
                <input type="text" placeholder="wyszukaj produkt" name="searchInput" id="searchInput"></input>
                <input type="button" onClick={search} value="szukaj"></input>
            </form>
        </div>
    )
        
        

    
}

async function search(){
    var query = document.getElementById("searchInput").value
    const result  = await api.get(`Products/search?q=${query}`)
    if(result == null){
        console.log("blad podczas pobierania danych ");
    }
    else{
        var products = result.data;
       
         return (
    <div>
        
    </div>
);
       
    }

}