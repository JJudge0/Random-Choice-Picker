const tagsEl=document.getElementById('tags')
const textarea=document.getElementById('textarea')
console.log('HELLO testing')
textarea.focus()

textarea.addEventListener('keyup' ,(e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
     setTimeout(() => {
       e.target.value=''
     }, 10 )
       randomSelect()
    }

})

function createTags(input) {

const tags = input.split(',').filter(tag => tag.trim()   //Removes white space and if another comma is added then it won't add on to the array list
!== '').map(tag => tag.trim())
// console.log(tags)
   tagsEl.innerHTML ='';

      tags.forEach(tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText= tag;
      tagsEl.appendChild(tagEl)
     });
}

function randomSelect() {
 const times= 30
 
   const interval = setInterval(() => {
     const randomTag = pickRandomTag()

     highlightTag(randomTag)

     setTimeout(() => {                  
     unHighlightTag(randomTag)
      },100)
  }, 100);

   setTimeout(() => {
      clearInterval(interval)

    
      setTimeout(() => {
         const randomTag= pickRandomTag()
        highlightTag(randomTag)
      },100)


   }, times * 100)

}

function pickRandomTag()
{
 const tags = document.querySelectorAll('.tag')
 return tags[Math.floor(Math.random()* tags.length)]
}

function highlightTag(tag) {  //Adds highlight once choice is chosen
 tag.classList.add('highlight')

}

function unHighlightTag(tag) { //Removes highlight once choice is chosen
    tag.classList.remove('highlight')
}
