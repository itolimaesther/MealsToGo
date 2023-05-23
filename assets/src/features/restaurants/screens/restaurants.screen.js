import React from 'react'
import styled from "styled-components/native";
import { StyleSheet, Text, View, SafeAreaView as OldSafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from 'react-native-paper';
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from '../components/restaurants-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};;
`;


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>}
        keyExtractor={(item) => item.name}
      />

    </SafeArea>
  )
}




