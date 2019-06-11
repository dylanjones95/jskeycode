const keycode = () => {
    let key = event.keyCode
    console.log(key)
    document.getElementById("keycode").innerHTML = `Event.keyCode: ${key}`
    let location = event.location
    document.getElementById("location").innerHTML = `Event.location: ${location}`
    let eventKey = event.key
    document.getElementById("key").innerHTML = `Event.key: ${eventKey}`
    let code = event.code
    document.getElementById("code").innerHTML = `Event.code: ${code}`
  }