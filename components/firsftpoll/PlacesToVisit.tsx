import { 
  useCheckbox, 
  chakra, 
  Flex, 
  Box, 
  Text, 
  useCheckboxGroup, 
  VStack 
} from "@chakra-ui/react"

import { FC } from "react"

const PlacesToVisit:FC = () => {
  function CustomCheckbox(props:any) {

    const { state,getInputProps,getCheckboxProps,getLabelProps, htmlProps } =
      useCheckbox(props)

    return (      
      <chakra.label
        display='flex'
        flexDirection='row'
        alignItems='center'
        gridColumnGap={2}
        maxW='100%'
        border='1px solid'
        borderColor='green.500'
        rounded='lg'
        px={3}
        py={1}
        cursor='pointer'
        
        {...htmlProps}
        >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems='center'
          justifyContent='center'
          border='2px solid'
          borderColor='blue.500'
          w={4}
          h={4}
          borderRadius='30%'
          {...getCheckboxProps()}
        >
          {state.isChecked && <Box w={2} h={2} borderRadius='30%' bg='blue.500' />}
        </Flex>
         <Text {...getLabelProps()}>{props.value}</Text>
      </chakra.label>     
    )
  }

  const { value, getCheckboxProps } = useCheckboxGroup()

  return (
    <VStack>
      <Box>
        <Text fontSize='2xl' as='b'>Мы обязательно посетим:</Text>
      </Box>
       
       <Box textAlign='center' fontSize='xl' maxW='fit-content'> {value.join(', ')}</Box>
       
      
      <Flex gap={4}>
      <CustomCheckbox {...getCheckboxProps({ value: 'Мастерскую' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Сувенирный магазин' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Игровую площадку' })} />
      </Flex><Flex gap={4}>
      <CustomCheckbox {...getCheckboxProps({ value: 'Ресторан' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Читальную комнату' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Сквер' })} />
      </Flex><Flex gap={4}>
      <CustomCheckbox {...getCheckboxProps({ value: 'Фонтан' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Музей' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Аттракционы' })} />
      </Flex>
      
    </VStack>
  )
}

export default PlacesToVisit