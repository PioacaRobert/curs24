import React from "react";
import { Text, Button, Card } from "./components";
import { Flex } from "./components/Flexbox/Flexbox.style";
// import { colors } from "./const";

function App() {
  return (
    <div className="calendar-page">
      <Text></Text>
      <Flex>
        <Card head="UI / UX" data="12 Oct." locatie="Online" type="rosu" />
        <Card head="Python" data="15 Oct." locatie="Online" type="galben" />
        <Card
          head="Web Development"
          data="26 Nov."
          locatie="Online"
          type="albastru"
        />
        <Card
          head="Testare Software"
          data=" 8 Nov."
          locatie="Online"
          type="verde"
        />
        <Card
          head="Testare Software"
          data="30 Oct."
          locatie="Timisoara"
          type="verde"
        />
        <Card
          head="Programare C++"
          data="19 Sep."
          locatie="Online"
          type="albastru"
        />
        <Card
          head="Programare Java"
          data="15 Dec."
          locatie="Online"
          type="galben"
        />
        <Card head="Agile\Scrum" data="22 Oct." locatie="Online" type="rosu" />
      </Flex>
      <Button></Button>
    </div>
  );
}

export default App;
