import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "checkbox", "selectAllCheckbox", "selectAllLabel", "selectAllWrapper" ]
  static classes = [ "selectAllUnavailable" ]
  
  connect() {
    this.enableSelectAll()
  }
  
  enableSelectAll() {
    if (this.hasSelectAllWrapperTarget) {
      this.selectAllWrapperTarget.classList.remove(this.selectAllUnavailableClass)
    }
  }
  
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
    let useAlternateLabel = false
    
    if (this.allSelected) {
      if (checkbox) {
        checkbox.checked = true
        checkbox.indeterminate = false
      }
      useAlternateLabel = true
    } else if (this.selectedIds.length > 0) {
      if (checkbox) {
        checkbox.indeterminate = true
      }
    } else {
      if (checkbox) {
        checkbox.checked = false
        checkbox.indeterminate = false
      }
    }
    
    if (this.hasSelectAllLabelTarget) {
      this.selectAllLabelTarget.dispatchEvent(new CustomEvent(`${this.identifier}:toggle-select-all-label`, { detail: { useAlternate: useAlternateLabel }} ))
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
