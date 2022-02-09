export interface TextFieldModel {
  type: 'textfield',
  key: 'firstName',
  label: 'First Name',
  placeholder: 'Enter your first name.',
  input: true,
  validate: {
    required: true
  }
}
