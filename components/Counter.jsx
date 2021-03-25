import { useState } from "react";

import styled from "styled-components/native";

import { Button, Text } from "../components";

const View = styled.View``;

const BoxButton = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Counter = () => {
  const [count, Setcount] = useState(0);

  return (
    <View>
      <BoxButton>
        <Button
          accessibilityLabel="Counter"
          color="#009688"
          title="Click me"
          onPress={() => {
            Setcount(count + 1);
          }}
        />
      </BoxButton>
      <p />
      <Text>You clicked the button {count} times</Text>
    </View>
  );
};
