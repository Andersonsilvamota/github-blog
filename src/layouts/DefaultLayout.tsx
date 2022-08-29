import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "./styles";

export function DefaultLayout(){
  return(
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}