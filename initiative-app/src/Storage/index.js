const storageID = "initiative-tracker-";

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    
} else {
// Sorry! No Web Storage support..

}

const setItem = (key, value)=>{
    window.localStorage.setItem(storageID+key,value)
};

const getItem = (key)=>{
    return JSON.parse(window.localStorage.getItem(storageID+key));
};

export {setItem, getItem};