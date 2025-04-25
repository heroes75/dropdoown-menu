export const dropdownFunct = (dropdown, dropMenu) => {
    document.getElementById(dropdown).addEventListener("click", (e) => {
      e.preventDefault()
      document.querySelector(dropMenu).toggleAttribute("hidden");
    })
  }
  
  
  console.log("hello");
  
  dropdownFunct("button-drop-down", "ul")
  
  exports.printMsg = function() {
    console.log("This is a message from the demo package");
  }
  