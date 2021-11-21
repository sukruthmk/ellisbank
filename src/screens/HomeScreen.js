import React from "react";
import styled from "styled-components/native";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";

import Text from "../components/Text";

import transactionsData from "../db/transactions.json";
import accountData from "../db/account.json";
import userData from "../db/user.json";

const HomeScreen = ({ navigation }) => {
  const renderTransaction = ({ item }) => (
    <Transaction>
      <TransactionInfo>
        <Text heavy>{item.description}</Text>
        <Text small margin="2px 0 2px 0">
          {item.posted}
        </Text>
        <Text small color="#727479">
          {item.status}
        </Text>
      </TransactionInfo>
      <Text>{item.direction}</Text>
      <Text heavy>{item.amount}</Text>
    </Transaction>
  );
  return (
    <Container>
      <Header>
        <ProfilePhoto source={require("../../assets/profilePhoto.png")} />
        <Welcome>
          <Text heavy medium>
            Welcome,
          </Text>
          <Text>{userData[0].name_first}</Text>
        </Welcome>
        <TouchButton onPress={() => navigation.navigate("UserInfo")}>
          <FontAwesome5 name="cog" size={24} color="#565656" />
        </TouchButton>
      </Header>

      <Text center title black>
        {accountData[0].balance}
      </Text>
      <Text center heavy color="#727479">
        Current Balance
      </Text>

      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <Text> Transactions </Text>
              <MaterialIcons name="sort" size={24} color="#5196f4" />
            </TransactionsHeader>

            <SearchContainer>
              <AntDesign name="search1" size={18} color="#5196f4" />
              <Search placeholder="Search Transactions" />
            </SearchContainer>
          </>
        }
        data={transactionsData}
        renderItem={renderTransaction}
        showVerticalScrollIndicator={false}
      />

      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
`;

const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin: 16px 0;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  font-family: "Avenir";
  color: #dbdbdb;
`;

const Transaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const TouchButton = styled.TouchableOpacity``;

const TransactionInfo = styled.View``;

const StatusBar = styled.StatusBar``;

export default HomeScreen;
