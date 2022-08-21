let myLibrary = [];

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}




function addBookToLibrary(Title, Author, Pages, Read) {
  let newBook = new Book(Title, Author, Pages, Read);
  myLibrary.push(newBook);
  displayOnPage();
  console.log(myLibrary);
}








function displayOnPage(){
    const books = document.querySelector(".books")
    

    //Removes Array duplicates
    const rmvDup = document.querySelectorAll('.card')
    for (let i = 0; i < rmvDup.length;i++){
      rmvDup[i].remove();
    }
    //Prints books on screen
    myLibrary.forEach(element => {
        const cardCreate = document.createElement("div");
        cardCreate.classList.add("card");
        books.appendChild(cardCreate);
        
    for (let key in element) {
        
        const paragraph = document.createElement('p');
        cardCreate.appendChild(paragraph)
        paragraph.textContent = (`${key}: ${element[key]}`);
        console.log(`${key}: ${element[key]}`);
        
        

        
    }
    const deleteButton = document.createElement("button");
    cardCreate.appendChild(deleteButton);
    
    deleteButton.textContent = "DELETE"





    deleteButton.addEventListener("click", ()=>{
      deleteButton.parentElement.remove();
      deleteBook()
      
      
    })







      
    });

}

function deleteBook(el) {
    if(el.classList.contains('deleteButton')) {
      el.parentElement.parentElement.remove();
    }
  }



function getBookInfo(){
    
    let Title = document.getElementById("Title").value; 

    let Author = document.getElementById("Author").value;

    let Pages = document.getElementById("Pages").value;

    let Read = document.getElementById("readit").value;


    if( (Title =='')||(Author=='')||(Pages=='')||(Read=='')) return

    console.log(Title,Author,Pages,Read);

    addBookToLibrary(Title, Author, Pages, Read);
    resetInput();

  
}

function resetInput(){
  let Title = document.getElementById("Title").value = '';
  let Author = document.getElementById("Author").value = '';
  let Pages = document.getElementById("Pages").value = '';
  let Read = document.getElementById("readit").value = '';
}




















const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}