const getCookie = (name) => {
  const regexp = new RegExp(name)
  const sessionid = window.document.cookie
    .split(';')
    .filter((a) => regexp.test(a))
  if (Array.isArray(sessionid) && sessionid.length > 0)
    return sessionid[0].trim().split('=')[1]

  return ''
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export { getCookie, setCookie }
