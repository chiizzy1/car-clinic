import { type } from "os"

export type DateTime = {
    justDate: Date | null
    dateTime: Date | null
  }
  

export type ClientData = {
    clientData: {} 
    setClientData: Dispatch<SetStateAction<{}>>
}