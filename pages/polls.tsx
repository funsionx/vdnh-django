import { 
  Container, 
  Divider, 
  Flex
} from '@chakra-ui/react'

import PeopleAmount from '../components/firsftpoll/PeopleAmount'
import PlacesToVisit from '../components/firsftpoll/PlacesToVisit'
import styles from '../styles/Home.module.scss'

import { NextPage } from 'next'
import React from 'react'

const polls:NextPage = () => {
  return (
    <Container  minW='100vw' minH='100vh'>
      <Flex 
        flexDirection='column' maxWidth='33%' padding={3} marginTop='10%' marginLeft='5%' borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <PeopleAmount />
        <Divider />
        <PlacesToVisit />
      </Flex>
    </Container>
  )
}

export default polls
