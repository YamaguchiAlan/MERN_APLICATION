export const scrollFunc = () => {
  const header = document.getElementById("header");
  const editorTop = document.getElementsByClassName("ck-sticky-panel__content")[0]

  if(editorTop){
    if(getComputedStyle(editorTop).top.slice(0, -2) !== header.offsetHeight){
      editorTop.style.top=`${header.offsetHeight}px`
    }
  }

  /*------------------------------Positioning the Nav according to the position on the page----------------------- */

  if(window.innerWidth >= 992){

    if(document.getElementById('app-nav') && document.getElementById('app-nav').firstChild){
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

      nav.style.maxHeight = `calc(100% - ${header.offsetHeight}px)`

      // At the center of the page
      if(currentPos + header.offsetHeight >= navPos.offsetTop){
        nav.style.position = "fixed"
        nav.style.bottom = "0"
        nav.style.top="initial"
        nav.style.right = "0"
      }
      // At the top of the page
      else{
        nav.style.position = "relative"
        nav.style.bottom = "0"
        nav.style.top="initial"
        nav.style.right="0"
      }
      // At the end of the page
      if( currentPos >= limit.offsetTop + limit.offsetHeight - navPos.offsetHeight  &&
        limit.offsetTop + limit.offsetHeight - navPos.offsetHeight   > 0
      ){
        nav.style.position = "absolute"
        nav.style.top=`calc(${(limit.offsetTop + limit.offsetHeight) - nav.offsetHeight}px)`;
        nav.style.right="0"
        nav.style.bottom="initial"
      }
    }

    }
}

export default  function () {
  window.onscroll = () => {
    scrollFunc()
  }
}