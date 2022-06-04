import { Button } from '@mui/material'
import {
    ListStyled,
    ItemList,
    Image,
    Info,
    Name,
    Description
} from "./list.style";
import { Pet } from '../../../data/@types/Pet'
import {TextService} from '../../../data/services/TextService'

interface ListProps {
    pets: Pet[];
}

export default function List(props: ListProps) {
    const maxLenght = 200;
    return (
        <ListStyled>
            {props.pets.map(pet => (
            <ItemList key={pet.id}>
                <Image src= {pet.image} alt= {pet.name}  />
                <Info>
                    <Name>{pet.name}</Name>
                    <Description>{TextService.TextLimit(pet.description,maxLenght)}</Description>
                    <Button variant={'contained'} fullWidth>Adotar {pet.name}</Button>
                </Info>
            </ItemList>
            ))}
        </ListStyled>
    )
}