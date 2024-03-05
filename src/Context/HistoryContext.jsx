import { useContext,createContext} from "react";
import { useLocalStorage } from "../Hooks/UseLocalStorage";
const History = createContext();
export const useHistory =() =>{
  return useContext(History);
}

export const Provider =({children}) =>{
  const [bookingHistory ,setBookingHistory] =useLocalStorage('history',[]);
  return (
    <History.Provider value={{bookingHistory,setBookingHistory}}>
        {children}
    </History.Provider>
  )
}
