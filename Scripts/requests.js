// Making an HTTP Request
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getCountry = async (countryCode) => {
    const response = await fetch('//api.countrylayer.com/v2/all')
        
    if (response.status === 200) {
        const data = await response.json()
        return country = data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the country')
    }

}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/')

    if (response.status === 200){
        return response.json()
    } else {
        throw new Error('Unable to fetch current location')
    }

}
