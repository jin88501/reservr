/* @flow */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, pure, branch, renderComponent } from 'recompose';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 15
  },
  SearchResultContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.9,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255,1.0)'
  },
  SearchResultText: {
    fontSize: 16,
  }
});

const server = graphql(gql`
    query {
      reservations {
        hotelName,
        name,
        arrivalDate,
        departureDate,
        id
      }
    }
`);

const Loading = () => <Text>Loading</Text>

type Reservation = {
  id: number,
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string
}
const SearchResultCard = ({ id, name, hotelName, arrivalDate, departureDate }: Reservation) => (
  <View style={styles.SearchResultContainer} key={id}>
    <Text style={styles.SearchResultText}>{name}</Text>
    <Text style={styles.SearchResultText}>{hotelName}</Text>
    {/* <Text style={styles.SearchResultText}>{arrivalDate}</Text> */}
    {/* <Text style={styles.SearchResultText}>{departureDate}</Text> */}
  </View>
)

const SearchResults = ({ data: { loading, reservations } }) => 
  <View style={styles.container}>
    <ScrollView>
      {reservations.map(SearchResultCard)}
    </ScrollView>
  </View>

const ReservationsViewer = compose(
  server,
  branch(
    props => props.data.loading,
    renderComponent(Loading),
  ),
  pure,
)(SearchResults);

export default ReservationsViewer

