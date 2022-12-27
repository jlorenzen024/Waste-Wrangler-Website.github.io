function clickHandle2() {
    window.location.href = "contact.html";
}

scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console
  }
  
  document.getElementById("header-link-three").addEventListener('click', () => {
    scrollTo(document.getElementById("fourth-section"));
  });