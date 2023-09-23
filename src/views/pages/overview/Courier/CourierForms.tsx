// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldFormProps = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField
        label='Read Only'
        defaultValue='Name'
        id='form-props-read-only-input'
        InputProps={{ readOnly: true }}
      />
      <CustomTextField type='number' label='Number' id='form-props-number' InputLabelProps={{ shrink: true }} />
      <CustomTextField
        label='Label'
        placeholder='Placeholder'
        id='form-props-full-width'
        InputLabelProps={{ shrink: true }}
      />
    </form>
  )
}

export default TextFieldFormProps
