import { TitleStyled, SubTitle } from "./title.style";

interface TitleProps{
    title: string;
    subTitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
    return(
    <>
        <TitleStyled>{props.title}</TitleStyled>
        <SubTitle>{props.subTitle}</SubTitle>
    </>
    )
}