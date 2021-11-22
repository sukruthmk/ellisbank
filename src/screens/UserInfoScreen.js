import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../components/Text";

import userData from "../db/user.json";
import accountData from "../db/account.json";

const UserInfo = () => {
  const displayDetails = [
    { key: "name_first", name: "First name" },
    { key: "name_last", name: "Last name" },
    // { key: "address_street", name: "Address street" },
    // { key: "address_city", name: "City" },
    // { key: "address_state", name: "State" },
    { key: "phone", name: "Phone" },
    { key: "email", name: "email" },
  ];

  for (let i = 0; i < displayDetails.length; i++) {
    const item = displayDetails[i];
    item.value = userData[0][item.key];
  }

  const renderUserDetails = ({ item }) => (
    <UserDetailsItem>
      <UserDetailsItemInfo>
        <Text heavy>{item.name}</Text>
      </UserDetailsItemInfo>
      <Text heavy>{item.value}</Text>
    </UserDetailsItem>
  );
  return (
    <Container>
      <Header>
        <ProfilePhoto source={require("../../assets/profilePhoto.png")} />
        <Welcome>
          <Text>{userData[0].name_first}</Text>
        </Welcome>
        <TouchButton>
          <MaterialIcons name="edit" size={24} color="#5196f4" />
        </TouchButton>
      </Header>
      <AccountDetails>
        <Text medium heavy>
          Account number
        </Text>
        <Text small>{accountData[0].account_number}</Text>
      </AccountDetails>
      <AccountDetails>
        <Text medium heavy>
          Routing number
        </Text>
        <Text small>{accountData[0].routing_number}</Text>
      </AccountDetails>
      <AddressView>
        <Text medium heavy margin="16px 0 4px 0">
          Mailing Address
        </Text>
        <Text>{userData[0].address_street}</Text>
        <Text small margin="2px 0 2px 0">
          {userData[0].address_city}
        </Text>
        <Text small color="#727479">
          {userData[0].address_state}
        </Text>
      </AddressView>
      <UserDetails
        data={displayDetails}
        renderItem={renderUserDetails}
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

const AccountDetails = styled.View`
  margin: 8px 4px;
`;

const UserDetails = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
  margin-top: 16px;
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

const TouchButton = styled.TouchableOpacity``;

const StatusBar = styled.StatusBar``;

const UserDetailsItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const UserDetailsItemInfo = styled.View``;

const AddressView = styled.View``;


export default UserInfo;
