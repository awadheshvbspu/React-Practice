import React from 'react'
import Input from './Input'
import Textarea from '../formikControldemo/TextArea'
import Select from './Select'
import RadioButton from './RadioButton'
import CheckboxGroup from '../formikControldemo/CheckBoxGroup'
import DatePicker from './DatePicker'
import ChakraInput from './ChakraInput'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButton {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    case 'chakraInput':
      return <ChakraInput {...rest} />
    default:
      return null
  }
}

export default FormikControl