import { 
  Box, 
  Flex, 
  NumberDecrementStepper, 
  NumberIncrementStepper, 
  NumberInput, 
  NumberInputField, 
  NumberInputStepper, 
  Slider, 
  SliderFilledTrack, 
  SliderThumb, 
  SliderTrack, 
  Text, 
  VStack
} from '@chakra-ui/react'

import React, { FC, useState } from 'react'

const PeopleAmount:FC = () => {
  const [value, setValue] = useState(0)
  const [value1, setValue1] = useState(0)
  const handleChange = (value: any) => setValue(value)
  const handleChange1 = (value1: any) => setValue1(value1)

  return (
    <VStack flexDirection='column' maxW='fit-content' marginBottom='5%'>
      <Text fontSize='3xl' as='b'>Наша дружная компания состоит из:</Text>
          <Text my='2%' fontSize='2xl'>{value + " взрослых" + " и " + value1 + " детей"}</Text>
            <Box minW='80%' marginTop='2%'>
              <Text fontSize='xl'>Сколько будет взрослых?</Text>
            
              <Flex>
                <NumberInput borderColor='green.500' color='green.500' min={0} max={30} maxW='90px' mr='2rem' value={value} onChange={handleChange}>
                  <NumberInputField borderColor='green.500' color='black'/>
                  <NumberInputStepper borderColor='green.500' color='green.500'>
                  <NumberIncrementStepper borderColor='green.500' color='blue.500'/>
                  <NumberDecrementStepper borderColor='green.500' color='blue.500'/>
                  </NumberInputStepper >
                </NumberInput>
              <Slider
                min={0} 
                max={30}
                flex='1'
                focusThumbOnChange={false}
                value={value}
                onChange={handleChange}
              >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
                <SliderThumb fontSize='sm' boxSize='32px' children={value}  />
              </Slider>
              </Flex>
            
            </Box>
            <Box minW='80%'>
              <Text fontSize='xl'>Сколько будет детей?</Text>
              
              <Flex>
              <NumberInput borderColor='green.500' color='green.500' min={0} max={30} maxW='90px' mr='2rem' value={value1} onChange={handleChange1}>
                  <NumberInputField borderColor='green.500' color='black'/>
                  <NumberInputStepper borderColor='green.500' color='green.500'>
                  <NumberIncrementStepper borderColor='green.500' color='blue.500'/>
                  <NumberDecrementStepper borderColor='green.500' color='blue.500'/>
                  </NumberInputStepper >
                </NumberInput>
              <Slider
                min={0} 
                max={30}
                flex='1'
                focusThumbOnChange={false}
                value={value1}
                onChange={handleChange1}
              >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
                <SliderThumb fontSize='sm' boxSize='32px' children={value1} />
              </Slider>
              </Flex>
            
            </Box>
    </VStack> 
  )
}


export default PeopleAmount