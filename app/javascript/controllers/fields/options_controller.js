import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "checkbox", "selectAllCheckbox", "selectAllLabel" ]
  
  selectAllOrNone(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.allSelected) {
      this.selectNone()
    } else {
      this.selectAll()
    }
    this.updateSelectAllCheckbox()
  }
  
  selectAll() {
    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = true
    })
  }
  
  selectNone() {
    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = false
    })
  }
  
  updateSelectAllCheckbox() {
    let checkbox = this.selectAllCheckboxTarget
    let label = this.selectAllLabelTarget
    
    if (this.allSelected) {
      if (checkbox) {
        checkbox.checked = true
        checkbox.indeterminate = false
      }
      label?.dispatchEvent(new CustomEvent('toggle', { detail: { useAlternate: true }} ))
    } else if (this.selectedIds.length > 0) {
      if (checkbox) {
        checkbox.indeterminate = true
      }
      label?.dispatchEvent(new CustomEvent('toggle', { detail: { useAlternate: false }} ))
    } else {
      if (checkbox) {
        checkbox.checked = false
        checkbox.indeterminate = false
      }
      label?.dispatchEvent(new CustomEvent('toggle', { detail: { useAlternate: false }} ))
    }
  }
  
  get selectedIds() {
    let ids = []
    this.checkboxTargets.forEach(checkbox => {
      if (checkbox.checked) {
        ids.push(checkbox.value)
      }
    })
    return ids
  }
  
  get allSelected() {
    return this.selectedIds.length === this.checkboxTargets.length
  }
}
