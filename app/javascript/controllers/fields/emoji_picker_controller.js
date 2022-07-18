import { Controller } from "@hotwired/stimulus"
import { Picker } from 'emoji-mart'

export default class extends Controller {

  static targets = [ "button", "input" ]

  connect() {
    this.visible = false
    this.picker = new Picker({
      data: async () => {
        const response = await fetch(
          'https://cdn.jsdelivr.net/npm/@emoji-mart/data',
        )

        return response.json()
      },
      onEmojiSelect: (emoji) => {
        this.buttonTarget.innerHTML = emoji
        this.inputTarget.value = emoji
      }
    })
  }

  toggle(event) {
    event.preventDefault()
    if (this.visible) {
      this.element.appendChild(this.picker)
    } else {
      this.element.removeChild(this.picker)
    }

    this.visible = !this.visible
  }

}
