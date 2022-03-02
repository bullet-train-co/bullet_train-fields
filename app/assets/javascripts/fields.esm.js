import{Controller as e}from"stimulus";import"@simonwep/pickr/dist/themes/monolith.min.css";import t from"@simonwep/pickr";import"daterangepicker";import i from"intl-tel-input";import n from"select2";import r from"tributejs";function a(e){var t=(e.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/)||[])[1];if(t)return t.replace(/_/g,"-").replace(/\//g,"--")}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,l(e,t)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}var s=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.clickShadowField=function(e){e.preventDefault(),this.shadowFieldTarget.click()},t}(e);s.targets=["shadowField"];var c=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var i=t.prototype;return i.pickImageAndUpload=function(e){e.preventDefault();var t=["local","url","camera"];this.hasGoogleApiKeyValue&&t.push("image_search");var i={cloud_name:this.cloudNameValue,apiKey:this.apiKeyValue,upload_preset:this.uploadPresetValue,upload_signature:this.getCloudinarySignature.bind(this),multiple:!1,sources:this.hasSourcesValue?this.sourcesValue.split(","):t,search_by_rights:!this.hasSearchByRightsValue||!1!==this.searchByRightsValue};this.hasGoogleApiKeyValue&&(i.google_api_key=this.googleApiKeyValue),cloudinary.openUploadWidget(i,this.handleWidgetResponse.bind(this))},i.clearImage=function(e){e.preventDefault(),this.hiddenFieldTarget.value=null,this.removeThumbnail()},i.getCloudinarySignature=function(e,t){$.ajax({url:this.signaturesUrlValue,type:"GET",dataType:"text",data:{data:t},complete:function(){console.log("complete")},success:function(t,i,n){e(t)},error:function(e,t,i){console.log(e,t,i)}})},i.handleWidgetResponse=function(e,t){if(!e&&t&&"success"===t.event){var i=t.info;this.hiddenFieldTarget.value=i.public_id,this.removeThumbnail(),this.addThumbnail(this.urlFormatValue.replace("CLOUDINARY_ID",i.public_id))}},i.addThumbnail=function(e){var t=$('<img src="'+e+'" width="'+this.widthValue+'" height="'+this.heightValue+'" data-'+this.identifier+'-target="thumbnail" />');$(this.uploadButtonTarget).prepend(t),this.uploadButtonTarget.classList.add(this.thumbnailShownClass)},i.removeThumbnail=function(){this.hasThumbnailTarget&&(this.uploadButtonTarget.removeChild(this.thumbnailTarget),this.uploadButtonTarget.classList.remove(this.thumbnailShownClass))},t}(e);c.targets=["uploadButton","hiddenField","thumbnail"],c.values={signaturesUrl:String,height:Number,width:Number,cloudName:String,apiKey:String,googleApiKey:String,urlFormat:String,sources:String,searchByRights:Boolean},c.classes=["thumbnailShown"];var u=function(e){function i(){return e.apply(this,arguments)||this}o(i,e);var n=i.prototype;return n.connect=function(){this.initPluginInstance(),this.colorOptions=$(this.colorOptionsTarget).find("button").map(function(e,t){return $(t).attr("data-color")}).get()},n.disconnect=function(){this.teardownPluginInstance()},n.pickColor=function(e){e.preventDefault();var t=e.target,i=t.dataset.color;$(this.colorInputTarget).val(i),$(this.colorPickerValueTarget).val(i),$(this.userSelectedColorTarget).data("color",i),$(".button-color").removeClass("ring-2 ring-offset-2"),this.pickr.setColor(i),t.classList.add("ring-2","ring-offset-2")},n.pickRandomColor=function(e){e.preventDefault();var t=Math.floor(256*Math.random()),i=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());this.pickr.setColor("rgb "+t+" "+i+" "+n);var r=this.pickr.getColor().toHEXA().toString();this.pickr.setColor(r),this.showUserSelectedColor(r)},n.showUserSelectedColor=function(e){$(this.colorInputTarget).val(e),$(this.colorPickerValueTarget).val(e),$(".button-color").removeClass("ring-2 ring-offset-2"),$(this.userSelectedColorTarget).addClass("ring-2").addClass("ring-offset-2").css("background-color",e).css("--tw-ring-color",e).attr("data-color",e).show()},n.unpickColor=function(e){e.preventDefault(),$(this.colorPickerValueTarget).val(""),$(this.colorInputTarget).val(""),$(this.userSelectedColorTarget).hide(),$(".button-color").removeClass("ring-2 ring-offset-2")},n.togglePickr=function(e){e.preventDefault()},n.initPluginInstance=function(){var e=this;this.pickr=t.create({el:".btn-pickr",theme:"monolith",useAsButton:!0,default:this.initialColorValue||"#1E90FF",components:{preview:!0,hue:!0,interaction:{input:!0,save:!0}}}),this.pickr.on("save",function(t,i){var n=t.toHEXA().toString();e.colorOptions.includes(n)||e.showUserSelectedColor(n),e.pickr.hide()});var i=this;$('input[type="text"].pcr-result').on("keydown",function(e){"Enter"===e.key&&i.pickr.applyColor(!1)})},n.teardownPluginInstance=function(){this.pickr.destroy()},i}(e);u.targets=["colorPickerValue","colorField","colorInput","userSelectedColor","colorOptions"],u.values={initialColor:String},require("daterangepicker/daterangepicker.css");var d=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var i=t.prototype;return i.connect=function(){this.initPluginInstance()},i.disconnect=function(){this.teardownPluginInstance()},i.clearDate=function(e){e.preventDefault(),$(this.fieldTarget).val("")},i.applyDateToField=function(e,t){var i=this.includeTimeValue?"MM/DD/YYYY h:mm A":"MM/DD/YYYY";$(this.fieldTarget).val(t.startDate.format(i))},i.showTimeZoneButtons=function(e){e.preventDefault(),$(this.currentTimeZoneWrapperTarget).toggleClass("hidden"),$(this.timeZoneButtonsTarget).toggleClass("hidden")},i.showTimeZoneSelectWrapper=function(e){e.preventDefault(),$(this.timeZoneButtonsTarget).toggleClass("hidden"),this.hasTimeZoneSelectWrapperTarget&&$(this.timeZoneSelectWrapperTarget).toggleClass("hidden")},i.resetTimeZoneUI=function(e){e&&e.preventDefault(),$(this.currentTimeZoneWrapperTarget).removeClass("hidden"),$(this.timeZoneButtonsTarget).addClass("hidden"),this.hasTimeZoneSelectWrapperTarget&&$(this.timeZoneSelectWrapperTarget).addClass("hidden")},i.setTimeZone=function(e){e.preventDefault();var t=this.currentTimeZoneWrapperTarget.querySelector("a"),i=e.target.dataset.value;$(this.timeZoneFieldTarget).val(i),$(t).text(i),$(".time-zone-button").removeClass("button").addClass("button-alternative"),$(e.target).removeClass("button-alternative").addClass("button"),this.resetTimeZoneUI()},i.initPluginInstance=function(){if($(this.fieldTarget).daterangepicker({singleDatePicker:!0,timePicker:this.includeTimeValue,timePickerIncrement:5,autoUpdateInput:!1,locale:{cancelLabel:this.hasCancelButtonLabelValue?this.cancelButtonLabelValue:"cancel",applyLabel:this.hasApplyButtonLabelValue?this.applyButtonLabelValue:"apply",format:this.includeTimeValue?"MM/DD/YYYY h:mm A":"MM/DD/YYYY"}}),$(this.fieldTarget).on("apply.daterangepicker",this.applyDateToField.bind(this)),$(this.fieldTarget).on("cancel.daterangepicker",this.clearDate.bind(this)),this.pluginMainEl=this.fieldTarget,this.plugin=$(this.pluginMainEl).data("daterangepicker"),this.includeTimeValue&&this.hasTimeZoneSelectWrapperTarget){this.timeZoneSelect=this.timeZoneSelectWrapperTarget.querySelector("select.select2"),$(this.timeZoneSelect).select2({width:"style"});var e=this;$(this.timeZoneSelect).on("change.select2",function(t){var i=e.currentTimeZoneWrapperTarget.querySelector("a"),n=t.target.value;$(e.timeZoneFieldTarget).val(n),$(i).text(n);var r=$(".selected-option-time-zone-button");e.defaultTimeZonesValue.includes(n)?($(".time-zone-button").removeClass("button").addClass("button-alternative"),r.addClass("hidden").attr("hidden",!0),$('a[data-value="'+n+'"').removeClass("button-alternative").addClass("button")):($(".time-zone-button").removeClass("button").addClass("button-alternative"),r.text(n),r.attr("data-value",n).removeAttr("hidden"),r.removeClass(["hidden","button-alternative"]).addClass("button")),e.resetTimeZoneUI()})}},i.teardownPluginInstance=function(){void 0!==this.plugin&&($(this.pluginMainEl).off("apply.daterangepicker"),$(this.pluginMainEl).off("cancel.daterangepicker"),this.plugin.remove(),this.includeTimeValue&&$(this.timeZoneSelect).select2("destroy"))},t}(e);d.targets=["field","clearButton","currentTimeZoneWrapper","timeZoneButtons","timeZoneSelectWrapper","timeZoneField"],d.values={includeTime:Boolean,defaultTimeZones:Array,cancelButtonLabel:String,applyButtonLabel:String};var h=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var i=t.prototype;return i.connect=function(){var e=this,t=document.addEventListener("direct-upload:initialize",function(t){e.selectFileButtonTarget.classList.add("hidden"),e.progressBarTarget.innerText="0%",e.progressBarTarget.style.width="0%",e.progressBarTarget.setAttribute("aria-valuenow",0),e.progressBarTarget.parentNode.classList.remove("hidden")}),i=document.addEventListener("direct-upload:progress",function(t){var i=t.detail.progress,n=i.toFixed(1)+"%";e.progressBarTarget.innerText=n,e.progressBarTarget.setAttribute("aria-valuenow",i),e.progressBarTarget.style.width=n}),n=document.addEventListener("direct-upload:error",function(t){t.preventDefault(),e.progressBarTarget.innerText=t.detail.error});this.uploadListeners={"direct-upload:initialize":t,"direct-upload:progress":i,"direct-upload:error":n}},i.disconnect=function(){for(var e in this.uploadListeners)document.removeEventListener(e,this.uploadListeners[e])},i.uploadFile=function(){this.fileFieldTarget.click()},i.removeFile=function(){this.hasDownloadFileButtonTarget&&this.downloadFileButtonTarget.classList.add("hidden"),this.removeFileButtonTarget.classList.add("hidden"),this.removeFileFlagTarget.value=!0},i.handleFileSelected=function(){var e=this.selectFileButtonTarget.querySelector("span"),t=this.selectFileButtonTarget.querySelector("i");this.hasDownloadFileButtonTarget&&this.downloadFileButtonTarget.remove(),e.innerText="Select Another File",t.classList.remove("ti-upload"),t.classList.add("ti-check")},t}(e);h.targets=["fileField","removeFileFlag","downloadFileButton","removeFileButton","selectFileButton","progressBar"],require("intl-tel-input/build/css/intlTelInput.css");var p=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.connect=function(){this.initPluginInstance()},n.disconnect=function(){this.teardownPluginInstance()},n.initPluginInstance=function(){var e,t={hiddenInput:this.fieldTarget.dataset.method,customContainer:"w-full"},n=(e=document.head.querySelector('meta[name="intl_tel_input_utils_path"]'))&&e.content;n&&(t.utilsScript=n),this.plugin=i(this.fieldTarget,t)},n.teardownPluginInstance=function(){void 0!==this.plugin&&this.plugin.destroy()},t}(e);p.targets=["field"],require("select2/dist/css/select2.min.css");var g=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var i,r,a=t.prototype;return a.initialize=function(){this.dispatchNativeEvent=this.dispatchNativeEvent.bind(this),this.isSelect2LoadedOnWindowJquery&&n(window.$)},a.connect=function(){this.isSelect2LoadedOnWindowJquery&&this.initPluginInstance()},a.disconnect=function(){this.teardownPluginInstance()},a.cleanupBeforeInit=function(){$(this.element).find(".select2-container--default").remove()},a.initPluginInstance=function(){var e={};this.enableSearchValue||(e.minimumResultsForSearch=-1),e.tags=this.acceptsNewValue,this.searchUrlValue&&(e.ajax={url:this.searchUrlValue,dataType:"json",data:function(e){return{search:e.term,page:e.page||1}}}),e.templateResult=this.formatState,e.templateSelection=this.formatState,e.width="style",this.cleanupBeforeInit(),this.pluginMainEl=this.selectTarget,$(this.pluginMainEl).select2(e),this.initReissuePluginEventsAsNativeEvents()},a.teardownPluginInstance=function(){void 0!==this.pluginMainEl&&(this.teardownPluginEventsAsNativeEvents(),$(this.pluginMainEl).select2("destroy"))},a.initReissuePluginEventsAsNativeEvents=function(){var e=this;this.constructor.jQueryEventsToReissue.forEach(function(t){$(e.pluginMainEl).on(t,e.dispatchNativeEvent)})},a.teardownPluginEventsAsNativeEvents=function(){var e=this;this.constructor.jQueryEventsToReissue.forEach(function(t){$(e.pluginMainEl).off(t)})},a.dispatchNativeEvent=function(e){this.element.dispatchEvent(new CustomEvent("$"+e.type,{detail:{event:e},bubbles:!0,cancelable:!1}))},a.formatState=function(e){var t=$(e.element).attr("data-image"),i="";return t&&(i='<img src="'+t+'" /> '),$("<span>"+i+e.text+"</span>")},i=t,(r=[{key:"isSelect2LoadedOnWindowJquery",get:function(){return void 0!==window.$&&void 0!==window.$.select2}}])&&function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),t}(e);g.targets=["select"],g.values={acceptsNew:Boolean,enableSearch:Boolean,searchUrl:String},g.jQueryEventsToReissue=["change","select2:closing","select2:close","select2:opening","select2:open","select2:selecting","select2:select","select2:unselecting","select2:unselect","select2:clearing","select2:clear"];var m=[[s,"fields/button_toggle_controller.js"],[c,"fields/cloudinary_image_controller.js"],[u,"fields/color_picker_controller.js"],[d,"fields/date_controller.js"],[h,"fields/file_field_controller.js"],[p,"fields/phone_controller.js"],[g,"fields/super_select_controller.js"]].map(function(e){var t=e[0];return{identifier:a(e[1]),controllerConstructor:t}});function f(){document.addEventListener("trix-initialize",function(){addEventListener("trix-focus",v),addEventListener("trix-blur",v),v(),document.querySelectorAll("trix-editor").forEach(function(e,t){var i=e.editor,n={trigger:"@",values:JSON.parse(i.element.dataset.mentions),selectTemplate:function(e){return'<a href="'+(e=e.original).protocol+"://"+e.model+"/"+e.id+'">'+e.label+"</a>"},menuItemTemplate:function(e){return'<img src="'+e.original.photo+'" /> '+e.string},requireLeadingSpace:!0,replaceTextSuffix:""},a={trigger:"#",values:JSON.parse(i.element.dataset.topics),selectTemplate:function(e){return'<a href="'+(e=e.original).protocol+"://"+e.model+"/"+e.id+'">'+e.label+"</a>"},menuItemTemplate:function(e){return'<img src="'+e.original.photo+'" /> '+e.string},requireLeadingSpace:!0,replaceTextSuffix:""};new r({collection:[a,n]}).attach(e)})})}function v(){document.querySelectorAll("trix-editor").forEach(function(e,t){var i=e.toolbarElement;e==document.activeElement?i.classList.add("visible"):i.contains(document.activeElement)||i.classList.remove("visible")})}require("trix/dist/trix.css"),require("trix"),require("@rails/actiontext");export{s as ButtonToggleController,c as CloudinaryImageController,u as ColorPickerController,d as DateController,h as FileFieldController,p as PhoneController,g as SuperSelectController,m as controllerDefinitions,f as trixEditor};
//# sourceMappingURL=fields.esm.js.map
