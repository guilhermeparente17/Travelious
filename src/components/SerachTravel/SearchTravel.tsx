import React from 'react'
import ButtonTravel from '../ButtonTravel/ButtonTravel'
import { 
    Airplane,
    ButtonSearch,
    Date,
    Location,
    Personal,
    SearchBar,
    SearchButtons,
    SearchContainer,
    SearchContent, 
    SearchDetails,
    SearchOpt, 
    SearchOpts,
    SearchSpan,
    SearchTitle
} from './SearchTravel.Elements'
import { GoSearch } from "react-icons/go";

const SearchTravel = () => {
  return (
    <SearchContainer>
        <SearchContent>
            <SearchButtons>
                <ButtonTravel icon={''} title='Flight' />
                <ButtonTravel icon={''} title='Hotel' />
            </SearchButtons>

            <SearchBar>
                <SearchOpts marginLeft={15}>
                    <SearchOpt>
                        <Location size={30} color='#a9adb0' />

                        <SearchDetails>
                            <SearchTitle>Location</SearchTitle>
                            <SearchSpan>Where are you going ?</SearchSpan>
                        </SearchDetails>
                    </SearchOpt>

                    <SearchOpt>
                        <Personal size={30} color='#a9adb0' />

                        <SearchDetails>
                            <SearchTitle>Travelers</SearchTitle>
                            <SearchSpan>Add guards</SearchSpan>
                        </SearchDetails>
                    </SearchOpt>
                </SearchOpts>

                <Airplane size={30} color='#4364d0' />

                <SearchOpts>
                    <SearchOpt>
                        <Date size={30} color='#a9adb0' />

                        <SearchDetails>
                            <SearchTitle>Check in</SearchTitle>
                            <SearchSpan>Add date</SearchSpan>
                        </SearchDetails>
                    </SearchOpt>

                    <SearchOpt>
                        <Date size={30} color='#a9adb0' />

                        <SearchDetails>
                            <SearchTitle>Check out</SearchTitle>
                            <SearchSpan>Add guests</SearchSpan>
                        </SearchDetails>
                    </SearchOpt>
                </SearchOpts>

                <ButtonSearch>
                    <GoSearch size={22} color='#fff' />
                </ButtonSearch>
            </SearchBar>
        </SearchContent>
    </SearchContainer>
  )
}

export default SearchTravel