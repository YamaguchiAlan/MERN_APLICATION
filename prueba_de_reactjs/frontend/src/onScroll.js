export default  function () {

  const header = document.getElementById("header");
  const editorTop = document.getElementsByClassName("ck-sticky-panel__content")[0]

  window.onscroll = () => {
    if(editorTop){
      if(getComputedStyle(editorTop).top.slice(0, -2) != header.offsetHeight){
        editorTop.style.top=`${header.offsetHeight}px`
      }
    }

/*------------------------------Positioning the Nav according to the position on the page----------------------- */

    if(document.getElementById('nav-pos')){
      const nav = document.getElementById("app-nav");
      let navPos = document.getElementById('nav-pos');
      let currentPos = window.pageYOffset;

      let limit = 0;
      if(document.getElementById("comments")) {
        limit = document.getElementById('comments')
        let articleBody = document.getElementById('article-body').offsetHeight

        nav.style.height=`${limit.offsetHeight + articleBody - 10}px`
      } else {
        if(document.getElementById('article-body')) {
          limit = document.getElementById('article-body')

          nav.style.height = `${limit.offsetHeight - 10}px`
        }
      }
      if(document.getElementById('body')) {
        limit = document.getElementById('body')

        nav.style.height = `${limit.offsetHeight - 10}px`
      }

      nav.style.maxHeight = `calc(100% - ${getComputedStyle(header).height})`

      // At the center of the page
      if(currentPos + header.offsetHeight >= navPos.offsetTop){
        nav.className= " float-right position-fixed border border-danger mr-1 nav-container"
        nav.style.bottom = "0"
        nav.style.top="initial"
        nav.style.right = "0"
      }
      // At the top of the page
      else{
        nav.className= " float-right  position-relative border border-danger mr-1  nav-container"
        nav.style.bottom = "0"
        nav.style.top="initial"
        nav.style.right="0"
      }
      // At the end of the page
      if(currentPos >= limit.offsetTop + limit.offsetHeight - getComputedStyle(navPos).height.slice(0, -2) - 10){
        nav.className= " float-right position-absolute border border-danger mr-1 nav-container"
        nav.style.top=`calc(${(limit.offsetTop + limit.offsetHeight) - getComputedStyle(nav).height.slice(0, -2)}px - 10px)`;
        nav.style.right="0"
        nav.style.bottom="initial"
      }
    }
  }
}