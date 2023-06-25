import * as React from 'react'

import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Button, Header } from 'react-native-elements'

const Page = styled(View)`
  padding: 40px 30px 0 30px;
`
const Heading = styled(Text)`
  text-align: center;
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`
const BoyScreen: React.FC = () => {
  return (
    <>
      <Header centerComponent={{ text: 'Cho bạn nam 👦', style: { color: '#fff' } }} />

      <Page>
        <Heading>
          {`Mã số của bạn là 10.`}
        </Heading>
        <Button
          title="Bấm để lấy mã số"
        />
      </Page>
    </>
  )
}

export default BoyScreen
