import SearchBar from "./search"
import HeaderActions from "./HeaderActions"
import "./StoreHeader.css"

export default function StoreHeader(){
    return(
        <div id="StoreHeader">
            <h1>SmartStore</h1>
            <SearchBar></SearchBar>
            <HeaderActions></HeaderActions>
            

        </div>
    )
    
}