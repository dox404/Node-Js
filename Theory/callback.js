setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 155.6985,
            longitude: 12.2365
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})