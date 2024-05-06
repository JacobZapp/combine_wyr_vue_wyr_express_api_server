// This is getting the response and getting a questions for use to answer from API
export default {
    getRandomWYR() { // returns promise object
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}