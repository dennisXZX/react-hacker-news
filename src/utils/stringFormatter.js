const URL_MAX_LENGTH = 85

export const formatNumWithComma = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatUrl = url => {
  return url.length > URL_MAX_LENGTH ? `${url.slice(0, URL_MAX_LENGTH)}...` : url
}
