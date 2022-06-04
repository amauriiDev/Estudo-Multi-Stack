import { HeaderStyled, Logo } from "./header.style";

export default function Header(){
    return (
        <HeaderStyled>
            <Logo src="/images/logo.svg" alt="Adote um pet"/>
        </HeaderStyled>
    )
}