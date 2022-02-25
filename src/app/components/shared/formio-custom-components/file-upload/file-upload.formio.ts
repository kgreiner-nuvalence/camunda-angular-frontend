import { Injector } from '@angular/core';
import { FormioCustomComponentInfo, registerCustomFormioComponent } from 'angular-formio';
import { FileUploadComponent } from "./file-upload.component";

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'file', // custom type. Formio will identify the field with this type.
  selector: 'file-upload', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'File Upload', // Title of the component
  group: 'basic', // Build Group
  icon: 'file', // Icon
//  template: 'file', // Optional: define a template for the element. Default: input
  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  editForm: Components.components.textfield.editForm, // Optional: define the editForm of the field. Default: the editForm of a textfield
//  documentation: '', // Optional: define the documentation of the field
//  weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
//  emptyValue: null, // Optional: the emptyValue of the field
//  fieldOptions: ['values'], // Optional: explicit field options to get as `Input` from the schema (may edited by the editForm)
};

export function registerFileUploadComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, FileUploadComponent, injector);
}

/*
*
* {
  label: "Upload",
  labelPosition:"top",
  labelWidth:"",
  labelMargin:"",
  description:"",
  tooltip:"",
  customClass:"",
  tabindex:"",
  hidden:false,
  hideLabel:false,
  autofocus:false,
  disabled:false,
  tableView:false,
  modalEdit:false,
  storage:"url",
  dir:"",
  fileNameTemplate:"",
  image:false,
  uploadOnly:false,
  webcam:false,
  fileTypes:[
    {
      label:"",
      value:""
    }
  ],
  filePattern:"*",
  fileMinSize:"0KB",
  fileMaxSize:"1GB",
  multiple:false,
  persistent:true,
  protected:false,
  dbIndex:false,
  encrypted:false,
  redrawOn:"",
  clearOnHide:true,
  customDefaultValue:"",
  calculateValue:"",
  calculateServer:false,
  allowCalculateOverride:false,
  validate: {
    required:false,
    customMessage:"",
    custom:"",
    customPrivate:false,
    json:"",
    strictDateValidation:false,
    multiple:false,
    unique:false
  },
  errorLabel:"",
  errors:"",
  key:"file",
  tags:[],
  properties:{},
  conditional:{
    show:null,
    when:null,
    eq:"",
    json:""
  },
  customConditional:"",
  logic:[],
  attributes:{},
  overlay:{
    style:"",
    page:"",
    left:"",
    top:"",
    width:"",
    height:""
  },
  type:"file",
  imageSize:"200",
  input:true,
  placeholder:"",
  prefix:"",
  suffix:"",
  defaultValue:null,
  unique:false,
  refreshOn:"",
  dataGridLabel:false,
  widget:null,
  validateOn:"change",
  showCharCount:false,
  showWordCount:false,
  allowMultipleMasks:false,
  addons:[],
  privateDownload:false,
  id:"e95nuag",
  url:"http://localhost:4200/file",
  options:"",
  fileKey:""
};
*
* */
