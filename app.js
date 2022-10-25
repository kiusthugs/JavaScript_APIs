console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.querySelector('#submitSearch')
const search = document.querySelector('#searchWord')
const img = document.querySelector('img')
const feedback = document.querySelector('#feedback')
const appId = '3uGBe7vfVhQqC95lRUpHLJh7dU8PLfE6'
const giphyUrl = 'https://api.giphy.com/v1/gifs/translate'
let gifSearch = 'dogs'

searchButton.addEventListener('click', () => {
gifSearch = search.value
fetch(`${giphyUrl}?apiKey=${appId}&s=${gifSearch}`, {mode: 'cors'})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    img.src = data.data.images.original.url
    gifSearch = ''
    search.value = ''
    feedback.textContent = data.meta.msg
  })
  .catch((err) => {
    // handle error
    feedback.textContent = err.message
  });
})