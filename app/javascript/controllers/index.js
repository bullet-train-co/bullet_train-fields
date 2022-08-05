import { identifierForContextKey } from "@hotwired/stimulus-webpack-helpers"

import ButtonToggleController from './fields/button_toggle_controller'
import CloudinaryImageController from './fields/cloudinary_image_controller'
import ColorPickerController from './fields/color_picker_controller'
import DateController from './fields/date_controller'
import EmojiPickerController from './fields/emoji_picker_controller'
import FileFieldController from './fields/file_field_controller'
import OptionsController from './fields/options_controller'
import PasswordController from './fields/password_controller'
import PhoneController from './fields/phone_controller'
import SuperSelectController from './fields/super_select_controller'

export const controllerDefinitions = [
  [ButtonToggleController, 'fields/button_toggle_controller.js'],
  [CloudinaryImageController, 'fields/cloudinary_image_controller.js'],
  [ColorPickerController, 'fields/color_picker_controller.js'],
  [DateController, 'fields/date_controller.js'],
  [EmojiPickerController, 'fields/emoji_picker_controller.js'],
  [FileFieldController, 'fields/file_field_controller.js'],
  [OptionsController, 'fields/options_controller.js'],
  [PasswordController, 'fields/password_controller.js'],
  [PhoneController, 'fields/phone_controller.js'],
  [SuperSelectController, 'fields/super_select_controller.js'],
].map(function(d) {
  const key = d[1]
  const controller = d[0]
  return {
    identifier: identifierForContextKey(key),
    controllerConstructor: controller
  }
})

export {
  ButtonToggleController,
  CloudinaryImageController,
  ColorPickerController,
  DateController,
  EmojiPickerController,
  FileFieldController,
  OptionsController,
  PasswordController,
  PhoneController,
  SuperSelectController,
}
