import { identifierForContextKey } from "@hotwired/stimulus-webpack-helpers"

export ButtonToggleController from './fields/button_toggle_controller'
export CloudinaryImageController from './fields/cloudinary_image_controller'
export ColorPickerController from './fields/color_picker_controller'
export DateController from './fields/date_controller'
export FileFieldController from './fields/file_field_controller'
export PhoneController from './fields/phone_controller'
export SuperSelectController from './fields/super_select_controller'

export const controllerDefinitions = [
  [ButtonToggleController, './fields/button_toggle_controller'],
  [CloudinaryImageController, './fields/cloudinary_image_controller'],
  [ColorPickerController, './fields/color_picker_controller'],
  [DateController, './fields/date_controller'],
  [FileFieldController, './fields/file_field_controller'],
  [PhoneController, './fields/phone_controller'],
  [SuperSelectController, './fields/super_select_controller']
].map(([controller, key]) => {
  return {
    identifier: identifierForContextKey(key),
    controllerConstructor: controller
  }
})