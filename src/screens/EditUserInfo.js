import React, { useState } from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Text from "../components/Text";
import Input from "../components/Input";

import userData from "../db/user.json";

const EditUserInfo = ({ navigation }) => {
  const currentUserData = userData[0];
  const [firstName, onFirstNameChange] = useState(currentUserData.name_first);
  const [lastName, onLastNameChange] = React.useState(
    currentUserData.name_last
  );
  const [street, onStreetChange] = React.useState(
    currentUserData.address_street
  );
  const [city, onCityChange] = React.useState(currentUserData.address_city);
  const [state, onStateChange] = React.useState(currentUserData.address_state);
  const [phone, onPhoneChange] = React.useState(currentUserData.phone);
  const [email, onEmailChange] = React.useState(currentUserData.email);

  return (
    <Container>
      <Header>
        <ProfilePhoto source={require("../../assets/profilePhoto.png")} />
        <Welcome>
          <Text>{userData[0].name_first}</Text>
        </Welcome>
      </Header>
      <KeyboardAwareScrollView>
        <FormView>
          <FormViewContent>
            <Text heavy>First Name</Text>
            <Input
              placeholder="Enter your first name"
              onChangeText={onFirstNameChange}
              value={firstName}
            />
          </FormViewContent>
          <FormViewContent>
            <Text heavy>Last Name</Text>
            <Input
              placeholder="Enter your last name"
              onChangeText={onLastNameChange}
              value={lastName}
            />
          </FormViewContent>
          <FormViewContent>
            <Text heavy>Street</Text>
            <Input
              placeholder="Enter your street address"
              onChangeText={onStreetChange}
              value={street}
            />
          </FormViewContent>
          <FormViewContent>
            <Text heavy>City</Text>
            <Input
              placeholder="Enter your city"
              onChangeText={onCityChange}
              value={city}
            />
          </FormViewContent>
          <FormViewContent>
            <Text heavy>State</Text>
            <Input
              placeholder="Enter your state"
              onChangeText={onStateChange}
              value={state}
            />
          </FormViewContent>
          <FormViewContent>
            <Text heavy>Phone</Text>
            <Input
              placeholder="Enter your phone"
              onChangeText={onPhoneChange}
              value={phone}
            />
          </FormViewContent>
          <FormViewContent>
            <Text heavy>Email</Text>
            <Input
              placeholder="Enter your email"
              onChangeText={onEmailChange}
              value={email}
            />
          </FormViewContent>
        </FormView>
        <SaveButton
          title="Save"
          onPress={() => navigation.navigate("UserInfo")}
        />
      </KeyboardAwareScrollView>
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

const FormView = styled.View`
  background-color: #2c2c2c;
  padding: 16px;
`;

const FormViewContent = styled.View`
  padding-bottom: 16px;
`;

const SaveButton = styled.Button``;

export default EditUserInfo;
