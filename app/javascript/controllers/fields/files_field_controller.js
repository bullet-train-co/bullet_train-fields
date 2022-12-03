import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "removeFileFlag",
    "downloadFileButton",
    "removeFileButton",
  ];

  static values = { id: Number }

  disconnect() {
    // Teardown event listeners
    for (const event in this.uploadListeners) {
      document.removeEventListener(event, this.uploadListeners[event]);
    }
  }

  removeFile() {
    if (this.hasDownloadFileButtonTarget) {
      this.downloadFileButtonTarget.classList.add("hidden");
    }

    this.removeFileButtonTarget.classList.add("hidden");
    this.removeFileFlagTarget.value = this.idValue;
  }

}
