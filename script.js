const keycode = () => {
    let key = event.keyCode
    console.log(key)
    document.getElementById("keycode").innerHTML = `My event.keyCode is ${key}`
    let location = event.location
    document.getElementById("location").innerHTML = `My event.location is ${location}`
    let eventKey = event.key
    document.getElementById("key").innerHTML = `My event.key is ${eventKey}`
    let code = event.code
    document.getElementById("code").innerHTML = `My event.code is ${code}`
  }